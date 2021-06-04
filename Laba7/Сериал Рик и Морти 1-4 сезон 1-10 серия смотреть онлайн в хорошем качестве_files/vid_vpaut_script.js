function vid_in_domen_array(txt, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (txt == arr[i]) return true;
    }
    return false;
}

function getCoords(c) {
    c = c.getBoundingClientRect();
    let a = document.body, b = document.documentElement;
    return {
        top: c.top + (window.pageYOffset || b.scrollTop || a.scrollTop) - (b.clientTop || a.clientTop || 0),
        left: c.left + (window.pageXOffset || b.scrollLeft || a.scrollLeft) - (b.clientLeft || a.clientLeft || 0)
    };
}


function Vid_vpaut_listener(e) {
    if (!vid_in_domen_array(e.origin, array_domens)) {
        return;
    }
    if (e.data == 'surok_check_reklamend_mob' || e.data == 'surok_no_reklam_mob') {
        try {
            let frame = document.getElementById('tmp_div_vid_vpaut');
            if (!mobileStatic) {
                if (!hadMobAdv) {
                    frame.style.height = '30px';
                    frame.style.opacity = 0.05;
                } else {
                    frame.style.height = '23%';
                    rame.style.opacity = 1;
                }
            }
            hadMobAdv = 0;
            if (ind < adlen) {
                //let adv_vpaut_id = document.getElementById('vid_vpaut_kod_frame');
                //adv_vpaut_id.contentWindow.location.replace(giveAdvHref(adv_reklamn[ind]));
                let frameParent = document.getElementById('tmp_div_vid_vpaut')
                frameParent.removeChild(document.getElementById('vid_vpaut_kod_frame'));
                let href_new = giveAdvHref(adv_reklamn[ind]);
                setTimeout(function () {
                    frameParent.appendChild(createFrame(href_new));
                }, 550);
                ind++;
            } else {
                if (overload && endless_mob > 0) {
                    ind = 0;
                    endless_mob--;
                    //let adv_vpaut_id = document.getElementById('vid_vpaut_kod_frame');
                    //adv_vpaut_id.contentWindow.location.replace(giveAdvHref(adv_reklamn[ind]));
                    let frameParent = document.getElementById('tmp_div_vid_vpaut')
                    frameParent.removeChild(document.getElementById('vid_vpaut_kod_frame'));
                    let href_new = giveAdvHref(adv_reklamn[ind]);
                    setTimeout(function () {
                        frameParent.appendChild(createFrame(href_new));
                    }, 550);
                    ind++;
                } else {
                    let frame = document.getElementById('vid_vpaut_div');
                    let frametm = document.getElementById('tmp_div_vid_vpaut');
                    let vpautPl = (frame.hasAttribute('vid_vpaut_pl') && parseInt(frame.getAttribute('vid_vpaut_pl')) > 0) ? parseInt(frame.getAttribute('vid_vpaut_pl')) : 0;
                    if (!vpautPl) {
                        console.info('Vid vpaut no pl');
                        return;
                    }
                }
            }

        } catch (e) {
        }
    }
    if (e.data == 'connection_established_vid_vpaut') {
        isEstablishedConnectionVpaut();
    }
    if (e.data == 'surok_no_yandex_adv') {
        if (isYandex && !checkShowMobile) {
            let frame = document.getElementById('tmp_div_vid_vpaut');
            if (!mobileStatic) {
                frame.style.height = '30px';
                frame.style.opacity = 0.1;
            }
            isYandex = 0;
        }
    }
    if (e.data == 'surok_check_reklamend' || e.data == 'surok_no_reklam') {
        overloadHref();
        overloadDomenByTime();
    }
    if (e.data == 'surok_complete_adv_mob') {
        try {
            if (!hadMobAdv) {
                let frame = document.getElementById('tmp_div_vid_vpaut');
                if (!mobileStatic) {
                    //frame.style.height='2px';
                    frame.style.height = '30px';
                    frame.style.opacity = 0.1;
                }
            }
            window.postMessage("complete_rekl", "*")
        } catch (e) {
        }
    }
    if (e.data == 'surok_complete_adv') {
        try {
            window.postMessage("complete_rekl", "*")
        } catch (e) {
        }
        try {
            CreateKrestikRekl(false);
        } catch (e) {
        }
    }
    if (e.data == 'extern_end') {
        let frame = document.getElementById('vid_vpaut_div');
        frame.removeChild(document.getElementById('tmp_div_vid_vpaut'));
        frame.style.width = 0 + 'px';
        frame.style.height = 0 + 'px';
        is_open_vid_vpaut = 0;
        try {
            window.postMessage("end_rekl", "*")
        } catch (e) {
        }
        console.info('Vid vpaut end adverts');
    }
    if (e.data == 'surok_vast_start_yandex') {
        isYandex = 1;
        let frame = document.getElementById('tmp_div_vid_vpaut');
        if (!mobileStatic) {
            frame.style.height = '23%';
            frame.style.opacity = 1;
        }
    }
    if (e.data == 'surok_vast_start') {
        let frame = document.getElementById('tmp_div_vid_vpaut');
        if (!mobileStatic) {
            frame.style.height = '23%';
            frame.style.opacity = 1;
        }
    }
    if (e.data == 'surok_start_reklam_mob') {
        checkShowMobile = 1;
        closePrerollBanner();
        let frame = document.getElementById('tmp_div_vid_vpaut');
        if (!mobileStatic) {
            frame.style.height = '23%';
            frame.style.opacity = 1;
        }
        if (!checkMobAdv) {
            checkMobAdv++;
            if (!mobileStatic) ShowKrestic(frame);
        }
        try {
            window.postMessage("start_rekl", "*")
        } catch (e) {
        }
    }
    if (e.data == 'surok_start_reklam') {
        try {
            window.postMessage("start_rekl", "*")
        } catch (e) {
        }
        try {
            CreateKrestikRekl(true);
        } catch (e) {
        }
        hadMobAdv = 1;
        if (scroll_to_player && !flyroll_player && !first_scroll) {
            try {
                let a = getCoords(document.getElementById("vid_vpaut_kod_frame"));
                window.scrollTo(a.left, a.top);
                first_scroll++;
            } catch (e) {
            }
        }
    }
    if (e.data == 'surok_vast_halo') {
        adv_overs = 1;
        Check_Vid_Vpaut_Visibility();
    }
    if (e.data == 'surok_vast_nothalo') {
        adv_overs = 0;
        Check_Vid_Vpaut_Visibility();
    }
}

