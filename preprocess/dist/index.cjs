var $lCTsc$yaml = require("yaml");
var $lCTsc$mdsvex = require("mdsvex");
var $lCTsc$rehypeslug = require("rehype-slug");
var $lCTsc$rehypeautolinkheadings = require("rehype-autolink-headings");
var $lCTsc$blueimpmd5 = require("blueimp-md5");
var $lCTsc$unified = require("unified");
var $lCTsc$remarkparse = require("remark-parse");
var $lCTsc$unistutilvisit = require("unist-util-visit");
var $lCTsc$fs = require("fs");
var $lCTsc$chalk = require("chalk");
var $lCTsc$hastutilselect = require("hast-util-select");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("2ftPn", function(module, exports) {


var $iHgkL = parcelRequire("iHgkL");
var $187a7397afa67c6a$require$containsFrontmatter = $iHgkL.containsFrontmatter;
/**
 * @param {string} content File Content
 * @returns {any}
 */ const $187a7397afa67c6a$var$parseFrontmatter = (content)=>{
    // Run against regex
    const frontmatter = $187a7397afa67c6a$require$containsFrontmatter(content);
    if (frontmatter) return $lCTsc$yaml.parse(frontmatter) ?? {};
    // No match for frontmatter
    return undefined;
};
module.exports = {
    parseFrontmatter: $187a7397afa67c6a$var$parseFrontmatter
};

});
parcelRegister("iHgkL", function(module, exports) {
const $255149060348e366$var$frontmatterRegex = /^\s*---((?:.|\s)+?)---/;
/**
 * @param {string} toCheck
 * @returns {string | false}
 */ const $255149060348e366$var$containsFrontmatter = (toCheck)=>$255149060348e366$var$frontmatterRegex.exec(toCheck)?.[1] ?? false;
module.exports = {
    frontmatterRegex: $255149060348e366$var$frontmatterRegex,
    containsFrontmatter: $255149060348e366$var$containsFrontmatter
};

});


parcelRegister("k3QPz", function(module, exports) {
module.exports = `
<!-- 
    MDSvex comes in handy here because it takes frontmatter and shoves it into the metadata object.
    This means that all we need to do is build out the expected page metadata
-->
<!-- Show title as h1 if defined, and not hidden -->
{#if typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true}
<h1 class="title">{metadata.title ?? metadata.og?.title}</h1>
{/if}
<svelte:head>
<!-- Title has a default case; so we need to handle it in a special way -->
{#if typeof metadata !== "undefined" && (metadata.title || metadata.og?.title)}
<title>{metadata.title ?? metadata.og?.title}</title>
<meta property="og:title" content={metadata.og?.title ?? metadata.title} />
<meta name="twitter:title" content={metadata.og?.title ?? metadata.title} />
{:else}
<!-- EITHER there is no metadata, or there is no specified style -->
<title>Evidence</title>
{/if}

<!-- default twitter cardtags -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@evidence_dev" />

{#if typeof metadata === "object"}
{#if metadata.description || metadata.og?.description}
  <meta
    name="description"
    content={metadata.description ?? metadata.og?.description}
  />
  <meta
    property="og:description"
    content={metadata.og?.description ?? metadata.description}
  />
  <meta
    name="twitter:description"
    content={metadata.og?.description ?? metadata.description}
  />
{/if}
{#if metadata.og?.image}
  <meta property="og:image" content={metadata.og?.image} />
  <meta name="twitter:image" content={metadata.og?.image} />
{/if}
{/if}
</svelte:head>
`;

});


