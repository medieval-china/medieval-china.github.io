"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"addLinkAttributes",{enumerable:!0,get:function(){return _display_utils.addLinkAttributes}}),Object.defineProperty(exports,"getFilenameFromUrl",{enumerable:!0,get:function(){return _display_utils.getFilenameFromUrl}}),Object.defineProperty(exports,"getPdfFilenameFromUrl",{enumerable:!0,get:function(){return _display_utils.getPdfFilenameFromUrl}}),Object.defineProperty(exports,"isPdfFile",{enumerable:!0,get:function(){return _display_utils.isPdfFile}}),Object.defineProperty(exports,"LinkTarget",{enumerable:!0,get:function(){return _display_utils.LinkTarget}}),Object.defineProperty(exports,"loadScript",{enumerable:!0,get:function(){return _display_utils.loadScript}}),Object.defineProperty(exports,"PDFDateString",{enumerable:!0,get:function(){return _display_utils.PDFDateString}}),Object.defineProperty(exports,"RenderingCancelledException",{enumerable:!0,get:function(){return _display_utils.RenderingCancelledException}}),Object.defineProperty(exports,"build",{enumerable:!0,get:function(){return _api.build}}),Object.defineProperty(exports,"getDocument",{enumerable:!0,get:function(){return _api.getDocument}}),Object.defineProperty(exports,"LoopbackPort",{enumerable:!0,get:function(){return _api.LoopbackPort}}),Object.defineProperty(exports,"PDFDataRangeTransport",{enumerable:!0,get:function(){return _api.PDFDataRangeTransport}}),Object.defineProperty(exports,"PDFWorker",{enumerable:!0,get:function(){return _api.PDFWorker}}),Object.defineProperty(exports,"version",{enumerable:!0,get:function(){return _api.version}}),Object.defineProperty(exports,"CMapCompressionType",{enumerable:!0,get:function(){return _util.CMapCompressionType}}),Object.defineProperty(exports,"createObjectURL",{enumerable:!0,get:function(){return _util.createObjectURL}}),Object.defineProperty(exports,"createPromiseCapability",{enumerable:!0,get:function(){return _util.createPromiseCapability}}),Object.defineProperty(exports,"createValidAbsoluteUrl",{enumerable:!0,get:function(){return _util.createValidAbsoluteUrl}}),Object.defineProperty(exports,"InvalidPDFException",{enumerable:!0,get:function(){return _util.InvalidPDFException}}),Object.defineProperty(exports,"MissingPDFException",{enumerable:!0,get:function(){return _util.MissingPDFException}}),Object.defineProperty(exports,"OPS",{enumerable:!0,get:function(){return _util.OPS}}),Object.defineProperty(exports,"PasswordResponses",{enumerable:!0,get:function(){return _util.PasswordResponses}}),Object.defineProperty(exports,"PermissionFlag",{enumerable:!0,get:function(){return _util.PermissionFlag}}),Object.defineProperty(exports,"removeNullCharacters",{enumerable:!0,get:function(){return _util.removeNullCharacters}}),Object.defineProperty(exports,"shadow",{enumerable:!0,get:function(){return _util.shadow}}),Object.defineProperty(exports,"UnexpectedResponseException",{enumerable:!0,get:function(){return _util.UnexpectedResponseException}}),Object.defineProperty(exports,"UNSUPPORTED_FEATURES",{enumerable:!0,get:function(){return _util.UNSUPPORTED_FEATURES}}),Object.defineProperty(exports,"Util",{enumerable:!0,get:function(){return _util.Util}}),Object.defineProperty(exports,"VerbosityLevel",{enumerable:!0,get:function(){return _util.VerbosityLevel}}),Object.defineProperty(exports,"AnnotationLayer",{enumerable:!0,get:function(){return _annotation_layer.AnnotationLayer}}),Object.defineProperty(exports,"apiCompatibilityParams",{enumerable:!0,get:function(){return _api_compatibility.apiCompatibilityParams}}),Object.defineProperty(exports,"GlobalWorkerOptions",{enumerable:!0,get:function(){return _worker_options.GlobalWorkerOptions}}),Object.defineProperty(exports,"renderTextLayer",{enumerable:!0,get:function(){return _text_layer.renderTextLayer}}),Object.defineProperty(exports,"SVGGraphics",{enumerable:!0,get:function(){return _svg.SVGGraphics}}),Object.defineProperty(exports,"XfaLayer",{enumerable:!0,get:function(){return _xfa_layer.XfaLayer}});var _display_utils=require("./display/display_utils.js"),_api=require("./display/api.js"),_util=require("./shared/util.js"),_annotation_layer=require("./display/annotation_layer.js"),_api_compatibility=require("./display/api_compatibility.js"),_worker_options=require("./display/worker_options.js"),_text_layer=require("./display/text_layer.js"),_svg=require("./display/svg.js"),_xfa_layer=require("./display/xfa_layer.js"),pdfjsVersion="2.8.335",pdfjsBuild="228adbf67",_require=require("./shared/is_node.js"),isNodeJS=_require.isNodeJS;if(isNodeJS){var PDFNodeStream=require("./display/node_stream.js").PDFNodeStream;(0,_api.setPDFNetworkStreamFactory)(function(e){return new PDFNodeStream(e)})}else{var PDFFetchStream,PDFNetworkStream=require("./display/network.js").PDFNetworkStream;(0,_display_utils.isFetchSupported)()&&(PDFFetchStream=require("./display/fetch_stream.js").PDFFetchStream),(0,_api.setPDFNetworkStreamFactory)(function(e){return PDFFetchStream&&(0,_display_utils.isValidFetchUrl)(e.url)?new PDFFetchStream(e):new PDFNetworkStream(e)})}