function createFrame(href){
    let iframeAdElem = document.createElement("iframe");
    iframeAdElem.id = 'vid_vpaut_kod_frame';
    iframeAdElem.width = '100%';
    iframeAdElem.height = '100%';
    iframeAdElem.frameBorder = 0;
    iframeAdElem.style.zIndex = 1001;
    iframeAdElem.style.border = '0';
    iframeAdElem.src = href;
    return iframeAdElem;
}

function overloadHref()
{
    try {
        if (ind < adlen) {
            domCross++;
            let frameParent = document.getElementById('tmp_div_vid_vpaut')
            frameParent.removeChild(document.getElementById('vid_vpaut_kod_frame'));
            //let adv_vpaut_id = document.getElementById('vid_vpaut_kod_frame');
            let href_new = giveAdvHref(adv_reklamn[ind]);
            setTimeout(function () {
                frameParent.appendChild(createFrame(href_new));
            }, 550);
            ind++;
            adv_overs = 0;
            Check_Vid_Vpaut_Visibility();
        } else {
            if (overload && endless > 0) {
                domCross = 0;
                ind = 0;
                console.info('This endless round = '+endless);
                endless--;
                let frameParent = document.getElementById('tmp_div_vid_vpaut')
                frameParent.removeChild(document.getElementById('vid_vpaut_kod_frame'));
                //let adv_vpaut_id = document.getElementById('vid_vpaut_kod_frame');
                let href_new = giveAdvHref(adv_reklamn[ind]);
                setTimeout(function () {
                    frameParent.appendChild(createFrame(href_new));
                }, 550);
                ind++;
                adv_overs = 0;
                Check_Vid_Vpaut_Visibility();
            } else {
                let frame = document.getElementById('vid_vpaut_div');
                frame.removeChild(document.getElementById('tmp_div_vid_vpaut'));
                frame.style.width = 0 + 'px';
                frame.style.height = 0 + 'px';
                is_open_vid_vpaut = 0;
                try {
                    window.postMessage("end_rekl", "*")
                } catch (e) {
                }
                console.info('Vid vpaut end adverts');
            }
        }
    } catch (e) {
    }
}

function overloadDomenByTime() {
    try {
        clearTimeout(overloadDomen);
    } catch (e) {
    }
    overloadDomen = null;
    overloadDomen = setTimeout(function () {
        overloadHref();
    }, 440000);
}

function isEstablishedConnectionVpaut(){
    try {
        clearTimeout(isEstablishedConnectionVpautTimeout);
    } catch (e) {
    }
    isEstablishedConnectionVpautTimeout = null;
    isEstablishedConnectionVpautTimeout = setTimeout(function () {
        overloadHref();
    }, 20000);
}

function clickMobKrestik() {
    if (!clickerMobad) return false;
    let frame = document.getElementById('vid_vpaut_div');
    let frametm = document.getElementById('tmp_div_vid_vpaut');
    frame.removeChild(frametm);
    frame.style.width = 0 + 'px';
    frame.style.height = 0 + 'px';
    is_open_vid_vpaut = 0;
    checkMobAdv = 0;
    try {
        window.postMessage("end_rekl", "*")
    } catch (e) {
    }
    console.info('Vid vpaut end adverts');
    if (!watchMobad) {
        let longWatched = setTimeout(function () {
            watchMobad = 1;
            Vid_vpaut_onload();
            clearTimeout(longWatched);
            longWatched = null;
        }, 180000);
    }
}

function clickonKrestikAdEl() {
    if (clickerad) {
        try {
            if (!closed_krestic) {
                let el = document.getElementById('tmp_div_vid_vpaut');
                el.style.position = 'relative';
                el.style.top = 0;
                el.style.left = 0;
                if (measure_wl == 'px') el.style.width = width_el + 'px';
                else if (measure_wl == '%') el.style.width = width_el + '%';
                if (measure_hl == 'px') el.style.height = height_el + 'px';
                else if (measure_hl == '%') el.style.height = height_el + '%';
                change_krestic = 0;
                document.getElementById('tmp_div_vid_vpaut').removeChild(document.getElementById('krestik_vid_vpaut'));
            } else {
                let frame = document.getElementById('vid_vpaut_div');
                frame.removeChild(document.getElementById('tmp_div_vid_vpaut'));
                frame.style.width = 0 + 'px';
                frame.style.height = 0 + 'px';
                is_open_vid_vpaut = 0;
                change_krestic = 0;
                try {
                    window.postMessage("end_rekl", "*")
                } catch (e) {
                }
                console.info('Vid end click');
            }
        } catch (e) {
        }
    }
}

