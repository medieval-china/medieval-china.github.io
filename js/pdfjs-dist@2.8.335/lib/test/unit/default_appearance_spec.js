"use strict";var _default_appearance=require("../../core/default_appearance.js");describe("Default appearance",function(){describe("parseDefaultAppearance and createDefaultAppearance",function(){it("should parse and create default appearance",function(){var e="/F1 12 Tf 0.10 0.20 0.30 rg",a={fontSize:12,fontName:"F1",fontColor:new Uint8ClampedArray([26,51,76])};expect((0,_default_appearance.parseDefaultAppearance)(e)).toEqual(a),expect((0,_default_appearance.createDefaultAppearance)(a)).toEqual(e),expect((0,_default_appearance.parseDefaultAppearance)("0.1 0.2 0.3 rg /F1 12 Tf 0.3 0.2 0.1 rg /F2 13 Tf")).toEqual({fontSize:13,fontName:"F2",fontColor:new Uint8ClampedArray([76,51,26])})}),it("should parse default appearance with save/restore",function(){expect((0,_default_appearance.parseDefaultAppearance)("q Q 0.10 0.20 0.30 rg /F1 12 Tf q 0.30 0.20 0.10 rg /F2 13 Tf Q")).toEqual({fontSize:12,fontName:"F1",fontColor:new Uint8ClampedArray([26,51,76])})})})});