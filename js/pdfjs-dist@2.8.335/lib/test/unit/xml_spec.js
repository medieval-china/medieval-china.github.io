"use strict";var _core_utils=require("../../core/core_utils.js"),_xml_parser=require("../../core/xml_parser.js");describe("XML",function(){describe("searchNode",function(){it("should search a node with a given path in xml tree",function(){var n=new _xml_parser.SimpleXMLParser({hasAttributes:!0}).parseFromString('\n      <a>\n          <b>\n              <c a="123"/>\n              <d/>\n              <e>\n                  <f>\n                      <g a="321"/>\n                  </f>\n              </e>\n              <c a="456"/>\n              <c a="789"/>\n              <h/>\n              <c a="101112"/>\n          </b>\n          <h>\n              <i/>\n              <j/>\n              <k>\n                  <g a="654"/>\n              </k>\n          </h>\n          <b>\n              <g a="987"/>\n              <h/>\n              <g a="121110"/>\n          </b>\n      </a>').documentElement;function e(e){return n.searchNode((0,_core_utils.parseXFAPath)(e),0).attributes[0].value}expect(e("b.g")).toEqual("321"),expect(e("e.f.g")).toEqual("321"),expect(e("e.g")).toEqual("321"),expect(e("g")).toEqual("321"),expect(e("h.g")).toEqual("654"),expect(e("b[0].g")).toEqual("321"),expect(e("b[1].g")).toEqual("987"),expect(e("b[1].g[0]")).toEqual("987"),expect(e("b[1].g[1]")).toEqual("121110"),expect(e("c")).toEqual("123"),expect(e("c[1]")).toEqual("456"),expect(e("c[2]")).toEqual("789"),expect(e("c[3]")).toEqual("101112")}),it("should dump a xml tree",function(){var e='\n      <a>\n          <b>\n              <c a="123"/>\n              <d>hello</d>\n              <e>\n                  <f>\n                      <g a="321"/>\n                  </f>\n              </e>\n              <c a="456"/>\n              <c a="789"/>\n              <h/>\n              <c a="101112"/>\n          </b>\n          <h>\n              <i/>\n              <j/>\n              <k>&#xA;W&#x1F602;rld&#xA;<g a="654"/>\n              </k>\n          </h>\n          <b>\n              <g a="987"/>\n              <h/>\n              <g a="121110"/>\n          </b>\n      </a>',n=[];new _xml_parser.SimpleXMLParser({hasAttributes:!0}).parseFromString(e).documentElement.dump(n),expect(n.join("").replace(/\s+/g,"")).toEqual(e.replace(/\s+/g,""))})})});