var $71fc60ea3a6cc674$exports = {};
var $47a2497deb0890f3$exports = {};
var $7c201570eb90dc35$exports = {};
/* **********************************************
     Begin prism-core.js
********************************************** */ /// <reference lib="WebWorker"/>
var $7c201570eb90dc35$var$_self = typeof window !== "undefined" ? window // if in browser
 : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self // if in worker
 : {} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */ var $7c201570eb90dc35$var$Prism = function(_self) {
    // Private helper vars
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    // The grammar object for plaintext
    var plainTextGrammar = {};
    var _ = {
        /**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */ manual: _self.Prism && _self.Prism.manual,
        /**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */ disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        /**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */ util: {
            encode: function encode(tokens) {
                if (tokens instanceof Token) return new Token(tokens.type, encode(tokens.content), tokens.alias);
                else if (Array.isArray(tokens)) return tokens.map(encode);
                else return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            },
            /**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */ type: function(o) {
                return Object.prototype.toString.call(o).slice(8, -1);
            },
            /**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */ objId: function(obj) {
                if (!obj["__id"]) Object.defineProperty(obj, "__id", {
                    value: ++uniqueId
                });
                return obj["__id"];
            },
            /**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */ clone: function deepClone(o, visited) {
                visited = visited || {};
                var clone;
                var id;
                switch(_.util.type(o)){
                    case "Object":
                        id = _.util.objId(o);
                        if (visited[id]) return visited[id];
                        clone = /** @type {Record<string, any>} */ {};
                        visited[id] = clone;
                        for(var key in o)if (o.hasOwnProperty(key)) clone[key] = deepClone(o[key], visited);
                        return /** @type {any} */ clone;
                    case "Array":
                        id = _.util.objId(o);
                        if (visited[id]) return visited[id];
                        clone = [];
                        visited[id] = clone;
                        /** @type {any} */ o.forEach(function(v, i) {
                            clone[i] = deepClone(v, visited);
                        });
                        return /** @type {any} */ clone;
                    default:
                        return o;
                }
            },
            /**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */ getLanguage: function(element) {
                while(element){
                    var m = lang.exec(element.className);
                    if (m) return m[1].toLowerCase();
                    element = element.parentElement;
                }
                return "none";
            },
            /**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */ setLanguage: function(element, language) {
                // remove all `language-xxxx` classes
                // (this might leave behind a leading space)
                element.className = element.className.replace(RegExp(lang, "gi"), "");
                // add the new `language-xxxx` class
                // (using `classList` will automatically clean up spaces for us)
                element.classList.add("language-" + language);
            },
            /**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */ currentScript: function() {
                if (typeof document === "undefined") return null;
                if ("currentScript" in document && true /* hack to trip TS' flow analysis */ ) return /** @type {any} */ document.currentScript;
                // IE11 workaround
                // we'll get the src of the current script by parsing IE11's error stack trace
                // this will not work for inline scripts
                try {
                    throw new Error();
                } catch (err) {
                    // Get file src url from stack. Specifically works with the format of stack traces in IE.
                    // A stack will look like this:
                    //
                    // Error
                    //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                    //    at Global code (http://localhost/components/prism-core.js:606:1)
                    var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                    if (src) {
                        var scripts = document.getElementsByTagName("script");
                        for(var i in scripts){
                            if (scripts[i].src == src) return scripts[i];
                        }
                    }
                    return null;
                }
            },
            /**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */ isActive: function(element, className, defaultActivation) {
                var no = "no-" + className;
                while(element){
                    var classList = element.classList;
                    if (classList.contains(className)) return true;
                    if (classList.contains(no)) return false;
                    element = element.parentElement;
                }
                return !!defaultActivation;
            }
        },
        /**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */ languages: {
            /**
			 * The grammar for plain, unformatted text.
			 */ plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            /**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */ extend: function(id, redef) {
                var lang = _.util.clone(_.languages[id]);
                for(var key in redef)lang[key] = redef[key];
                return lang;
            },
            /**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */ insertBefore: function(inside, before, insert, root) {
                root = root || /** @type {any} */ _.languages;
                var grammar = root[inside];
                /** @type {Grammar} */ var ret = {};
                for(var token in grammar)if (grammar.hasOwnProperty(token)) {
                    if (token == before) {
                        for(var newToken in insert)if (insert.hasOwnProperty(newToken)) ret[newToken] = insert[newToken];
                    }
                    // Do not insert token which also occur in insert. See #1525
                    if (!insert.hasOwnProperty(token)) ret[token] = grammar[token];
                }
                var old = root[inside];
                root[inside] = ret;
                // Update references in other language definitions
                _.languages.DFS(_.languages, function(key, value) {
                    if (value === old && key != inside) this[key] = ret;
                });
                return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
                visited = visited || {};
                var objId = _.util.objId;
                for(var i in o)if (o.hasOwnProperty(i)) {
                    callback.call(o, i, o[i], type || i);
                    var property = o[i];
                    var propertyType = _.util.type(property);
                    if (propertyType === "Object" && !visited[objId(property)]) {
                        visited[objId(property)] = true;
                        DFS(property, callback, null, visited);
                    } else if (propertyType === "Array" && !visited[objId(property)]) {
                        visited[objId(property)] = true;
                        DFS(property, callback, i, visited);
                    }
                }
            }
        },
        plugins: {},
        /**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */ highlightAll: function(async, callback) {
            _.highlightAllUnder(document, async, callback);
        },
        /**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */ highlightAllUnder: function(container, async, callback) {
            var env = {
                callback: callback,
                container: container,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _.hooks.run("before-all-elements-highlight", env);
            for(var i = 0, element; element = env.elements[i++];)_.highlightElement(element, async === true, env.callback);
        },
        /**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */ highlightElement: function(element, async, callback) {
            // Find language
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];
            // Set language on the element, if not present
            _.util.setLanguage(element, language);
            // Set language on the parent, for styling
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") _.util.setLanguage(parent, language);
            var code = element.textContent;
            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };
            function insertHighlightedCode(highlightedCode) {
                env.highlightedCode = highlightedCode;
                _.hooks.run("before-insert", env);
                env.element.innerHTML = env.highlightedCode;
                _.hooks.run("after-highlight", env);
                _.hooks.run("complete", env);
                callback && callback.call(env.element);
            }
            _.hooks.run("before-sanity-check", env);
            // plugins may change/add the parent/element
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) parent.setAttribute("tabindex", "0");
            if (!env.code) {
                _.hooks.run("complete", env);
                callback && callback.call(env.element);
                return;
            }
            _.hooks.run("before-highlight", env);
            if (!env.grammar) {
                insertHighlightedCode(_.util.encode(env.code));
                return;
            }
            if (async && _self.Worker) {
                var worker = new Worker(_.filename);
                worker.onmessage = function(evt) {
                    insertHighlightedCode(evt.data);
                };
                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code,
                    immediateClose: true
                }));
            } else insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        },
        /**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */ highlight: function(text, grammar, language) {
            var env = {
                code: text,
                grammar: grammar,
                language: language
            };
            _.hooks.run("before-tokenize", env);
            if (!env.grammar) throw new Error('The language "' + env.language + '" has no grammar.');
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run("after-tokenize", env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */ tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
                for(var token in rest)grammar[token] = rest[token];
                delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
        },
        /**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */ hooks: {
            all: {},
            /**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */ add: function(name, callback) {
                var hooks = _.hooks.all;
                hooks[name] = hooks[name] || [];
                hooks[name].push(callback);
            },
            /**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */ run: function(name, env) {
                var callbacks = _.hooks.all[name];
                if (!callbacks || !callbacks.length) return;
                for(var i = 0, callback; callback = callbacks[i++];)callback(env);
            }
        },
        Token: Token
    };
    _self.Prism = _;
    // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token
    /**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */ function Token(type, content, alias, matchedStr) {
        /**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */ this.type = type;
        /**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */ this.content = content;
        /**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */ this.alias = alias;
        // Copy of the full string this token was created from
        this.length = (matchedStr || "").length | 0;
    }
    /**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */ /**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */ Token.stringify = function stringify(o, language) {
        if (typeof o == "string") return o;
        if (Array.isArray(o)) {
            var s = "";
            o.forEach(function(e) {
                s += stringify(e, language);
            });
            return s;
        }
        var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: "span",
            classes: [
                "token",
                o.type
            ],
            attributes: {},
            language: language
        };
        var aliases = o.alias;
        if (aliases) {
            if (Array.isArray(aliases)) Array.prototype.push.apply(env.classes, aliases);
            else env.classes.push(aliases);
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for(var name in env.attributes)attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    /**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */ function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
            // change the match to remove the text matched by the Prism lookbehind group
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
        }
        return match;
    }
    /**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */ function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for(var token in grammar){
            if (!grammar.hasOwnProperty(token) || !grammar[token]) continue;
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [
                patterns
            ];
            for(var j = 0; j < patterns.length; ++j){
                if (rematch && rematch.cause == token + "," + j) return;
                var patternObj = patterns[j];
                var inside = patternObj.inside;
                var lookbehind = !!patternObj.lookbehind;
                var greedy = !!patternObj.greedy;
                var alias = patternObj.alias;
                if (greedy && !patternObj.pattern.global) {
                    // Without the global flag, lastIndex won't work
                    var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                    patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
                }
                /** @type {RegExp} */ var pattern = patternObj.pattern || patternObj;
                for(var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next){
                    if (rematch && pos >= rematch.reach) break;
                    var str = currentNode.value;
                    if (tokenList.length > text.length) // Something went terribly wrong, ABORT, ABORT!
                    return;
                    if (str instanceof Token) continue;
                    var removeCount = 1; // this is the to parameter of removeBetween
                    var match;
                    if (greedy) {
                        match = matchPattern(pattern, pos, text, lookbehind);
                        if (!match || match.index >= text.length) break;
                        var from = match.index;
                        var to = match.index + match[0].length;
                        var p = pos;
                        // find the node that contains the match
                        p += currentNode.value.length;
                        while(from >= p){
                            currentNode = currentNode.next;
                            p += currentNode.value.length;
                        }
                        // adjust pos (and p)
                        p -= currentNode.value.length;
                        pos = p;
                        // the current node is a Token, then the match starts inside another Token, which is invalid
                        if (currentNode.value instanceof Token) continue;
                        // find the last node which is affected by this match
                        for(var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next){
                            removeCount++;
                            p += k.value.length;
                        }
                        removeCount--;
                        // replace with the new match
                        str = text.slice(pos, p);
                        match.index -= pos;
                    } else {
                        match = matchPattern(pattern, 0, str, lookbehind);
                        if (!match) continue;
                    }
                    // eslint-disable-next-line no-redeclare
                    var from = match.index;
                    var matchStr = match[0];
                    var before = str.slice(0, from);
                    var after = str.slice(from + matchStr.length);
                    var reach = pos + str.length;
                    if (rematch && reach > rematch.reach) rematch.reach = reach;
                    var removeFrom = currentNode.prev;
                    if (before) {
                        removeFrom = addAfter(tokenList, removeFrom, before);
                        pos += before.length;
                    }
                    removeRange(tokenList, removeFrom, removeCount);
                    var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                    currentNode = addAfter(tokenList, removeFrom, wrapped);
                    if (after) addAfter(tokenList, currentNode, after);
                    if (removeCount > 1) {
                        // at least one Token object was removed, so we have to do some rematching
                        // this can only happen if the current pattern is greedy
                        /** @type {RematchOptions} */ var nestedRematch = {
                            cause: token + "," + j,
                            reach: reach
                        };
                        matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                        // the reach might have been extended because of the rematching
                        if (rematch && nestedRematch.reach > rematch.reach) rematch.reach = nestedRematch.reach;
                    }
                }
            }
        }
    }
    /**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */ /**
	 * @template T
	 * @private
	 */ function LinkedList() {
        /** @type {LinkedListNode<T>} */ var head = {
            value: null,
            prev: null,
            next: null
        };
        /** @type {LinkedListNode<T>} */ var tail = {
            value: null,
            prev: head,
            next: null
        };
        head.next = tail;
        /** @type {LinkedListNode<T>} */ this.head = head;
        /** @type {LinkedListNode<T>} */ this.tail = tail;
        this.length = 0;
    }
    /**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */ function addAfter(list, node, value) {
        // assumes that node != list.tail && values.length >= 0
        var next = node.next;
        var newNode = {
            value: value,
            prev: node,
            next: next
        };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
    }
    /**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */ function removeRange(list, node, count) {
        var next = node.next;
        for(var i = 0; i < count && next !== list.tail; i++)next = next.next;
        node.next = next;
        next.prev = node;
        list.length -= i;
    }
    /**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */ function toArray(list) {
        var array = [];
        var node = list.head.next;
        while(node !== list.tail){
            array.push(node.value);
            node = node.next;
        }
        return array;
    }
    if (!_self.document) {
        if (!_self.addEventListener) // in Node.js
        return _;
        if (!_.disableWorkerMessageHandler) // In worker
        _self.addEventListener("message", function(evt) {
            var message = JSON.parse(evt.data);
            var lang = message.language;
            var code = message.code;
            var immediateClose = message.immediateClose;
            _self.postMessage(_.highlight(code, _.languages[lang], lang));
            if (immediateClose) _self.close();
        }, false);
        return _;
    }
    // Get current script and highlight
    var script = _.util.currentScript();
    if (script) {
        _.filename = script.src;
        if (script.hasAttribute("data-manual")) _.manual = true;
    }
    function highlightAutomaticallyCallback() {
        if (!_.manual) _.highlightAll();
    }
    if (!_.manual) {
        // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102
        var readyState = document.readyState;
        if (readyState === "loading" || readyState === "interactive" && script && script.defer) document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
        else if (window.requestAnimationFrame) window.requestAnimationFrame(highlightAutomaticallyCallback);
        else window.setTimeout(highlightAutomaticallyCallback, 16);
    }
    return _;
}($7c201570eb90dc35$var$_self);
if (0, $7c201570eb90dc35$exports) $7c201570eb90dc35$exports = $7c201570eb90dc35$var$Prism;
// hack for components to work correctly in node.js
if (typeof $parcel$global !== "undefined") $parcel$global.Prism = $7c201570eb90dc35$var$Prism;
// some additional documentation/types
/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */ /**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */ /**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */ /**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */ /* **********************************************
     Begin prism-markup.js
********************************************** */ $7c201570eb90dc35$var$Prism.languages.markup = {
    "comment": {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
    },
    "prolog": {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
    },
    "doctype": {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: true,
                greedy: true,
                inside: null // see below
            },
            "string": {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: true
            },
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
        }
    },
    "cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
    },
    "tag": {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
            "tag": {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    "punctuation": /^<\/?/,
                    "namespace": /^[^\s>\/:]+:/
                }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    "punctuation": [
                        {
                            pattern: /^=/,
                            alias: "attr-equals"
                        },
                        {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: true
                        }
                    ]
                }
            },
            "punctuation": /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    "namespace": /^[^\s>\/:]+:/
                }
            }
        }
    },
    "entity": [
        {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
    ]
};
$7c201570eb90dc35$var$Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = $7c201570eb90dc35$var$Prism.languages.markup["entity"];
$7c201570eb90dc35$var$Prism.languages.markup["doctype"].inside["internal-subset"].inside = $7c201570eb90dc35$var$Prism.languages.markup;
// Plugin to make entity title show the real entity, idea by Roman Komarov
$7c201570eb90dc35$var$Prism.hooks.add("wrap", function(env) {
    if (env.type === "entity") env.attributes["title"] = env.content.replace(/&amp;/, "&");
});
Object.defineProperty($7c201570eb90dc35$var$Prism.languages.markup.tag, "addInlined", {
    /**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */ value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: $7c201570eb90dc35$var$Prism.languages[lang]
        };
        includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: includedCdataInside
            }
        };
        inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: $7c201570eb90dc35$var$Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside: inside
        };
        $7c201570eb90dc35$var$Prism.languages.insertBefore("markup", "cdata", def);
    }
});
Object.defineProperty($7c201570eb90dc35$var$Prism.languages.markup.tag, "addAttribute", {
    /**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */ value: function(attrName, lang) {
        $7c201570eb90dc35$var$Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
            lookbehind: true,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        "value": {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: true,
                            alias: [
                                lang,
                                "language-" + lang
                            ],
                            inside: $7c201570eb90dc35$var$Prism.languages[lang]
                        },
                        "punctuation": [
                            {
                                pattern: /^=/,
                                alias: "attr-equals"
                            },
                            /"|'/
                        ]
                    }
                }
            }
        });
    }
});
$7c201570eb90dc35$var$Prism.languages.html = $7c201570eb90dc35$var$Prism.languages.markup;
$7c201570eb90dc35$var$Prism.languages.mathml = $7c201570eb90dc35$var$Prism.languages.markup;
$7c201570eb90dc35$var$Prism.languages.svg = $7c201570eb90dc35$var$Prism.languages.markup;
$7c201570eb90dc35$var$Prism.languages.xml = $7c201570eb90dc35$var$Prism.languages.extend("markup", {});
$7c201570eb90dc35$var$Prism.languages.ssml = $7c201570eb90dc35$var$Prism.languages.xml;
$7c201570eb90dc35$var$Prism.languages.atom = $7c201570eb90dc35$var$Prism.languages.xml;
$7c201570eb90dc35$var$Prism.languages.rss = $7c201570eb90dc35$var$Prism.languages.xml;
/* **********************************************
     Begin prism-css.js
********************************************** */ (function(Prism) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism.languages.css = {
        "comment": /\/\*[\s\S]*?\*\//,
        "atrule": {
            pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
            inside: {
                "rule": /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: true,
                    alias: "selector"
                },
                "keyword": {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: true
                }
            }
        },
        "url": {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: true,
            inside: {
                "function": /^url/i,
                "punctuation": /^\(|\)$/,
                "string": {
                    pattern: RegExp("^" + string.source + "$"),
                    alias: "url"
                }
            }
        },
        "selector": {
            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + string.source + ")*(?=\\s*\\{)"),
            lookbehind: true
        },
        "string": {
            pattern: string,
            greedy: true
        },
        "property": {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
        },
        "important": /!important\b/i,
        "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
        },
        "punctuation": /[(){};:,]/
    };
    Prism.languages.css["atrule"].inside.rest = Prism.languages.css;
    var markup = Prism.languages.markup;
    if (markup) {
        markup.tag.addInlined("style", "css");
        markup.tag.addAttribute("style", "css");
    }
})($7c201570eb90dc35$var$Prism);
/* **********************************************
     Begin prism-clike.js
********************************************** */ $7c201570eb90dc35$var$Prism.languages.clike = {
    "comment": [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
        }
    ],
    "string": {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
            "punctuation": /[.\\]/
        }
    },
    "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    "boolean": /\b(?:false|true)\b/,
    "function": /\b\w+(?=\()/,
    "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    "punctuation": /[{}[\];(),.:]/
};
/* **********************************************
     Begin prism-javascript.js
********************************************** */ $7c201570eb90dc35$var$Prism.languages.javascript = $7c201570eb90dc35$var$Prism.languages.extend("clike", {
    "class-name": [
        $7c201570eb90dc35$var$Prism.languages.clike["class-name"],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
        }
    ],
    "keyword": [
        {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
        },
        {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
        }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    "number": {
        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
        lookbehind: true
    },
    "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
$7c201570eb90dc35$var$Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
$7c201570eb90dc35$var$Prism.languages.insertBefore("javascript", "keyword", {
    "regex": {
        pattern: RegExp(// lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
        lookbehind: true,
        greedy: true,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: true,
                alias: "language-regex",
                inside: $7c201570eb90dc35$var$Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
        }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    "parameter": [
        {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: $7c201570eb90dc35$var$Prism.languages.javascript
        },
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: $7c201570eb90dc35$var$Prism.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: $7c201570eb90dc35$var$Prism.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: $7c201570eb90dc35$var$Prism.languages.javascript
        }
    ],
    "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
$7c201570eb90dc35$var$Prism.languages.insertBefore("javascript", "string", {
    "hashbang": {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
    },
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            "interpolation": {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: true,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: $7c201570eb90dc35$var$Prism.languages.javascript
                }
            },
            "string": /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
    }
});
$7c201570eb90dc35$var$Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
    }
});
if ($7c201570eb90dc35$var$Prism.languages.markup) {
    $7c201570eb90dc35$var$Prism.languages.markup.tag.addInlined("script", "javascript");
    // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
    $7c201570eb90dc35$var$Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
}
$7c201570eb90dc35$var$Prism.languages.js = $7c201570eb90dc35$var$Prism.languages.javascript;
/* **********************************************
     Begin prism-file-highlight.js
********************************************** */ (function() {
    if (typeof $7c201570eb90dc35$var$Prism === "undefined" || typeof document === "undefined") return;
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
    if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var LOADING_MESSAGE = "Loading\u2026";
    var FAILURE_MESSAGE = function(status, message) {
        return "\u2716 Error " + status + " while fetching file: " + message;
    };
    var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
    var EXTENSIONS = {
        "js": "javascript",
        "py": "python",
        "rb": "ruby",
        "ps1": "powershell",
        "psm1": "powershell",
        "sh": "bash",
        "bat": "batch",
        "h": "c",
        "tex": "latex"
    };
    var STATUS_ATTR = "data-src-status";
    var STATUS_LOADING = "loading";
    var STATUS_LOADED = "loaded";
    var STATUS_FAILED = "failed";
    var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ":not([" + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    /**
	 * Loads the given file.
	 *
	 * @param {string} src The URL or path of the source file to load.
	 * @param {(result: string) => void} success
	 * @param {(reason: string) => void} error
	 */ function loadFile(src, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status < 400 && xhr.responseText) success(xhr.responseText);
                else if (xhr.status >= 400) error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                else error(FAILURE_EMPTY_MESSAGE);
            }
        };
        xhr.send(null);
    }
    /**
	 * Parses the given range.
	 *
	 * This returns a range with inclusive ends.
	 *
	 * @param {string | null | undefined} range
	 * @returns {[number, number | undefined] | undefined}
	 */ function parseRange(range) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
        if (m) {
            var start = Number(m[1]);
            var comma = m[2];
            var end = m[3];
            if (!comma) return [
                start,
                start
            ];
            if (!end) return [
                start,
                undefined
            ];
            return [
                start,
                Number(end)
            ];
        }
        return undefined;
    }
    $7c201570eb90dc35$var$Prism.hooks.add("before-highlightall", function(env) {
        env.selector += ", " + SELECTOR;
    });
    $7c201570eb90dc35$var$Prism.hooks.add("before-sanity-check", function(env) {
        var pre = /** @type {HTMLPreElement} */ env.element;
        if (pre.matches(SELECTOR)) {
            env.code = ""; // fast-path the whole thing and go to complete
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading
            // add code element with loading message
            var code = pre.appendChild(document.createElement("CODE"));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute("data-src");
            var language = env.language;
            if (language === "none") {
                // the language might be 'none' because there is no language set;
                // in this case, we want to use the extension as the language
                var extension = (/\.(\w+)$/.exec(src) || [
                    ,
                    "none"
                ])[1];
                language = EXTENSIONS[extension] || extension;
            }
            // set language classes
            $7c201570eb90dc35$var$Prism.util.setLanguage(code, language);
            $7c201570eb90dc35$var$Prism.util.setLanguage(pre, language);
            // preload the language
            var autoloader = $7c201570eb90dc35$var$Prism.plugins.autoloader;
            if (autoloader) autoloader.loadLanguages(language);
            // load file
            loadFile(src, function(text) {
                // mark as loaded
                pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                // handle data-range
                var range = parseRange(pre.getAttribute("data-range"));
                if (range) {
                    var lines = text.split(/\r\n?|\n/g);
                    // the range is one-based and inclusive on both ends
                    var start = range[0];
                    var end = range[1] == null ? lines.length : range[1];
                    if (start < 0) start += lines.length;
                    start = Math.max(0, Math.min(start - 1, lines.length));
                    if (end < 0) end += lines.length;
                    end = Math.max(0, Math.min(end, lines.length));
                    text = lines.slice(start, end).join("\n");
                    // add data-start for line numbers
                    if (!pre.hasAttribute("data-start")) pre.setAttribute("data-start", String(start + 1));
                }
                // highlight code
                code.textContent = text;
                $7c201570eb90dc35$var$Prism.highlightElement(code);
            }, function(error) {
                // mark as failed
                pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                code.textContent = error;
            });
        }
    });
    $7c201570eb90dc35$var$Prism.plugins.fileHighlight = {
        /**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */ highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for(var i = 0, element; element = elements[i++];)$7c201570eb90dc35$var$Prism.highlightElement(element);
        }
    };
    var logged = false;
    /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */ $7c201570eb90dc35$var$Prism.fileHighlight = function() {
        if (!logged) {
            console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
            logged = true;
        }
        $7c201570eb90dc35$var$Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    };
})();


