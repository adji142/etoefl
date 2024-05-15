/* eslint-disable */
// This file has backwards compatibility purposes, eslint
// is disabled.

import Core from './core.src';
import Parser from './parser';
import Listeners from './listeners';

var backwardsLib;
export default backwardsLib;

// Backward compatibility library for public methods previous to version 7.6.0
/**
 * Add a new callback to a MathType listener.
 * @param {Object} jsonListener - an Object containing listener name and a callback.
 * @tutorial tutorial
 * @deprecated Since version 7.6.0. Use Listeners.newListener instead.
 * @ignore
 */
function wrs_addPluginListener(jsonListener) {
  // TODO: Add documentation URL + doc example.
  console.warn('Deprecated method');
  var eventName;
  eventName = Object.keys(jsonListener)[0];
  var callback;
  callback = jsonListener[eventName];
  var pluginListener = Listeners.newListener(eventName, callback);
  Core.addGlobalListener(pluginListener);
}

// Expose the method globally.
window.wrs_addPluginListener = wrs_addPluginListener;

/**
 * Parses initial HTML code. If the HTML contains data generated by WIRIS, this data would be converted as following:
 * <pre>
 * MathML code: Image containing the corresponding MathML formulas.
 * MathML code with LaTeX annotation : LaTeX.
 * </pre>
 * @param {string} code - HTML code with data generated by MathType.
 * @param {string} language - language for the formula.
 * @return {string} HTML code with the WIRIS data converted into LaTeX and images.
 * @deprecated Since version 7.6.0. Use Parser.initParse instead.
 * @ignore
 */
function wrs_initParse(code, language) {
  console.warn('Deprecated method. Use Parser.endParse instead.');
  return Parser.initParse(code, language);
}

// Expose the method globally.
window.wrs_initParse = wrs_initParse;

/**
 * Parses end HTML code. The end HTML code is HTML code with embedded images or LaTeX formulas created with MathType. <br>
 * By default this method converts the formula images and LaTeX strings in MathML. <br>
 * If image mode is enabled the images will not be converted into MathML. For further information see {@link https://docs.wiris.com/mathtype/en/mathtype-integrations/mathtype-web-interface-features/full-mathml-mode---wirisplugins-js.html}.
 * @param {string} code - string to be parsed.
 * @param {Object} wirisProperties - extra attributes for the formula.
 * @param {string} language - language for the formula.
 * @return {string}
 * @deprecated Since version 7.6.0. Use Parser.initParse instead.
 * @ignore
 */
function wrs_endParse(code, wirisProperties, language) {
  console.warn('Deprecated method. Use Parser.endParse instead.')
  return Parser.endParse(code, wirisProperties, language);
}

// Expose the method globally.
window.wrs_endParse = wrs_endParse;