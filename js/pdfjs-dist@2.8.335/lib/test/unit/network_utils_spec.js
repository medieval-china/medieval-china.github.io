"use strict";var _network_utils=require("../../display/network_utils.js"),_util=require("../../shared/util.js");describe("network_utils",function(){describe("validateRangeRequestCapabilities",function(){it("rejects range chunk sizes that are not larger than zero",function(){expect(function(){(0,_network_utils.validateRangeRequestCapabilities)({rangeChunkSize:0})}).toThrow(new Error("Range chunk size must be larger than zero"))}),it("rejects disabled or non-HTTP range requests",function(){expect((0,_network_utils.validateRangeRequestCapabilities)({disableRange:!0,isHttp:!0,getResponseHeader:function(e){if("Content-Length"===e)return 8;throw new Error("Unexpected headerName: ".concat(e))},rangeChunkSize:64})).toEqual({allowRangeRequests:!1,suggestedLength:8}),expect((0,_network_utils.validateRangeRequestCapabilities)({disableRange:!1,isHttp:!1,getResponseHeader:function(e){if("Content-Length"===e)return 8;throw new Error("Unexpected headerName: ".concat(e))},rangeChunkSize:64})).toEqual({allowRangeRequests:!1,suggestedLength:8})}),it("rejects invalid Accept-Ranges header values",function(){expect((0,_network_utils.validateRangeRequestCapabilities)({disableRange:!1,isHttp:!0,getResponseHeader:function(e){if("Accept-Ranges"===e)return"none";if("Content-Length"===e)return 8;throw new Error("Unexpected headerName: ".concat(e))},rangeChunkSize:64})).toEqual({allowRangeRequests:!1,suggestedLength:8})}),it("rejects invalid Content-Encoding header values",function(){expect((0,_network_utils.validateRangeRequestCapabilities)({disableRange:!1,isHttp:!0,getResponseHeader:function(e){if("Accept-Ranges"===e)return"bytes";if("Content-Encoding"===e)return"gzip";if("Content-Length"===e)return 8;throw new Error("Unexpected headerName: ".concat(e))},rangeChunkSize:64})).toEqual({allowRangeRequests:!1,suggestedLength:8})}),it("rejects invalid Content-Length header values",function(){expect((0,_network_utils.validateRangeRequestCapabilities)({disableRange:!1,isHttp:!0,getResponseHeader:function(e){if("Accept-Ranges"===e)return"bytes";if("Content-Encoding"===e)return null;if("Content-Length"===e)return"eight";throw new Error("Unexpected headerName: ".concat(e))},rangeChunkSize:64})).toEqual({allowRangeRequests:!1,suggestedLength:void 0})}),it("rejects file sizes that are too small for range requests",function(){expect((0,_network_utils.validateRangeRequestCapabilities)({disableRange:!1,isHttp:!0,getResponseHeader:function(e){if("Accept-Ranges"===e)return"bytes";if("Content-Encoding"===e)return null;if("Content-Length"===e)return 8;throw new Error("Unexpected headerName: ".concat(e))},rangeChunkSize:64})).toEqual({allowRangeRequests:!1,suggestedLength:8})}),it("accepts file sizes large enough for range requests",function(){expect((0,_network_utils.validateRangeRequestCapabilities)({disableRange:!1,isHttp:!0,getResponseHeader:function(e){if("Accept-Ranges"===e)return"bytes";if("Content-Encoding"===e)return null;if("Content-Length"===e)return 8192;throw new Error("Unexpected headerName: ".concat(e))},rangeChunkSize:64})).toEqual({allowRangeRequests:!0,suggestedLength:8192})})}),describe("extractFilenameFromHeader",function(){it("returns null when content disposition header is blank",function(){expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return null;throw new Error("Unexpected headerName: ".concat(e))})).toBeNull(),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"!==e)throw new Error("Unexpected headerName: ".concat(e))})).toBeNull(),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"";throw new Error("Unexpected headerName: ".concat(e))})).toBeNull()}),it("gets the filename from the response header",function(){expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"inline";throw new Error("Unexpected headerName: ".concat(e))})).toBeNull(),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment";throw new Error("Unexpected headerName: ".concat(e))})).toBeNull(),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return'attachment; filename="filename.pdf"';throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return'attachment; filename="filename.pdf and spaces.pdf"';throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf and spaces.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return'attachment; filename="tl;dr.pdf"';throw new Error("Unexpected headerName: ".concat(e))})).toEqual("tl;dr.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment; filename=filename.pdf";throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment; filename=filename.pdf someotherparam";throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return'attachment; filename="%e4%b8%ad%e6%96%87.pdf"';throw new Error("Unexpected headerName: ".concat(e))})).toEqual("中文.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return'attachment; filename="100%.pdf"';throw new Error("Unexpected headerName: ".concat(e))})).toEqual("100%.pdf")}),it("gets the filename from the response header (RFC 6266)",function(){expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment; filename*=filename.pdf";throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment; filename*=''filename.pdf";throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment; filename*=utf-8''filename.pdf";throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment; filename=no.pdf; filename*=utf-8''filename.pdf";throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf"),expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment; filename*=utf-8''filename.pdf; filename=no.pdf";throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf")}),it("gets the filename from the response header (RFC 2231)",function(){expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return"attachment; filename*0=filename; filename*1=.pdf";throw new Error("Unexpected headerName: ".concat(e))})).toEqual("filename.pdf")}),it("only extracts filename with pdf extension",function(){expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return'attachment; filename="filename.png"';throw new Error("Unexpected headerName: ".concat(e))})).toBeNull()}),it("extension validation is case insensitive",function(){expect((0,_network_utils.extractFilenameFromHeader)(function(e){if("Content-Disposition"===e)return'form-data; name="fieldName"; filename="file.PdF"';throw new Error("Unexpected headerName: ".concat(e))})).toEqual("file.PdF")})}),describe("createResponseStatusError",function(){it("handles missing PDF file responses",function(){expect((0,_network_utils.createResponseStatusError)(404,"https://foo.com/bar.pdf")).toEqual(new _util.MissingPDFException('Missing PDF "https://foo.com/bar.pdf".')),expect((0,_network_utils.createResponseStatusError)(0,"file://foo.pdf")).toEqual(new _util.MissingPDFException('Missing PDF "file://foo.pdf".'))}),it("handles unexpected responses",function(){expect((0,_network_utils.createResponseStatusError)(302,"https://foo.com/bar.pdf")).toEqual(new _util.UnexpectedResponseException('Unexpected server response (302) while retrieving PDF "https://foo.com/bar.pdf".')),expect((0,_network_utils.createResponseStatusError)(0,"https://foo.com/bar.pdf")).toEqual(new _util.UnexpectedResponseException('Unexpected server response (0) while retrieving PDF "https://foo.com/bar.pdf".'))})}),describe("validateResponseStatus",function(){it("accepts valid response statuses",function(){expect((0,_network_utils.validateResponseStatus)(200)).toEqual(!0),expect((0,_network_utils.validateResponseStatus)(206)).toEqual(!0)}),it("rejects invalid response statuses",function(){expect((0,_network_utils.validateResponseStatus)(302)).toEqual(!1),expect((0,_network_utils.validateResponseStatus)(404)).toEqual(!1),expect((0,_network_utils.validateResponseStatus)(null)).toEqual(!1),expect((0,_network_utils.validateResponseStatus)(void 0)).toEqual(!1)})})});