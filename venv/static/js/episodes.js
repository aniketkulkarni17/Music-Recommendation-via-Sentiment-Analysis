/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Favs
5. Init SVG
6. Init Isotope
7. Init Single Player
8. Init Gallery


******************************/

// import { visited } from "./songs.js";

$(document).ready(function () {
  "use strict";

  /* 

	1. Vars and Inits

	*/

  var ctrl = new ScrollMagic.Controller();

  setHeader();
  initMenu();
  initFavs();
  initSvg();
  initIsotope();
  initSinglePlayer();
  initGallery();

  $(window).on("resize", function () {
    setHeader();

    setTimeout(function () {
      $(window).trigger("resize.px.parallax");
    }, 375);
  });

  $(document).on("scroll", function () {
    setHeader();
  });

  /* 

	2. Set Header

	*/

  function getSongs() {
    const s1 = new Songs("Gravity", "EDEN", "../static/files/gravity.mp3");
    const s2 = new Songs("Stay", "NoIdea", "../static/files/stay.mp3");
    const s3 = new Songs(
      "Straigt Jacket",
      "Someone",
      "../static/files/straigthjacket.mp3"
    );
    const s4 = new Songs("wakeup", "EDEN", "../static/files/wakeup.mp3");
    const s5 = new Songs("Emily", "LOL", "../static/files/emily.mp3");
    const s6 = new Songs(
      "Bensound",
      "XD",
      "../static/files/bensound-betterdays.mp3"
    );
    const s7 = new Songs(
      "Waiting for Love",
      "Avicii",
      "../static/files/waitingforlove.mp3"
    );

    const songs = [];
    songs.push(s1);
    songs.push(s2);
    songs.push(s3);
    songs.push(s4);
    songs.push(s5);
    songs.push(s6);
    songs.push(s7);

    const visited = [];

    while (visited.length != 6) {
      for (let i = 0; i < songs.length; i++) {
        let number = Math.floor(Math.random() * songs.length);
        // console.log(number);
        if (visited.includes(songs[number])) continue;
        else visited.push(songs[number]);
      }
    }
    return visited;
  }

  function setHeader() {
    var header = $(".header");

    if ($(window).scrollTop() > 91) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  }

  /* 

	3. Init Menu

	*/

  function initMenu() {
    if ($(".menu").length) {
      var menu = $(".menu");
      var hamburger = $(".hamburger");
      var close = $(".menu_close");

      hamburger.on("click", function () {
        menu.toggleClass("active");
      });

      close.on("click", function () {
        menu.toggleClass("active");
      });
    }
  }

  /* 

	4. Init Favs

	*/

  function initFavs() {
    if ($(".show_fav_icon").length) {
      var icons = $(".show_fav_icon");
      icons.each(function () {
        var icon = $(this);
        icon.on("click", function () {
          if (icon.hasClass("active")) {
            icon.removeClass("active");
          } else {
            icon.addClass("active");
          }
        });
      });
    }
  }

  /* 

	5. Init SVG

	*/

  function initSvg() {
    if ($("img.svg").length) {
      jQuery("img.svg").each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");

        jQuery.get(
          imgURL,
          function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find("svg");

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== "undefined") {
              $svg = $svg.attr("id", imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr("xmlns:a");

            // Replace image with new SVG
            $img.replaceWith($svg);
          },
          "xml"
        );
      });
    }
  }

  /* 

	6. Init Isotope

	*/

  function initIsotope() {
    if ($(".episode").length) {
      var grid = $(".episodes_container").isotope({
        itemSelector: ".episode",
        percentPosition: true,
        masonry: {
          horizontalOrder: true,
        },
      });

      // Filtering
      $(".item_filter_btn").on("click", function () {
        var filterValue = $(this).attr("data-filter");
        grid.isotope({ filter: filterValue });
      });
    }
  }

  /* 

	7. Init Single Player

	*/
  // HAPPY
  function initSinglePlayer() {
    if ($(".jp-jplayer").length) {
      $("#jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Happy/blackbear TOO CLOSE.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_1",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Happy/Blue World - Mac Miller.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_2",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_3").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Happy/Blueface Thotiana Remix ft YG.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_3",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_4").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Happy/BOY - Charlie Puth.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_4",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_5").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Happy/Chris Brown Undrunk Audio ft Too hort E40.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_5",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_6").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Happy/gnash that one song ft goody grace.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_6",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_7").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Happy/Good News - Mac Miller.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_7",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_8").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Happy/Happy People Happy Faces - Akcent.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_8",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      // SAD Songs

      $("#jplayer_9").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/2009 - Mac Miller.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_9",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_10").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/Danny Darling - Danny Seth.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_10",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_11").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/Gravity - John Mayor.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_11",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_12").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/Heartbreak -Hoodie Allen ft. Goody Grace.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_12",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_13").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/straightjacket.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_13",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_14").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/LA Girls - Charlie Puth.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_14",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_15").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/Remember - Mac Miller.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_15",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_16").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/Small Worlds - Mac Miller.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_16",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      // Rainy
      $("#jplayer_17").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/rainy/rain.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_17",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_18").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/rainy/cloyster.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_18",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_19").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/rainy/everything.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_19",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_20").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/rainy/rainydays.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_20",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_21").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/rainy/sundown.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_21",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_22").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/rainy/botanicals.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_22",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_23").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/rainy/untitled.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_23",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_24").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/rainy/yeah right.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_24",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      // Curated 2

      $("#jplayer_25").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/c2/times like these.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_25",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_26").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/c2/eternal.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_26",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_27").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/c2/cassette.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_27",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_28").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/c2/sunset-lover.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_28",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_29").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/c2/crash.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_29",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_30").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/c2/always.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_30",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_31").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/gravity.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_31",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_32").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/wakeup.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_32",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      // Sad 2
      $("#jplayer_100").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/and.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_100",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });

      $("#jplayer_101").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Better Days",
            artist: "Bensound",
            mp3: "../static/files/Sad/solong.mp3",
          });
        },
        play: function () {
          // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "../static/plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_101",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: "html",
        preload: "metadata",
        volume: 0.2,
        muted: false,
        backgroundColor: "#000000",
        errorAlerts: false,
        warningAlerts: false,
      });
    }
  }

  /* 

	8. Init Gallery

	*/

  function initGallery() {
    if ($(".gallery_item").length) {
      $(".colorbox").colorbox({
        rel: "colorbox",
        photo: true,
        maxWidth: "95%",
        maxHeight: "95%",
      });
    }
  }
});