var $b77e8a775bae91aa$exports = {};
$b77e8a775bae91aa$exports = {
    // Case insensitive
    // If you are changing this, update the inlined version in api/status/[...route]/extractQueries.server.js
    supportedLangs: [
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "Python",
        "TypeScript",
        "Java",
        "Bash",
        "CSharp",
        "C++",
        "PHP",
        "C",
        "PowerShell",
        "Go",
        "Rust",
        "Kotlin",
        "Dart",
        "Ruby",
        "R",
        "MATLAB",
        "DAX",
        "JSON",
        "YAML",
        "Markdown",
        "Code",
        "Svelte",
        "Shell"
    ].map((r)=>r.toLowerCase())
};


var $47a2497deb0890f3$require$supportedLangs = $b77e8a775bae91aa$exports.supportedLangs;
/**
 * @returns {Set<string>}
 */ const $47a2497deb0890f3$var$getPrismLangs = function() {
    let prismLangs = new Set();
    $47a2497deb0890f3$require$supportedLangs.forEach((supportedLanguage)=>{
        prismLangs.add(supportedLanguage);
        if (supportedLanguage in $7c201570eb90dc35$exports.languages) {
            const languageComponent = $7c201570eb90dc35$exports.languages[supportedLanguage];
            if (languageComponent.alias) {
                if (Array.isArray(languageComponent.alias)) languageComponent.alias.forEach((a)=>prismLangs.add(a));
                else prismLangs.add(languageComponent.alias);
            }
        }
    });
    return prismLangs;
};
$47a2497deb0890f3$exports = $47a2497deb0890f3$var$getPrismLangs;


