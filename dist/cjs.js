module.exports=function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"SchemaType",(function(){return i})),r.d(t,"default",(function(){return D}));var i=function e(t,r){var i=r.getDefaultValue,a=r.validator,n=r.requiredValidator;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.getDefaultValue=i,this.validator=a,this.requiredValidator=n};function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],i=!0,a=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(e){a=!0,n=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw n}}return r}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var l=function(e,t){return t&&!Array.isArray(e)?[e]:e},c=function(e){return Array.isArray(e.type)?e.type[0]:e.type},d=function(e){return"number"==typeof e&&e!=e},f=function(e){return null===e||"object"===n(e)&&!Array.isArray(e)&&0===Object.keys(e).length},y=function(e){return Array.isArray(e)||"string"==typeof e||void 0===e},h=function(e){return Array.isArray(e)&&e.filter((function(e){return"string"==typeof e})).length===e.length||"string"==typeof e},v=function(e){return null===e?[]:Array.isArray(e)?e:"string"==typeof e||Object.keys(e).length?[e]:[]},p=function(e,t){for(var r=[],i=Math.max(e.length,t.length),a=0;a<i;a+=1){var n=t[a]||e[a];n&&!f(n)&&(r[a]=n)}return r},b=function(e,t){var r=Array.isArray(e)?a(e):[e],i=Array.isArray(t)?a(t):[t];return[].concat(a(r),a(i))},m=function(e,t){var r={},i=new Set;return f(e)||Object.keys(e).forEach((function(e){return i.add(e)})),f(t)||Object.keys(t).forEach((function(e){return i.add(e)})),i.forEach((function(i){var a=e[i]||[],n=t[i]||[];r[i]=g(a,n)})),r},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f(e)&&f(t)?{}:h(e)&&h(t)?b(e,t):y(e)||y(t)?p(v(e),v(t)):m(e,t)};function T(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.types=t}var t,r,i;return t=e,(r=[{key:"getTypes",value:function(){return this.types||[]}},{key:"parseValue",value:function(e){var t={};return this.getTypes().forEach((function(r,i){t["type".concat(i)]=e})),t}},{key:"getSchema",value:function(){var e={};return this.getTypes().forEach((function(t,r){e["type".concat(r)]={type:t,required:!0}})),e}}])&&T(t.prototype,r),i&&T(t,i),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t,r){return t&&R(e.prototype,t),r&&R(e,r),e}var F={notDefinedKey:function(e){return"Key '".concat(e,"' is not defined in schema")},modelIsUndefined:function(){return"Validated model is undefined"},validateRequired:function(e){return"Field '".concat(e,"' is required")},validateString:function(e){return"Field '".concat(e,"' is not a String")},validateNumber:function(e){return"Field '".concat(e,"' is not a Number")},validateObject:function(e){return"Field '".concat(e,"' is not a Object")},validateArray:function(e){return"Field '".concat(e,"' is not a Array")},validateBoolean:function(e){return"Field '".concat(e,"' is not a Boolean")},validateDate:function(e){return"Field '".concat(e,"' is not a Date")}},D=function(){function e(t,r){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];q(this,e),this.schema=t,this.errors={},this.promises=[],this.additionalValidators=new Set,this.messages=S(S({},F),r),this.validateKeys=i,this.validateTypeString=this.validateTypeString.bind(this),this.validateTypeNumber=this.validateTypeNumber.bind(this),this.validateTypeObject=this.validateTypeObject.bind(this),this.validateTypeArray=this.validateTypeArray.bind(this),this.validateTypeBoolean=this.validateTypeBoolean.bind(this),this.validateTypeDate=this.validateTypeDate.bind(this),this.validateTypeSchema=this.validateTypeSchema.bind(this),this.validateRequiredType=this.validateRequiredType.bind(this),this.validateRequiredTypeObject=this.validateRequiredTypeObject.bind(this),this.validateRequiredTypeDate=this.validateRequiredTypeDate.bind(this),this.validateRequiredTypeNumber=this.validateRequiredTypeNumber.bind(this),this.validateRequiredTypeArray=this.validateRequiredTypeArray.bind(this),this.typesValidators={String:this.validateTypeString,Number:this.validateTypeNumber,Object:this.validateTypeObject,Array:this.validateTypeArray,Boolean:this.validateTypeBoolean,Date:this.validateTypeDate},this.typesRequiredValidators={String:this.validateRequiredType,Number:this.validateRequiredTypeNumber,Object:this.validateRequiredTypeObject,Array:this.validateRequiredTypeArray,Boolean:this.validateRequiredType,Date:this.validateRequiredTypeDate}}return w(e,null,[{key:"oneOfTypes",value:function(e){return new O(e)}},{key:"optionalType",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=c({type:e}),a=r.name,n=void 0===a?"Type":a;return new i("Optional".concat(n).concat(t),{getDefaultValue:function(){},validator:function(t,r,i){return null==t||this.validateType(e,t,r,i)},requiredValidator:function(t,r){return this.validateRequired({type:e,required:!0},t,r),!0}})}}]),w(e,[{key:"getDefaultValues",value:function(){var t=this,r=Object.keys(this.schema),i={};return r.forEach((function(r){var a,s,u=t.getField(r),d=Array.isArray(u.type),f=c(u);u.disableDefaultValue||(void 0===u.defaultValue?u.options?i[r]=l((a=u.options,"object"===n(s=o(a,1)[0])?s.value:s),d):i[r]=f instanceof e?l(f.getDefaultValues(),d):function(e,t){return"function"==typeof e.getDefaultValue?l(e.getDefaultValue(),t):e===Number?l(NaN,t):e===Date?l(new Date,t):l(e(),t)}(f,d):i[r]=l(u.defaultValue,d))})),i}},{key:"getField",value:function(e){return S(S({},this.schema[e]),{},{parentSchema:this})}},{key:"getFields",value:function(){return this.schema}},{key:"validate",value:function(e){var t=this;return this.errors={},this.promises=[],this.checkModel(e)&&(this.checkKeysDiff(e),this.checkTypesAndValidators(e)),this.promises.length>0?Promise.all(this.promises).then((function(){return t.errors})):this.errors}},{key:"setError",value:function(e,t,r){this.errors[e]||(this.errors[e]=[]);var i="function"==typeof t?t():t;r>-1?this.errors[e][r]=g(this.errors[e][r],i):this.errors[e].push(i)}},{key:"setModelError",value:function(t,r){var i=r,a=j(t.split(".")),n=a[0],o=a.slice(1),s=function(e){var t=parseInt(e[0],10);return d(t)?-1:t}(o),u=this.getField(n),l=c(u);if(l instanceof e&&o.length>0){var f=new e(l.schema),y=function(e){var t=parseInt(e[0],10);return d(t)||e.splice(0,1),e}(o).join(".");f.setModelError(y,r),i=f.errors}this.setError(n,i,s)}},{key:"checkModel",value:function(e){return!!e||(this.setError("model",this.messages.modelIsUndefined()),!1)}},{key:"checkKeysDiff",value:function(e){var t=this;if(this.validateKeys){var r,i,a=Object.keys(e),n=Object.keys(this.schema),o=(r=n,i=[],a.forEach((function(e){r.indexOf(e)<0&&i.push(e)})),i);o.length>0&&o.forEach((function(e){t.setError(e,t.messages.notDefinedKey(e))}))}}},{key:"checkTypesAndValidators",value:function(e){var t,r,i=this,a=Object.keys(this.schema),n=(t=e,r={},a.forEach((function(e){r[e]=t[e]})),r);a.forEach((function(e){var t=n[e],r=i.schema[e],a=i.getFieldValidators(e),o=Array.isArray(r.type),s=o?r.type[0]:r.type;o&&i.validateType(Array,t)?t.forEach((function(t,r){i.validateType(s,t,e,r)})):i.validateType(s,t,e),i.validateRequired(r,t,e),i.validateCustomValidators({validators:a,value:t,fieldSchema:r,validatedObject:n,key:e})})),this.validateAdditionalValidators(e)}},{key:"resolveValidatorErrorsForKey",value:function(e,t,r){var i=this;"boolean"!=typeof r||r?Array.isArray(r)?r.forEach((function(r){i.resolveValidatorErrorsForKey(e,t,r)})):"string"==typeof r&&this.resolveValidatorErrorsForKey(e,r,!1):this.setError(e,t)}},{key:"validateCustomValidators",value:function(e){var t=this,r=e.validators,i=e.value,a=e.fieldSchema,n=e.validatedObject,o=e.key;r.forEach((function(e){var r=e.validator,s=e.errorMessage,u=r(i,a,n,t);if(u instanceof Promise){var l=u.then((function(e){t.resolveValidatorErrorsForKey(o,s,e)}));t.promises.push(l)}else t.resolveValidatorErrorsForKey(o,s,u)}))}},{key:"validateAdditionalValidators",value:function(e){var t=this;this.additionalValidators.forEach((function(r){var i=r(e,t);i instanceof Promise&&t.promises.push(i)}))}},{key:"validateRequired",value:function(t,r,i){if(t.required){var a=t.type.name;if("function"==typeof this.typesRequiredValidators[a])return void this.typesRequiredValidators[a](r,i);if(t.type instanceof e)return void this.validateRequiredTypeSchema(t.type.schema,r,i);this.validateRequiredType(r,i)}}},{key:"validateRequiredType",value:function(e,t){if(!e||0===e.length){var r=this.getField(t).label;this.setError(t,this.messages.validateRequired(r||t))}}},{key:"validateRequiredTypeObject",value:function(e,t){if(!("object"===k(e)&&null!==e&&Object.keys(e).length>0)){var r=this.getField(t).label;this.setError(t,this.messages.validateRequired(r||t))}}},{key:"validateRequiredTypeArray",value:function(e,t){if(!(Array.isArray(e)&&e.length>0)){var r=this.getField(t).label;this.setError(t,this.messages.validateRequired(r||t))}}},{key:"validateRequiredTypeNumber",value:function(e,t){if("number"!=typeof e||Number.isNaN(e)){var r=this.getField(t).label;this.setError(t,this.messages.validateRequired(r||t))}}},{key:"validateRequiredTypeDate",value:function(e,t){if(!(e instanceof Date)){var r=this.getField(t).label;this.setError(t,this.messages.validateRequired(r||t))}}},{key:"validateRequiredTypeSchema",value:function(e,t,r){if("object"===k(t)&&null!==t){var i=!0,a=Object.keys(t);if(Object.keys(e).forEach((function(e){a.indexOf(e)<0&&(i=!1)})),i)return}var n=this.getField(r).label;this.setError(r,this.messages.validateRequired(n||r))}},{key:"validateType",value:function(t,r,i,a){var n=function(e){var t=e.name;if("function"==typeof e&&!t){var r=e.toString();return r.substr(0,r.indexOf("(")).replace("function ","").trim()}return t}(t);if(this.registerTypeIfNotExists(t,n),"function"==typeof this.typesValidators[n])return this.typesValidators[n](r,i,t,a);if(t instanceof e)return this.validateTypeSchema(r,i,t,a);if(t instanceof O)return this.validateOneOfTypes(r,i,t,a);throw new Error("Unrecognized type ".concat(n))}},{key:"validateTypeString",value:function(e,t,r){if("string"==typeof e)return!0;var i=this.getField(t).label;return this.setError(t,this.messages.validateString(i||t),r),!1}},{key:"validateTypeNumber",value:function(e,t,r){if("number"==typeof e)return!0;var i=this.getField(t).label;return this.setError(t,this.messages.validateNumber(i||t),r),!1}},{key:"validateTypeObject",value:function(e,t,r){if("object"===k(e)&&!Array.isArray(e)&&null!==e)return!0;var i=this.getField(t).label;return this.setError(t,this.messages.validateObject(i||t),r),!1}},{key:"validateTypeArray",value:function(e,t,r){if(Array.isArray(e))return!0;var i=this.getField(t).label;return this.setError(t,this.messages.validateArray(i||t),r),!1}},{key:"validateTypeBoolean",value:function(e,t,r){if("boolean"==typeof e)return!0;var i=this.getField(t).label;return this.setError(t,this.messages.validateBoolean(i||t),r),!1}},{key:"validateTypeDate",value:function(e,t,r){if(e instanceof Date)return!0;var i=this.getField(t).label;return this.setError(t,this.messages.validateDate(i||t),r),!1}},{key:"validateTypeSchema",value:function(e,t,r,i){var a=this,n=r.validate(e);if(n instanceof Promise){var o=n.then((function(e){Object.keys(e).length>0&&a.setError(t,e,i)}));return this.promises.push(o),!1}return 0===Object.keys(n).length||(this.setError(t,n,i),!1)}},{key:"validateOneOfTypes",value:function(t,r,i,a){var n=new e(i.getSchema()).validate(i.parseValue(t));return Object.keys(n).length<i.getTypes().length||(this.setError(r,n,a),!1)}},{key:"pick",value:function(e){var t=this,r={};return e.forEach((function(e){r[e]=t.schema[e]})),r}},{key:"omit",value:function(e){var t=this,r={};return Object.keys(this.schema).forEach((function(i){e.indexOf(i)>-1||(r[i]=t.schema[i])})),r}},{key:"extend",value:function(e){var t=this;Object.keys(e).forEach((function(r){t.schema[r]=e[r]}))}},{key:"getFieldValidators",value:function(e){return this.schema[e].validators||[]}},{key:"setFieldValidator",value:function(e,t){Array.isArray(this.schema[e].validators)||(this.schema[e].validators=[]),this.schema[e].validators.push(t)}},{key:"extendFieldValidators",value:function(e,t){var r=this.getFieldValidators(e);r.length&&(r.indexOf(t)>-1||t.id&&r.findIndex((function(e){return e.id===t.id}))>-1)||this.setFieldValidator(e,t)}},{key:"registerTypeIfNotExists",value:function(e,t){e instanceof i&&"function"!=typeof this.typesValidators[t]&&this.registerType(e)}},{key:"registerType",value:function(e){var t=e.name,r=e.validator,i=e.requiredValidator;this.typesValidators[t]=r.bind(this),i&&(this.typesRequiredValidators[t]=i.bind(this))}},{key:"addValidator",value:function(e){"function"==typeof e&&this.additionalValidators.add(e)}},{key:"removeValidator",value:function(e){this.additionalValidators.delete(e)}}]),e}()}]);