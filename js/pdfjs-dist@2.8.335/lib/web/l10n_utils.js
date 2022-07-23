/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2021 Mozilla Foundation
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
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getL10nFallback = getL10nFallback;
exports.NullL10n = void 0;
const DEFAULT_L10N_STRINGS = {
  of_pages: "of ",
  page_of_pages: "( of )",
  document_properties_kb: " KB ( bytes)",
  document_properties_mb: " MB ( bytes)",
  document_properties_date_string: "1658593212002, ",
  document_properties_page_size_unit_inches: "in",
  document_properties_page_size_unit_millimeters: "mm",
  document_properties_page_size_orientation_portrait: "portrait",
  document_properties_page_size_orientation_landscape: "landscape",
  document_properties_page_size_name_a3: "A3",
  document_properties_page_size_name_a4: "A4",
  document_properties_page_size_name_letter: "Letter",
  document_properties_page_size_name_legal: "Legal",
  document_properties_page_size_dimension_string: " ×   ()",
  document_properties_page_size_dimension_name_string: " ×   (, )",
  document_properties_linearized_yes: "Yes",
  document_properties_linearized_no: "No",
  print_progress_percent: "%",
  "toggle_sidebar.title": "Toggle Sidebar",
  "toggle_sidebar_notification2.title": "Toggle Sidebar (document contains outline/attachments/layers)",
  additional_layers: "Additional Layers",
  page_landmark: "Page ",
  thumb_page_title: "Page ",
  thumb_page_canvas: "Thumbnail of Page ",
  find_reached_top: "Reached top of document, continued from bottom",
  find_reached_bottom: "Reached end of document, continued from top",
  "find_match_count[one]": " of  match",
  "find_match_count[other]": " of  matches",
  "find_match_count_limit[one]": "More than  match",
  "find_match_count_limit[other]": "More than  matches",
  find_not_found: "Phrase not found",
  error_version_info: "PDF.js v (build: )",
  error_message: "Message: ",
  error_stack: "Stack: ",
  error_file: "File: ",
  error_line: "Line: ",
  rendering_error: "An error occurred while rendering the page.",
  page_scale_width: "Page Width",
  page_scale_fit: "Page Fit",
  page_scale_auto: "Automatic Zoom",
  page_scale_actual: "Actual Size",
  page_scale_percent: "%",
  loading: "Loading…",
  loading_error: "An error occurred while loading the PDF.",
  invalid_file_error: "Invalid or corrupted PDF file.",
  missing_file_error: "Missing PDF file.",
  unexpected_response_error: "Unexpected server response.",
  printing_not_supported: "Warning: Printing is not fully supported by this browser.",
  printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
  web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts."
};

function getL10nFallback(key, args) {
  switch (key) {
    case "find_match_count":
      key = `find_match_count[${args.total === 1 ? "one" : "other"}]`;
      break;

    case "find_match_count_limit":
      key = `find_match_count_limit[${args.limit === 1 ? "one" : "other"}]`;
      break;
  }

  return DEFAULT_L10N_STRINGS[key] || "";
}

function formatL10nValue(text, args) {
  if (!args) {
    return text;
  }

  return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (all, name) => {
    return name in args ? args[name] : " + name + ";
  });
}

const NullL10n = {
  async getLanguage() {
    return "en-us";
  },

  async getDirection() {
    return "ltr";
  },

  async get(key, args = null, fallback = getL10nFallback(key, args)) {
    return formatL10nValue(fallback, args);
  },

  async translate(element) {}

};
exports.NullL10n = NullL10n;