function giveAdvHref(href) {
    let full_href = href;
    if(!full_href || full_href === null || full_href === undefined) {
        overloadHref();
    }else{
        if (full_href.substr(-4, 4) == '?pl=') {
            if (flyroll_player) {
                full_href = full_href + '' + vpaut_pl + '&ra=1';
            } else {
                full_href = full_href + '' + vpaut_pl;
            }
        }
        if (otsl_log) {
            if (full_href.indexOf('?') === -1) {
                full_href += '?otsl_log=1';
            } else {
                full_href += '&otsl_log=1';
            }
        } else {
            if (otsl_pl) {
                if (full_href.indexOf('?') === -1) {
                    full_href += '?otsl_pl=1';
                } else {
                    full_href += '&otsl_pl=1';
                }
            }
        }
        return full_href;
    }
}

function CreateKrestikRekl(flag_oc) {
    //if (array_domens[domCross] === 'https://avrg.i-trailer.ru') return false;
    let elem_div = document.getElementById("tmp_div_vid_vpaut");
    if (flag_oc) {
        let krestikAdElem = document.createElement("img");
        krestikAdElem.id = 'krestik_vid_vpaut_rekl';
        krestikAdElem.src = "data:image/png;base64,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";
        krestikAdElem.style = "position:absolute;top:35px !important;left:12px !important;border:1px !important;opacity:0.8;pointer-events: none;z-index:1100;cursor:pointer;height:25px !important;width:25px !important;margin:0 !important;padding:0 !important;";
        elem_div.appendChild(krestikAdElem);
    } else {
        elem_div.removeChild(document.getElementById('krestik_vid_vpaut_rekl'));
    }

}

function BannerKrestik(el) {
    let krestikAdElem = document.createElement("img");
    krestikAdElem.id = 'krestik_banner_mobvpaut';
    krestikAdElem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTI2RjJCQTZBNjEzMTFFODgxQkI4QjRDREE4MDUyNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTI2RjJCQTdBNjEzMTFFODgxQkI4QjRDREE4MDUyNTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMjZGMkJBNEE2MTMxMUU4ODFCQjhCNENEQTgwNTI1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMjZGMkJBNUE2MTMxMUU4ODFCQjhCNENEQTgwNTI1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuznWR8AAAGiSURBVHjazFZNa8JAEJ0svXs0F8VzqZBQe/Qu/hMvigd/gD0UAjnrbypN9FaKHiMk3kTaY7Ldt+3K2jZLYzfQgclOZob3ZpL9YpxzEvogNON2JfvEJRDc83pl7ohHTkQsDMPHxWJxI5n/KI7j0Gg0ep7NZnfiNQeJRGWMkQ0CJcDL8/zDVs52u/1GFqXVap3wmN6iTdHxmClxPB5z3/eNYIhPJhPzd1ZToNPpvOJV6XQ6LeA/HA682WxyPaYUfsQhyNdjwFPYpZ1EUeRkWUaNRoPiOCbXdc/igkD6EUce8it3oird7XYyjlF1hDFJkpNfFPCtS70TIwkUAIpos9nwwWAgRxNBZRJV+Wq1OlvG6/W69F9dRALtdrtnJJ7ncVP+/+tE/8nb7ZYPh0M5QuAvI/o1Se2zq9/v8zRNS4H0ApCH/MqLsdfrAZiOxyNsueB02e/30o848mBftBjF3lWIvck4ixAXe1dhZQpX1R8/l80D6ytebScjzpOiKKR9JRQWC4LgablcXls841+EeYszHtXP676tkHbvSi2Dp+re9S7AADo/E1CTWgh/AAAAAElFTkSuQmCC";
    krestikAdElem.style = "position:absolute;top:0px !important;right:6px !important;border:1px !important;opacity:0.8;z-index:1100;cursor:pointer;height:25px !important;width:25px !important;margin:0 !important;padding:0 !important;";//pointer-events:none;
    el.appendChild(krestikAdElem);
    if (krestikAdElem.addEventListener) {
        krestikAdElem.addEventListener("click", clickMobBannerKrestik);
    } else {
        krestikAdElem.attachEvent("onclick", clickMobBannerKrestik);
    }
}

function closePrerollBanner() {
    let tmp_div_mob_banner = document.getElementById("tmp_div_mob_banner");
    let el = document.getElementById('vid_vpaut_div');
    if (tmp_div_mob_banner === null || el === null) return false;
    el.removeChild(tmp_div_mob_banner);
}