/**
 *
 * @param {string} code
 * @param {string} lang
 * @param {string | undefined} meta
 * @returns
 */ function $71fc60ea3a6cc674$var$highlighter(code, lang, meta) {
    code = code.replace(/'/g, "&apos;");
    code = code.replace(/"/g, "&quot;");
    // Replace curly braces or Svelte will try to evaluate as a JS expression
    code = code.replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;");
    if (lang?.toLowerCase() === "sql" && meta || !$47a2497deb0890f3$exports().has(lang?.toLowerCase() ?? "")) {
        const queryId = lang?.toLowerCase() === "sql" && meta ? meta : lang;
        return `
        {#if ${queryId} }
            <QueryViewer
                queryID = "${queryId ?? "untitled"}"
                queryResult = {${queryId ?? "untitled"}}
            /> 
        {/if}
        `;
    }
    // Ensure that "real" code blocks are rendered not run as queries
    return `<CodeBlock source="${code}" copyToClipboard=true language="${lang}"/>`;
}
$71fc60ea3a6cc674$exports = {
    highlighter: $71fc60ea3a6cc674$var$highlighter
};


var $34f536c00cdc0c95$require$highlighter = $71fc60ea3a6cc674$exports.highlighter;
var $ee04455378375116$exports = {};
/**
 * @type {import("svelte-preprocess/dist/types").PreprocessorGroup}
 */ const $ee04455378375116$var$addScriptTags = {
    markup ({ content: content, filename: filename }) {
        if (filename.endsWith(".md")) {
            if (!content.match(/\<script(.*)\>/)) {
                const result = content + '\n\n<script context="module"> </script>\n\n<script> </script>\n\n';
                return {
                    code: result
                };
            }
            if (!content.match(/\<script(.*)context\=\"module\"(.*)\>/)) {
                const result = content + '\n\n<script context="module"> </script>\n\n';
                return {
                    code: result
                };
            }
            if (!content.match(/\<script\>/)) {
                const result = content + "\n\n<script> </script>\n\n";
                return {
                    code: result
                };
            }
        }
    }
};
$ee04455378375116$exports = $ee04455378375116$var$addScriptTags;


var $fe3be1c88e4e6649$exports = {};
var $3bc70292e4e78bd3$exports = {};

$3bc70292e4e78bd3$exports = {
    /**
	 * Generates a unique (but consistent) hash for a route
	 * @param {string} filename
	 * @example /src/pages/+page.md /src/pages/my-route/+page.md
	 * @returns string
	 */ getRouteHash: (filename)=>{
        const isIndex = filename.split("/src/pages")[1] === "/+page.md";
        if (isIndex) return $lCTsc$blueimpmd5("/");
        let route = filename.split("/src/pages")?.[1].replace(".md", "").replace(/\/\+page/g, "");
        if (!route) throw new Error(`Failed to generate route hash for ${filename} (${JSON.stringify({
            isIndex: isIndex
        })})`);
        return $lCTsc$blueimpmd5(route);
    }
};


var $fe3be1c88e4e6649$require$getRouteHash = $3bc70292e4e78bd3$exports.getRouteHash;
var $427c45b502a64670$exports = {};






var $2ftPn = parcelRequire("2ftPn");
var $427c45b502a64670$require$parseFrontmatter = $2ftPn.parseFrontmatter;

/** @typedef {{id: string, compileError: string, compiledQueryString: string, inputQueryString: string, compiled: boolean, inline: boolean}} Query */ const $427c45b502a64670$var$warnedExternalQueries = {};
/**
 *
 * @param {string} externalQuery
 * @param {string} id
 * @returns {Query}
 */ const $427c45b502a64670$var$readFileToQuery = (externalQuery, id)=>{
    try {
        const content = $lCTsc$fs.readFileSync(`./queries/${externalQuery}`).toString().trim();
        return {
            id: id.toLowerCase(),
            compiledQueryString: content,
            inputQueryString: content,
            compiled: false,
            inline: false
        };
    } catch  {
        console.warn(`Failed to load sql file ${externalQuery}`);
    }
};
// Unified parser step to ignore indented code blocks.
// Adapted from the mdsvex source, here: https://github.com/pngwn/MDsveX/blob/master/packages/mdsvex/src/parsers/index.ts
// Discussion & background here:  https://github.com/evidence-dev/evidence/issues/286
const $427c45b502a64670$var$ignoreIndentedCode = function() {
    const Parser = this.Parser;
    const block_tokenizers = Parser.prototype.blockTokenizers;
    block_tokenizers.indentedCode = ()=>true;
};
/**
 * @param {string} content File content
 * @param {string} filename File name
 * @returns {Query[]}
 */ const $427c45b502a64670$var$extractExternalQueries = (content, filename)=>{
    const frontmatter = $427c45b502a64670$require$parseFrontmatter(content);
    if (!frontmatter) return [];
    if (!frontmatter.queries) return [];
    if (!Array.isArray(frontmatter.queries)) {
        console.warn(`Malformed frontmatter found in ${filename}. Unable to extract external queries.`);
        return [];
    }
    /**
	 *
	 * @param {string} externalQuery
	 * @returns {boolean}
	 */ const validateExternalQuery = (externalQuery)=>{
        if (!externalQuery.endsWith(".sql")) {
            if (!$427c45b502a64670$var$warnedExternalQueries[externalQuery]) {
                $427c45b502a64670$var$warnedExternalQueries[externalQuery] = true;
                console.warn($lCTsc$chalk.bold.red(`! ${externalQuery}`) + $lCTsc$chalk.gray(" does not appear to be a .sql file, and will not be loaded"));
            }
            return false;
        }
        return true;
    };
    /**
	 * @type Query[]
	 */ return frontmatter.queries.map((externalQuery)=>{
        if (typeof externalQuery === "string") {
            if (!validateExternalQuery(externalQuery)) return false;
            const id = externalQuery.split(".sql")[0].replace("/", "_").replace("\\", "_");
            return $427c45b502a64670$var$readFileToQuery(externalQuery, id);
        } else if (typeof externalQuery === "object") {
            const usedKey = Object.keys(externalQuery)?.[0] ?? "";
            const value = externalQuery[usedKey];
            // Note; this is to be obseleted, as the import syntax evolves, but for now only one key should be used.
            if (Object.keys(externalQuery).length > 1) console.warn(`ExternalQuery object has more than one key, this may lead to unintended behavior. Only ${usedKey}: ${value} will be imported.`);
            if (!validateExternalQuery(value)) return false;
            return $427c45b502a64670$var$readFileToQuery(value, usedKey);
        }
    }).filter(Boolean); // filter out queries that returned false;
};
/**
 * @param {string} content Raw File Content
 * @returns {Query[]}
 */ const $427c45b502a64670$var$extractInlineQueries = (content)=>{
    let queries = [];
    let tree = $lCTsc$unified().use($lCTsc$remarkparse).use($427c45b502a64670$var$ignoreIndentedCode).parse(content);
    const prismLangs = $47a2497deb0890f3$exports();
    $lCTsc$unistutilvisit(tree, "code", function(node) {
        let id = node.lang ?? "untitled";
        if (id.toLowerCase() === "sql" && node.meta) id = node.meta;
        if (!prismLangs.has(id.toLowerCase()) && id.toLowerCase() !== "plaintext") {
            // Prevent prism code blocks from being interpreted as queries
            let compiledQueryString = node.value.trim(); // refs get compiled and sent to db orchestrator
            let inputQueryString = compiledQueryString; // original, as written
            let compiled = false; // default flag, switched to true if query is compiled
            queries.push({
                id: id,
                compiledQueryString: compiledQueryString,
                inputQueryString: inputQueryString,
                compiled: compiled,
                inline: true
            });
        }
    });
    return queries;
};
const $427c45b502a64670$var$strictBuild = process.env.VITE_BUILD_STRICT === "true";
const $427c45b502a64670$var$circularRefErrorMsg = "Compiler error: circular reference";
/**
 * @param {string} filename
 * @returns {Query[]}
 */ const $427c45b502a64670$var$extractQueries = (content)=>{
    const queries = [];
    queries.push(...$427c45b502a64670$var$extractExternalQueries(content));
    queries.push(...$427c45b502a64670$var$extractInlineQueries(content));
    // Handle query chaining:
    const maxIterations = 15;
    const queryIds = new Set(queries.map((d)=>d.id));
    const interpolated_variables = new Set();
    for(let i = 0; i <= maxIterations; i++)queries.forEach((query)=>{
        const startTemplateInterpolation = /[^\\](\$\{)/g;
        const validTemplateInterpolation = /[^\\]\$\{((?:.|\s)+?)\}/g;
        /*
				This is a somewhat naive way of looking for invalid template strings
				It currently tests for ${} and ${ cases, but is unable to detect } cases
			*/ const hasTemplates = startTemplateInterpolation.exec(query.inputQueryString);
        const hasValidTemplates = validTemplateInterpolation.exec(query.inputQueryString);
        if (hasTemplates?.length !== hasValidTemplates?.length) {
            if (query.inputQueryString.includes("${}")) query.compileError = "Query contains an empty template literal (${})";
            else query.compileError = "Query contains invalid template literal (unmatched ${ and }";
            return;
        }
        const references = query.compiledQueryString.match(/\${.*?\}/gi);
        if (references && references.some((d)=>!interpolated_variables.has(d))) references.forEach((reference)=>{
            try {
                const referencedQueryID = reference.replace("${", "").replace("}", "").trim();
                if (!queryIds.has(referencedQueryID)) interpolated_variables.add(reference);
                else if (i >= maxIterations) throw new Error($427c45b502a64670$var$circularRefErrorMsg);
                else {
                    const referencedQuery = queries.find((d)=>d.id === referencedQueryID);
                    if (!query.inline && referencedQuery.inline) throw new Error(`Cannot reference inline query from SQL File. (Referenced ${referencedQueryID})`);
                    const queryString = `(${referencedQuery.compiledQueryString})`;
                    query.compiledQueryString = query.compiledQueryString.replace(reference, queryString);
                    query.compiled = true;
                }
            } catch (_e) {
                // if error is unknown use default circular ref. error
                const e = _e.message === undefined || _e.message === null ? Error($427c45b502a64670$var$circularRefErrorMsg) : _e;
                query.compileError = e.message;
                query.compiledQueryString = e.message;
                // if build is strict and we detect an error, force a failure
                if ($427c45b502a64670$var$strictBuild) throw new Error(e.message);
            }
        });
    });
    return queries;
};
/**
 *
 * @param {string} content File Content
 *
 * @param {string} content File Content
 * @returns {string[]}
 */ const $427c45b502a64670$var$getQueryIds = (content)=>{
    return $427c45b502a64670$var$extractQueries(content).map((q)=>q.id);
};
$427c45b502a64670$exports = {
    extractQueries: $427c45b502a64670$var$extractQueries,
    getQueryIds: $427c45b502a64670$var$getQueryIds
};


var $fe3be1c88e4e6649$require$extractQueries = $427c45b502a64670$exports.extractQueries;

var $fe3be1c88e4e6649$require$highlighter = $71fc60ea3a6cc674$exports.highlighter;

var $iHgkL = parcelRequire("iHgkL");
var $fe3be1c88e4e6649$require$containsFrontmatter = $iHgkL.containsFrontmatter;
// prettier obliterates the formatting of queryDeclarations
// prettier-ignore
/**
 *
 * @param {string} filename
 * @param {boolean} componentDevelopmentMode
 * @param {Record<string, import('./extract-queries/extract-queries.cjs').Query>} duckdbQueries
 * @returns
 */ const $fe3be1c88e4e6649$var$createDefaultProps = function(filename, componentDevelopmentMode, duckdbQueries = {}) {
    const routeH = $fe3be1c88e4e6649$require$getRouteHash(filename);
    let queryDeclarations = "";
    const IS_VALID_QUERY = /^([a-zA-Z_$][a-zA-Z0-9d_$]*)$/;
    const validIds = Object.keys(duckdbQueries).filter((query)=>IS_VALID_QUERY.test(query) && !duckdbQueries[query].compileError);
    if (validIds.length > 0) {
        // prerendered queries: stuff without ${}
        // reactive queries: stuff with ${}
        const IS_REACTIVE_QUERY = /\${.*?}/s;
        const reactiveIds = validIds.filter((id)=>IS_REACTIVE_QUERY.test(duckdbQueries[id].compiledQueryString));
        // input queries: reactive with ${inputs...} in it
        const IS_INPUT_QUERY = /\${\s*inputs\s*\..*?}/s;
        const input_ids = reactiveIds.filter((id)=>IS_INPUT_QUERY.test(duckdbQueries[id].compiledQueryString));
        const errQueries = Object.values(duckdbQueries).filter((q)=>q.compileError).map((q)=>`const ${q.id} = Query.create(\`${q.compiledQueryString.replaceAll("$", "\\$")}\`, undefined, { id: "${q.id}", initialError: new Error(\`${q.compileError.replaceAll("$", "\\$")}\`)})`);
        const queryStoreDeclarations = validIds.map((id)=>{
            return `
				// Update external queries
				if (import.meta?.hot) {
					import.meta.hot.on("evidence:queryChange", ({queryId, content}) => {
						let errors = []
						if (!queryId) errors.push("Malformed event: Missing queryId")
						if (!content) errors.push("Malformed event: Missing content")
						if (errors.length) {
							console.warn("Failed to update query on serverside change!", errors.join("\\n"))
							return
						}

						if (queryId === "${id}") {
							__${id}Text = content
						}
						
					})
				}

				let ${id}InitialStates = { initialData: undefined, initialError: undefined }
				
				// Give initial states for these variables
				/** @type {boolean} */
				let __${id}HasUnresolved = hasUnsetValues\`${duckdbQueries[id].compiledQueryString.replaceAll("`", "\\`")}\`;
				/** @type {string]} */
				let __${id}Text = \`${duckdbQueries[id].compiledQueryString.replaceAll("`", "\\`")}\`


				if (browser) {
					// Data came from SSR
					if (data.${id}) {
						if (data.${id} instanceof Error) {
							${id}InitialStates.initialError = data.${id}
						} else {
							${id}InitialStates.initialData = data.${id}
						}
					}
				} else {
					// On server
					try {
						if (!__${id}HasUnresolved)
							${id}InitialStates.initialData = profile(__db.query, __${id}Text, { query_name: '${id}' })
					} catch (e) {
						console.error(e)
						if (import.meta.env.VITE_BUILD_STRICT) throw e;
						${id}InitialStates.initialError = e
					}
				}
				
				
				/** @type {import("@evidence-dev/sdk/usql").QueryValue} */
				let ${id};

				$: __${id}HasUnresolved = hasUnsetValues\`${duckdbQueries[id].compiledQueryString.replaceAll("`", "\\`")}\`;
				$: __${id}Text = \`${duckdbQueries[id].compiledQueryString.replaceAll("`", "\\`")}\`
				$: __${id}Factory(__${id}Text, { noResolve: __${id}HasUnresolved })

				const __${id}Factory = Query.createReactive(
					{ callback: v => {
						${id} = v
					}, execFn: queryFunc },
					{ id: '${id}', initialData: ${id}InitialStates.initialData, initialError: ${id}InitialStates.initialError }
				)

				// Assign a value for the initial run-through
				// This is split because chicken / egg
				__${id}Factory(__${id}Text, { noResolve: __${id}HasUnresolved })

				// Add queries to global scope inside symbols to ease debugging
				globalThis[Symbol.for("${id}")] = { get value() { return ${id} } }
				
				
			`;
        });
        /* 
			reactivity doesn't happen on the server, so we need to manually subscribe to the inputs store
			and update the queries when the inputs change
		*/ const input_query_stores = `
		if (!browser) {
			onDestroy(inputs_store.subscribe((inputs) => {
				${input_ids.map((id)=>`
				__${id}Factory(\`${duckdbQueries[id].compiledQueryString.replaceAll("`", "\\`")}\`, { noResolve: hasUnsetValues\`${duckdbQueries[id].compiledQueryString.replaceAll("`", "\\`")}\` });
				`).join("\n")}
			}));
		}
		`;
        queryDeclarations += `
		${errQueries.join("\n")}
		${queryStoreDeclarations.join("\n")}
		${input_query_stores}
		
		`;
    }
    let defaultProps = `
        import { page } from '$app/stores';
        import { pageHasQueries, routeHash, toasts } from '@evidence-dev/component-utilities/stores';
        import { setContext, getContext, beforeUpdate, onDestroy, onMount } from 'svelte';
		import { writable, get } from 'svelte/store';
        
        // Functions
        import { fmt } from '@evidence-dev/component-utilities/formatting';

		import { CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY, INPUTS_CONTEXT_KEY } from '@evidence-dev/component-utilities/globalContexts';		
        
        let props;
        export { props as data }; // little hack to make the data name not overlap
        let { data = {}, customFormattingSettings, __db, inputs } = props;
        $: ({ data = {}, customFormattingSettings, __db } = props);

        $routeHash = '${routeH}';

		${""}
		let inputs_store = writable(inputs);
		
		setContext(INPUTS_CONTEXT_KEY, inputs_store);
		onDestroy(inputs_store.subscribe((value) => inputs = value));

        $: pageHasQueries.set(Object.keys(data).length > 0);

        setContext(CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY, {
            getCustomFormats: () => {
                return customFormattingSettings.customFormats || [];
            }
        });

		import { browser, dev } from "$app/environment";
		import { profile } from '@evidence-dev/component-utilities/profile';
		import debounce from 'debounce';
		import { Query, hasUnsetValues } from '@evidence-dev/sdk/usql';
		import { setQueryFunction } from '@evidence-dev/component-utilities/buildQuery';

		if (!browser) {
			onDestroy(() => Query.emptyCache());
		}

		const queryFunc = (query, query_name) => profile(__db.query, query, { query_name });
		setQueryFunction(queryFunc);

		const scoreNotifier = !dev? () => {} : (info) => {
			toasts.add({
				id: Math.random(),
				title: info.id,
				message: \`Results estimated to use \${
					Intl.NumberFormat().format(info.score / (1024 * 1024))
				}mb of memory, performance may be impacted\`,
				status: 'warning'
			}, 5000);
		};

		
		let inflightQueryTimeout
		const onInflightQueriesStart = () => {
			if (!inflightQueryTimeout) inflightQueryTimeout = setTimeout(() => {
				toasts.add({
					id: 'LoadingToast',
					title: '',
					message: 'Loading...',
					status: 'info'
				}, 0); // timeout of 0 means forever
			}, 3000)
		}
		const onInflightQueriesEnd = () => {
			if (inflightQueryTimeout) {
				clearTimeout(inflightQueryTimeout)
				inflightQueryTimeout = null
			}
			else toasts.dismiss('LoadingToast')
		}
		onMount(() => {
			Query.addEventListener('inFlightQueryStart', onInflightQueriesStart)
			Query.addEventListener('inFlightQueryEnd', onInflightQueriesEnd)
			if (Query.QueriesLoading) {
				onInflightQueriesStart()
			}
			return () => {
				Query.removeEventListener('inFlightQueryStart', onInflightQueriesStart)
				Query.removeEventListener('inFlightQueryEnd', onInflightQueriesEnd)
			}
		})

		if (import.meta?.hot) {
            if (typeof import.meta.hot.data.hmrHasRun === 'undefined') import.meta.hot.data.hmrHasRun = false

			import.meta.hot.on("evidence:reset-queries", async (payload) => {
				await $page.data.__db.updateParquetURLs(JSON.stringify(payload.latestManifest), true);
				Query.emptyCache()
				${validIds.map((id)=>`__${id}Factory(__${id}Text, { noResolve: __${id}HasUnresolved });`).join("\n")}
			})
	    }
		
		let params = $page.params;
		$: params = $page.params;
		
		let _mounted = false;
		onMount(() => (_mounted = true));

        ${queryDeclarations}
    `;
    return defaultProps;
};
/**
 * @type {(componentDevelopmentMode: boolean) => import("svelte-preprocess/dist/types").PreprocessorGroup}
 */ const $fe3be1c88e4e6649$var$processQueries = (componentDevelopmentMode)=>{
    /**
	 * @type {Record<string, Record<string, import("./extract-queries/extract-queries.cjs").Query>>}
	 */ const dynamicQueries = {};
    return {
        markup ({ content: content, filename: filename }) {
            if (filename.endsWith(".md")) {
                let fileQueries = $fe3be1c88e4e6649$require$extractQueries(content);
                dynamicQueries[$fe3be1c88e4e6649$require$getRouteHash(filename)] = fileQueries.reduce((acc, q)=>{
                    acc[q.id] = q;
                    return acc;
                }, {});
                const externalQueryViews = "\n\n\n" + fileQueries.filter((q)=>!q.inline).map((q)=>{
                    return $fe3be1c88e4e6649$require$highlighter(q.compiledQueryString, q.id.toLowerCase());
                }).join("\n");
                // Page contains frontmatter
                const frontmatter = $fe3be1c88e4e6649$require$containsFrontmatter(content);
                if (frontmatter) {
                    const contentWithoutFrontmatter = content.substring(frontmatter.length + 6);
                    const output = `---\n${frontmatter}\n---` + externalQueryViews + contentWithoutFrontmatter;
                    return {
                        code: output
                    };
                }
                return {
                    code: externalQueryViews + content
                };
            }
        },
        script ({ content: content, filename: filename, attributes: attributes }) {
            if (filename.endsWith(".md")) {
                if (attributes.context !== "module") {
                    const duckdbQueries = dynamicQueries[$fe3be1c88e4e6649$require$getRouteHash(filename)];
                    return {
                        code: $fe3be1c88e4e6649$var$createDefaultProps(filename, componentDevelopmentMode, duckdbQueries) + content
                    };
                }
            }
        }
    };
};
$fe3be1c88e4e6649$exports = $fe3be1c88e4e6649$var$processQueries;


var $264b206d4d6dc382$exports = {};

const { selectAll: $264b206d4d6dc382$var$selectAll } = $lCTsc$hastutilselect;
$264b206d4d6dc382$exports = (additions)=>{
    const adders = Object.entries(additions).map($264b206d4d6dc382$var$adder);
    return (node)=>adders.forEach((a)=>a(node));
};
const $264b206d4d6dc382$var$adder = ([selector, className])=>{
    const writer = $264b206d4d6dc382$var$write(className);
    return (node)=>$264b206d4d6dc382$var$selectAll(selector, node).forEach(writer);
};
const $264b206d4d6dc382$var$write = (className)=>{
    return ({ properties: properties })=>{
        if (!properties.className) properties.className = className;
        else properties.className += ` ${className}`;
    };
};


var $3e778a0f08ee7a4e$exports = {};
/**
 * @type {(componentDevelopmentMode: boolean) => import("svelte-preprocess/dist/types").PreprocessorGroup}
 */ 
$3e778a0f08ee7a4e$exports = ()=>{
    /**
	 * This ensures that we don't read ./handle-og.svelte more than once
	 * @type {string}
	 */ let handleOgContent;
    return {
        markup: ({ content: content, filename: filename })=>{
            if (typeof filename === "undefined") return;
            if (!filename.endsWith("+page.md")) return;
            if (!handleOgContent) handleOgContent = (parcelRequire("k3QPz"));
            return {
                code: handleOgContent + content
            };
        },
        script: ({ content: content, filename: filename, attributes: attributes })=>{
            if (!filename?.endsWith("+page.md")) return;
            if (attributes.context !== "module") return;
            if (!content.includes("export const metadata =")) // There is no frontmatter, and we want to make sure that it as at least defined.
            // Technically this won't _break_ things, just spam the logs with a vite warning.
            return {
                code: content + ";const metadata = undefined;"
            };
            else // exporting makes tailwind break HMR
            return {
                code: content.replace("export const metadata =", "const metadata =")
            };
        }
    };
};


var $3f6af981160b0a56$exports = {};

/**
 * @param {string} originalString
 * @returns {string}
 */ function $3f6af981160b0a56$var$injectPartials(originalString) {
    const r = /\{@partial\s+"(.*?)"\s*\}/g;
    for (const match of originalString.matchAll(r) ?? []){
        const filename = match[1];
        // There is an error with parcel that prevents the use of the "path" library.
        const content = $lCTsc$fs.readFileSync(`./partials/${filename}`).toString();
        originalString = originalString.replace(match[0], content);
    }
    return originalString;
}
$3f6af981160b0a56$exports = {
    markup: ({ content: content, filename: filename })=>{
        if (typeof filename === "undefined") return;
        if (!filename.endsWith("+page.md")) return;
        return {
            code: $3f6af981160b0a56$var$injectPartials(content)
        };
    },
    injectPartials: $3f6af981160b0a56$var$injectPartials
};




module.exports = function evidencePreprocess(componentDevelopmentMode = false) {
    return [
        $3f6af981160b0a56$exports,
        $ee04455378375116$exports,
        $fe3be1c88e4e6649$exports(componentDevelopmentMode),
        $lCTsc$mdsvex.mdsvex({
            extensions: [
                ".md"
            ],
            smartypants: {
                quotes: false,
                ellipses: true,
                backticks: true,
                dashes: "oldschool"
            },
            highlight: {
                highlighter: $34f536c00cdc0c95$require$highlighter
            },
            rehypePlugins: [
                [
                    $264b206d4d6dc382$exports,
                    {
                        "*": "markdown"
                    }
                ],
                [
                    $lCTsc$rehypeslug
                ],
                [
                    $lCTsc$rehypeautolinkheadings,
                    {
                        behavior: "wrap",
                        properties: {}
                    }
                ]
            ]
        }),
        // Add both script tags to all markdown files, if they are missing
        $3e778a0f08ee7a4e$exports()
    ];
};

module.exports.parseFrontmatter = (parcelRequire("2ftPn")).parseFrontmatter;

module.exports.extractQueries = $427c45b502a64670$exports.extractQueries;
module.exports.getQueryIds = $427c45b502a64670$exports.getQueryIds;
module.exports.injectPartials = $3f6af981160b0a56$exports.injectPartials;


//# sourceMappingURL=index.cjs.map
