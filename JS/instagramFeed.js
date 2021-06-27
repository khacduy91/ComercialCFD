(function (a) {
  function b(a) {
    return a.replace(/[&<>"'`=\/]/g, function (a) {
      return f[a];
    });
  }
  function c(a, b) {
    return "undefined" != typeof a.node.edge_media_to_caption.edges[0] &&
      "undefined" != typeof a.node.edge_media_to_caption.edges[0].node &&
      "undefined" != typeof a.node.edge_media_to_caption.edges[0].node.text &&
      null !== a.node.edge_media_to_caption.edges[0].node.text
      ? a.node.edge_media_to_caption.edges[0].node.text
      : "undefined" != typeof a.node.title &&
        null !== a.node.title &&
        0 != a.node.title.length
        ? a.node.title
        : "undefined" != typeof a.node.accessibility_caption &&
          null !== a.node.accessibility_caption &&
          0 != a.node.accessibility_caption.length
          ? a.node.accessibility_caption
          : (this.is_tag ? b.name : b.username) + " image ";
  }
  var d = {
    host: "https://www.instagram.com/",
    username: "",
    tag: "",
    container: "",
    display_profile: !0,
    display_biography: !0,
    display_gallery: !0,
    display_captions: !1,
    display_igtv: !1,
    callback: null,
    styling: !0,
    items: 8,
    items_per_row: 4,
    margin: 0.5,
    image_size: 640,
    lazy_load: !1,
    cache_time: 360,
    on_error: console.error,
  },
    e = { 150: 0, 240: 1, 320: 2, 480: 3, 640: 4 },
    f = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;",
    };
  a.instagramFeed = function (f) {
    function g(d) {
      if ("string" == typeof d) {
        try {
          d = d.split("window._sharedData = ")[1].split("</script>")[0];
        } catch (a) {
          return void h.on_error(
            "Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26",
            3
          );
        }
        (d = JSON.parse(d.substr(0, d.length - 1))),
          (d = d.entry_data.ProfilePage || d.entry_data.TagPage);
        var f = !1;
        if ("undefined" == typeof d) {
          var g = localStorage.getItem(m);
          if (
            (null !== g && ((d = JSON.parse(g)), (f = !0)),
              h.on_error(
                "Instagram Feed: Your network has been temporary banned by Instagram because of too many requests. Consider increasing your 'cache_time'. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25 and https://github.com/jsanahuja/jquery.instagramFeed/issues/101",
                4
              ),
              !d)
          )
            return;
        }
        !f &&
          0 < h.cache_time &&
          (localStorage.setItem(m, JSON.stringify(d)),
            localStorage.setItem(n, new Date().getTime()));
      }
      if (
        ((d = d[0].graphql.user || d[0].graphql.hashtag), "" != h.container)
      ) {
        var k,
          l = "";
        if (h.styling) {
          var o = (100 - 2 * h.margin * h.items_per_row) / h.items_per_row;
          (k = {
            profile_container: ' style="text-align:center;"',
            profile_image:
              ' style="border-radius:10em;width:15%;max-width:125px;min-width:50px;"',
            profile_name: ' style="font-size:1.2em;"',
            profile_biography: ' style="font-size:1em;"',
            gallery_image: ' style="width:100%;"',
            gallery_image_link:
              ' style="width:' +
              o +
              "%; margin:" +
              h.margin +
              '%;position:relative; display: inline-block; height: 100%;"',
          }),
            h.display_captions &&
            (l +=
              "<style>                            a[data-caption]:hover::after {                                content: attr(data-caption);                                text-align: center;                                font-size: 0.8rem;                                color: black;                                position: absolute;                                left: 0;                                right: 0;                                bottom: 0;                                padding: 1%;                                max-height: 100%;                                overflow-y: auto;                                overflow-x: hidden;                                background-color: hsla(0, 100%, 100%, 0.8);                            }                        </style>");
        } else
          k = {
            profile_container: "",
            profile_image: "",
            profile_name: "",
            profile_biography: "",
            gallery_image: "",
            gallery_image_link: "",
          };
        h.display_profile &&
          ((l += '<div class="instagram_profile"' + k.profile_container + ">"),
            (l +=
              '<img class="instagram_profile_image" src="' +
              d.profile_pic_url +
              '" alt="' +
              (j ? d.name + " tag pic" : d.username + " profile pic") +
              '"' +
              k.profile_image +
              (h.lazy_load ? ' loading="lazy"' : "") +
              " />"),
            (l += j
              ? '<p class="instagram_tag"' +
              k.profile_name +
              '><a href="https://www.instagram.com/explore/tags/' +
              h.tag +
              '" rel="noopener" target="_blank">#' +
              h.tag +
              "</a></p>"
              : "<p class='instagram_username'" +
              k.profile_name +
              ">@" +
              d.full_name +
              " (<a href='https://www.instagram.com/" +
              h.username +
              "' rel='noopener' target='_blank'>@" +
              h.username +
              "</a>)</p>"),
            !j &&
            h.display_biography &&
            (l +=
              "<p class='instagram_biography'" +
              k.profile_biography +
              ">" +
              d.biography +
              "</p>"),
            (l += "</div>"));
        var p =
          "undefined" == typeof e[h.image_size] ? e[640] : e[h.image_size];
        if (h.display_gallery)
          if ("undefined" != typeof d.is_private && !0 === d.is_private)
            l +=
              '<p class="instagram_private"><strong>This profile is private</strong></p>';
          else {
            var q = (d.edge_owner_to_timeline_media || d.edge_hashtag_to_media)
              .edges;
            (x = q.length > h.items ? h.items : q.length),
              (l += "<div class='instagram_gallery'>");
            for (var r = 0; r < x; r++) {
              var s,
                t,
                u = "https://www.instagram.com/p/" + q[r].node.shortcode,
                v = b(c(q[r], d));
              switch (q[r].node.__typename) {
                case "GraphSidecar":
                  (t = "sidecar"), (s = q[r].node.thumbnail_resources[p].src);
                  break;
                case "GraphVideo":
                  (t = "video"), (s = q[r].node.thumbnail_src);
                  break;
                default:
                  (t = "image"), (s = q[r].node.thumbnail_resources[p].src);
              }
              (l +=
                '<a href="' +
                u +
                '"' +
                (h.display_captions ? ' data-caption="' + v + '"' : "") +
                ' class="instagram-' +
                t +
                '" rel="noopener" target="_blank"' +
                k.gallery_image_link +
                ">"),
                (l +=
                  "<img" +
                  (h.lazy_load ? ' loading="lazy"' : "") +
                  ' src="' +
                  s +
                  '" alt="' +
                  v +
                  '"' +
                  k.gallery_image +
                  " />"),
                (l += "</a>");
            }
            l += "</div>";
          }
        if (
          h.display_igtv &&
          "undefined" != typeof d.edge_felix_video_timeline
        ) {
          var w = d.edge_felix_video_timeline.edges,
            x = w.length > h.items ? h.items : w.length;
          if (0 < w.length) {
            l += '<div class="instagram_igtv">';
            for (var r = 0; r < x; r++) {
              var u = "https://www.instagram.com/p/" + w[r].node.shortcode,
                v = b(c(w[r], d));
              (l +=
                '<a href="' +
                u +
                '"' +
                (h.display_captions ? ' data-caption="' + v + '"' : "") +
                ' rel="noopener" target="_blank"' +
                k.gallery_image_link +
                ">"),
                (l +=
                  "<img" +
                  (h.lazy_load ? ' loading="lazy"' : "") +
                  ' src="' +
                  w[r].node.thumbnail_src +
                  '" alt="' +
                  v +
                  '"' +
                  k.gallery_image +
                  " />"),
                (l += "</a>");
            }
            l += "</div>";
          }
        }
        a(h.container).html(l);
      }
      null != h.callback && h.callback(d);
    }
    var h = a.fn.extend({}, d, f);
    if ("" == h.username && "" == h.tag)
      return (
        h.on_error("Instagram Feed: Error, no username nor tag defined.", 1), !1
      );
    if (
      ("undefined" != typeof h.get_data &&
        console.warn(
          "Instagram Feed: options.get_data is deprecated, options.callback is always called if defined"
        ),
        null == h.callback && "" == h.container)
    )
      return (
        h.on_error(
          "Instagram Feed: Error, neither container found nor callback defined.",
          2
        ),
        !1
      );
    var j = "" == h.username,
      k = j
        ? h.host + "explore/tags/" + h.tag + "/"
        : h.host + h.username + "/",
      l = null,
      m = "instagramFeed_" + (j ? "t_" + h.tag : "u_" + h.username),
      n = m + "_cached";
    if (0 < h.cache_time) {
      var o = localStorage.getItem(n);
      if (
        null !== o &&
        parseInt(o) + 60000 * h.cache_time > new Date().getTime()
      ) {
        var p = localStorage.getItem(m);
        null !== p && (l = JSON.parse(p));
      }
    }
    return (
      null === l
        ? a.get(k, g).fail(function (a) {
          h.on_error(
            "Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: " +
            a.status,
            5
          );
        })
        : g(l),
      !0
    );
  };
})(jQuery);