function ShowKrestic(el) {
    try {
        clearTimeout(TimerShow);
        TimerShow = null;
    } catch (e) {
    }
    let TimerShow = setTimeout(function () {
        let krestikAdElem = document.createElement("img");
        krestikAdElem.id = 'krestik_vid_vpaut';
        krestikAdElem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iOTNCRDY1NzdBOUM5Qzg1MDYzRUI1QTRDNTEyNzAzQjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTY2MzI2RDFDQTVEMTFFQTg2NUNCQTE0NkZBMDI3RTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTY2MzI2RDBDQTVEMTFFQTg2NUNCQTE0NkZBMDI3RTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkZGRjkyOEY1RENBRUExMUFDQkFCMzYxNzA1REE5Q0EiIHN0UmVmOmRvY3VtZW50SUQ9IjkzQkQ2NTc3QTlDOUM4NTA2M0VCNUE0QzUxMjcwM0I4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qTiwFwAABEhJREFUeNqUVllIlFEUPuOM+5pL7oKQjLkEEiNKKfpgD64oWFFCD2q4USjUQz5lvhT00KMgIuI+tDz7IIhIZmnZApr0FK6jOO7j3vlO/sOv/k524cy9c+695zv7f3XV1dWkHoeHh3RiXGPKYrrKlMh0gWmJ6TvTJ51O18d3hsnBMDjYK2Z6xGTS2PNhimbKY4CnPL9nesH0TkuQkwbPjan3iEx0vpHK9JapQ0vxkyBBer3+69raWvH09DRZLBZxn5OTk6Zk8LG/sLBAOM/37vD9L7zldxaIgS99WFxcjAkPD6eSkhJKT08XoK2trVNA+L+5uUl8njIzM+V8aGgoLS0txTMQYqQ7FRPW6I3Vao2OiIig+vp68vLyEn5YWBi1tLRQSEgIubu708HBgQBsbGyIAuXl5ZSfny9ns7KyqKGhAcBGvt/NrFuiEMxluoEgLi8vi/YAgPYQWFRUJIJmZ2eFZzAYBAAuqqysFID9/X3Z8/X1pbS0NIIcHjeZ0tWWvMKPh4cHTU1N/Y2+m5sIw1xQUCC85uZm8vb2pvX1daqqqqLs7Gza29sjm81mtxz3IUclN0lvMpmQ/08UkImJCQlmQkKCaK3EIy4uTtw1MDBANTU1lJOTYwfAPa4Xam9vp/7+fgoKClJAQpheA6SGF2ng4KCLiwsNDg7KDCAOoggCUHx8PKWmplJKSsoxAOx1dXUJCGKHO6oxB5DHvLikcJydneUigFxdXY8BQQloubOzQ9vb23aA7u5uAUDSQLkTXcMKkOe88Fa3FQDBNUNDQyLEaDSK6xBgWKCcwbqnp4c6OzslCxE/jbbkjuS/eJKLrIKWyJampiYJJjRUD/xH/LDv7+8v53FPY0QCZEGrkrl6aXV1lerq6ig2Nlbcox74jxjV1tZKyiLjzugMv8H9plXJqIOKigrKy8sTPlwDl8GNmPEfMSosLJQ6mp+f1+wMPD6DM6oGwMG5ublTdQDhiMP4+LjM8D+swT4KsqysjGZmZuyZqAZB4Fd4cV+JBUwvLS2l3NzcU2mKADc2NkrhqbMOs1JHo6OjMsPKo/EAILO8uM0UiF6UkZEhzQ6ZpAZQ0hRNcHh4WKxRFyxmAKEbT05OkqenJwDQkZ8pdj1UghkZGSmM3d1d0VgptLa2NkJ39vPzE6DW1lYym82yD4GoHYyoqChRTpGLlNYnJyfDtF/4vLLZRgSQrSMfHx851dHRIYRCQ3HCpUodoWDhqsTERLEEyQJr4So+28vzS6x1CLDS9vnCT/4eRAcHB1NSUpIkwMjIiNQB6kJdB7AAliOGaDPoBGNjY/J94fOT7O7LDCCVqUO7VgYz8WUcWllZiUGdQHBAQIBoplHJdj4Ew72wnukHA1xnvlXzIcEbFj5whWPRxlTs4AVzjB8YGKiwOvn+Pebv/eshYTv64IA+nvMhgddKIdNd1O3/PInMR+Tw3cXUx+Tw3fVHgAEAQsIksG+5cF4AAAAASUVORK5CYII=";
        krestikAdElem.style = "position:absolute;top:35px !important;right:12px !important;pointer-events:none;border:1px !important;opacity:1;z-index:1100;cursor:pointer;height:25px !important;width:25px !important;margin:0 !important;padding:0 !important;";
        el.appendChild(krestikAdElem);
        if (krestikAdElem.addEventListener) {
            krestikAdElem.addEventListener("click", clickMobKrestik);
        } else {
            krestikAdElem.attachEvent("onclick", clickMobKrestik);
        }
        let timerEveentListMobClose = setTimeout(function () {
            krestikAdElem.style.pointerEvents = 'visible';
            clickerMobad = 1;
            clearTimeout(timerEveentListMobClose);
            timerEveentListMobClose = null;
        }, 15000);
        clearTimeout(TimerShow);
        TimerShow = null;
    }, 15000);
}

function CreateKrestikVidVpaut(el) {
    let krestikAdElem = document.createElement("img");
    krestikAdElem.id = 'krestik_vid_vpaut';
    krestikAdElem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTI2RjJCQTZBNjEzMTFFODgxQkI4QjRDREE4MDUyNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTI2RjJCQTdBNjEzMTFFODgxQkI4QjRDREE4MDUyNTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMjZGMkJBNEE2MTMxMUU4ODFCQjhCNENEQTgwNTI1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMjZGMkJBNUE2MTMxMUU4ODFCQjhCNENEQTgwNTI1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuznWR8AAAGiSURBVHjazFZNa8JAEJ0svXs0F8VzqZBQe/Qu/hMvigd/gD0UAjnrbypN9FaKHiMk3kTaY7Ldt+3K2jZLYzfQgclOZob3ZpL9YpxzEvogNON2JfvEJRDc83pl7ohHTkQsDMPHxWJxI5n/KI7j0Gg0ep7NZnfiNQeJRGWMkQ0CJcDL8/zDVs52u/1GFqXVap3wmN6iTdHxmClxPB5z3/eNYIhPJhPzd1ZToNPpvOJV6XQ6LeA/HA682WxyPaYUfsQhyNdjwFPYpZ1EUeRkWUaNRoPiOCbXdc/igkD6EUce8it3oird7XYyjlF1hDFJkpNfFPCtS70TIwkUAIpos9nwwWAgRxNBZRJV+Wq1OlvG6/W69F9dRALtdrtnJJ7ncVP+/+tE/8nb7ZYPh0M5QuAvI/o1Se2zq9/v8zRNS4H0ApCH/MqLsdfrAZiOxyNsueB02e/30o848mBftBjF3lWIvck4ixAXe1dhZQpX1R8/l80D6ytebScjzpOiKKR9JRQWC4LgablcXls841+EeYszHtXP676tkHbvSi2Dp+re9S7AADo/E1CTWgh/AAAAAElFTkSuQmCC";
    krestikAdElem.style = "position:absolute;top:35px !important;right:12px !important;border:1px !important;opacity:0;z-index:1100;cursor:pointer;height:25px !important;width:25px !important;margin:0 !important;padding:0 !important;pointer-events:none;";
    el.appendChild(krestikAdElem);
    if (krestikAdElem.addEventListener) {
        krestikAdElem.addEventListener("click", clickonKrestikAdEl);
    } else {
        krestikAdElem.attachEvent("onclick", clickonKrestikAdEl);
    }
    try {
        clearTimeout(TimerCloseKrestikVidVpaut);
        TimerCloseKrestikVidVpaut = null;
    } catch (e) {
    }
    if (!timer_krestik) {
        try {
            let timer_close_op_ev_kr = (timer_close_op + 1) * 1000;
            let TimerCloseKrestikVidVpaut = setTimeout(function () {
                krestikAdElem.style.opacity = 1;
                krestikAdElem.style.pointerEvents = 'visible';
                clickerad = 1;
                clearTimeout(TimerCloseKrestikVidVpaut);
                TimerCloseKrestikVidVpaut = null;
            }, timer_close_op_ev_kr);
        } catch (e) {
        }
    }
}

