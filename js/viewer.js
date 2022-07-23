/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

if (!pdfjsLib.getDocument || !pdfjsViewer.PDFViewer) {
  // eslint-disable-next-line no-alert
  alert("Please build the pdfjs-dist library using\n  `gulp dist-install`");
}

// The workerSrc property shall be specified.
//
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "/js/pdfjs-dist@2.8.335/build/pdf.worker.min.js";

// Some PDFs need external cmaps.
//
const CMAP_URL = "/js/pdfjs-dist@2.8.335/cmaps/";
const CMAP_PACKED = true;

const DEFAULT_URL =
  // "https://medieval-china.github.io/notes/meetings/2021-05/5-8%E5%A4%9C%E8%AF%BB%E6%9D%8E%E7%85%9C.pdf";
  "https://medieval-china.github.io/notes/meetings/2021-05/5-7%E5%86%8D%E8%AF%BB%E5%B8%96%E4%B8%AD%E8%AF%97.pdf";
// To test the AcroForm and/or scripting functionality, try e.g. this file:
// var DEFAULT_URL = "../../test/pdfs/160F-2019.pdf";

const SEARCH_FOR = ""; // try 'Mozilla';

// For scripting support, note also `enableScripting` below.
const SANDBOX_BUNDLE_SRC =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.sandbox.min.js";

const container = document.getElementById("viewerContainer");

const eventBus = new pdfjsViewer.EventBus();

// (Optionally) enable hyperlinks within PDF files.
const pdfLinkService = new pdfjsViewer.PDFLinkService({
  eventBus,
});

// (Optionally) enable find controller.
const pdfFindController = new pdfjsViewer.PDFFindController({
  eventBus,
  linkService: pdfLinkService,
});

// (Optionally) enable scripting support.
const pdfScriptingManager = new pdfjsViewer.PDFScriptingManager({
  eventBus,
  sandboxBundleSrc: SANDBOX_BUNDLE_SRC,
});

const pdfViewer = new pdfjsViewer.PDFViewer({
  container,
  eventBus,
  linkService: pdfLinkService,
  findController: pdfFindController,
  scriptingManager: pdfScriptingManager,
  enableScripting: true,
});
pdfLinkService.setViewer(pdfViewer);
pdfScriptingManager.setViewer(pdfViewer);

eventBus.on("pagesinit", function () {
  // We can use pdfViewer now, e.g. let's change default scale.
  pdfViewer.currentScaleValue = "page-width";

  // We can try searching for things.
  if (SEARCH_FOR) {
    pdfFindController.executeCommand("find", { query: SEARCH_FOR });
  }
  updateTelHeight('pagesinit');
});

// 设置loading进度条
function setLoadingBar(level) {
  const $loadingBar = document.querySelector('#cutomeLoadingBar');
  const $percent = $loadingBar.querySelector('.progress');
  const prevPercent = parseInt($percent.style.width) || 0;
  const percent = Math.round(level * 100);
  // Updating the bar if value increases.
  if (percent && percent > prevPercent) {
    $percent.innerHTML = 'loading ' + percent + '%';
    $percent.style.width = percent + '%';
  }
  if(level >= 1) {
    $($loadingBar).fadeOut();
  }
}


// 更新页面高度
function updateTelHeight(marker) {
  const pdfViewerTeleport = document.querySelector('#pdfViewerTeleport');
  const pdfViewer = container.querySelector('.pdfViewer');
  const pdfHeight = pdfViewer.offsetHeight;

  if(pdfViewerTeleport && pdfHeight) {
    pdfViewerTeleport.style.height = pdfHeight + 'px';
    pdfViewerTeleport.style.position = 'relative';
  }
}

// 嵌入pdf
function embedPDF(pdfUrl) {
  // Loading document.
  const loadingTask = pdfjsLib.getDocument({
    url: pdfUrl,
    cMapUrl: CMAP_URL,
    cMapPacked: CMAP_PACKED,
  });

  loadingTask.onProgress = function (progressData) {
    setLoadingBar(progressData.loaded / progressData.total);
  };

  loadingTask.promise.then(function (pdfDocument) {
    // Document loaded, specifying document for the viewer and
    // the (optional) linkService.
    pdfViewer.setDocument(pdfDocument);

    pdfLinkService.setDocument(pdfDocument, null);

    setTimeout(() => {
      updateTelHeight('loadingTask resolve');
    }, 0);
  });
}