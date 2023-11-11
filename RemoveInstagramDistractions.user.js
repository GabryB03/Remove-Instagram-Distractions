// ==UserScript==
// @name         Instagram Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove all the Instagram distractions to get concentrated on what's really important
// @author       GabryB03
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @updateURL    https://github.com/GabryB03/Remove-Instagram-Distractions/raw/main/RemoveInstagramDistractions.user.js
// @downloadURL  https://github.com/GabryB03/Remove-Instagram-Distractions/raw/main/RemoveInstagramDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';

    function asyncLoop()
    {
        try
        {
            if (window.location.href == 'https://www.instagram.com/')
            {
                var feedElement = document.querySelector("main[role='main']");

                if (feedElement != null && feedElement != undefined)
                {
                    feedElement.remove();
                }
            }

            {
                var distractingElements = ["/explore/", "/reels/", "https://www.threads.net/"];

                for (var i = 0; i < distractingElements.length; i++)
                {
                    var distractingElement = document.querySelector("a[href='" + distractingElements[i] + "']");

                    if (distractingElement != null && distractingElement != undefined)
                    {
                        distractingElement.remove();
                    }
                }
            }

            {
                var footerElement = document.querySelector("footer[role='contentinfo']");

                if (footerElement != null && footerElement != undefined)
                {
                    footerElement.remove();
                }
            }
        }
        catch (e)
        {

        }

        setTimeout(async function()
        {
            await asyncLoop();
        },
        500);
    }

    asyncLoop();
})();