function CreateTimerVidVpaut(el) {
    let otch = timer_close_op;
    let krestikAdElem = document.createElement("span");
    krestikAdElem.id = 'timer_vid_vpaut';
    krestikAdElem.textContent = otch;
    krestikAdElem.style = "position:absolute;top:35px !important;right:12px !important;color: #fff; font-size: 17px; font-weight: 700;border:1px !important;z-index:1100;height:25px !important;width:25px !important;margin:0 !important;padding:0 !important;";
    el.appendChild(krestikAdElem);
    try {
        clearTimeout(TimerCloseTimerVidVpaut);
        TimerCloseTimerVidVpaut = null;
    } catch (e) {
    }
    try {
        let TimerCloseTimerVidVpaut = setTimeout(function runtimer() {
            otch--;
            if (otch >= 0) {
                krestikAdElem.textContent = otch;
                TimerCloseTimerVidVpaut = setTimeout(runtimer, 1000);
            } else {
                try {
                    let krestikBase = document.getElementById('krestik_vid_vpaut');
                    krestikBase.style.opacity = 1;
                    krestikBase.style.pointerEvents = 'visible';
                    clickerad = 1;
                } catch (e) {
                }
                let frame = document.getElementById('tmp_div_vid_vpaut');
                frame.removeChild(krestikAdElem);
                clearTimeout(TimerCloseTimerVidVpaut);
                TimerCloseTimerVidVpaut = null;
            }
        }, 1000);
    } catch (e) {
    }
}

function isEmptyObject(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

function GetBanner(el, plId, countB) {
    return fetch('https://videoroll.net/banners/index.php?id=' + plId + '&count=' + countB + '&countryp=' + countryp, {
        method: "GET",
        mode: "cors"
    }).then(response => response.text()).then(
        banner => {
            if (banner != 'END') {
                if (banner == 'yandex') {
                    startYaRtb(el, yaIdV);
                } else {
                    el.innerHTML = banner;
                }
                let BannerKresticTimer = null;
                BannerKresticTimer = setTimeout(function () {
                    BannerKrestik(el);
                    clearTimeout(BannerKresticTimer);
                    BannerKresticTimer = null;
                }, 5000);

            } else {
                closePrerollBanner();
                console.info('Vid vpaut end adverts');
            }
        }
    )
}

function clickMobBannerKrestik() {
    closePrerollBanner();
}

function startYaRtb(el, yaId) {
    let yandexId = 'yandex_rtb_R-A-' + yaId + '-1';
    let yandexRtbBlock = 'R-A-' + yaId + '-1';
    let yaRtbDiv = document.createElement("div");
    yaRtbDiv.id = yandexId;
    el.appendChild(yaRtbDiv);
    let tag = document.getElementsByTagName("script")[0];
    let scriptRtb = document.createElement("script");
    scriptRtb.type = "text/javascript";
    scriptRtb.src = "//an.yandex.ru/system/context.js";
    scriptRtb.onload = function () {
        Ya.Context.AdvManager.render({
            blockId: yandexRtbBlock, renderTo: yandexId, async: true, onRender: function (data) {
                console.log('Videoroll RTB : ' + data.product);
            }
        });
    }
    scriptRtb.async = true;
    tag.parentNode.insertBefore(scriptRtb, tag);

}

function GetOptionVidVpaut(el, pl_id) {
    return fetch('https://videoroll.net/vpaut_option_get.php?pl_id=' + pl_id)
        .then(
            response => response.json()
        ).then(option => {
            if (isEmptyObject(option)) throw new Error('empty');
            if (navigator.userAgent.search(/PlayStation/) > 0) throw new Error('PlayStation');
            if (navigator.userAgent.search(/SmartTV/) > 0) throw new Error('TV');
            if (navigator.userAgent.search(/Smart-TV/) > 0) throw new Error('TV');
            if (navigator.userAgent.search(/Smart_TV/) > 0) throw new Error('TV');
            flagLoad++;
            is_mob = parseInt(option.mob);
            adv_reklamn = option.paths_option.path;
            array_domens = option.paths_option.domens;
            adlen = adv_reklamn.length;
            if (!adlen && !is_mob) throw new Error('Empty company list');
            let blocked = parseInt(option.blocked);
            if (blocked) {
                el.style.width = 0 + 'px';
                el.style.height = 0 + 'px';
                try {
                    window.postMessage("end_rekl", "*")
                } catch (e) {
                }
                console.info('Vid vpaut end adverts');
                return false;
            }
            scroll_to_player = parseInt(option.scroll_to_player);
            flyroll_player = parseInt(option.flyroll_player);
            krestik = parseInt(option.fake_krestik);
            only_fly = parseInt(option.only_fly);
            timer_close_op = parseInt(option.timer_closed);
            otsl_log = parseInt(option.otslej_log);
            otsl_pl = parseInt(option.otslej_pl);
            mobile_krestik = parseInt(option.mobile_timer_crestik) * 1000;
            countryp = option.countryp;
            yaIdV = option.ya_id;
            is_cap = 0;
            is_cap = parseInt(option.cap);//включение МСК
            timer_krestik = parseInt(option.timer_krestik);
            //overload = parseInt(option.overload);
            closed_krestic = parseInt(option.closed_by_krestic);
            mobileStatic = parseInt(option.mob_static);
            if (is_mob && !watchMobad && !mobileStatic) {
                let tmp_div_mob_banner = document.createElement("div");
                tmp_div_mob_banner.id = 'tmp_div_mob_banner';
                tmp_div_mob_banner.style.zIndex = 99000;
                tmp_div_mob_banner.style.opacity = 1;
                width_mob_banner = '98%';
                height_mob_banner = '23%';
                tmp_div_mob_banner.style.width = width_mob_banner;
                tmp_div_mob_banner.style.height = height_mob_banner;
                tmp_div_mob_banner.style.position = 'fixed';
                tmp_div_mob_banner.style.bottom = 0;
                tmp_div_mob_banner.style.left = '1%';
                el.appendChild(tmp_div_mob_banner);
                GetBanner(tmp_div_mob_banner, pl_id, 0)
            }
            let tmp_div_vid_vpaut = document.createElement("div");
            tmp_div_vid_vpaut.id = 'tmp_div_vid_vpaut';
            tmp_div_vid_vpaut.style.zIndex = 98999;
            if (!is_mob) {
                measure_wl = (el.style.width && el.style.width.indexOf('%') + 1) ? '%' : 'px';
                measure_hl = (el.style.height && el.style.height.indexOf('%') + 1) ? '%' : 'px';
                if (measure_wl == 'px') width_el = (el.style.width && parseInt(el.style.width) >= 400) ? parseInt(el.style.width) : 400;
                else if (measure_wl == '%') width_el = (el.style.width && parseInt(el.style.width) > 20) ? parseInt(el.style.width) : 100;
                if (measure_hl == 'px') height_el = (el.style.height && parseInt(el.style.height) >= 250) ? parseInt(el.style.height) : 250;
                else if (measure_hl == '%') height_el = (el.style.height && parseInt(el.style.height) > 20) ? parseInt(el.style.height) : 100;
                width_roll = (el.hasAttribute('vid_roll_width') && parseInt(el.getAttribute('vid_roll_width')) > 400) ? parseInt(el.getAttribute('vid_roll_width')) : 400;
                height_roll = (el.hasAttribute('vid_roll_height') && parseInt(el.getAttribute('vid_roll_height')) > 250) ? parseInt(el.getAttribute('vid_roll_height')) : 250;
                let topD = window.pageYOffset;
                start_topEl = el.getBoundingClientRect().top + topD;
                start_botEl = el.getBoundingClientRect().bottom + topD;
                if (measure_wl == 'px') tmp_div_vid_vpaut.style.width = width_el + 'px';
                else if (measure_wl == '%') tmp_div_vid_vpaut.style.width = width_el + '%';
                if (measure_hl == 'px') tmp_div_vid_vpaut.style.height = height_el + 'px';
                else if (measure_hl == '%') tmp_div_vid_vpaut.style.height = height_el + '%';
                tmp_div_vid_vpaut.style.position = 'relative';
            } else if (!mobileStatic) {
                width_el = '98%';
                if (showHideMob) {
                    height_el = '30px';
                    tmp_div_vid_vpaut.style.opacity = 0.2;
                } else {
                    height_el = '23%';
                    tmp_div_vid_vpaut.style.opacity = 1;
                }
                el.style.width = 0 + 'px';
                el.style.height = 0 + 'px';
                tmp_div_vid_vpaut.style.width = width_el;
                tmp_div_vid_vpaut.style.height = height_el;
                tmp_div_vid_vpaut.style.position = 'fixed';
                tmp_div_vid_vpaut.style.bottom = 0;
                tmp_div_vid_vpaut.style.left = '1%';
            } else {
                width_el = '98%';
                height_el = '100%';
                tmp_div_vid_vpaut.style.width = width_el;
                tmp_div_vid_vpaut.style.height = height_el;
            }
            el.appendChild(tmp_div_vid_vpaut);
            if (adlen) {
                let iframeAdElem = document.createElement("iframe");
                iframeAdElem.id = 'vid_vpaut_kod_frame';
                iframeAdElem.width = '100%';
                iframeAdElem.height = '100%';
                iframeAdElem.frameBorder = 0;
                iframeAdElem.style.zIndex = 1001;
                iframeAdElem.style.border = '0';
                let first = giveAdvHref(adv_reklamn[0]);
                if (first.indexOf('?') === -1) {
                    first += '?fr=1';
                } else {
                    first += '&fr=1';
                }
                iframeAdElem.src = first;
                tmp_div_vid_vpaut.appendChild(iframeAdElem);
            }
            if (timer_krestik && !is_mob) CreateTimerVidVpaut(tmp_div_vid_vpaut);
            if (krestik && !is_mob) CreateKrestikVidVpaut(tmp_div_vid_vpaut);
            if (!is_mob) overloadDomenByTime();
            if (flyroll_player && !is_mob) {
                is_open_vid_vpaut = 1;
                Check_Vid_Vpaut_Visibility();
            }
            console.info('Vid vpaut added');

        });
}

function Check_Vid_Vpaut_Visibility() {
    if (is_open_vid_vpaut && change_krestic && !is_mob) {
        let el = document.getElementById('tmp_div_vid_vpaut');
        let param = document.getElementById('vid_vpaut_div');
        let topD = window.pageYOffset;
        let bottomD = topD + window.innerHeight;
        let trigger_y = start_topEl + ((start_botEl - start_topEl) * 52) / 100;
        if (width_roll < 400) width_roll = 400;
        if (height_roll < 250) height_roll = 250;
        if (trigger_y > topD && trigger_y < bottomD && !only_fly) {
            el.style.position = 'relative';
            el.style.top = 0;
            el.style.left = 0;
            if (adv_overs && width_el < 500) {
                if (measure_wl == 'px') el.style.width = '500px';
            } else {
                if (measure_wl == 'px') el.style.width = width_el + 'px';
                else if (measure_wl == '%') el.style.width = width_el + '%';
            }
            if (measure_hl == 'px') el.style.height = height_el + 'px';
            else if (measure_hl == '%') el.style.height = height_el + '%';
        } else {
            let left_el_rect;
            el.style.position = 'fixed';
            if (param.hasAttribute('vid_el_top') && parseInt(param.getAttribute('vid_el_top')) > 0) {
                el.style.top = 0;
            } else {
                if (param.hasAttribute('vid_el_locate_top') && parseInt(param.getAttribute('vid_el_locate_top')) > 0) {
                    if (!document.doctype) el.style.top = (parseInt(document.body.clientHeight) - parseInt(height_roll) - parseInt(param.getAttribute('vid_el_locate_top'))) + 'px';
                    else el.style.top = (parseInt(document.documentElement.clientHeight) - parseInt(height_roll) - parseInt(param.getAttribute('vid_el_locate_top'))) + 'px';
                } else {
                    if (!document.doctype) el.style.top = (parseInt(document.body.clientHeight) - parseInt(height_roll)) + 'px';
                    else el.style.top = (parseInt(document.documentElement.clientHeight) - parseInt(height_roll)) + 'px';
                }
            }
            if (param.hasAttribute('vid_el_locate') && parseInt(param.getAttribute('vid_el_locate')) > 0) {
                el.style.left = '0px';
            } else if (param.hasAttribute('vid_el_center') && parseInt(param.getAttribute('vid_el_center')) > 0) {
                if (adv_overs && width_roll < 500) {
                    el.style.left = ((parseInt(document.documentElement.clientWidth) / 2) - (250)) + 'px';
                } else el.style.left = ((parseInt(document.documentElement.clientWidth) / 2) - (parseInt(width_roll) / 2)) + 'px';
            } else {
                if (adv_overs && width_roll < 500) {
                    el.style.left = (parseInt(document.documentElement.clientWidth) - 500) + 'px';
                } else el.style.left = (parseInt(document.documentElement.clientWidth) - parseInt(width_roll)) + 'px';
            }
            if (param.hasAttribute('vid_el_targent')) {
                if (document.getElementById(param.getAttribute('vid_el_targent'))) {
                    left_el_rect = parseInt(document.getElementById(param.getAttribute('vid_el_targent')).getBoundingClientRect().left);//+parseInt(width_roll/2);
                    el.style.left = left_el_rect + 'px';
                } else {
                    if (adv_overs && width_roll < 500) {
                        left_el_rect = parseInt(document.getElementsByClassName(param.getAttribute('vid_el_targent'))[0].getBoundingClientRect().left) + 250;
                    } else left_el_rect = parseInt(document.getElementsByClassName(param.getAttribute('vid_el_targent'))[0].getBoundingClientRect().left) + parseInt(width_roll / 2);
                    el.style.left = left_el_rect + 'px';
                }
            }
            if (param.hasAttribute('vid_el_targent_r')) {
                if (document.getElementById(param.getAttribute('vid_el_targent_r'))) {
                    if (adv_overs && width_roll < 500) {
                        left_el_rect = parseInt(document.getElementById(param.getAttribute('vid_el_targent_r')).getBoundingClientRect().left) - 500;
                    } else left_el_rect = parseInt(document.getElementById(param.getAttribute('vid_el_targent_r')).getBoundingClientRect().left) - parseInt(width_roll);
                    el.style.left = left_el_rect + 'px';
                } else {
                    if (adv_overs && width_roll < 500) {
                        left_el_rect = parseInt(document.getElementsByClassName(param.getAttribute('vid_el_targent_r'))[0].getBoundingClientRect().left) - 500;
                    } else {
                        left_el_rect = parseInt(document.getElementsByClassName(param.getAttribute('vid_el_targent_r'))[0].getBoundingClientRect().left) - parseInt(width_roll);
                    }
                    el.style.left = left_el_rect + 'px';
                }
            }
            if (param.hasAttribute('vid_el_right_targent')) {
                if (document.getElementById(param.getAttribute('vid_el_right_targent'))) {
                    left_el_rect = parseInt(document.getElementById(param.getAttribute('vid_el_right_targent')).getBoundingClientRect().right);//+parseInt(width_roll/2);
                    el.style.left = left_el_rect + 'px';
                } else {
                    left_el_rect = parseInt(document.getElementsByClassName(param.getAttribute('vid_el_right_targent'))[0].getBoundingClientRect().right);//+parseInt(width_roll/2);
                    el.style.left = left_el_rect + 'px';
                }
            }
            if (param.hasAttribute('vid_el_right_targent_r')) {
                if (document.getElementById(param.getAttribute('vid_el_right_targent_r'))) {
                    if (adv_overs && width_roll < 500) {
                        left_el_rect = parseInt(document.getElementById(param.getAttribute('vid_el_right_targent_r')).getBoundingClientRect().right) - 500;
                    } else left_el_rect = parseInt(document.getElementById(param.getAttribute('vid_el_right_targent_r')).getBoundingClientRect().right) - parseInt(width_roll);
                    el.style.left = left_el_rect + 'px';
                } else {
                    if (adv_overs && width_roll < 500) {
                        left_el_rect = parseInt(document.getElementsByClassName(param.getAttribute('vid_el_right_targent_r'))[0].getBoundingClientRect().right) - 500;
                    } else left_el_rect = parseInt(document.getElementsByClassName(param.getAttribute('vid_el_right_targent_r'))[0].getBoundingClientRect().right) - parseInt(width_roll);
                    el.style.left = left_el_rect + 'px';
                }
            }
            if (param.hasAttribute('vid_mrg_l') && parseInt(param.getAttribute('vid_mrg_l')) > 0) {
                el.style.left = parseInt(el.style.left) + parseInt(param.getAttribute('vid_mrg_l')) + 'px';
            }
            if (param.hasAttribute('vid_mrg_r') && parseInt(param.getAttribute('vid_mrg_r')) > 0) {
                el.style.left = parseInt(el.style.left) - parseInt(param.getAttribute('vid_mrg_r')) + 'px';
            }
            if (param.hasAttribute('vid_mrg_t') && parseInt(param.getAttribute('vid_mrg_t')) > 0) {
                el.style.top = parseInt(el.style.top) + parseInt(param.getAttribute('vid_mrg_t')) + 'px';
            }
            if (param.hasAttribute('vid_mrg_b') && parseInt(param.getAttribute('vid_mrg_b')) > 0) {
                el.style.top = parseInt(el.style.top) - parseInt(param.getAttribute('vid_mrg_b')) + 'px';
            }
            if (adv_overs && width_roll < 500) {
                el.style.width = 500 + 'px';
            } else el.style.width = width_roll + 'px';
            el.style.height = height_roll + 'px';
            el.style.zIndex = 1001;
            if (only_fly) {
                param.style.width = 0 + 'px';
                param.style.height = 0 + 'px';
            }
        }
        try {
            document.getElementById("vid_vpaut_kod_frame").style.width = "98% !important";
        } catch (b) {
        }
        try {
            document.getElementById("vid_vpaut_kod_frame").style.height = "100% !important";
        } catch (b) {
        }
    }
}


function Vid_vpaut_onload() {
    let frm_S = (typeof window.location.ancestorOrigins != 'undefined') ? window.location.ancestorOrigins : '';
    if(frm_S){
        for (let i = 0; i < frm_S.length; i++){
            if(frm_S.item(i) == 'https://yang.yandex-team.ru' || frm_S.item(i) == 'http://yang.yandex-team.ru'){
                console.info('Vid access denied');
                return;
            }
        }
    }
    let el = document.getElementById('vid_vpaut_div');
    el.style.zIndex = 1000;
    if (!el) {
        console.info('Vid vpaut no div');
        return;
    }
    let metaRef = document.createElement("meta");
    metaRef.name = "referrer";
    metaRef.content = "no-referrer-when-downgrade";
    el.appendChild(metaRef);
    vpaut_pl = (el.hasAttribute('vid_vpaut_pl') && parseInt(el.getAttribute('vid_vpaut_pl')) > 0) ? parseInt(el.getAttribute('vid_vpaut_pl')) : 0;
    if (!vpaut_pl) {
        console.info('Vid vpaut no pl');
        return;
    }
    if (!flagLoad) GetOptionVidVpaut(el, vpaut_pl).catch(error => {
        console.info('VID ' + error.message);
        document.getElementById('vid_vpaut_div').style.display = 'none';
        try {
            window.postMessage("end_rekl", "*")
        } catch (e) {
        }
    });
}

if (window.addEventListener) {
    window.addEventListener("message", Vid_vpaut_listener);
    window.addEventListener("load", Vid_vpaut_onload);
    window.addEventListener("scroll", Check_Vid_Vpaut_Visibility);
} else {
    window.attachEvent("onmessage", Vid_vpaut_listener);
    window.attachEvent("onload", Vid_vpaut_onload);
    window.attachEvent("onscroll", Check_Vid_Vpaut_Visibility);
}
var array_domens = [];
var adv_reklamn = [];
var vpaut_pl = 0;
var endless = 15;
var endless_mob = 10;
var ind = 1;
var adlen = 0;
var scroll_to_player = 0;
var first_scroll = 0;
var flyroll_player = 0;
var krestik = 0;
var timer_krestik = 0;
var overload = 1;
var clickerad = 0;
var is_open_vid_vpaut = 0;
var width_el = 0;
var height_el = 0;
var width_roll = 0;
var height_roll = 0;
var start_topEl, start_botEl = 0;
var measure_wl, measure_hl = 'px';
var is_cap = 0;
var has_ad = 0;
var change_krestic = 1;
var closed_krestic = 0;
var only_fly = 0;
var timer_close_op = 90;
var adv_overs = 0;
var otsl_log = 0;
var otsl_pl = 0;
var is_mob = 0;
var count_mob = 0;
var countryp = '';
var mobile_krestik = 10000;
var showHideMob = 1;
var checkMobAdv = 0;
var checkShowMobile = 0;
var clickerMobad = 0;
var watchMobad = 0;
var isYandex = 0;
var hadMobAdv = 0;
var mobileStatic = 0;
var yaIdV = 0;
var flagLoad = 0;
var overloadDomen = null;
var isEstablishedConnectionVpautTimeout = false;
var domCross = 0;