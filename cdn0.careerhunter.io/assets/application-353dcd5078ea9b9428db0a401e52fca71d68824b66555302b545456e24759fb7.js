function debounce(e, t, i) {
	var a;
	return function() {
		var s = this,
			n = arguments,
			r = function() {
				a = null, i || e.apply(s, n)
			},
			o = i && !a;
		clearTimeout(a), a = setTimeout(r, t), o && e.apply(s, n)
	}
}

function throttle(e, t) {
	var i = !1;
	return function() {
		i || (e.call(), i = !0, setTimeout(function() {
			i = !1
		}, t))
	}
}

function handleButtonOnHover(e) {
	var t = e.target.getBoundingClientRect(),
		i = {
			top: t.top + window.scrollY,
			left: t.left + window.scrollX
		},
		a = e.pageX - i.left,
		s = e.pageY - i.top;
	e.target.querySelector(".button__hovered") && (e.target.querySelector(".button__hovered").style.top = s + "px", e.target.querySelector(".button__hovered").style.left = a + "px")
}

function bindMouseEnter(e) {
	for (var t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", function(e) {
		handleButtonOnHover(e)
	}, !!supportsPassive && {
		passive: !0
	})
}

function fillMenuWithColor() {
	var e = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop),
		t = document.querySelector(".top-menu__checkout"),
		i = document.querySelector(".in-results"),
		a = document.querySelector(".white-top-menu"),
		s = document.querySelector(".hamburger");
	e <= 10 ? (document.querySelector(".top-menu").style.background = "transparent", t && (window.matchMedia("(max-width: 1024px)").matches && window.matchMedia("(min-width: 641px)").matches ? t.style.height = "100px" : window.matchMedia("(max-width: 640px)").matches && (t.style.height = "80px", s.style.top = "20px")), i && (document.querySelector(".top-menu").style.top = "unset")) : (a && window.matchMedia("(max-width: 640px)").matches ? document.querySelector(".top-menu").style.background = "rgba(255, 255, 255, 0.9)" : document.querySelector(".top-menu").style.background = "rgba(10,30,46,0.9)", t && (window.matchMedia("(max-width: 1024px)").matches && window.matchMedia("(min-width: 641px)").matches ? t.style.height = "80px" : window.matchMedia("(max-width: 640px)").matches && (t.style.height = "65px", s.style.top = "13px")), i && (document.querySelector(".top-menu").style.top = "0"));
	var n = document.querySelector(".top-menu__item--pay");
	n && (n.style.display = e >= 100 ? "none" : "block")
}

function targetInnerHeight() {
	const e = document.querySelector(".test-image"),
		t = document.querySelector(".test-page-container");
	e && t && (e.style.height = window.innerHeight + "px", t.style.height = window.innerHeight + "px")
}

function setClass(e, t, i) {
	for (var a = 0; a < e.length; a++) e[a].classList[i](t)
}

function collapseNotActive(e, t) {
	for (var i = 0; i < e.length; i++) e[i].classList.contains("is-active") || slideUp(e[i].querySelector(t), 300)
}

function setHash(e, t, i) {
	var a = e.getAttribute("href"),
		s = t || "",
		n = document.querySelector(a + s);
	i ? n.parentNode.classList.add("is-active") : (n.classList.add("is-active"), n.querySelector(".accordion-item--responsive").classList.add("is-active"))
}

function handleNestedAccordion(e) {
	var t = e.querySelectorAll(".accordion-title"),
		i = e.querySelectorAll(".accordion-item");
	if (i.length)
		for (var a = 0; a < t.length; a++) t[a].addEventListener("click", function(e) {
			e.preventDefault();
			var t = !this.parentNode.classList.contains("is-active");
			setClass(i, "is-active", "remove"), t ? (this.parentNode.classList.add("is-active"), collapseNotActive(i, ".accordion-content"), slideDown(this.nextElementSibling, 300)) : (this.parentNode.classList.remove("is-active"), slideUp(this.nextElementSibling, 300))
		})
}

function handleTabs() {
	for (var e = 0; e < tabsAnchors.length; e++) tabsAnchors[e].addEventListener("click", function() {
		event.preventDefault(), !this.parentNode.classList.contains("is-active") && (setClass(tabsTitles, "is-active", "remove"), setClass(panels, "is-active", "remove"), setClass(responsiveAccordionItems, "is-active", "remove"), this.parentNode.classList.add("is-active"), setHash(this))
	})
}

function handleResponsiveAccordion() {
	for (var e = 0; e < responsiveAccordionAnchors.length; e++) responsiveAccordionAnchors[e].addEventListener("click", function(e) {
		e.preventDefault();
		var t = !this.parentNode.classList.contains("is-active");
		setClass(responsiveAccordionItems, "is-active", "remove"), setClass(panels, "is-active", "remove"), setClass(tabsTitles, "is-active", "remove"), t ? (this.parentNode.parentNode.classList.add("is-active"), setHash(this, "-label", !0), this.parentNode.classList.add("is-active"), collapseNotActive(responsiveAccordionItems, ".accordion-content--responsive"), slideDown(this.nextElementSibling, 300)) : (this.parentNode.classList.remove("is-active"), slideUp(this.nextElementSibling, 300))
	})
}

function resizeAccordionTabs() {
	for (var e = document.querySelectorAll(".accordion-content--responsive"), t = 0; t < e.length; t++) window.matchMedia("(min-width: 1025px)").matches ? e[t].style.display = "flex" : e[t].parentNode.parentNode.classList.contains("is-active") ? e[t].style.display = "block" : e[t].style.display = "none"
}

function setActiveLink(e) {
	for (var t = "is-active", i = document.querySelectorAll(".top-menu__list--educators  .default__item"), a = 0, s = i.length; a < s; a++) {
		var n = i[a];
		e == n.getAttribute("href") && (n.classList ? n.classList.add(t) : n.className += " " + t)
	}
}

function closeFIreworks() {
	fireworksContainer.style.display = "none"
}

function isInsideViewport(e) {
	var t = e.getBoundingClientRect(),
		i = window.innerHeight || document.documentElement.clientHeight,
		a = window.innerWidth || document.documentElement.clientWidth,
		s = t.top <= i && t.top + t.height >= 0,
		n = t.left <= a && t.left + t.width >= 0;
	return s && n
}

function smoothScroll(e) {
	function t(s) {
		i || (i = s || (new Date).getTime());
		let o = + function(e) {
			return e * (2 - e)
		}((s - i) / 600).toFixed(2);
		r = 0 === a ? n - n * o : n + a * o, window.scrollTo(0, r), 0 !== a && r >= n + a || 0 === a && r <= 0 ? (cancelAnimationFrame(i), e && e.focus(), r = 0) : window.requestAnimationFrame(t)
	}
	let i = null,
		a = e && e ? e.getBoundingClientRect().top : 0;
	const s = e.closest("[data-smooth-scroll-menu-container]");
	if ((a -= s || document.querySelector(".upgrade-sticky-menu") ? 130 : 100) < 0) return void window.scrollTo({
		top: a + document.documentElement.scrollTop,
		behavior: "smooth"
	});
	const n = window.pageYOffset || document.documentElement.scrollTop;
	let r = 0;
	! function() {
		var e = ["ms", "moz", "webkit", "o"];
		for (let t = 0, i = e.length; t < i && !window.requestAnimationFrame; t++) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"]
	}(), window.requestAnimationFrame(t)
}
async function supportsWebp() {
	if (!self.createImageBitmap) return !1;
	const e = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
		t = await fetch(e).then(e => e.blob());
	return createImageBitmap(t).then(() => !0, () => !1)
}! function(e, t) {
	"use strict";

	function i(e) {
		this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || c(), this.isIntersecting = !!e.intersectionRect;
		var t = this.boundingClientRect,
			i = t.width * t.height,
			a = this.intersectionRect,
			s = a.width * a.height;
		this.intersectionRatio = i ? s / i : this.isIntersecting ? 1 : 0
	}

	function a(e, t) {
		var i = t || {};
		if ("function" != typeof e) throw new Error("callback must be a function");
		if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
		this._checkForIntersections = n(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
			return e.value + e.unit
		}).join(" ")
	}

	function s() {
		return e.performance && performance.now && performance.now()
	}

	function n(e, t) {
		var i = null;
		return function() {
			i || (i = setTimeout(function() {
				e(), i = null
			}, t))
		}
	}

	function r(e, t, i, a) {
		"function" == typeof e.addEventListener ? e.addEventListener(t, i, a || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, i)
	}

	function o(e, t, i, a) {
		"function" == typeof e.removeEventListener ? e.removeEventListener(t, i, a || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, i)
	}

	function l(e, t) {
		var i = Math.max(e.top, t.top),
			a = Math.min(e.bottom, t.bottom),
			s = Math.max(e.left, t.left),
			n = Math.min(e.right, t.right),
			r = n - s,
			o = a - i;
		return r >= 0 && o >= 0 && {
			top: i,
			bottom: a,
			left: s,
			right: n,
			width: r,
			height: o
		}
	}

	function d(e) {
		var t;
		try {
			t = e.getBoundingClientRect()
		} catch (i) {}
		return t ? (t.width && t.height || (t = {
			top: t.top,
			right: t.right,
			bottom: t.bottom,
			left: t.left,
			width: t.right - t.left,
			height: t.bottom - t.top
		}), t) : c()
	}

	function c() {
		return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			width: 0,
			height: 0
		}
	}

	function u(e, t) {
		for (var i = t; i;) {
			if (i == e) return !0;
			i = p(i)
		}
		return !1
	}

	function p(e) {
		var t = e.parentNode;
		return t && 11 == t.nodeType && t.host ? t.host : t
	}
	if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
		get: function() {
			return this.intersectionRatio > 0
		}
	});
	else {
		var h = [];
		a.prototype.THROTTLE_TIMEOUT = 100, a.prototype.POLL_INTERVAL = null, a.prototype.USE_MUTATION_OBSERVER = !0, a.prototype.observe = function(e) {
			if (!this._observationTargets.some(function(t) {
					return t.element == e
				})) {
				if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
				this._registerInstance(), this._observationTargets.push({
					element: e,
					entry: null
				}), this._monitorIntersections(), this._checkForIntersections()
			}
		}, a.prototype.unobserve = function(e) {
			this._observationTargets = this._observationTargets.filter(function(t) {
				return t.element != e
			}), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
		}, a.prototype.disconnect = function() {
			this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
		}, a.prototype.takeRecords = function() {
			var e = this._queuedEntries.slice();
			return this._queuedEntries = [], e
		}, a.prototype._initThresholds = function(e) {
			var t = e || [0];
			return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, i) {
				if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
				return e !== i[t - 1]
			})
		}, a.prototype._parseRootMargin = function(e) {
			var t = (e || "0px").split(/\s+/).map(function(e) {
				var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
				if (!t) throw new Error("rootMargin must be specified in pixels or percent");
				return {
					value: parseFloat(t[1]),
					unit: t[2]
				}
			});
			return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
		}, a.prototype._monitorIntersections = function() {
			this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
				attributes: !0,
				childList: !0,
				characterData: !0,
				subtree: !0
			}))))
		}, a.prototype._unmonitorIntersections = function() {
			this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
		}, a.prototype._checkForIntersections = function() {
			var e = this._rootIsInDom(),
				t = e ? this._getRootRect() : c();
			this._observationTargets.forEach(function(a) {
				var n = a.element,
					r = d(n),
					o = this._rootContainsTarget(n),
					l = a.entry,
					c = e && o && this._computeTargetAndRootIntersection(n, t),
					u = a.entry = new i({
						time: s(),
						target: n,
						boundingClientRect: r,
						rootBounds: t,
						intersectionRect: c
					});
				l ? e && o ? this._hasCrossedThreshold(l, u) && this._queuedEntries.push(u) : l && l.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
			}, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
		}, a.prototype._computeTargetAndRootIntersection = function(i, a) {
			if ("none" != e.getComputedStyle(i).display) {
				for (var s = d(i), n = p(i), r = !1; !r;) {
					var o = null,
						c = 1 == n.nodeType ? e.getComputedStyle(n) : {};
					if ("none" == c.display) return;
					if (n == this.root || n == t ? (r = !0, o = a) : n != t.body && n != t.documentElement && "visible" != c.overflow && (o = d(n)), o && !(s = l(o, s))) break;
					n = p(n)
				}
				return s
			}
		}, a.prototype._getRootRect = function() {
			var e;
			if (this.root) e = d(this.root);
			else {
				var i = t.documentElement,
					a = t.body;
				e = {
					top: 0,
					left: 0,
					right: i.clientWidth || a.clientWidth,
					width: i.clientWidth || a.clientWidth,
					bottom: i.clientHeight || a.clientHeight,
					height: i.clientHeight || a.clientHeight
				}
			}
			return this._expandRectByRootMargin(e)
		}, a.prototype._expandRectByRootMargin = function(e) {
			var t = this._rootMarginValues.map(function(t, i) {
					return "px" == t.unit ? t.value : t.value * (i % 2 ? e.width : e.height) / 100
				}),
				i = {
					top: e.top - t[0],
					right: e.right + t[1],
					bottom: e.bottom + t[2],
					left: e.left - t[3]
				};
			return i.width = i.right - i.left, i.height = i.bottom - i.top, i
		}, a.prototype._hasCrossedThreshold = function(e, t) {
			var i = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
				a = t.isIntersecting ? t.intersectionRatio || 0 : -1;
			if (i !== a)
				for (var s = 0; s < this.thresholds.length; s++) {
					var n = this.thresholds[s];
					if (n == i || n == a || n < i != n < a) return !0
				}
		}, a.prototype._rootIsInDom = function() {
			return !this.root || u(t, this.root)
		}, a.prototype._rootContainsTarget = function(e) {
			return u(this.root || t, e)
		}, a.prototype._registerInstance = function() {
			h.indexOf(this) < 0 && h.push(this)
		}, a.prototype._unregisterInstance = function() {
			var e = h.indexOf(this); - 1 != e && h.splice(e, 1)
		}, e.IntersectionObserver = a, e.IntersectionObserverEntry = i
	}
}(window, document);
var supportsPassive = !1;
try {
	var opts = Object.defineProperty({}, "passive", {
		get: function() {
			supportsPassive = !0
		}
	});
	window.addEventListener("testPassive", null, opts), window.removeEventListener("testPassive", null, opts)
} catch (e) {}
var hoveredButtons = document.querySelectorAll(".button, .tabs-title, .custom-button");
bindMouseEnter(hoveredButtons);
var simpleAccordionItems, toggledmenu = document.querySelector("#toggle-menu");
toggledmenu && toggledmenu.addEventListener("click", function() {
	this.classList.toggle("active"), document.querySelector("#overlay").classList.toggle("overlay--open"), document.querySelector("body").classList.toggle("active")
}), window.addEventListener("scroll", throttle(fillMenuWithColor, 25), !!supportsPassive && {
	passive: !0
}), window.addEventListener("load", fillMenuWithColor), window.addEventListener("resize", debounce(targetInnerHeight)), window.addEventListener("load", debounce(targetInnerHeight));
for (var slideUp = function(e, t) {
		e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.boxSizing = "border-box", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout(function() {
			e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
		}, t)
	}, slideDown = function(e, t) {
		e.style.removeProperty("display");
		let i = window.getComputedStyle(e).display;
		"none" === i && (i = "block"), e.style.display = i;
		let a = e.offsetHeight;
		e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.boxSizing = "border-box", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = a + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout(function() {
			e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
		}, t)
	}, tabsTitles = document.querySelectorAll("#faqTabs .tabs-title, #affiliatesTabs .tabs-title"), tabsAnchors = document.querySelectorAll("#faqTabs .tabs-title a, #affiliatesTabs .tabs-title a"), panels = document.querySelectorAll(".tabs-panel"), responsiveAccordionItems = document.querySelectorAll(".accordion-item--responsive"), responsiveAccordionAnchors = document.querySelectorAll(".accordion-anchor--responsive"), nestedAccordions = document.querySelectorAll(".nested"), j = 0; j < nestedAccordions.length; j++) handleNestedAccordion(nestedAccordions[j]);
handleTabs(), handleResponsiveAccordion(), window.addEventListener("resize", debounce(resizeAccordionTabs)), (simpleAccordionItems = document.querySelectorAll(".enable-active .accordion-item")).length && (simpleAccordionItems[0].classList.add("is-active"), slideDown(simpleAccordionItems[0].querySelector(".accordion-content"), 300)), (simpleAccordionItems = document.querySelectorAll(".enable-active-medium-up .accordion-item")).length && window.matchMedia("(min-width: 641px)").matches && (simpleAccordionItems[0].classList.add("is-active"), slideDown(simpleAccordionItems[0].querySelector(".accordion-content"), 300)), setActiveLink(window.location.pathname + window.location.hash);
const fireworksContainer = document.getElementById("fireworks-container");
var animationElementsSelector = document.querySelectorAll("h1, h2, h3, h4, p, img, label, .small-icon, .small-icons, .large-icon, .payment-icon.applePay, .button, button, input, textarea, select, a, li,  table, .capsule, .topic, .apply-fade-in"),
	availableForFadeIn = [];
animationElementsSelector.forEach(function(e) {
	e.classList.contains("disable-fade-in") || isInsideViewport(e) || availableForFadeIn.push(e)
});
var scrollObserver = function(e) {
		e.forEach(function(e) {
			e.isIntersecting && !e.target.classList.contains("fade-in") && e.target.classList.add("fade-in")
		})
	},
	observerOptions = {
		threshold: [0, 1]
	},
	observer = new IntersectionObserver(scrollObserver, observerOptions);
availableForFadeIn.forEach(function(e) {
	e.classList.add("before-fade-in"), observer.observe(e)
});
class ReadMoreLess {
	constructor(e, t, i = !1) {
		this.container = e, this.defaultLessHeight = t, this.mediumScreen = i, this.touchStartY = !1, this.initialWidth = window.innerWidth, this.isTouchDevice = "undefined" != typeof window.ontouchstart, e.querySelectorAll("[data-more-less-ctrl]").forEach(e => {
			this.isTouchDevice ? (e.addEventListener("touchstart", () => {
				this.touchStartY = window.scrollY
			}, !!supportsPassive && {
				passive: !0
			}), e.addEventListener("touchend", e => {
				this.touchStartY === window.scrollY && this.toggle(e)
			}, !!supportsPassive && {
				passive: !0
			})) : e.addEventListener("click", e => {
				this.toggle(e)
			})
		}), this.calculateInitialHeights(), window.addEventListener("resize", e => {
			this.initialWidth !== window.innerWidth && (this.calculateInitialHeights(e), this.initialWidth = window.innerWidth)
		})
	}
	calculateInitialHeights() {
		this.container.querySelectorAll("[data-more-less-content]").forEach(e => {
			const t = e.closest("[data-more-less-container]");
			let i = e.scrollHeight - 1;
			e.hasAttribute("data-more-less-with-dots") && (e.style.whiteSpace = "normal", i = e.scrollHeight - 1, e.setAttribute("data-more-less-height", i), e.style.whiteSpace = ""), t.hasAttribute("data-more-less-clamp") && !/^((?!chrome|android).)*safari|ipad|iphone/i.test(navigator.userAgent) && t.setAttribute("data-more-with-clamp-animation", i);
			const a = e.getAttribute("data-more-less-content") ? parseInt(e.getAttribute("data-more-less-content")) : this.defaultLessHeight,
				s = t.querySelector("[data-more-less-ctrl]");
			i <= a || this.mediumScreen && window.innerWidth >= 1025 ? (this.showMore(e, t), s.style.visibility = "", e.removeAttribute("data-more-less-enabled", "")) : (this.showLess(e, t), s.style.visibility = "visible", e.setAttribute("data-more-less-enabled", !0))
		})
	}
	toggle(e) {
		const t = e.target,
			i = t.closest("[data-more-less-container]"),
			a = i.querySelector("[data-more-less-content]");
		i.hasAttribute("data-more-less-short") ? (this.showMore(a, i), t.innerHTML = "Read less") : (this.showLess(a, i), t.innerHTML = "Read more")
	}
	showMore(e, t) {
		if (e.hasAttribute("data-more-less-with-dots")) {
			let t = e.getAttribute("data-more-less-height") || e.scrollHeight;
			e.style.maxHeight = `${t}px`
		} else e.style.maxHeight = `${e.scrollHeight}px`;
		t.removeAttribute("data-more-less-short")
	}
	showLess(e, t) {
		let i = e.getAttribute("data-more-less-content") || this.defaultLessHeight;
		e.style.maxHeight = `${i}px`, t.setAttribute("data-more-less-short", "")
	}
	collapseAll() {
		this.mediumScreen && window.innerWidth >= 1025 || this.container.querySelectorAll("[data-more-less-content]").forEach(e => {
			if (e.getAttribute("data-more-less-enabled")) {
				let t = e.closest("[data-more-less-container]");
				this.showLess(e, t), t.querySelector("[data-more-less-ctrl]").innerHTML = "Read more"
			}
		})
	}
}
// console.log(navigator.userAgent),
new ReadMoreLess(document, 20),
	function() {
		const e = 133,
			t = function() {
				const e = document.querySelector(".upgrade-top__background ").clientHeight,
					t = document.querySelector(".top-menu__checkout");
				window.scrollY > e - 80 ? (n.classList.add("is-stuck"), t && t.classList.add("top-menu__with_submenu")) : (n.classList.remove("is-stuck"), t && t.classList.remove("top-menu__with_submenu")), s()
			},
			i = function(e) {
				o = e.id;
				let t = !0,
					i = null,
					s = !0;
				r.forEach(a => {
					t ? a.parentNode.classList.add("active") : (s = !1, a.parentNode.classList.remove("active")), a.dataset.id === e.id && (t = !1, window.innerWidth <= 1397 && (i = (l.scrollLeft + a.parentElement.getBoundingClientRect().left).toFixed()))
				}), null !== i && l.scrollTo({
					left: i,
					behavior: "smooth"
				}), a(s)
			},
			a = function(e) {
				const t = document.querySelector(`[data-nav-progress][data-id=${o}]`).parentNode,
					i = e ? l.getBoundingClientRect().left : 0;
				d.style.width = t.getBoundingClientRect().width + t.getBoundingClientRect().left + window.pageXOffset + l.scrollLeft + i + "px", d.style.borderColor = "#59CE61", d.style.transform = `translateX(-${l.getBoundingClientRect().left}px)`
			},
			s = function() {
				let t = [];
				r.forEach(e => {
					const i = document.getElementById(e.dataset.id);
					i && t.push({
						id: e.dataset.id,
						y: i.getBoundingClientRect().top + document.documentElement.scrollTop
					})
				});
				const a = (c = t.sort(function(e, t) {
					return t.y - e.y
				})).find(t => t.y <= window.scrollY + e);
				a.id !== o && i(a)
			},
			n = document.querySelector(".upgrade-sticky-menu__container"),
			r = document.querySelectorAll("[data-nav-progress]");
		let o, l, d = null,
			c = [];
		n && (l = n.querySelector("[data-indicator-container]"), d = n.querySelector("[data-indicator]"), window.addEventListener("scroll", t), window.addEventListener("resize", s), s())
	}(),
	function() {
		const e = 133,
			t = function() {
				const e = document.querySelector(".dashboard ").clientHeight,
					t = document.querySelector(".top-menu__main ");
				window.scrollY > e - 80 ? (n.classList.add("is-stuck"), t && t.classList.add("top-menu__with_submenu")) : (n.classList.remove("is-stuck"), t && t.classList.remove("top-menu__with_submenu")), s()
			},
			i = function(e) {
				o = e.id;
				let t = null;
				const i = document.querySelector(`[data-nav-progress][data-id=${e.id}]`);
				r.forEach(e => {
					e.parentNode.classList.remove("active")
				}), i.parentNode.classList.add("active"), null !== t && l.scrollTo({
					left: t,
					behavior: "smooth"
				}), a()
			},
			a = function() {
				const e = document.querySelector(`[data-nav-progress][data-id=${o}]`).parentNode;
				d.style.width = e.getBoundingClientRect().width + window.pageXOffset + l.scrollLeft + "px", d.style.borderColor = "#59CE61", d.style.transform = `translateX(${e.offsetLeft}px)`
			},
			s = function() {
				let t = [];
				r.forEach(e => {
					const i = document.getElementById(e.dataset.id);
					i && t.push({
						id: e.dataset.id,
						y: i.getBoundingClientRect().top + document.documentElement.scrollTop
					})
				});
				const a = (c = t.sort(function(e, t) {
					return t.y - e.y
				})).find(t => t.y <= window.scrollY + e);
				a && a.id !== o && i(a)
			},
			n = document.querySelector(".dashboard__menu-wrapper"),
			r = document.querySelectorAll("[data-nav-progress]");
		let o, l, d = null,
			c = [];
		n && (l = n.querySelector("[data-indicator-container]"), d = n.querySelector("[data-indicator]"), window.addEventListener("scroll", t), window.addEventListener("resize", s), s())
	}(),
	function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ActiveStorage = {})
	}(this, function(e) {
		"use strict";

		function t(e, t) {
			return e(t = {
				exports: {}
			}, t.exports), t.exports
		}

		function i(e) {
			var t = s(document.head, 'meta[name="' + e + '"]');
			if (t) return t.getAttribute("content")
		}

		function a(e, t) {
			return "string" == typeof e && (t = e, e = document), r(e.querySelectorAll(t))
		}

		function s(e, t) {
			return "string" == typeof e && (t = e, e = document), e.querySelector(t)
		}

		function n(e, t) {
			var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
				a = e.disabled,
				s = i.bubbles,
				n = i.cancelable,
				r = i.detail,
				o = document.createEvent("Event");
			o.initEvent(t, s || !0, n || !0), o.detail = r || {};
			try {
				e.disabled = !1, e.dispatchEvent(o)
			} finally {
				e.disabled = a
			}
			return o
		}

		function r(e) {
			return Array.isArray(e) ? e : Array.from ? Array.from(e) : [].slice.call(e)
		}

		function o(e, t) {
			if (e && "function" == typeof e[t]) {
				for (var i = arguments.length, a = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) a[s - 2] = arguments[s];
				return e[t].apply(e, a)
			}
		}

		function l() {
			I || (I = !0, document.addEventListener("click", d, !0), document.addEventListener("submit", c), document.addEventListener("ajax:before", u))
		}

		function d(e) {
			var t = e.target;
			"INPUT" != t.tagName && "BUTTON" != t.tagName || "submit" != t.type || !t.form || z.set(t.form, t)
		}

		function c(e) {
			p(e)
		}

		function u(e) {
			"FORM" == e.target.tagName && p(e)
		}

		function p(e) {
			var t = e.target;
			if (t.hasAttribute(L)) e.preventDefault();
			else {
				var i = new P(t),
					a = i.inputs;
				a.length && (e.preventDefault(), t.setAttribute(L, ""), a.forEach(f), i.start(function(e) {
					t.removeAttribute(L), e ? a.forEach(v) : h(t)
				}))
			}
		}

		function h(e) {
			var t = z.get(e) || s(e, "input[type=submit], button[type=submit]");
			if (t) {
				var i = t.disabled;
				t.disabled = !1, t.focus(), t.click(), t.disabled = i
			} else(t = document.createElement("input")).type = "submit", t.style.display = "none", e.appendChild(t), t.click(), e.removeChild(t);
			z["delete"](e)
		}

		function f(e) {
			e.disabled = !0
		}

		function v(e) {
			e.disabled = !1
		}

		function m() {
			window.ActiveStorage && l()
		}
		var g = t(function(e) {
				var t;
				t = function(e) {
					function t(e, t) {
						var i = e[0],
							a = e[1],
							s = e[2],
							n = e[3];
						a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a & s | ~a & n) + t[0] - 680876936 | 0) << 7 | i >>> 25) + a | 0) & a | ~i & s) + t[1] - 389564586 | 0) << 12 | n >>> 20) + i | 0) & i | ~n & a) + t[2] + 606105819 | 0) << 17 | s >>> 15) + n | 0) & n | ~s & i) + t[3] - 1044525330 | 0) << 22 | a >>> 10) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a & s | ~a & n) + t[4] - 176418897 | 0) << 7 | i >>> 25) + a | 0) & a | ~i & s) + t[5] + 1200080426 | 0) << 12 | n >>> 20) + i | 0) & i | ~n & a) + t[6] - 1473231341 | 0) << 17 | s >>> 15) + n | 0) & n | ~s & i) + t[7] - 45705983 | 0) << 22 | a >>> 10) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a & s | ~a & n) + t[8] + 1770035416 | 0) << 7 | i >>> 25) + a | 0) & a | ~i & s) + t[9] - 1958414417 | 0) << 12 | n >>> 20) + i | 0) & i | ~n & a) + t[10] - 42063 | 0) << 17 | s >>> 15) + n | 0) & n | ~s & i) + t[11] - 1990404162 | 0) << 22 | a >>> 10) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a & s | ~a & n) + t[12] + 1804603682 | 0) << 7 | i >>> 25) + a | 0) & a | ~i & s) + t[13] - 40341101 | 0) << 12 | n >>> 20) + i | 0) & i | ~n & a) + t[14] - 1502002290 | 0) << 17 | s >>> 15) + n | 0) & n | ~s & i) + t[15] + 1236535329 | 0) << 22 | a >>> 10) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a & n | s & ~n) + t[1] - 165796510 | 0) << 5 | i >>> 27) + a | 0) & s | a & ~s) + t[6] - 1069501632 | 0) << 9 | n >>> 23) + i | 0) & a | i & ~a) + t[11] + 643717713 | 0) << 14 | s >>> 18) + n | 0) & i | n & ~i) + t[0] - 373897302 | 0) << 20 | a >>> 12) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a & n | s & ~n) + t[5] - 701558691 | 0) << 5 | i >>> 27) + a | 0) & s | a & ~s) + t[10] + 38016083 | 0) << 9 | n >>> 23) + i | 0) & a | i & ~a) + t[15] - 660478335 | 0) << 14 | s >>> 18) + n | 0) & i | n & ~i) + t[4] - 405537848 | 0) << 20 | a >>> 12) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a & n | s & ~n) + t[9] + 568446438 | 0) << 5 | i >>> 27) + a | 0) & s | a & ~s) + t[14] - 1019803690 | 0) << 9 | n >>> 23) + i | 0) & a | i & ~a) + t[3] - 187363961 | 0) << 14 | s >>> 18) + n | 0) & i | n & ~i) + t[8] + 1163531501 | 0) << 20 | a >>> 12) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a & n | s & ~n) + t[13] - 1444681467 | 0) << 5 | i >>> 27) + a | 0) & s | a & ~s) + t[2] - 51403784 | 0) << 9 | n >>> 23) + i | 0) & a | i & ~a) + t[7] + 1735328473 | 0) << 14 | s >>> 18) + n | 0) & i | n & ~i) + t[12] - 1926607734 | 0) << 20 | a >>> 12) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a ^ s ^ n) + t[5] - 378558 | 0) << 4 | i >>> 28) + a | 0) ^ a ^ s) + t[8] - 2022574463 | 0) << 11 | n >>> 21) + i | 0) ^ i ^ a) + t[11] + 1839030562 | 0) << 16 | s >>> 16) + n | 0) ^ n ^ i) + t[14] - 35309556 | 0) << 23 | a >>> 9) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a ^ s ^ n) + t[1] - 1530992060 | 0) << 4 | i >>> 28) + a | 0) ^ a ^ s) + t[4] + 1272893353 | 0) << 11 | n >>> 21) + i | 0) ^ i ^ a) + t[7] - 155497632 | 0) << 16 | s >>> 16) + n | 0) ^ n ^ i) + t[10] - 1094730640 | 0) << 23 | a >>> 9) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a ^ s ^ n) + t[13] + 681279174 | 0) << 4 | i >>> 28) + a | 0) ^ a ^ s) + t[0] - 358537222 | 0) << 11 | n >>> 21) + i | 0) ^ i ^ a) + t[3] - 722521979 | 0) << 16 | s >>> 16) + n | 0) ^ n ^ i) + t[6] + 76029189 | 0) << 23 | a >>> 9) + s | 0, a = ((a += ((s = ((s += ((n = ((n += ((i = ((i += (a ^ s ^ n) + t[9] - 640364487 | 0) << 4 | i >>> 28) + a | 0) ^ a ^ s) + t[12] - 421815835 | 0) << 11 | n >>> 21) + i | 0) ^ i ^ a) + t[15] + 530742520 | 0) << 16 | s >>> 16) + n | 0) ^ n ^ i) + t[2] - 995338651 | 0) << 23 | a >>> 9) + s | 0, a = ((a += ((n = ((n += (a ^ ((i = ((i += (s ^ (a | ~n)) + t[0] - 198630844 | 0) << 6 | i >>> 26) + a | 0) | ~s)) + t[7] + 1126891415 | 0) << 10 | n >>> 22) + i | 0) ^ ((s = ((s += (i ^ (n | ~a)) + t[14] - 1416354905 | 0) << 15 | s >>> 17) + n | 0) | ~i)) + t[5] - 57434055 | 0) << 21 | a >>> 11) + s | 0, a = ((a += ((n = ((n += (a ^ ((i = ((i += (s ^ (a | ~n)) + t[12] + 1700485571 | 0) << 6 | i >>> 26) + a | 0) | ~s)) + t[3] - 1894986606 | 0) << 10 | n >>> 22) + i | 0) ^ ((s = ((s += (i ^ (n | ~a)) + t[10] - 1051523 | 0) << 15 | s >>> 17) + n | 0) | ~i)) + t[1] - 2054922799 | 0) << 21 | a >>> 11) + s | 0, a = ((a += ((n = ((n += (a ^ ((i = ((i += (s ^ (a | ~n)) + t[8] + 1873313359 | 0) << 6 | i >>> 26) + a | 0) | ~s)) + t[15] - 30611744 | 0) << 10 | n >>> 22) + i | 0) ^ ((s = ((s += (i ^ (n | ~a)) + t[6] - 1560198380 | 0) << 15 | s >>> 17) + n | 0) | ~i)) + t[13] + 1309151649 | 0) << 21 | a >>> 11) + s | 0, a = ((a += ((n = ((n += (a ^ ((i = ((i += (s ^ (a | ~n)) + t[4] - 145523070 | 0) << 6 | i >>> 26) + a | 0) | ~s)) + t[11] - 1120210379 | 0) << 10 | n >>> 22) + i | 0) ^ ((s = ((s += (i ^ (n | ~a)) + t[2] + 718787259 | 0) << 15 | s >>> 17) + n | 0) | ~i)) + t[9] - 343485551 | 0) << 21 | a >>> 11) + s | 0, e[0] = i + e[0] | 0, e[1] = a + e[1] | 0, e[2] = s + e[2] | 0, e[3] = n + e[3] | 0
					}

					function i(e) {
						var t, i = [];
						for (t = 0; t < 64; t += 4) i[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
						return i
					}

					function a(e) {
						var t, i = [];
						for (t = 0; t < 64; t += 4) i[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
						return i
					}

					function s(e) {
						var a, s, n, r, o, l, d = e.length,
							c = [1732584193, -271733879, -1732584194, 271733878];
						for (a = 64; a <= d; a += 64) t(c, i(e.substring(a - 64, a)));
						for (s = (e = e.substring(a - 64)).length, n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], a = 0; a < s; a += 1) n[a >> 2] |= e.charCodeAt(a) << (a % 4 << 3);
						if (n[a >> 2] |= 128 << (a % 4 << 3), a > 55)
							for (t(c, n), a = 0; a < 16; a += 1) n[a] = 0;
						return r = (r = 8 * d).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), l = parseInt(r[1], 16) || 0, n[14] = o, n[15] = l, t(c, n), c
					}

					function n(e) {
						var i, s, n, r, o, l, d = e.length,
							c = [1732584193, -271733879, -1732584194, 271733878];
						for (i = 64; i <= d; i += 64) t(c, a(e.subarray(i - 64, i)));
						for (s = (e = i - 64 < d ? e.subarray(i - 64) : new Uint8Array(0)).length, n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < s; i += 1) n[i >> 2] |= e[i] << (i % 4 << 3);
						if (n[i >> 2] |= 128 << (i % 4 << 3), i > 55)
							for (t(c, n), i = 0; i < 16; i += 1) n[i] = 0;
						return r = (r = 8 * d).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), l = parseInt(r[1], 16) || 0, n[14] = o, n[15] = l, t(c, n), c
					}

					function r(e) {
						var t, i = "";
						for (t = 0; t < 4; t += 1) i += f[e >> 8 * t + 4 & 15] + f[e >> 8 * t & 15];
						return i
					}

					function o(e) {
						var t;
						for (t = 0; t < e.length; t += 1) e[t] = r(e[t]);
						return e.join("")
					}

					function l(e) {
						return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
					}

					function d(e, t) {
						var i, a = e.length,
							s = new ArrayBuffer(a),
							n = new Uint8Array(s);
						for (i = 0; i < a; i += 1) n[i] = e.charCodeAt(i);
						return t ? n : s
					}

					function c(e) {
						return String.fromCharCode.apply(null, new Uint8Array(e))
					}

					function u(e, t, i) {
						var a = new Uint8Array(e.byteLength + t.byteLength);
						return a.set(new Uint8Array(e)), a.set(new Uint8Array(t), e.byteLength), i ? a : a.buffer
					}

					function p(e) {
						var t, i = [],
							a = e.length;
						for (t = 0; t < a - 1; t += 2) i.push(parseInt(e.substr(t, 2), 16));
						return String.fromCharCode.apply(String, i)
					}

					function h() {
						this.reset()
					}
					var f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
					return o(s("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
						function t(e, t) {
							return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t)
						}
						ArrayBuffer.prototype.slice = function(i, a) {
							var s, n, r, o, l = this.byteLength,
								d = t(i, l),
								c = l;
							return a !== e && (c = t(a, l)), d > c ? new ArrayBuffer(0) : (s = c - d, n = new ArrayBuffer(s), r = new Uint8Array(n), o = new Uint8Array(this, d, s), r.set(o), n)
						}
					}(), h.prototype.append = function(e) {
						return this.appendBinary(l(e)), this
					}, h.prototype.appendBinary = function(e) {
						this._buff += e, this._length += e.length;
						var a, s = this._buff.length;
						for (a = 64; a <= s; a += 64) t(this._hash, i(this._buff.substring(a - 64, a)));
						return this._buff = this._buff.substring(a - 64), this
					}, h.prototype.end = function(e) {
						var t, i, a = this._buff,
							s = a.length,
							n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
						for (t = 0; t < s; t += 1) n[t >> 2] |= a.charCodeAt(t) << (t % 4 << 3);
						return this._finish(n, s), i = o(this._hash), e && (i = p(i)), this.reset(), i
					}, h.prototype.reset = function() {
						return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
					}, h.prototype.getState = function() {
						return {
							buff: this._buff,
							length: this._length,
							hash: this._hash
						}
					}, h.prototype.setState = function(e) {
						return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
					}, h.prototype.destroy = function() {
						delete this._hash, delete this._buff, delete this._length
					}, h.prototype._finish = function(e, i) {
						var a, s, n, r = i;
						if (e[r >> 2] |= 128 << (r % 4 << 3), r > 55)
							for (t(this._hash, e), r = 0; r < 16; r += 1) e[r] = 0;
						a = (a = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), n = parseInt(a[1], 16) || 0, e[14] = s, e[15] = n, t(this._hash, e)
					}, h.hash = function(e, t) {
						return h.hashBinary(l(e), t)
					}, h.hashBinary = function(e, t) {
						var i = o(s(e));
						return t ? p(i) : i
					}, h.ArrayBuffer = function() {
						this.reset()
					}, h.ArrayBuffer.prototype.append = function(e) {
						var i, s = u(this._buff.buffer, e, !0),
							n = s.length;
						for (this._length += e.byteLength, i = 64; i <= n; i += 64) t(this._hash, a(s.subarray(i - 64, i)));
						return this._buff = i - 64 < n ? new Uint8Array(s.buffer.slice(i - 64)) : new Uint8Array(0), this
					}, h.ArrayBuffer.prototype.end = function(e) {
						var t, i, a = this._buff,
							s = a.length,
							n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
						for (t = 0; t < s; t += 1) n[t >> 2] |= a[t] << (t % 4 << 3);
						return this._finish(n, s), i = o(this._hash), e && (i = p(i)), this.reset(), i
					}, h.ArrayBuffer.prototype.reset = function() {
						return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
					}, h.ArrayBuffer.prototype.getState = function() {
						var e = h.prototype.getState.call(this);
						return e.buff = c(e.buff), e
					}, h.ArrayBuffer.prototype.setState = function(e) {
						return e.buff = d(e.buff, !0), h.prototype.setState.call(this, e)
					}, h.ArrayBuffer.prototype.destroy = h.prototype.destroy, h.ArrayBuffer.prototype._finish = h.prototype._finish, h.ArrayBuffer.hash = function(e, t) {
						var i = o(n(new Uint8Array(e)));
						return t ? p(i) : i
					}, h
				}, e.exports = t()
			}),
			y = function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			},
			b = function() {
				function e(e, t) {
					for (var i = 0; i < t.length; i++) {
						var a = t[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
					}
				}
				return function(t, i, a) {
					return i && e(t.prototype, i), a && e(t, a), t
				}
			}(),
			w = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
			x = function() {
				function e(t) {
					y(this, e), this.file = t, this.chunkSize = 2097152, this.chunkCount = Math.ceil(this.file.size / this.chunkSize), this.chunkIndex = 0
				}
				return b(e, null, [{
					key: "create",
					value: function(t, i) {
						new e(t).create(i)
					}
				}]), b(e, [{
					key: "create",
					value: function(e) {
						var t = this;
						this.callback = e, this.md5Buffer = new g.ArrayBuffer, this.fileReader = new FileReader, this.fileReader.addEventListener("load", function(e) {
							return t.fileReaderDidLoad(e)
						}), this.fileReader.addEventListener("error", function(e) {
							return t.fileReaderDidError(e)
						}), this.readNextChunk()
					}
				}, {
					key: "fileReaderDidLoad",
					value: function(e) {
						if (this.md5Buffer.append(e.target.result), !this.readNextChunk()) {
							var t = this.md5Buffer.end(!0),
								i = btoa(t);
							this.callback(null, i)
						}
					}
				}, {
					key: "fileReaderDidError",
					value: function() {
						this.callback("Error reading " + this.file.name)
					}
				}, {
					key: "readNextChunk",
					value: function() {
						if (this.chunkIndex < this.chunkCount || 0 == this.chunkIndex && 0 == this.chunkCount) {
							var e = this.chunkIndex * this.chunkSize,
								t = Math.min(e + this.chunkSize, this.file.size),
								i = w.call(this.file, e, t);
							return this.fileReader.readAsArrayBuffer(i), this.chunkIndex++, !0
						}
						return !1
					}
				}]), e
			}(),
			E = function() {
				function e(t, a, s) {
					var n = this;
					y(this, e), this.file = t, this.attributes = {
						filename: t.name,
						content_type: t.type || "application/octet-stream",
						byte_size: t.size,
						checksum: a
					}, this.xhr = new XMLHttpRequest, this.xhr.open("POST", s, !0), this.xhr.responseType = "json", this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.setRequestHeader("Accept", "application/json"), this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					var r = i("csrf-token");
					r != undefined && this.xhr.setRequestHeader("X-CSRF-Token", r), this.xhr.addEventListener("load", function(e) {
						return n.requestDidLoad(e)
					}), this.xhr.addEventListener("error", function(e) {
						return n.requestDidError(e)
					})
				}
				return b(e, [{
					key: "create",
					value: function(e) {
						this.callback = e, this.xhr.send(JSON.stringify({
							blob: this.attributes
						}))
					}
				}, {
					key: "requestDidLoad",
					value: function(e) {
						if (this.status >= 200 && this.status < 300) {
							var t = this.response,
								i = t.direct_upload;
							delete t.direct_upload, this.attributes = t, this.directUploadData = i, this.callback(null, this.toJSON())
						} else this.requestDidError(e)
					}
				}, {
					key: "requestDidError",
					value: function() {
						this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status)
					}
				}, {
					key: "toJSON",
					value: function() {
						var e = {};
						for (var t in this.attributes) e[t] = this.attributes[t];
						return e
					}
				}, {
					key: "status",
					get: function() {
						return this.xhr.status
					}
				}, {
					key: "response",
					get: function() {
						var e = this.xhr,
							t = e.responseType,
							i = e.response;
						return "json" == t ? i : JSON.parse(i)
					}
				}]), e
			}(),
			T = function() {
				function e(t) {
					var i = this;
					y(this, e), this.blob = t, this.file = t.file;
					var a = t.directUploadData,
						s = a.url,
						n = a.headers;
					for (var r in this.xhr = new XMLHttpRequest, this.xhr.open("PUT", s, !0), this.xhr.responseType = "text", n) this.xhr.setRequestHeader(r, n[r]);
					this.xhr.addEventListener("load", function(e) {
						return i.requestDidLoad(e)
					}), this.xhr.addEventListener("error", function(e) {
						return i.requestDidError(e)
					})
				}
				return b(e, [{
					key: "create",
					value: function(e) {
						this.callback = e, this.xhr.send(this.file.slice())
					}
				}, {
					key: "requestDidLoad",
					value: function(e) {
						var t = this.xhr,
							i = t.status,
							a = t.response;
						i >= 200 && i < 300 ? this.callback(null, a) : this.requestDidError(e)
					}
				}, {
					key: "requestDidError",
					value: function() {
						this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status)
					}
				}]), e
			}(),
			S = 0,
			C = function() {
				function e(t, i, a) {
					y(this, e), this.id = ++S, this.file = t, this.url = i, this.delegate = a
				}
				return b(e, [{
					key: "create",
					value: function(e) {
						var t = this;
						x.create(this.file, function(i, a) {
							if (i) e(i);
							else {
								var s = new E(t.file, a, t.url);
								o(t.delegate, "directUploadWillCreateBlobWithXHR", s.xhr), s.create(function(i) {
									if (i) e(i);
									else {
										var a = new T(s);
										o(t.delegate, "directUploadWillStoreFileWithXHR", a.xhr), a.create(function(t) {
											t ? e(t) : e(null, s.toJSON())
										})
									}
								})
							}
						})
					}
				}]), e
			}(),
			M = function() {
				function e(t, i) {
					y(this, e), this.input = t, this.file = i, this.directUpload = new C(this.file, this.url, this), this.dispatch("initialize")
				}
				return b(e, [{
					key: "start",
					value: function(e) {
						var t = this,
							i = document.createElement("input");
						i.type = "hidden", i.name = this.input.name, this.input.insertAdjacentElement("beforebegin", i), this.dispatch("start"), this.directUpload.create(function(a, s) {
							a ? (i.parentNode.removeChild(i), t.dispatchError(a)) : i.value = s.signed_id, t.dispatch("end"), e(a)
						})
					}
				}, {
					key: "uploadRequestDidProgress",
					value: function(e) {
						var t = e.loaded / e.total * 100;
						t && this.dispatch("progress", {
							progress: t
						})
					}
				}, {
					key: "dispatch",
					value: function(e) {
						var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						return t.file = this.file, t.id = this.directUpload.id, n(this.input, "direct-upload:" + e, {
							detail: t
						})
					}
				}, {
					key: "dispatchError",
					value: function(e) {
						this.dispatch("error", {
							error: e
						}).defaultPrevented || alert(e)
					}
				}, {
					key: "directUploadWillCreateBlobWithXHR",
					value: function(e) {
						this.dispatch("before-blob-request", {
							xhr: e
						})
					}
				}, {
					key: "directUploadWillStoreFileWithXHR",
					value: function(e) {
						var t = this;
						this.dispatch("before-storage-request", {
							xhr: e
						}), e.upload.addEventListener("progress", function(e) {
							return t.uploadRequestDidProgress(e)
						})
					}
				}, {
					key: "url",
					get: function() {
						return this.input.getAttribute("data-direct-upload-url")
					}
				}]), e
			}(),
			k = "input[type=file][data-direct-upload-url]:not([disabled])",
			P = function() {
				function e(t) {
					y(this, e), this.form = t, this.inputs = a(t, k).filter(function(e) {
						return e.files.length
					})
				}
				return b(e, [{
					key: "start",
					value: function(e) {
						var t = this,
							i = this.createDirectUploadControllers(),
							a = function s() {
								var a = i.shift();
								a ? a.start(function(i) {
									i ? (e(i), t.dispatch("end")) : s()
								}) : (e(), t.dispatch("end"))
							};
						this.dispatch("start"), a()
					}
				}, {
					key: "createDirectUploadControllers",
					value: function() {
						var e = [];
						return this.inputs.forEach(function(t) {
							r(t.files).forEach(function(i) {
								var a = new M(t, i);
								e.push(a)
							})
						}), e
					}
				}, {
					key: "dispatch",
					value: function(e) {
						var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						return n(this.form, "direct-uploads:" + e, {
							detail: t
						})
					}
				}]), e
			}(),
			L = "data-direct-uploads-processing",
			z = new WeakMap,
			I = !1;
		setTimeout(m, 1), e.start = l, e.DirectUpload = C, Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}),
	function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
	}(this, function() {
		"use strict";

		function t(e, t) {
			var i = [],
				a = 0;
			if (e && !t && e instanceof Ne) return e;
			if (e)
				if ("string" == typeof e) {
					var s, n, r = e.trim();
					if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
						var o = "div";
						for (0 === r.indexOf("<li") && (o = "ul"), 0 === r.indexOf("<tr") && (o = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (o = "tr"), 0 === r.indexOf("<tbody") && (o = "table"), 0 === r.indexOf("<option") && (o = "select"), (n = _e.createElement(o)).innerHTML = r, a = 0; a < n.childNodes.length; a += 1) i.push(n.childNodes[a])
					} else
						for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || _e).querySelectorAll(e.trim()) : [_e.getElementById(e.trim().split("#")[1])], a = 0; a < s.length; a += 1) s[a] && i.push(s[a])
				} else if (e.nodeType || e === qe || e === _e) i.push(e);
			else if (e.length > 0 && e[0].nodeType)
				for (a = 0; a < e.length; a += 1) i.push(e[a]);
			return new Ne(i)
		}

		function i(e) {
			for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
			return t
		}

		function a(e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var a = 0; a < this.length; a += 1) "undefined" != typeof this[a] && "undefined" != typeof this[a].classList && this[a].classList.add(t[i]);
			return this
		}

		function s(e) {
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var a = 0; a < this.length; a += 1) "undefined" != typeof this[a] && "undefined" != typeof this[a].classList && this[a].classList.remove(t[i]);
			return this
		}

		function n(e) {
			return !!this[0] && this[0].classList.contains(e)
		}

		function r(e) {
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var a = 0; a < this.length; a += 1) "undefined" != typeof this[a] && "undefined" != typeof this[a].classList && this[a].classList.toggle(t[i]);
			return this
		}

		function o(e, t) {
			var i = arguments;
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : undefined;
			for (var a = 0; a < this.length; a += 1)
				if (2 === i.length) this[a].setAttribute(e, t);
				else
					for (var s in e) this[a][s] = e[s], this[a].setAttribute(s, e[s]);
			return this
		}

		function l(e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		}

		function d(e, t) {
			var i;
			if (void 0 === t) {
				if (i = this[0]) {
					if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
					var a = i.getAttribute("data-" + e);
					return a || undefined
				}
				return undefined
			}
			for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
			return this
		}

		function c(e) {
			for (var t = 0; t < this.length; t += 1) {
				var i = this[t].style;
				i.webkitTransform = e, i.transform = e
			}
			return this
		}

		function u(e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var i = this[t].style;
				i.webkitTransitionDuration = e, i.transitionDuration = e
			}
			return this
		}

		function p() {
			function e(e) {
				var i = e.target;
				if (i) {
					var a = e.target.dom7EventData || [];
					if (a.indexOf(e) < 0 && a.unshift(e), t(i).is(o)) l.apply(i, a);
					else
						for (var s = t(i).parents(), n = 0; n < s.length; n += 1) t(s[n]).is(o) && l.apply(s[n], a)
				}
			}

			function i(e) {
				var t = e && e.target && e.target.dom7EventData || [];
				t.indexOf(e) < 0 && t.unshift(e), l.apply(this, t)
			}
			for (var a, s = [], n = arguments.length; n--;) s[n] = arguments[n];
			var r = s[0],
				o = s[1],
				l = s[2],
				d = s[3];
			"function" == typeof s[1] && (r = (a = s)[0], l = a[1], d = a[2], o = undefined), d || (d = !1);
			for (var c, u = r.split(" "), p = 0; p < this.length; p += 1) {
				var h = this[p];
				if (o)
					for (c = 0; c < u.length; c += 1) {
						var f = u[c];
						h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
							listener: l,
							proxyListener: e
						}), h.addEventListener(f, e, d)
					} else
						for (c = 0; c < u.length; c += 1) {
							var v = u[c];
							h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[v] || (h.dom7Listeners[v] = []), h.dom7Listeners[v].push({
								listener: l,
								proxyListener: i
							}), h.addEventListener(v, i, d)
						}
			}
			return this
		}

		function h() {
			for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
			var a = t[0],
				s = t[1],
				n = t[2],
				r = t[3];
			"function" == typeof t[1] && (a = (e = t)[0], n = e[1], r = e[2], s = undefined), r || (r = !1);
			for (var o = a.split(" "), l = 0; l < o.length; l += 1)
				for (var d = o[l], c = 0; c < this.length; c += 1) {
					var u = this[c],
						p = void 0;
					if (!s && u.dom7Listeners ? p = u.dom7Listeners[d] : s && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length)
						for (var h = p.length - 1; h >= 0; h -= 1) {
							var f = p[h];
							n && f.listener === n ? (u.removeEventListener(d, f.proxyListener, r), p.splice(h, 1)) : n && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === n ? (u.removeEventListener(d, f.proxyListener, r), p.splice(h, 1)) : n || (u.removeEventListener(d, f.proxyListener, r), p.splice(h, 1))
						}
				}
			return this
		}

		function f() {
			for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
			for (var a = t[0].split(" "), s = t[1], n = 0; n < a.length; n += 1)
				for (var r = a[n], o = 0; o < this.length; o += 1) {
					var l = this[o],
						d = void 0;
					try {
						d = new qe.CustomEvent(r, {
							detail: s,
							bubbles: !0,
							cancelable: !0
						})
					} catch (e) {
						(d = _e.createEvent("Event")).initEvent(r, !0, !0), d.detail = s
					}
					l.dom7EventData = t.filter(function(e, t) {
						return t > 0
					}), l.dispatchEvent(d), l.dom7EventData = [], delete l.dom7EventData
				}
			return this
		}

		function v(e) {
			function t(n) {
				if (n.target === this)
					for (e.call(this, n), i = 0; i < a.length; i += 1) s.off(a[i], t)
			}
			var i, a = ["webkitTransitionEnd", "transitionend"],
				s = this;
			if (e)
				for (i = 0; i < a.length; i += 1) s.on(a[i], t);
			return this
		}

		function m(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		}

		function g(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		}

		function y() {
			if (this.length > 0) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					i = _e.body,
					a = e.clientTop || i.clientTop || 0,
					s = e.clientLeft || i.clientLeft || 0,
					n = e === qe ? qe.scrollY : e.scrollTop,
					r = e === qe ? qe.scrollX : e.scrollLeft;
				return {
					top: t.top + n - a,
					left: t.left + r - s
				}
			}
			return null
		}

		function b() {
			return this[0] ? qe.getComputedStyle(this[0], null) : {}
		}

		function w(e, t) {
			var i;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (i = 0; i < this.length; i += 1)
						for (var a in e) this[i].style[a] = e[a];
					return this
				}
				if (this[0]) return qe.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
				return this
			}
			return this
		}

		function x(e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		}

		function E(e) {
			for (var t = [], i = this, a = 0; a < i.length; a += 1) e.call(i[a], a, i[a]) && t.push(i[a]);
			return new Ne(t)
		}

		function T(e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : undefined;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		}

		function S(e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		}

		function C(e) {
			var i, a, s = this[0];
			if (!s || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (s.matches) return s.matches(e);
				if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
				if (s.msMatchesSelector) return s.msMatchesSelector(e);
				for (i = t(e), a = 0; a < i.length; a += 1)
					if (i[a] === s) return !0;
				return !1
			}
			if (e === _e) return s === _e;
			if (e === qe) return s === qe;
			if (e.nodeType || e instanceof Ne) {
				for (i = e.nodeType ? [e] : e, a = 0; a < i.length; a += 1)
					if (i[a] === s) return !0;
				return !1
			}
			return !1
		}

		function M() {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
			return undefined
		}

		function k(e) {
			if (void 0 === e) return this;
			var t, i = this.length;
			return new Ne(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
		}

		function P() {
			for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
			for (var a = 0; a < t.length; a += 1) {
				e = t[a];
				for (var s = 0; s < this.length; s += 1)
					if ("string" == typeof e) {
						var n = _e.createElement("div");
						for (n.innerHTML = e; n.firstChild;) this[s].appendChild(n.firstChild)
					} else if (e instanceof Ne)
					for (var r = 0; r < e.length; r += 1) this[s].appendChild(e[r]);
				else this[s].appendChild(e)
			}
			return this
		}

		function L(e) {
			var t, i;
			for (t = 0; t < this.length; t += 1)
				if ("string" == typeof e) {
					var a = _e.createElement("div");
					for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
				} else if (e instanceof Ne)
				for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
			else this[t].insertBefore(e, this[t].childNodes[0]);
			return this
		}

		function z(e) {
			return this.length > 0 ? e ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(e) ? new Ne([this[0].nextElementSibling]) : new Ne([]) : this[0].nextElementSibling ? new Ne([this[0].nextElementSibling]) : new Ne([]) : new Ne([])
		}

		function I(e) {
			var i = [],
				a = this[0];
			if (!a) return new Ne([]);
			for (; a.nextElementSibling;) {
				var s = a.nextElementSibling;
				e ? t(s).is(e) && i.push(s) : i.push(s), a = s
			}
			return new Ne(i)
		}

		function A(e) {
			if (this.length > 0) {
				var i = this[0];
				return e ? i.previousElementSibling && t(i.previousElementSibling).is(e) ? new Ne([i.previousElementSibling]) : new Ne([]) : i.previousElementSibling ? new Ne([i.previousElementSibling]) : new Ne([])
			}
			return new Ne([])
		}

		function $(e) {
			var i = [],
				a = this[0];
			if (!a) return new Ne([]);
			for (; a.previousElementSibling;) {
				var s = a.previousElementSibling;
				e ? t(s).is(e) && i.push(s) : i.push(s), a = s
			}
			return new Ne(i)
		}

		function O(e) {
			for (var a = [], s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? t(this[s].parentNode).is(e) && a.push(this[s].parentNode) : a.push(this[s].parentNode));
			return t(i(a))
		}

		function D(e) {
			for (var a = [], s = 0; s < this.length; s += 1)
				for (var n = this[s].parentNode; n;) e ? t(n).is(e) && a.push(n) : a.push(n), n = n.parentNode;
			return t(i(a))
		}

		function B(e) {
			var t = this;
			return void 0 === e ? new Ne([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		}

		function H(e) {
			for (var t = [], i = 0; i < this.length; i += 1)
				for (var a = this[i].querySelectorAll(e), s = 0; s < a.length; s += 1) t.push(a[s]);
			return new Ne(t)
		}

		function _(e) {
			for (var a = [], s = 0; s < this.length; s += 1)
				for (var n = this[s].childNodes, r = 0; r < n.length; r += 1) e ? 1 === n[r].nodeType && t(n[r]).is(e) && a.push(n[r]) : 1 === n[r].nodeType && a.push(n[r]);
			return new Ne(i(a))
		}

		function q() {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		}

		function N() {
			for (var e = [], i = arguments.length; i--;) e[i] = arguments[i];
			var a, s, n = this;
			for (a = 0; a < e.length; a += 1) {
				var r = t(e[a]);
				for (s = 0; s < r.length; s += 1) n[n.length] = r[s], n.length += 1
			}
			return n
		}

		function R() {
			var e, t, i = this,
				a = i.$el;
			e = "undefined" != typeof i.params.width ? i.params.width : a[0].clientWidth, t = "undefined" != typeof i.params.height ? i.params.height : a[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(a.css("padding-left"), 10) - parseInt(a.css("padding-right"), 10), t = t - parseInt(a.css("padding-top"), 10) - parseInt(a.css("padding-bottom"), 10), Ve.extend(i, {
				width: e,
				height: t,
				size: i.isHorizontal() ? e : t
			}))
		}

		function V() {
			function e(e) {
				return !i.cssMode || e !== d.length - 1
			}
			var t = this,
				i = t.params,
				a = t.$wrapperEl,
				s = t.size,
				n = t.rtlTranslate,
				r = t.wrongRTL,
				o = t.virtual && i.virtual.enabled,
				l = o ? t.virtual.slides.length : t.slides.length,
				d = a.children("." + t.params.slideClass),
				c = o ? t.virtual.slides.length : d.length,
				u = [],
				p = [],
				h = [],
				f = i.slidesOffsetBefore;
			"function" == typeof f && (f = i.slidesOffsetBefore.call(t));
			var v = i.slidesOffsetAfter;
			"function" == typeof v && (v = i.slidesOffsetAfter.call(t));
			var m = t.snapGrid.length,
				g = t.snapGrid.length,
				y = i.spaceBetween,
				b = -f,
				w = 0,
				x = 0;
			if (void 0 !== s) {
				var E, T;
				"string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), t.virtualSize = -y, n ? d.css({
					marginLeft: "",
					marginTop: ""
				}) : d.css({
					marginRight: "",
					marginBottom: ""
				}), i.slidesPerColumn > 1 && (E = Math.floor(c / i.slidesPerColumn) === c / t.params.slidesPerColumn ? c : Math.ceil(c / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (E = Math.max(E, i.slidesPerView * i.slidesPerColumn)));
				for (var S, C = i.slidesPerColumn, M = E / C, k = Math.floor(c / i.slidesPerColumn), P = 0; P < c; P += 1) {
					T = 0;
					var L = d.eq(P);
					if (i.slidesPerColumn > 1) {
						var z = void 0,
							I = void 0,
							A = void 0;
						if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
							var $ = Math.floor(P / (i.slidesPerGroup * i.slidesPerColumn)),
								O = P - i.slidesPerColumn * i.slidesPerGroup * $,
								D = 0 === $ ? i.slidesPerGroup : Math.min(Math.ceil((c - $ * C * i.slidesPerGroup) / C), i.slidesPerGroup);
							z = (I = O - (A = Math.floor(O / D)) * D + $ * i.slidesPerGroup) + A * E / C, L.css({
								"-webkit-box-ordinal-group": z,
								"-moz-box-ordinal-group": z,
								"-ms-flex-order": z,
								"-webkit-order": z,
								order: z
							})
						} else "column" === i.slidesPerColumnFill ? (A = P - (I = Math.floor(P / C)) * C, (I > k || I === k && A === C - 1) && (A += 1) >= C && (A = 0, I += 1)) : I = P - (A = Math.floor(P / M)) * M;
						L.css("margin-" + (t.isHorizontal() ? "top" : "left"), 0 !== A && i.spaceBetween && i.spaceBetween + "px")
					}
					if ("none" !== L.css("display")) {
						if ("auto" === i.slidesPerView) {
							var B = qe.getComputedStyle(L[0], null),
								H = L[0].style.transform,
								_ = L[0].style.webkitTransform;
							if (H && (L[0].style.transform = "none"), _ && (L[0].style.webkitTransform = "none"), i.roundLengths) T = t.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
							else if (t.isHorizontal()) {
								var q = parseFloat(B.getPropertyValue("width")),
									N = parseFloat(B.getPropertyValue("padding-left")),
									R = parseFloat(B.getPropertyValue("padding-right")),
									V = parseFloat(B.getPropertyValue("margin-left")),
									G = parseFloat(B.getPropertyValue("margin-right")),
									F = B.getPropertyValue("box-sizing");
								T = F && "border-box" === F ? q + V + G : q + N + R + V + G
							} else {
								var X = parseFloat(B.getPropertyValue("height")),
									Y = parseFloat(B.getPropertyValue("padding-top")),
									W = parseFloat(B.getPropertyValue("padding-bottom")),
									j = parseFloat(B.getPropertyValue("margin-top")),
									U = parseFloat(B.getPropertyValue("margin-bottom")),
									K = B.getPropertyValue("box-sizing");
								T = K && "border-box" === K ? X + j + U : X + Y + W + j + U
							}
							H && (L[0].style.transform = H), _ && (L[0].style.webkitTransform = _), i.roundLengths && (T = Math.floor(T))
						} else T = (s - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (T = Math.floor(T)), d[P] && (t.isHorizontal() ? d[P].style.width = T + "px" : d[P].style.height = T + "px");
						d[P] && (d[P].swiperSlideSize = T), h.push(T), i.centeredSlides ? (b = b + T / 2 + w / 2 + y, 0 === w && 0 !== P && (b = b - s / 2 - y), 0 === P && (b = b - s / 2 - y), Math.abs(b) < .001 && (b = 0), i.roundLengths && (b = Math.floor(b)), x % i.slidesPerGroup == 0 && u.push(b), p.push(b)) : (i.roundLengths && (b = Math.floor(b)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && u.push(b), p.push(b), b = b + T + y), t.virtualSize += T + y, w = T, x += 1
					}
				}
				if (t.virtualSize = Math.max(t.virtualSize, s) + v, n && r && ("slide" === i.effect || "coverflow" === i.effect) && a.css({
						width: t.virtualSize + i.spaceBetween + "px"
					}), i.setWrapperSize && (t.isHorizontal() ? a.css({
						width: t.virtualSize + i.spaceBetween + "px"
					}) : a.css({
						height: t.virtualSize + i.spaceBetween + "px"
					})), i.slidesPerColumn > 1 && (t.virtualSize = (T + i.spaceBetween) * E, t.virtualSize = Math.ceil(t.virtualSize / i.slidesPerColumn) - i.spaceBetween, t.isHorizontal() ? a.css({
						width: t.virtualSize + i.spaceBetween + "px"
					}) : a.css({
						height: t.virtualSize + i.spaceBetween + "px"
					}), i.centeredSlides)) {
					S = [];
					for (var J = 0; J < u.length; J += 1) {
						var Q = u[J];
						i.roundLengths && (Q = Math.floor(Q)), u[J] < t.virtualSize + u[0] && S.push(Q)
					}
					u = S
				}
				if (!i.centeredSlides) {
					S = [];
					for (var Z = 0; Z < u.length; Z += 1) {
						var ee = u[Z];
						i.roundLengths && (ee = Math.floor(ee)), u[Z] <= t.virtualSize - s && S.push(ee)
					}
					u = S, Math.floor(t.virtualSize - s) - Math.floor(u[u.length - 1]) > 1 && u.push(t.virtualSize - s)
				}
				if (0 === u.length && (u = [0]), 0 !== i.spaceBetween && (t.isHorizontal() ? n ? d.filter(e).css({
						marginLeft: y + "px"
					}) : d.filter(e).css({
						marginRight: y + "px"
					}) : d.filter(e).css({
						marginBottom: y + "px"
					})), i.centeredSlides && i.centeredSlidesBounds) {
					var te = 0;
					h.forEach(function(e) {
						te += e + (i.spaceBetween ? i.spaceBetween : 0)
					});
					var ie = (te -= i.spaceBetween) - s;
					u = u.map(function(e) {
						return e < 0 ? -f : e > ie ? ie + v : e
					})
				}
				if (i.centerInsufficientSlides) {
					var ae = 0;
					if (h.forEach(function(e) {
							ae += e + (i.spaceBetween ? i.spaceBetween : 0)
						}), (ae -= i.spaceBetween) < s) {
						var se = (s - ae) / 2;
						u.forEach(function(e, t) {
							u[t] = e - se
						}), p.forEach(function(e, t) {
							p[t] = e + se
						})
					}
				}
				Ve.extend(t, {
					slides: d,
					snapGrid: u,
					slidesGrid: p,
					slidesSizesGrid: h
				}), c !== l && t.emit("slidesLengthChange"), u.length !== m && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== g && t.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesOffset()
			}
		}

		function G(e) {
			var t, i = this,
				a = [],
				s = 0;
			if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
				if (i.params.centeredSlides) a.push.apply(a, i.visibleSlides);
				else
					for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
						var n = i.activeIndex + t;
						if (n > i.slides.length) break;
						a.push(i.slides.eq(n)[0])
					} else a.push(i.slides.eq(i.activeIndex)[0]);
			for (t = 0; t < a.length; t += 1)
				if ("undefined" != typeof a[t]) {
					var r = a[t].offsetHeight;
					s = r > s ? r : s
				} s && i.$wrapperEl.css("height", s + "px")
		}

		function F() {
			for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
		}

		function X(e) {
			void 0 === e && (e = this && this.translate || 0);
			var i = this,
				a = i.params,
				s = i.slides,
				n = i.rtlTranslate;
			if (0 !== s.length) {
				"undefined" == typeof s[0].swiperSlideOffset && i.updateSlidesOffset();
				var r = -e;
				n && (r = e), s.removeClass(a.slideVisibleClass), i.visibleSlidesIndexes = [], i.visibleSlides = [];
				for (var o = 0; o < s.length; o += 1) {
					var l = s[o],
						d = (r + (a.centeredSlides ? i.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);
					if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
						var c = -(r - l.swiperSlideOffset),
							u = c + i.slidesSizesGrid[o];
						(c >= 0 && c < i.size - 1 || u > 1 && u <= i.size || c <= 0 && u >= i.size) && (i.visibleSlides.push(l), i.visibleSlidesIndexes.push(o), s.eq(o).addClass(a.slideVisibleClass))
					}
					l.progress = n ? -d : d
				}
				i.visibleSlides = t(i.visibleSlides)
			}
		}

		function Y(e) {
			var t = this;
			if (void 0 === e) {
				var i = t.rtlTranslate ? -1 : 1;
				e = t && t.translate && t.translate * i || 0
			}
			var a = t.params,
				s = t.maxTranslate() - t.minTranslate(),
				n = t.progress,
				r = t.isBeginning,
				o = t.isEnd,
				l = r,
				d = o;
			0 === s ? (n = 0, r = !0, o = !0) : (r = (n = (e - t.minTranslate()) / s) <= 0, o = n >= 1), Ve.extend(t, {
				progress: n,
				isBeginning: r,
				isEnd: o
			}), (a.watchSlidesProgress || a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !r || d && !o) && t.emit("fromEdge"), t.emit("progress", n)
		}

		function W() {
			var e, t = this,
				i = t.slides,
				a = t.params,
				s = t.$wrapperEl,
				n = t.activeIndex,
				r = t.realIndex,
				o = t.virtual && a.virtual.enabled;
			i.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + n + '"]') : i.eq(n)).addClass(a.slideActiveClass), a.loop && (e.hasClass(a.slideDuplicateClass) ? s.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass) : s.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
			var l = e.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
			a.loop && 0 === l.length && (l = i.eq(0)).addClass(a.slideNextClass);
			var d = e.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
			a.loop && 0 === d.length && (d = i.eq(-1)).addClass(a.slidePrevClass), a.loop && (l.hasClass(a.slideDuplicateClass) ? s.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : s.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? s.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : s.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
		}

		function j(e) {
			var t, i = this,
				a = i.rtlTranslate ? i.translate : -i.translate,
				s = i.slidesGrid,
				n = i.snapGrid,
				r = i.params,
				o = i.activeIndex,
				l = i.realIndex,
				d = i.snapIndex,
				c = e;
			if (void 0 === c) {
				for (var u = 0; u < s.length; u += 1) "undefined" != typeof s[u + 1] ? a >= s[u] && a < s[u + 1] - (s[u + 1] - s[u]) / 2 ? c = u : a >= s[u] && a < s[u + 1] && (c = u + 1) : a >= s[u] && (c = u);
				r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
			}
			if (n.indexOf(a) >= 0) t = n.indexOf(a);
			else {
				var p = Math.min(r.slidesPerGroupSkip, c);
				t = p + Math.floor((c - p) / r.slidesPerGroup)
			}
			if (t >= n.length && (t = n.length - 1), c !== o) {
				var h = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
				Ve.extend(i, {
					snapIndex: t,
					realIndex: h,
					previousIndex: o,
					activeIndex: c
				}), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== h && i.emit("realIndexChange"), (i.initialized || i.runCallbacksOnInit) && i.emit("slideChange")
			} else t !== d && (i.snapIndex = t, i.emit("snapIndexChange"))
		}

		function U(e) {
			var i = this,
				a = i.params,
				s = t(e.target).closest("." + a.slideClass)[0],
				n = !1;
			if (s)
				for (var r = 0; r < i.slides.length; r += 1) i.slides[r] === s && (n = !0);
			if (!s || !n) return i.clickedSlide = undefined, void(i.clickedIndex = undefined);
			i.clickedSlide = s, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(t(s).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t(s).index(), a.slideToClickedSlide && i.clickedIndex !== undefined && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
		}

		function K(e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			var t = this,
				i = t.params,
				a = t.rtlTranslate,
				s = t.translate,
				n = t.$wrapperEl;
			if (i.virtualTranslate) return a ? -s : s;
			if (i.cssMode) return s;
			var r = Ve.getTranslate(n[0], e);
			return a && (r = -r), r || 0
		}

		function J(e, t) {
			var i = this,
				a = i.rtlTranslate,
				s = i.params,
				n = i.$wrapperEl,
				r = i.wrapperEl,
				o = i.progress,
				l = 0,
				d = 0,
				c = 0;
			i.isHorizontal() ? l = a ? -e : e : d = e, s.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -d : s.virtualTranslate || n.transform("translate3d(" + l + "px, " + d + "px, " + c + "px)"), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d;
			var u = i.maxTranslate() - i.minTranslate();
			(0 === u ? 0 : (e - i.minTranslate()) / u) !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
		}

		function Q() {
			return -this.snapGrid[0]
		}

		function Z() {
			return -this.snapGrid[this.snapGrid.length - 1]
		}

		function ee(e, t, i, a, s) {
			var n;
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === a && (a = !0);
			var r = this,
				o = r.params,
				l = r.wrapperEl;
			if (r.animating && o.preventInteractionOnTransition) return !1;
			var d, c = r.minTranslate(),
				u = r.maxTranslate();
			if (d = a && e > c ? c : a && e < u ? u : e, r.updateProgress(d), o.cssMode) {
				var p = r.isHorizontal();
				return 0 === t ? l[p ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((n = {})[p ? "left" : "top"] = -d, n.behavior = "smooth", n)) : l[p ? "scrollLeft" : "scrollTop"] = -d, !0
			}
			return 0 === t ? (r.setTransition(0), r.setTranslate(d), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
				r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
			}), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
		}

		function te(e, t) {
			var i = this;
			i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
		}

		function ie(e, t) {
			void 0 === e && (e = !0);
			var i = this,
				a = i.activeIndex,
				s = i.params,
				n = i.previousIndex;
			if (!s.cssMode) {
				s.autoHeight && i.updateAutoHeight();
				var r = t;
				if (r || (r = a > n ? "next" : a < n ? "prev" : "reset"), i.emit("transitionStart"), e && a !== n) {
					if ("reset" === r) return void i.emit("slideResetTransitionStart");
					i.emit("slideChangeTransitionStart"), "next" === r ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
				}
			}
		}

		function ae(e, t) {
			void 0 === e && (e = !0);
			var i = this,
				a = i.activeIndex,
				s = i.previousIndex,
				n = i.params;
			if (i.animating = !1, !n.cssMode) {
				i.setTransition(0);
				var r = t;
				if (r || (r = a > s ? "next" : a < s ? "prev" : "reset"), i.emit("transitionEnd"), e && a !== s) {
					if ("reset" === r) return void i.emit("slideResetTransitionEnd");
					i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
				}
			}
		}

		function se(e, t, i, a) {
			var s;
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
			var n = this,
				r = e;
			r < 0 && (r = 0);
			var o = n.params,
				l = n.snapGrid,
				d = n.slidesGrid,
				c = n.previousIndex,
				u = n.activeIndex,
				p = n.rtlTranslate,
				h = n.wrapperEl;
			if (n.animating && o.preventInteractionOnTransition) return !1;
			var f = Math.min(n.params.slidesPerGroupSkip, r),
				v = f + Math.floor((r - f) / n.params.slidesPerGroup);
			v >= l.length && (v = l.length - 1), (u || o.initialSlide || 0) === (c || 0) && i && n.emit("beforeSlideChangeStart");
			var m, g = -l[v];
			if (n.updateProgress(g), o.normalizeSlideIndex)
				for (var y = 0; y < d.length; y += 1) - Math.floor(100 * g) >= Math.floor(100 * d[y]) && (r = y);
			if (n.initialized && r !== u) {
				if (!n.allowSlideNext && g < n.translate && g < n.minTranslate()) return !1;
				if (!n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (u || 0) !== r) return !1
			}
			if (m = r > u ? "next" : r < u ? "prev" : "reset", p && -g === n.translate || !p && g === n.translate) return n.updateActiveIndex(r), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(g), "reset" !== m && (n.transitionStart(i, m), n.transitionEnd(i, m)), !1;
			if (o.cssMode) {
				var b = n.isHorizontal();
				return 0 === t ? h[b ? "scrollLeft" : "scrollTop"] = -g : h.scrollTo ? h.scrollTo(((s = {})[b ? "left" : "top"] = -g, s.behavior = "smooth", s)) : h[b ? "scrollLeft" : "scrollTop"] = -g, !0
			}
			return 0 === t ? (n.setTransition(0), n.setTranslate(g), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, a), n.transitionStart(i, m), n.transitionEnd(i, m)) : (n.setTransition(t), n.setTranslate(g), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, a), n.transitionStart(i, m), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
				n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, m))
			}), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0
		}

		function ne(e, t, i, a) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
			var s = this,
				n = e;
			return s.params.loop && (n += s.loopedSlides), s.slideTo(n, t, i, a)
		}

		function re(e, t, i) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var a = this,
				s = a.params,
				n = a.animating,
				r = a.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
			if (s.loop) {
				if (n) return !1;
				a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
			}
			return a.slideTo(a.activeIndex + r, e, t, i)
		}

		function oe(e, t, i) {
			function a(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
			}
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var s = this,
				n = s.params,
				r = s.animating,
				o = s.snapGrid,
				l = s.slidesGrid,
				d = s.rtlTranslate;
			if (n.loop) {
				if (r) return !1;
				s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
			}
			var c, u = a(d ? s.translate : -s.translate),
				p = o.map(function(e) {
					return a(e)
				}),
				h = (l.map(function(e) {
					return a(e)
				}), o[p.indexOf(u)], o[p.indexOf(u) - 1]);
			return void 0 === h && n.cssMode && o.forEach(function(e) {
				!h && u >= e && (h = e)
			}), void 0 !== h && (c = l.indexOf(h)) < 0 && (c = s.activeIndex - 1), s.slideTo(c, e, t, i)
		}

		function le(e, t, i) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var a = this;
			return a.slideTo(a.activeIndex, e, t, i)
		}

		function de(e, t, i, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
			var s = this,
				n = s.activeIndex,
				r = Math.min(s.params.slidesPerGroupSkip, n),
				o = r + Math.floor((n - r) / s.params.slidesPerGroup),
				l = s.rtlTranslate ? s.translate : -s.translate;
			if (l >= s.snapGrid[o]) {
				var d = s.snapGrid[o];
				l - d > (s.snapGrid[o + 1] - d) * a && (n += s.params.slidesPerGroup)
			} else {
				var c = s.snapGrid[o - 1];
				l - c <= (s.snapGrid[o] - c) * a && (n -= s.params.slidesPerGroup)
			}
			return n = Math.max(n, 0), n = Math.min(n, s.slidesGrid.length - 1), s.slideTo(n, e, t, i)
		}

		function ce() {
			var e, i = this,
				a = i.params,
				s = i.$wrapperEl,
				n = "auto" === a.slidesPerView ? i.slidesPerViewDynamic() : a.slidesPerView,
				r = i.clickedIndex;
			if (a.loop) {
				if (i.animating) return;
				e = parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < i.loopedSlides - n / 2 || r > i.slides.length - i.loopedSlides + n / 2 ? (i.loopFix(), r = s.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), Ve.nextTick(function() {
					i.slideTo(r)
				})) : i.slideTo(r) : r > i.slides.length - n ? (i.loopFix(), r = s.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), Ve.nextTick(function() {
					i.slideTo(r)
				})) : i.slideTo(r)
			} else i.slideTo(r)
		}

		function ue() {
			var e = this,
				i = e.params,
				a = e.$wrapperEl;
			a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
			var s = a.children("." + i.slideClass);
			if (i.loopFillGroupWithBlank) {
				var n = i.slidesPerGroup - s.length % i.slidesPerGroup;
				if (n !== i.slidesPerGroup) {
					for (var r = 0; r < n; r += 1) {
						var o = t(_e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
						a.append(o)
					}
					s = a.children("." + i.slideClass)
				}
			}
			"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
			var l = [],
				d = [];
			s.each(function(i, a) {
				var n = t(a);
				i < e.loopedSlides && d.push(a), i < s.length && i >= s.length - e.loopedSlides && l.push(a), n.attr("data-swiper-slide-index", i)
			});
			for (var c = 0; c < d.length; c += 1) a.append(t(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
			for (var u = l.length - 1; u >= 0; u -= 1) a.prepend(t(l[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
		}

		function pe() {
			var e = this;
			e.emit("beforeLoopFix");
			var t, i = e.activeIndex,
				a = e.slides,
				s = e.loopedSlides,
				n = e.allowSlidePrev,
				r = e.allowSlideNext,
				o = e.snapGrid,
				l = e.rtlTranslate;
			e.allowSlidePrev = !0, e.allowSlideNext = !0;
			var d = -o[i] - e.getTranslate();
			if (i < s) t = a.length - 3 * s + i, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
			else if (i >= a.length - s) {
				t = -a.length + i + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
			}
			e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix")
		}

		function he() {
			var e = this,
				t = e.$wrapperEl,
				i = e.params,
				a = e.slides;
			t.children("." + i.slideClass + "." + i.slideDuplicateClass + ",." + i.slideClass + "." + i.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
		}

		function fe(e) {
			var t = this;
			if (!(Ge.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
				var i = t.el;
				i.style.cursor = "move", i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = e ? "-moz-grabbin" : "-moz-grab", i.style.cursor = e ? "grabbing" : "grab"
			}
		}

		function ve() {
			var e = this;
			Ge.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
		}

		function me(e) {
			var t = this,
				i = t.$wrapperEl,
				a = t.params;
			if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
				for (var s = 0; s < e.length; s += 1) e[s] && i.append(e[s]);
			else i.append(e);
			a.loop && t.loopCreate(), a.observer && Ge.observer || t.update()
		}

		function ge(e) {
			var t = this,
				i = t.params,
				a = t.$wrapperEl,
				s = t.activeIndex;
			i.loop && t.loopDestroy();
			var n = s + 1;
			if ("object" == typeof e && "length" in e) {
				for (var r = 0; r < e.length; r += 1) e[r] && a.prepend(e[r]);
				n = s + e.length
			} else a.prepend(e);
			i.loop && t.loopCreate(), i.observer && Ge.observer || t.update(), t.slideTo(n, 0, !1)
		}

		function ye(e, t) {
			var i = this,
				a = i.$wrapperEl,
				s = i.params,
				n = i.activeIndex;
			s.loop && (n -= i.loopedSlides, i.loopDestroy(), i.slides = a.children("." + s.slideClass));
			var r = i.slides.length;
			if (e <= 0) i.prependSlide(t);
			else if (e >= r) i.appendSlide(t);
			else {
				for (var o = n > e ? n + 1 : n, l = [], d = r - 1; d >= e; d -= 1) {
					var c = i.slides.eq(d);
					c.remove(), l.unshift(c)
				}
				if ("object" == typeof t && "length" in t) {
					for (var u = 0; u < t.length; u += 1) t[u] && a.append(t[u]);
					o = n > e ? n + t.length : n
				} else a.append(t);
				for (var p = 0; p < l.length; p += 1) a.append(l[p]);
				s.loop && i.loopCreate(), s.observer && Ge.observer || i.update(), s.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
			}
		}

		function be(e) {
			var t = this,
				i = t.params,
				a = t.$wrapperEl,
				s = t.activeIndex;
			i.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = a.children("." + i.slideClass));
			var n, r = s;
			if ("object" == typeof e && "length" in e) {
				for (var o = 0; o < e.length; o += 1) n = e[o], t.slides[n] && t.slides.eq(n).remove(), n < r && (r -= 1);
				r = Math.max(r, 0)
			} else n = e, t.slides[n] && t.slides.eq(n).remove(), n < r && (r -= 1), r = Math.max(r, 0);
			i.loop && t.loopCreate(), i.observer && Ge.observer || t.update(), i.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1)
		}

		function we() {
			for (var e = this, t = [], i = 0; i < e.slides.length; i += 1) t.push(i);
			e.removeSlide(t)
		}

		function xe(e) {
			var i = this,
				a = i.touchEventsData,
				s = i.params,
				n = i.touches;
			if (!i.animating || !s.preventInteractionOnTransition) {
				var r = e;
				r.originalEvent && (r = r.originalEvent);
				var o = t(r.target);
				if (("wrapper" !== s.touchEventsTarget || o.closest(i.wrapperEl).length) && (a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && r.button > 0 || a.isTouched && a.isMoved)))
					if (s.noSwiping && o.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) i.allowClick = !0;
					else if (!s.swipeHandler || o.closest(s.swipeHandler)[0]) {
					n.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, n.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
					var l = n.currentX,
						d = n.currentY,
						c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
						u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
					if (!c || !(l <= u || l >= qe.screen.width - u)) {
						if (Ve.extend(a, {
								isTouched: !0,
								isMoved: !1,
								allowTouchCallbacks: !0,
								isScrolling: undefined,
								startMoving: undefined
							}), n.startX = l, n.startY = d, a.touchStartTime = Ve.now(), i.allowClick = !0, i.updateSize(), i.swipeDirection = undefined, s.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
							var p = !0;
							o.is(a.formElements) && (p = !1), _e.activeElement && t(_e.activeElement).is(a.formElements) && _e.activeElement !== o[0] && _e.activeElement.blur();
							var h = p && i.allowTouchMove && s.touchStartPreventDefault;
							(s.touchStartForcePreventDefault || h) && r.preventDefault()
						}
						i.emit("touchStart", r)
					}
				}
			}
		}

		function Ee(e) {
			var i = this,
				a = i.touchEventsData,
				s = i.params,
				n = i.touches,
				r = i.rtlTranslate,
				o = e;
			if (o.originalEvent && (o = o.originalEvent), a.isTouched) {
				if (!a.isTouchEvent || "mousemove" !== o.type) {
					var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
						d = "touchmove" === o.type ? l.pageX : o.pageX,
						c = "touchmove" === o.type ? l.pageY : o.pageY;
					if (o.preventedByNestedSwiper) return n.startX = d, void(n.startY = c);
					if (!i.allowTouchMove) return i.allowClick = !1, void(a.isTouched && (Ve.extend(n, {
						startX: d,
						startY: c,
						currentX: d,
						currentY: c
					}), a.touchStartTime = Ve.now()));
					if (a.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
						if (i.isVertical()) {
							if (c < n.startY && i.translate <= i.maxTranslate() || c > n.startY && i.translate >= i.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
						} else if (d < n.startX && i.translate <= i.maxTranslate() || d > n.startX && i.translate >= i.minTranslate()) return;
					if (a.isTouchEvent && _e.activeElement && o.target === _e.activeElement && t(o.target).is(a.formElements)) return a.isMoved = !0, void(i.allowClick = !1);
					if (a.allowTouchCallbacks && i.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
						n.currentX = d, n.currentY = c;
						var u = n.currentX - n.startX,
							p = n.currentY - n.startY;
						if (!(i.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(p, 2)) < i.params.threshold)) {
							var h;
							if ("undefined" == typeof a.isScrolling) i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? a.isScrolling = !1 : u * u + p * p >= 25 && (h = 180 * Math.atan2(Math.abs(p), Math.abs(u)) / Math.PI, a.isScrolling = i.isHorizontal() ? h > s.touchAngle : 90 - h > s.touchAngle);
							if (a.isScrolling && i.emit("touchMoveOpposite", o), "undefined" == typeof a.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
							else if (a.startMoving) {
								i.allowClick = !1, s.cssMode || o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), a.isMoved || (s.loop && i.loopFix(), a.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !s.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), a.isMoved = !0;
								var f = i.isHorizontal() ? u : p;
								n.diff = f, f *= s.touchRatio, r && (f = -f), i.swipeDirection = f > 0 ? "prev" : "next", a.currentTranslate = f + a.startTranslate;
								var v = !0,
									m = s.resistanceRatio;
								if (s.touchReleaseOnEdges && (m = 0), f > 0 && a.currentTranslate > i.minTranslate() ? (v = !1, s.resistance && (a.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + a.startTranslate + f, m))) : f < 0 && a.currentTranslate < i.maxTranslate() && (v = !1, s.resistance && (a.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - a.startTranslate - f, m))), v && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), s.threshold > 0) {
									if (!(Math.abs(f) > s.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
									if (!a.allowThresholdMove) return a.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, a.currentTranslate = a.startTranslate, void(n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
								}
								s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), s.freeMode && (0 === a.velocities.length && a.velocities.push({
									position: n[i.isHorizontal() ? "startX" : "startY"],
									time: a.touchStartTime
								}), a.velocities.push({
									position: n[i.isHorizontal() ? "currentX" : "currentY"],
									time: Ve.now()
								})), i.updateProgress(a.currentTranslate), i.setTranslate(a.currentTranslate))
							}
						}
					}
				}
			} else a.startMoving && a.isScrolling && i.emit("touchMoveOpposite", o)
		}

		function Te(e) {
			var t = this,
				i = t.touchEventsData,
				a = t.params,
				s = t.touches,
				n = t.rtlTranslate,
				r = t.$wrapperEl,
				o = t.slidesGrid,
				l = t.snapGrid,
				d = e;
			if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && a.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
			a.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
			var c, u = Ve.now(),
				p = u - i.touchStartTime;
			if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), p < 300 && u - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = Ve.now(), Ve.nextTick(function() {
					t.destroyed || (t.allowClick = !0)
				}), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
			if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = a.followFinger ? n ? t.translate : -t.translate : -i.currentTranslate, !a.cssMode)
				if (a.freeMode) {
					if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
					if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
					if (a.freeModeMomentum) {
						if (i.velocities.length > 1) {
							var h = i.velocities.pop(),
								f = i.velocities.pop(),
								v = h.position - f.position,
								m = h.time - f.time;
							t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < a.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || Ve.now() - h.time > 300) && (t.velocity = 0)
						} else t.velocity = 0;
						t.velocity *= a.freeModeMomentumVelocityRatio, i.velocities.length = 0;
						var g = 1e3 * a.freeModeMomentumRatio,
							y = t.velocity * g,
							b = t.translate + y;
						n && (b = -b);
						var w, x, E = !1,
							T = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio;
						if (b < t.maxTranslate()) a.freeModeMomentumBounce ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T), w = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), a.loop && a.centeredSlides && (x = !0);
						else if (b > t.minTranslate()) a.freeModeMomentumBounce ? (b - t.minTranslate() > T && (b = t.minTranslate() + T), w = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), a.loop && a.centeredSlides && (x = !0);
						else if (a.freeModeSticky) {
							for (var S, C = 0; C < l.length; C += 1)
								if (l[C] > -b) {
									S = C;
									break
								} b = -(b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || "next" === t.swipeDirection ? l[S] : l[S - 1])
						}
						if (x && t.once("transitionEnd", function() {
								t.loopFix()
							}), 0 !== t.velocity) {
							if (g = n ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), a.freeModeSticky) {
								var M = Math.abs((n ? -b : b) - t.translate),
									k = t.slidesSizesGrid[t.activeIndex];
								g = M < k ? a.speed : M < 2 * k ? 1.5 * a.speed : 2.5 * a.speed
							}
						} else if (a.freeModeSticky) return void t.slideToClosest();
						a.freeModeMomentumBounce && E ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function() {
							t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(a.speed), t.setTranslate(w), r.transitionEnd(function() {
								t && !t.destroyed && t.transitionEnd()
							}))
						})) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function() {
							t && !t.destroyed && t.transitionEnd()
						}))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
					} else if (a.freeModeSticky) return void t.slideToClosest();
					(!a.freeModeMomentum || p >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
				} else {
					for (var P = 0, L = t.slidesSizesGrid[0], z = 0; z < o.length; z += z < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
						var I = z < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
						"undefined" != typeof o[z + I] ? c >= o[z] && c < o[z + I] && (P = z, L = o[z + I] - o[z]) : c >= o[z] && (P = z, L = o[o.length - 1] - o[o.length - 2])
					}
					var A = (c - o[P]) / L,
						$ = P < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
					if (p > a.longSwipesMs) {
						if (!a.longSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && (A >= a.longSwipesRatio ? t.slideTo(P + $) : t.slideTo(P)), "prev" === t.swipeDirection && (A > 1 - a.longSwipesRatio ? t.slideTo(P + $) : t.slideTo(P))
					} else {
						if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
						t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(P + $) : t.slideTo(P) : ("next" === t.swipeDirection && t.slideTo(P + $), "prev" === t.swipeDirection && t.slideTo(P))
					}
				}
		}

		function Se() {
			var e = this,
				t = e.params,
				i = e.el;
			if (!i || 0 !== i.offsetWidth) {
				t.breakpoints && e.setBreakpoint();
				var a = e.allowSlideNext,
					s = e.allowSlidePrev,
					n = e.snapGrid;
				e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = a, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
			}
		}

		function Ce(e) {
			var t = this;
			t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
		}

		function Me() {
			var e = this,
				t = e.wrapperEl;
			e.previousTranslate = e.translate, e.translate = e.isHorizontal() ? -t.scrollLeft : -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
			var i = e.maxTranslate() - e.minTranslate();
			(0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(e.translate), e.emit("setTranslate", e.translate, !1)
		}

		function ke() {}

		function Pe() {
			var e = this,
				t = e.params,
				i = e.touchEvents,
				a = e.el,
				s = e.wrapperEl;
			e.onTouchStart = xe.bind(e), e.onTouchMove = Ee.bind(e), e.onTouchEnd = Te.bind(e), t.cssMode && (e.onScroll = Me.bind(e)), e.onClick = Ce.bind(e);
			var n = !!t.nested;
			if (!Ge.touch && Ge.pointerEvents) a.addEventListener(i.start, e.onTouchStart, !1), _e.addEventListener(i.move, e.onTouchMove, n), _e.addEventListener(i.end, e.onTouchEnd, !1);
			else {
				if (Ge.touch) {
					var r = !("touchstart" !== i.start || !Ge.passiveListener || !t.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					a.addEventListener(i.start, e.onTouchStart, r), a.addEventListener(i.move, e.onTouchMove, Ge.passiveListener ? {
						passive: !1,
						capture: n
					} : n), a.addEventListener(i.end, e.onTouchEnd, r), i.cancel && a.addEventListener(i.cancel, e.onTouchEnd, r), vt || (_e.addEventListener("touchstart", ke), vt = !0)
				}(t.simulateTouch && !ft.ios && !ft.android || t.simulateTouch && !Ge.touch && ft.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), _e.addEventListener("mousemove", e.onTouchMove, n), _e.addEventListener("mouseup", e.onTouchEnd, !1))
			}(t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), t.cssMode && s.addEventListener("scroll", e.onScroll), t.updateOnWindowResize ? e.on(ft.ios || ft.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Se, !0) : e.on("observerUpdate", Se, !0)
		}

		function Le() {
			var e = this,
				t = e.params,
				i = e.touchEvents,
				a = e.el,
				s = e.wrapperEl,
				n = !!t.nested;
			if (!Ge.touch && Ge.pointerEvents) a.removeEventListener(i.start, e.onTouchStart, !1), _e.removeEventListener(i.move, e.onTouchMove, n), _e.removeEventListener(i.end, e.onTouchEnd, !1);
			else {
				if (Ge.touch) {
					var r = !("onTouchStart" !== i.start || !Ge.passiveListener || !t.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					a.removeEventListener(i.start, e.onTouchStart, r), a.removeEventListener(i.move, e.onTouchMove, n), a.removeEventListener(i.end, e.onTouchEnd, r), i.cancel && a.removeEventListener(i.cancel, e.onTouchEnd, r)
				}(t.simulateTouch && !ft.ios && !ft.android || t.simulateTouch && !Ge.touch && ft.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), _e.removeEventListener("mousemove", e.onTouchMove, n), _e.removeEventListener("mouseup", e.onTouchEnd, !1))
			}(t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), t.cssMode && s.removeEventListener("scroll", e.onScroll), e.off(ft.ios || ft.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Se)
		}

		function ze() {
			var e = this,
				t = e.activeIndex,
				i = e.initialized,
				a = e.loopedSlides;
			void 0 === a && (a = 0);
			var s = e.params,
				n = e.$el,
				r = s.breakpoints;
			if (r && (!r || 0 !== Object.keys(r).length)) {
				var o = e.getBreakpoint(r);
				if (o && e.currentBreakpoint !== o) {
					var l = o in r ? r[o] : undefined;
					l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(e) {
						var t = l[e];
						void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
					});
					var d = l || e.originalParams,
						c = s.slidesPerColumn > 1,
						u = d.slidesPerColumn > 1;
					c && !u ? n.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !c && u && (n.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && n.addClass(s.containerModifierClass + "multirow-column"));
					var p = d.direction && d.direction !== s.direction,
						h = s.loop && (d.slidesPerView !== s.slidesPerView || p);
					p && i && e.changeDirection(), Ve.extend(e.params, d), Ve.extend(e, {
						allowTouchMove: e.params.allowTouchMove,
						allowSlideNext: e.params.allowSlideNext,
						allowSlidePrev: e.params.allowSlidePrev
					}), e.currentBreakpoint = o, h && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
				}
			}
		}

		function Ie(e) {
			if (!e) return undefined;
			var t = !1,
				i = Object.keys(e).map(function(e) {
					if ("string" == typeof e && 0 === e.indexOf("@")) {
						var t = parseFloat(e.substr(1));
						return {
							value: qe.innerHeight * t,
							point: e
						}
					}
					return {
						value: e,
						point: e
					}
				});
			i.sort(function(e, t) {
				return parseInt(e.value, 10) - parseInt(t.value, 10)
			});
			for (var a = 0; a < i.length; a += 1) {
				var s = i[a],
					n = s.point;
				s.value <= qe.innerWidth && (t = n)
			}
			return t || "max"
		}

		function Ae() {
			var e = this,
				t = e.classNames,
				i = e.params,
				a = e.rtl,
				s = e.$el,
				n = [];
			n.push("initialized"), n.push(i.direction), i.freeMode && n.push("free-mode"), i.autoHeight && n.push("autoheight"), a && n.push("rtl"), i.slidesPerColumn > 1 && (n.push("multirow"), "column" === i.slidesPerColumnFill && n.push("multirow-column")), ft.android && n.push("android"), ft.ios && n.push("ios"), i.cssMode && n.push("css-mode"), n.forEach(function(e) {
				t.push(i.containerModifierClass + e)
			}), s.addClass(t.join(" "))
		}

		function $e() {
			var e = this,
				t = e.$el,
				i = e.classNames;
			t.removeClass(i.join(" "))
		}

		function Oe(e, t, i, a, s, n) {
			function r() {
				n && n()
			}
			var o;
			e.complete && s ? r() : t ? ((o = new qe.Image).onload = r, o.onerror = r, a && (o.sizes = a), i && (o.srcset = i), t && (o.src = t)) : r()
		}

		function De() {
			function e() {
				null != t && t && !t.destroyed && (t.imagesLoaded !== undefined && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
			}
			var t = this;
			t.imagesToLoad = t.$el.find("img");
			for (var i = 0; i < t.imagesToLoad.length; i += 1) {
				var a = t.imagesToLoad[i];
				t.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, e)
			}
		}

		function Be() {
			var e = this,
				t = e.params,
				i = e.isLocked,
				a = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
			t.slidesOffsetBefore && t.slidesOffsetAfter && a ? e.isLocked = a <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), i && i !== e.isLocked && (e.isEnd = !1, e.navigation.update())
		}

		function He() {
			var e = "onwheel",
				t = e in _e;
			if (!t) {
				var i = _e.createElement("div");
				i.setAttribute(e, "return;"), t = "function" == typeof i[e]
			}
			return !t && _e.implementation && _e.implementation.hasFeature && !0 !== _e.implementation.hasFeature("", "") && (t = _e.implementation.hasFeature("Events.wheel", "3.0")), t
		}
		var _e = "undefined" == typeof document ? {
				body: {},
				addEventListener: function() {},
				removeEventListener: function() {},
				activeElement: {
					blur: function() {},
					nodeName: ""
				},
				querySelector: function() {
					return null
				},
				querySelectorAll: function() {
					return []
				},
				getElementById: function() {
					return null
				},
				createEvent: function() {
					return {
						initEvent: function() {}
					}
				},
				createElement: function() {
					return {
						children: [],
						childNodes: [],
						style: {},
						setAttribute: function() {},
						getElementsByTagName: function() {
							return []
						}
					}
				},
				location: {
					hash: ""
				}
			} : document,
			qe = "undefined" == typeof window ? {
				document: _e,
				navigator: {
					userAgent: ""
				},
				location: {},
				history: {},
				CustomEvent: function() {
					return this
				},
				addEventListener: function() {},
				removeEventListener: function() {},
				getComputedStyle: function() {
					return {
						getPropertyValue: function() {
							return ""
						}
					}
				},
				Image: function() {},
				Date: function() {},
				screen: {},
				setTimeout: function() {},
				clearTimeout: function() {}
			} : window,
			Ne = function(e) {
				for (var t = this, i = 0; i < e.length; i += 1) t[i] = e[i];
				return t.length = e.length, this
			};
		t.fn = Ne.prototype, t.Class = Ne, t.Dom7 = Ne;
		var Re = {
			addClass: a,
			removeClass: s,
			hasClass: n,
			toggleClass: r,
			attr: o,
			removeAttr: l,
			data: d,
			transform: c,
			transition: u,
			on: p,
			off: h,
			trigger: f,
			transitionEnd: v,
			outerWidth: m,
			outerHeight: g,
			offset: y,
			css: w,
			each: x,
			html: T,
			text: S,
			is: C,
			index: M,
			eq: k,
			append: P,
			prepend: L,
			next: z,
			nextAll: I,
			prev: A,
			prevAll: $,
			parent: O,
			parents: D,
			closest: B,
			find: H,
			children: _,
			filter: E,
			remove: q,
			add: N,
			styles: b
		};
		Object.keys(Re).forEach(function(e) {
			t.fn[e] = t.fn[e] || Re[e]
		});
		var Ve = {
				deleteProps: function(t) {
					var i = t;
					Object.keys(i).forEach(function(t) {
						try {
							i[t] = null
						} catch (e) {}
						try {
							delete i[t]
						} catch (e) {}
					})
				},
				nextTick: function(e, t) {
					return void 0 === t && (t = 0), setTimeout(e, t)
				},
				now: function() {
					return Date.now()
				},
				getTranslate: function(e, t) {
					var i, a, s;
					void 0 === t && (t = "x");
					var n = qe.getComputedStyle(e, null);
					return qe.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
						return e.replace(",", ".")
					}).join(", ")), s = new qe.WebKitCSSMatrix("none" === a ? "" : a)) : i = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (a = qe.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (a = qe.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), a || 0
				},
				parseUrlQuery: function(e) {
					var t, i, a, s, n = {},
						r = e || qe.location.href;
					if ("string" == typeof r && r.length)
						for (s = (i = (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
								return "" !== e
							})).length, t = 0; t < s; t += 1) a = i[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = "undefined" == typeof a[1] ? undefined : decodeURIComponent(a[1]) || "";
					return n
				},
				isObject: function(e) {
					return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
				},
				extend: function() {
					for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
					for (var i = Object(e[0]), a = 1; a < e.length; a += 1) {
						var s = e[a];
						if (s !== undefined && null !== s)
							for (var n = Object.keys(Object(s)), r = 0, o = n.length; r < o; r += 1) {
								var l = n[r],
									d = Object.getOwnPropertyDescriptor(s, l);
								d !== undefined && d.enumerable && (Ve.isObject(i[l]) && Ve.isObject(s[l]) ? Ve.extend(i[l], s[l]) : !Ve.isObject(i[l]) && Ve.isObject(s[l]) ? (i[l] = {}, Ve.extend(i[l], s[l])) : i[l] = s[l])
							}
					}
					return i
				}
			},
			Ge = {
				touch: qe.Modernizr && !0 === qe.Modernizr.touch || !!(qe.navigator.maxTouchPoints > 0 || "ontouchstart" in qe || qe.DocumentTouch && _e instanceof qe.DocumentTouch),
				pointerEvents: !!qe.PointerEvent && "maxTouchPoints" in qe.navigator && qe.navigator.maxTouchPoints > 0,
				observer: "MutationObserver" in qe || "WebkitMutationObserver" in qe,
				passiveListener: function() {
					var t = !1;
					try {
						var i = Object.defineProperty({}, "passive", {
							get: function() {
								t = !0
							}
						});
						qe.addEventListener("testPassiveListener", null, i)
					} catch (e) {}
					return t
				}(),
				gestures: "ongesturestart" in qe
			},
			Fe = function(e) {
				void 0 === e && (e = {});
				var t = this;
				t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
					t.on(e, t.params.on[e])
				})
			},
			Xe = {
				components: {
					configurable: !0
				}
			};
		Fe.prototype.on = function(e, t, i) {
			var a = this;
			if ("function" != typeof t) return a;
			var s = i ? "unshift" : "push";
			return e.split(" ").forEach(function(e) {
				a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][s](t)
			}), a
		}, Fe.prototype.once = function(e, t, i) {
			function a() {
				for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
				s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
			}
			var s = this;
			return "function" != typeof t ? s : (a.f7proxy = t, s.on(e, a, i))
		}, Fe.prototype.off = function(e, t) {
			var i = this;
			return i.eventsListeners ? (e.split(" ").forEach(function(e) {
				void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function(a, s) {
					(a === t || a.f7proxy && a.f7proxy === t) && i.eventsListeners[e].splice(s, 1)
				})
			}), i) : i
		}, Fe.prototype.emit = function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, a, s, n = this;
			return n.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], a = e.slice(1, e.length), s = n) : (i = e[0].events, a = e[0].data, s = e[0].context || n), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
				if (n.eventsListeners && n.eventsListeners[e]) {
					var t = [];
					n.eventsListeners[e].forEach(function(e) {
						t.push(e)
					}), t.forEach(function(e) {
						e.apply(s, a)
					})
				}
			}), n) : n
		}, Fe.prototype.useModulesParams = function(e) {
			var t = this;
			t.modules && Object.keys(t.modules).forEach(function(i) {
				var a = t.modules[i];
				a.params && Ve.extend(e, a.params)
			})
		}, Fe.prototype.useModules = function(e) {
			void 0 === e && (e = {});
			var t = this;
			t.modules && Object.keys(t.modules).forEach(function(i) {
				var a = t.modules[i],
					s = e[i] || {};
				a.instance && Object.keys(a.instance).forEach(function(e) {
					var i = a.instance[e];
					t[e] = "function" == typeof i ? i.bind(t) : i
				}), a.on && t.on && Object.keys(a.on).forEach(function(e) {
					t.on(e, a.on[e])
				}), a.create && a.create.bind(t)(s)
			})
		}, Xe.components.set = function(e) {
			var t = this;
			t.use && t.use(e)
		}, Fe.installModule = function(e) {
			for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
			var a = this;
			a.prototype.modules || (a.prototype.modules = {});
			var s = e.name || Object.keys(a.prototype.modules).length + "_" + Ve.now();
			return a.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
				a.prototype[t] = e.proto[t]
			}), e["static"] && Object.keys(e["static"]).forEach(function(t) {
				a[t] = e["static"][t]
			}), e.install && e.install.apply(a, t), a
		}, Fe.use = function(e) {
			for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
			var a = this;
			return Array.isArray(e) ? (e.forEach(function(e) {
				return a.installModule(e)
			}), a) : a.installModule.apply(a, [e].concat(t))
		}, Object.defineProperties(Fe, Xe);
		var Ye, We, je, Ue, Ke, Je, Qe, Ze, et, tt, it, at, st, nt, rt, ot = {
				updateSize: R,
				updateSlides: V,
				updateAutoHeight: G,
				updateSlidesOffset: F,
				updateSlidesProgress: X,
				updateProgress: Y,
				updateSlidesClasses: W,
				updateActiveIndex: j,
				updateClickedSlide: U
			},
			lt = {
				getTranslate: K,
				setTranslate: J,
				minTranslate: Q,
				maxTranslate: Z,
				translateTo: ee
			},
			dt = {
				setTransition: te,
				transitionStart: ie,
				transitionEnd: ae
			},
			ct = {
				slideTo: se,
				slideToLoop: ne,
				slideNext: re,
				slidePrev: oe,
				slideReset: le,
				slideToClosest: de,
				slideToClickedSlide: ce
			},
			ut = {
				loopCreate: ue,
				loopFix: pe,
				loopDestroy: he
			},
			pt = {
				setGrabCursor: fe,
				unsetGrabCursor: ve
			},
			ht = {
				appendSlide: me,
				prependSlide: ge,
				addSlide: ye,
				removeSlide: be,
				removeAllSlides: we
			},
			ft = (Ye = qe.navigator.platform, We = qe.navigator.userAgent, je = {
				ios: !1,
				android: !1,
				androidChrome: !1,
				desktop: !1,
				iphone: !1,
				ipod: !1,
				ipad: !1,
				edge: !1,
				ie: !1,
				firefox: !1,
				macos: !1,
				windows: !1,
				cordova: !(!qe.cordova && !qe.phonegap),
				phonegap: !(!qe.cordova && !qe.phonegap),
				electron: !1
			}, Ue = qe.screen.width, Ke = qe.screen.height, Je = We.match(/(Android);?[\s\/]+([\d.]+)?/), Qe = We.match(/(iPad).*OS\s([\d_]+)/), Ze = We.match(/(iPod)(.*OS\s([\d_]+))?/), et = !Qe && We.match(/(iPhone\sOS|iOS)\s([\d_]+)/), tt = We.indexOf("MSIE ") >= 0 || We.indexOf("Trident/") >= 0, it = We.indexOf("Edge/") >= 0, at = We.indexOf("Gecko/") >= 0 && We.indexOf("Firefox/") >= 0, st = "Win32" === Ye, nt = We.toLowerCase().indexOf("electron") >= 0, rt = "MacIntel" === Ye, !Qe && rt && Ge.touch && (1024 === Ue && 1366 === Ke || 834 === Ue && 1194 === Ke || 834 === Ue && 1112 === Ke || 768 === Ue && 1024 === Ke) && (Qe = We.match(/(Version)\/([\d.]+)/), rt = !1), je.ie = tt, je.edge = it, je.firefox = at, Je && !st && (je.os = "android", je.osVersion = Je[2], je.android = !0, je.androidChrome = We.toLowerCase().indexOf("chrome") >= 0), (Qe || et || Ze) && (je.os = "ios", je.ios = !0), et && !Ze && (je.osVersion = et[2].replace(/_/g, "."), je.iphone = !0), Qe && (je.osVersion = Qe[2].replace(/_/g, "."), je.ipad = !0), Ze && (je.osVersion = Ze[3] ? Ze[3].replace(/_/g, ".") : null, je.ipod = !0), je.ios && je.osVersion && We.indexOf("Version/") >= 0 && "10" === je.osVersion.split(".")[0] && (je.osVersion = We.toLowerCase().split("version/")[1].split(" ")[0]), je.webView = !(!(et || Qe || Ze) || !We.match(/.*AppleWebKit(?!.*Safari)/i) && !qe.navigator.standalone) || qe.matchMedia && qe.matchMedia("(display-mode: standalone)").matches, je.webview = je.webView, je.standalone = je.webView, je.desktop = !(je.ios || je.android) || nt, je.desktop && (je.electron = nt, je.macos = rt, je.windows = st, je.macos && (je.os = "macos"), je.windows && (je.os = "windows")), je.pixelRatio = qe.devicePixelRatio || 1, je),
			vt = !1,
			mt = {
				init: !0,
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				cssMode: !1,
				updateOnWindowResize: !0,
				preventInteractionOnTransition: !1,
				edgeSwipeDetection: !1,
				edgeSwipeThreshold: 20,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				freeModeMomentumVelocityRatio: 1,
				freeModeSticky: !1,
				freeModeMinimumVelocity: .02,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				breakpoints: undefined,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				slidesPerGroupSkip: 0,
				centeredSlides: !1,
				centeredSlidesBounds: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				normalizeSlideIndex: !0,
				centerInsufficientSlides: !1,
				watchOverflow: !1,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				allowTouchMove: !0,
				threshold: 0,
				touchMoveStopPropagation: !1,
				touchStartPreventDefault: !0,
				touchStartForcePreventDefault: !1,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				resistance: !0,
				resistanceRatio: .85,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				loopFillGroupWithBlank: !1,
				allowSlidePrev: !0,
				allowSlideNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				noSwipingSelector: null,
				passiveListeners: !0,
				containerModifierClass: "swiper-container-",
				slideClass: "swiper-slide",
				slideBlankClass: "swiper-slide-invisible-blank",
				slideActiveClass: "swiper-slide-active",
				slideDuplicateActiveClass: "swiper-slide-duplicate-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slideDuplicateNextClass: "swiper-slide-duplicate-next",
				slidePrevClass: "swiper-slide-prev",
				slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
				wrapperClass: "swiper-wrapper",
				runCallbacksOnInit: !0
			},
			gt = {
				update: ot,
				translate: lt,
				transition: dt,
				slide: ct,
				loop: ut,
				grabCursor: pt,
				manipulation: ht,
				events: {
					attachEvents: Pe,
					detachEvents: Le
				},
				breakpoints: {
					setBreakpoint: ze,
					getBreakpoint: Ie
				},
				checkOverflow: {
					checkOverflow: Be
				},
				classes: {
					addClasses: Ae,
					removeClasses: $e
				},
				images: {
					loadImage: Oe,
					preloadImages: De
				}
			},
			yt = {},
			bt = function(e) {
				function i() {
					for (var a, s, n, r = [], o = arguments.length; o--;) r[o] = arguments[o];
					1 === r.length && r[0].constructor && r[0].constructor === Object ? n = r[0] : (s = (a = r)[0], n = a[1]), n || (n = {}), n = Ve.extend({}, n), s && !n.el && (n.el = s), e.call(this, n), Object.keys(gt).forEach(function(e) {
						Object.keys(gt[e]).forEach(function(t) {
							i.prototype[t] || (i.prototype[t] = gt[e][t])
						})
					});
					var l = this;
					"undefined" == typeof l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
						var t = l.modules[e];
						if (t.params) {
							var i = Object.keys(t.params)[0],
								a = t.params[i];
							if ("object" != typeof a || null === a) return;
							if (!(i in n && "enabled" in a)) return;
							!0 === n[i] && (n[i] = {
								enabled: !0
							}), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = {
								enabled: !1
							})
						}
					});
					var d = Ve.extend({}, mt);
					l.useModulesParams(d), l.params = Ve.extend({}, d, yt, n), l.originalParams = Ve.extend({}, l.params), l.passedParams = Ve.extend({}, n), l.$ = t;
					var c, u, p, h = t(l.params.el);
					if (!(s = h[0])) return undefined;
					if (h.length > 1) {
						var f = [];
						return h.each(function(e, t) {
							var a = Ve.extend({}, n, {
								el: t
							});
							f.push(new i(a))
						}), f
					}
					return s.swiper = l, h.data("swiper", l), s && s.shadowRoot && s.shadowRoot.querySelector ? (c = t(s.shadowRoot.querySelector("." + l.params.wrapperClass))).children = function(e) {
						return h.children(e)
					} : c = h.children("." + l.params.wrapperClass), Ve.extend(l, {
						$el: h,
						el: s,
						$wrapperEl: c,
						wrapperEl: c[0],
						classNames: [],
						slides: t(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function() {
							return "horizontal" === l.params.direction
						},
						isVertical: function() {
							return "vertical" === l.params.direction
						},
						rtl: "rtl" === s.dir.toLowerCase() || "rtl" === h.css("direction"),
						rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === h.css("direction")),
						wrongRTL: "-webkit-box" === c.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: l.params.allowSlideNext,
						allowSlidePrev: l.params.allowSlidePrev,
						touchEvents: (u = ["touchstart", "touchmove", "touchend", "touchcancel"], p = ["mousedown", "mousemove", "mouseup"], Ge.pointerEvents && (p = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
							start: u[0],
							move: u[1],
							end: u[2],
							cancel: u[3]
						}, l.touchEventsDesktop = {
							start: p[0],
							move: p[1],
							end: p[2]
						}, Ge.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
						touchEventsData: {
							isTouched: undefined,
							isMoved: undefined,
							allowTouchCallbacks: undefined,
							touchStartTime: undefined,
							isScrolling: undefined,
							currentTranslate: undefined,
							startTranslate: undefined,
							allowThresholdMove: undefined,
							formElements: "input, select, option, textarea, button, video, label",
							lastClickTime: Ve.now(),
							clickTimeout: undefined,
							velocities: [],
							allowMomentumBounce: undefined,
							isTouchEvent: undefined,
							startMoving: undefined
						},
						allowClick: !0,
						allowTouchMove: l.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), l.useModules(), l.params.init && l.init(), l
				}
				e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
				var a = {
					extendedDefaults: {
						configurable: !0
					},
					defaults: {
						configurable: !0
					},
					Class: {
						configurable: !0
					},
					$: {
						configurable: !0
					}
				};
				return i.prototype.slidesPerViewDynamic = function() {
					var e = this,
						t = e.params,
						i = e.slides,
						a = e.slidesGrid,
						s = e.size,
						n = e.activeIndex,
						r = 1;
					if (t.centeredSlides) {
						for (var o, l = i[n].swiperSlideSize, d = n + 1; d < i.length; d += 1) i[d] && !o && (r += 1, (l += i[d].swiperSlideSize) > s && (o = !0));
						for (var c = n - 1; c >= 0; c -= 1) i[c] && !o && (r += 1, (l += i[c].swiperSlideSize) > s && (o = !0))
					} else
						for (var u = n + 1; u < i.length; u += 1) a[u] - a[n] < s && (r += 1);
					return r
				}, i.prototype.update = function() {
					function e() {
						var e = t.rtlTranslate ? -1 * t.translate : t.translate,
							i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
						t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
					}
					var t = this;
					if (t && !t.destroyed) {
						var i = t.snapGrid,
							a = t.params;
						a.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), a.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
					}
				}, i.prototype.changeDirection = function(e, t) {
					void 0 === t && (t = !0);
					var i = this,
						a = i.params.direction;
					return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e ? i : (i.$el.removeClass("" + i.params.containerModifierClass + a).addClass("" + i.params.containerModifierClass + e), i.params.direction = e, i.slides.each(function(t, i) {
						"vertical" === e ? i.style.width = "" : i.style.height = ""
					}), i.emit("changeDirection"), t && i.update(), i)
				}, i.prototype.init = function() {
					var e = this;
					e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
				}, i.prototype.destroy = function(e, t) {
					void 0 === e && (e = !0), void 0 === t && (t = !0);
					var i = this,
						a = i.params,
						s = i.$el,
						n = i.$wrapperEl,
						r = i.slides;
					return "undefined" == typeof i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), a.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), n.removeAttr("style"), r && r.length && r.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
						i.off(e)
					}), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), Ve.deleteProps(i)), i.destroyed = !0, null)
				}, i.extendDefaults = function(e) {
					Ve.extend(yt, e)
				}, a.extendedDefaults.get = function() {
					return yt
				}, a.defaults.get = function() {
					return mt
				}, a.Class.get = function() {
					return e
				}, a.$.get = function() {
					return t
				}, Object.defineProperties(i, a), i
			}(Fe),
			wt = {
				name: "device",
				proto: {
					device: ft
				},
				"static": {
					device: ft
				}
			},
			xt = {
				name: "support",
				proto: {
					support: Ge
				},
				"static": {
					support: Ge
				}
			},
			Et = function() {
				function e() {
					var e = qe.navigator.userAgent.toLowerCase();
					return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
				}
				return {
					isEdge: !!qe.navigator.userAgent.match(/Edge/g),
					isSafari: e(),
					isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(qe.navigator.userAgent)
				}
			}(),
			Tt = {
				name: "browser",
				proto: {
					browser: Et
				},
				"static": {
					browser: Et
				}
			},
			St = {
				name: "resize",
				create: function() {
					var e = this;
					Ve.extend(e, {
						resize: {
							resizeHandler: function() {
								e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
							},
							orientationChangeHandler: function() {
								e && !e.destroyed && e.initialized && e.emit("orientationchange")
							}
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						qe.addEventListener("resize", e.resize.resizeHandler), qe.addEventListener("orientationchange", e.resize.orientationChangeHandler)
					},
					destroy: function() {
						var e = this;
						qe.removeEventListener("resize", e.resize.resizeHandler), qe.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
					}
				}
			},
			Ct = {
				func: qe.MutationObserver || qe.WebkitMutationObserver,
				attach: function(e, t) {
					void 0 === t && (t = {});
					var i = this,
						a = new(0, Ct.func)(function(e) {
							if (1 !== e.length) {
								var t = function() {
									i.emit("observerUpdate", e[0])
								};
								qe.requestAnimationFrame ? qe.requestAnimationFrame(t) : qe.setTimeout(t, 0)
							} else i.emit("observerUpdate", e[0])
						});
					a.observe(e, {
						attributes: "undefined" == typeof t.attributes || t.attributes,
						childList: "undefined" == typeof t.childList || t.childList,
						characterData: "undefined" == typeof t.characterData || t.characterData
					}), i.observer.observers.push(a)
				},
				init: function() {
					var e = this;
					if (Ge.observer && e.params.observer) {
						if (e.params.observeParents)
							for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
						e.observer.attach(e.$el[0], {
							childList: e.params.observeSlideChildren
						}), e.observer.attach(e.$wrapperEl[0], {
							attributes: !1
						})
					}
				},
				destroy: function() {
					var e = this;
					e.observer.observers.forEach(function(e) {
						e.disconnect()
					}), e.observer.observers = []
				}
			},
			Mt = {
				name: "observer",
				params: {
					observer: !1,
					observeParents: !1,
					observeSlideChildren: !1
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						observer: {
							init: Ct.init.bind(e),
							attach: Ct.attach.bind(e),
							destroy: Ct.destroy.bind(e),
							observers: []
						}
					})
				},
				on: {
					init: function() {
						this.observer.init()
					},
					destroy: function() {
						this.observer.destroy()
					}
				}
			},
			kt = {
				update: function(e) {
					function t() {
						i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load()
					}
					var i = this,
						a = i.params,
						s = a.slidesPerView,
						n = a.slidesPerGroup,
						r = a.centeredSlides,
						o = i.params.virtual,
						l = o.addSlidesBefore,
						d = o.addSlidesAfter,
						c = i.virtual,
						u = c.from,
						p = c.to,
						h = c.slides,
						f = c.slidesGrid,
						v = c.renderSlide,
						m = c.offset;
					i.updateActiveIndex();
					var g, y, b, w = i.activeIndex || 0;
					g = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", r ? (y = Math.floor(s / 2) + n + l, b = Math.floor(s / 2) + n + d) : (y = s + (n - 1) + l, b = n + d);
					var x = Math.max((w || 0) - b, 0),
						E = Math.min((w || 0) + y, h.length - 1),
						T = (i.slidesGrid[x] || 0) - (i.slidesGrid[0] || 0);
					if (Ve.extend(i.virtual, {
							from: x,
							to: E,
							offset: T,
							slidesGrid: i.slidesGrid
						}), u === x && p === E && !e) return i.slidesGrid !== f && T !== m && i.slides.css(g, T + "px"), void i.updateProgress();
					if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
						offset: T,
						from: x,
						to: E,
						slides: function() {
							for (var e = [], t = x; t <= E; t += 1) e.push(h[t]);
							return e
						}()
					}), void t();
					var S = [],
						C = [];
					if (e) i.$wrapperEl.find("." + i.params.slideClass).remove();
					else
						for (var M = u; M <= p; M += 1)(M < x || M > E) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
					for (var k = 0; k < h.length; k += 1) k >= x && k <= E && (void 0 === p || e ? C.push(k) : (k > p && C.push(k), k < u && S.push(k)));
					C.forEach(function(e) {
						i.$wrapperEl.append(v(h[e], e))
					}), S.sort(function(e, t) {
						return t - e
					}).forEach(function(e) {
						i.$wrapperEl.prepend(v(h[e], e))
					}), i.$wrapperEl.children(".swiper-slide").css(g, T + "px"), t()
				},
				renderSlide: function(e, i) {
					var a = this,
						s = a.params.virtual;
					if (s.cache && a.virtual.cache[i]) return a.virtual.cache[i];
					var n = s.renderSlide ? t(s.renderSlide.call(a, e, i)) : t('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + i + '">' + e + "</div>");
					return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", i), s.cache && (a.virtual.cache[i] = n), n
				},
				appendSlide: function(e) {
					var t = this;
					if ("object" == typeof e && "length" in e)
						for (var i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.push(e[i]);
					else t.virtual.slides.push(e);
					t.virtual.update(!0)
				},
				prependSlide: function(e) {
					var t = this,
						i = t.activeIndex,
						a = i + 1,
						s = 1;
					if (Array.isArray(e)) {
						for (var n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.unshift(e[n]);
						a = i + e.length, s = e.length
					} else t.virtual.slides.unshift(e);
					if (t.params.virtual.cache) {
						var r = t.virtual.cache,
							o = {};
						Object.keys(r).forEach(function(e) {
							var t = r[e],
								i = t.attr("data-swiper-slide-index");
							i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), o[parseInt(e, 10) + s] = t
						}), t.virtual.cache = o
					}
					t.virtual.update(!0), t.slideTo(a, 0)
				},
				removeSlide: function(e) {
					var t = this;
					if (null != e) {
						var i = t.activeIndex;
						if (Array.isArray(e))
							for (var a = e.length - 1; a >= 0; a -= 1) t.virtual.slides.splice(e[a], 1), t.params.virtual.cache && delete t.virtual.cache[e[a]], e[a] < i && (i -= 1), i = Math.max(i, 0);
						else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
						t.virtual.update(!0), t.slideTo(i, 0)
					}
				},
				removeAllSlides: function() {
					var e = this;
					e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
				}
			},
			Pt = {
				name: "virtual",
				params: {
					virtual: {
						enabled: !1,
						slides: [],
						cache: !0,
						renderSlide: null,
						renderExternal: null,
						addSlidesBefore: 0,
						addSlidesAfter: 0
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						virtual: {
							update: kt.update.bind(e),
							appendSlide: kt.appendSlide.bind(e),
							prependSlide: kt.prependSlide.bind(e),
							removeSlide: kt.removeSlide.bind(e),
							removeAllSlides: kt.removeAllSlides.bind(e),
							renderSlide: kt.renderSlide.bind(e),
							slides: e.params.virtual.slides,
							cache: {}
						}
					})
				},
				on: {
					beforeInit: function() {
						var e = this;
						if (e.params.virtual.enabled) {
							e.classNames.push(e.params.containerModifierClass + "virtual");
							var t = {
								watchSlidesProgress: !0
							};
							Ve.extend(e.params, t), Ve.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
						}
					},
					setTranslate: function() {
						var e = this;
						e.params.virtual.enabled && e.virtual.update()
					}
				}
			},
			Lt = {
				handle: function(e) {
					var t = this,
						i = t.rtlTranslate,
						a = e;
					a.originalEvent && (a = a.originalEvent);
					var s = a.keyCode || a.charCode;
					if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s || 34 === s)) return !1;
					if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s || 33 === s)) return !1;
					if (a.shiftKey || a.altKey || a.ctrlKey || a.metaKey) return undefined;
					if (_e.activeElement && _e.activeElement.nodeName && ("input" === _e.activeElement.nodeName.toLowerCase() || "textarea" === _e.activeElement.nodeName.toLowerCase())) return undefined;
					if (t.params.keyboard.onlyInViewport && (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)) {
						var n = !1;
						if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return undefined;
						var r = qe.innerWidth,
							o = qe.innerHeight,
							l = t.$el.offset();
						i && (l.left -= t.$el[0].scrollLeft);
						for (var d = [
								[l.left, l.top],
								[l.left + t.width, l.top],
								[l.left, l.top + t.height],
								[l.left + t.width, l.top + t.height]
							], c = 0; c < d.length; c += 1) {
							var u = d[c];
							u[0] >= 0 && u[0] <= r && u[1] >= 0 && u[1] <= o && (n = !0)
						}
						if (!n) return undefined
					}
					return t.isHorizontal() ? (33 !== s && 34 !== s && 37 !== s && 39 !== s || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== s && 39 !== s || i) && (33 !== s && 37 !== s || !i) || t.slideNext(), (33 !== s && 37 !== s || i) && (34 !== s && 39 !== s || !i) || t.slidePrev()) : (33 !== s && 34 !== s && 38 !== s && 40 !== s || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== s && 40 !== s || t.slideNext(), 33 !== s && 38 !== s || t.slidePrev()), t.emit("keyPress", s), undefined
				},
				enable: function() {
					var e = this;
					e.keyboard.enabled || (t(_e).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
				},
				disable: function() {
					var e = this;
					e.keyboard.enabled && (t(_e).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
				}
			},
			zt = {
				name: "keyboard",
				params: {
					keyboard: {
						enabled: !1,
						onlyInViewport: !0
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						keyboard: {
							enabled: !1,
							enable: Lt.enable.bind(e),
							disable: Lt.disable.bind(e),
							handle: Lt.handle.bind(e)
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						e.params.keyboard.enabled && e.keyboard.enable()
					},
					destroy: function() {
						var e = this;
						e.keyboard.enabled && e.keyboard.disable()
					}
				}
			},
			It = {
				lastScrollTime: Ve.now(),
				lastEventBeforeSnap: undefined,
				recentWheelEvents: [],
				event: function() {
					return qe.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : He() ? "wheel" : "mousewheel"
				},
				normalize: function(e) {
					var t = 10,
						i = 40,
						a = 800,
						s = 0,
						n = 0,
						r = 0,
						o = 0;
					return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (s = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (s = n, n = 0), r = s * t, o = n * t, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = o, o = 0), (r || o) && e.deltaMode && (1 === e.deltaMode ? (r *= i, o *= i) : (r *= a, o *= a)), r && !s && (s = r < 1 ? -1 : 1), o && !n && (n = o < 1 ? -1 : 1), {
						spinX: s,
						spinY: n,
						pixelX: r,
						pixelY: o
					}
				},
				handleMouseEnter: function() {
					this.mouseEntered = !0
				},
				handleMouseLeave: function() {
					this.mouseEntered = !1
				},
				handle: function(e) {
					var i = e,
						a = this,
						s = a.params.mousewheel;
					a.params.cssMode && i.preventDefault();
					var n = a.$el;
					if ("container" !== a.params.mousewheel.eventsTarged && (n = t(a.params.mousewheel.eventsTarged)), !a.mouseEntered && !n[0].contains(i.target) && !s.releaseOnEdges) return !0;
					i.originalEvent && (i = i.originalEvent);
					var r = 0,
						o = a.rtlTranslate ? -1 : 1,
						l = It.normalize(i);
					if (s.forceToAxis)
						if (a.isHorizontal()) {
							if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
							r = l.pixelX * o
						} else {
							if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
							r = l.pixelY
						}
					else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
					if (0 === r) return !0;
					if (s.invert && (r = -r), a.params.freeMode) {
						var d = {
								time: Ve.now(),
								delta: Math.abs(r),
								direction: Math.sign(r)
							},
							c = a.mousewheel.lastEventBeforeSnap,
							u = c && d.time < c.time + 500 && d.delta <= c.delta && d.direction === c.direction;
						if (!u) {
							a.mousewheel.lastEventBeforeSnap = undefined, a.params.loop && a.loopFix();
							var p = a.getTranslate() + r * s.sensitivity,
								h = a.isBeginning,
								f = a.isEnd;
							if (p >= a.minTranslate() && (p = a.minTranslate()), p <= a.maxTranslate() && (p = a.maxTranslate()), a.setTransition(0), a.setTranslate(p), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !f && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
								clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = undefined;
								var v = a.mousewheel.recentWheelEvents;
								v.length >= 15 && v.shift();
								var m = v.length ? v[v.length - 1] : undefined,
									g = v[0];
								if (v.push(d), m && (d.delta > m.delta || d.direction !== m.direction)) v.splice(0);
								else if (v.length >= 15 && d.time - g.time < 500 && g.delta - d.delta >= 1 && d.delta <= 6) {
									var y = r > 0 ? .8 : .2;
									a.mousewheel.lastEventBeforeSnap = d, v.splice(0), a.mousewheel.timeout = Ve.nextTick(function() {
										a.slideToClosest(a.params.speed, !0, undefined, y)
									}, 0)
								}
								a.mousewheel.timeout || (a.mousewheel.timeout = Ve.nextTick(function() {
									var e = .5;
									a.mousewheel.lastEventBeforeSnap = d, v.splice(0), a.slideToClosest(a.params.speed, !0, undefined, e)
								}, 500))
							}
							if (u || a.emit("scroll", i), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), p === a.minTranslate() || p === a.maxTranslate()) return !0
						}
					} else {
						var b = {
								time: Ve.now(),
								delta: Math.abs(r),
								direction: Math.sign(r),
								raw: e
							},
							w = a.mousewheel.recentWheelEvents;
						w.length >= 2 && w.shift();
						var x = w.length ? w[w.length - 1] : undefined;
						if (w.push(b), x ? (b.direction !== x.direction || b.delta > x.delta) && a.mousewheel.animateSlider(b) : a.mousewheel.animateSlider(b), a.mousewheel.releaseScroll(b)) return !0
					}
					return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
				},
				animateSlider: function(e) {
					var t = this;
					return e.delta >= 6 && Ve.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new qe.Date).getTime(), !1)
				},
				releaseScroll: function(e) {
					var t = this,
						i = t.params.mousewheel;
					if (e.direction < 0) {
						if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0
					} else if (t.isBeginning && !t.params.loop && i.releaseOnEdges) return !0;
					return !1
				},
				enable: function() {
					var e = this,
						i = It.event();
					if (e.params.cssMode) return e.wrapperEl.removeEventListener(i, e.mousewheel.handle), !0;
					if (!i) return !1;
					if (e.mousewheel.enabled) return !1;
					var a = e.$el;
					return "container" !== e.params.mousewheel.eventsTarged && (a = t(e.params.mousewheel.eventsTarged)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(i, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
				},
				disable: function() {
					var e = this,
						i = It.event();
					if (e.params.cssMode) return e.wrapperEl.addEventListener(i, e.mousewheel.handle), !0;
					if (!i) return !1;
					if (!e.mousewheel.enabled) return !1;
					var a = e.$el;
					return "container" !== e.params.mousewheel.eventsTarged && (a = t(e.params.mousewheel.eventsTarged)), a.off(i, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
				}
			},
			At = {
				update: function() {
					var e = this,
						t = e.params.navigation;
					if (!e.params.loop) {
						var i = e.navigation,
							a = i.$nextEl,
							s = i.$prevEl;
						s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), a && a.length > 0 && (e.isEnd ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
					}
				},
				onPrevClick: function(e) {
					var t = this;
					e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
				},
				onNextClick: function(e) {
					var t = this;
					e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
				},
				init: function() {
					var e, i, a = this,
						s = a.params.navigation;
					(s.nextEl || s.prevEl) && (s.nextEl && (e = t(s.nextEl), a.params.uniqueNavElements && "string" == typeof s.nextEl && e.length > 1 && 1 === a.$el.find(s.nextEl).length && (e = a.$el.find(s.nextEl))), s.prevEl && (i = t(s.prevEl), a.params.uniqueNavElements && "string" == typeof s.prevEl && i.length > 1 && 1 === a.$el.find(s.prevEl).length && (i = a.$el.find(s.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), i && i.length > 0 && i.on("click", a.navigation.onPrevClick), Ve.extend(a.navigation, {
						$nextEl: e,
						nextEl: e && e[0],
						$prevEl: i,
						prevEl: i && i[0]
					}))
				},
				destroy: function() {
					var e = this,
						t = e.navigation,
						i = t.$nextEl,
						a = t.$prevEl;
					i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), a && a.length && (a.off("click", e.navigation.onPrevClick), a.removeClass(e.params.navigation.disabledClass))
				}
			},
			$t = {
				update: function() {
					var e = this,
						i = e.rtl,
						a = e.params.pagination;
					if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
						var s, n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
							r = e.pagination.$el,
							o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
						if (e.params.loop ? ((s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (s -= n - 2 * e.loopedSlides), s > o - 1 && (s -= o), s < 0 && "bullets" !== e.params.paginationType && (s = o + s)) : s = "undefined" != typeof e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
							var l, d, c, u = e.pagination.bullets;
							if (a.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && e.previousIndex !== undefined && (e.pagination.dynamicBulletIndex += s - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = s - e.pagination.dynamicBulletIndex, c = ((d = l + (Math.min(u.length, a.dynamicMainBullets) - 1)) + l) / 2), u.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) u.each(function(e, i) {
								var n = t(i),
									r = n.index();
								r === s && n.addClass(a.bulletActiveClass), a.dynamicBullets && (r >= l && r <= d && n.addClass(a.bulletActiveClass + "-main"), r === l && n.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), r === d && n.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"))
							});
							else {
								var p = u.eq(s),
									h = p.index();
								if (p.addClass(a.bulletActiveClass), a.dynamicBullets) {
									for (var f = u.eq(l), v = u.eq(d), m = l; m <= d; m += 1) u.eq(m).addClass(a.bulletActiveClass + "-main");
									if (e.params.loop)
										if (h >= u.length - a.dynamicMainBullets) {
											for (var g = a.dynamicMainBullets; g >= 0; g -= 1) u.eq(u.length - g).addClass(a.bulletActiveClass + "-main");
											u.eq(u.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev")
										} else f.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
									else f.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next")
								}
							}
							if (a.dynamicBullets) {
								var y = Math.min(u.length, a.dynamicMainBullets + 4),
									b = (e.pagination.bulletSize * y - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
									w = i ? "right" : "left";
								u.css(e.isHorizontal() ? w : "top", b + "px")
							}
						}
						if ("fraction" === a.type && (r.find("." + a.currentClass).text(a.formatFractionCurrent(s + 1)), r.find("." + a.totalClass).text(a.formatFractionTotal(o))), "progressbar" === a.type) {
							var x;
							x = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
							var E = (s + 1) / o,
								T = 1,
								S = 1;
							"horizontal" === x ? T = E : S = E, r.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + S + ")").transition(e.params.speed)
						}
						"custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, s + 1, o)), e.emit("paginationRender", e, r[0])) : e.emit("paginationUpdate", e, r[0]), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](a.lockClass)
					}
				},
				render: function() {
					var e = this,
						t = e.params.pagination;
					if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
						var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
							a = e.pagination.$el,
							s = "";
						if ("bullets" === t.type) {
							for (var n = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, r = 0; r < n; r += 1) t.renderBullet ? s += t.renderBullet.call(e, r, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
							a.html(s), e.pagination.bullets = a.find("." + t.bulletClass)
						}
						"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', a.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', a.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
					}
				},
				init: function() {
					var e = this,
						i = e.params.pagination;
					if (i.el) {
						var a = t(i.el);
						0 !== a.length && (e.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === e.$el.find(i.el).length && (a = e.$el.find(i.el)), "bullets" === i.type && i.clickable && a.addClass(i.clickableClass), a.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (a.addClass("" + i.modifierClass + i.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && a.addClass(i.progressbarOppositeClass), i.clickable && a.on("click", "." + i.bulletClass, function(i) {
							i.preventDefault();
							var a = t(this).index() * e.params.slidesPerGroup;
							e.params.loop && (a += e.loopedSlides), e.slideTo(a)
						}), Ve.extend(e.pagination, {
							$el: a,
							el: a[0]
						}))
					}
				},
				destroy: function() {
					var e = this,
						t = e.params.pagination;
					if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
						var i = e.pagination.$el;
						i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass)
					}
				}
			},
			Ot = {
				setTranslate: function() {
					var e = this;
					if (e.params.scrollbar.el && e.scrollbar.el) {
						var t = e.scrollbar,
							i = e.rtlTranslate,
							a = e.progress,
							s = t.dragSize,
							n = t.trackSize,
							r = t.$dragEl,
							o = t.$el,
							l = e.params.scrollbar,
							d = s,
							c = (n - s) * a;
						i ? (c = -c) > 0 ? (d = s - c, c = 0) : -c + s > n && (d = n + c) : c < 0 ? (d = s + c, c = 0) : c + s > n && (d = n - c), e.isHorizontal() ? (r.transform("translate3d(" + c + "px, 0, 0)"), r[0].style.width = d + "px") : (r.transform("translate3d(0px, " + c + "px, 0)"), r[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
							o[0].style.opacity = 0, o.transition(400)
						}, 1e3))
					}
				},
				setTransition: function(e) {
					var t = this;
					t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
				},
				updateSize: function() {
					var e = this;
					if (e.params.scrollbar.el && e.scrollbar.el) {
						var t = e.scrollbar,
							i = t.$dragEl,
							a = t.$el;
						i[0].style.width = "", i[0].style.height = "";
						var s, n = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
							r = e.size / e.virtualSize,
							o = r * (n / e.size);
						s = "auto" === e.params.scrollbar.dragSize ? n * r : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = s + "px" : i[0].style.height = s + "px", a[0].style.display = r >= 1 ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), Ve.extend(t, {
							trackSize: n,
							divider: r,
							moveDivider: o,
							dragSize: s
						}), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
					}
				},
				getPointerPosition: function(e) {
					return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
				},
				setDragPosition: function(e) {
					var t, i = this,
						a = i.scrollbar,
						s = i.rtlTranslate,
						n = a.$el,
						r = a.dragSize,
						o = a.trackSize,
						l = a.dragStartPos;
					t = (a.getPointerPosition(e) - n.offset()[i.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (o - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
					var d = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
					i.updateProgress(d), i.setTranslate(d), i.updateActiveIndex(), i.updateSlidesClasses()
				},
				onDragStart: function(e) {
					var t = this,
						i = t.params.scrollbar,
						a = t.scrollbar,
						s = t.$wrapperEl,
						n = a.$el,
						r = a.$dragEl;
					t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? a.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), a.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), n.transition(0), i.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
				},
				onDragMove: function(e) {
					var t = this,
						i = t.scrollbar,
						a = t.$wrapperEl,
						s = i.$el,
						n = i.$dragEl;
					t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, i.setDragPosition(e), a.transition(0), s.transition(0), n.transition(0), t.emit("scrollbarDragMove", e))
				},
				onDragEnd: function(e) {
					var t = this,
						i = t.params.scrollbar,
						a = t.scrollbar,
						s = t.$wrapperEl,
						n = a.$el;
					t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = Ve.nextTick(function() {
						n.css("opacity", 0), n.transition(400)
					}, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
				},
				enableDraggable: function() {
					var e = this;
					if (e.params.scrollbar.el) {
						var t = e.scrollbar,
							i = e.touchEventsTouch,
							a = e.touchEventsDesktop,
							s = e.params,
							n = t.$el[0],
							r = !(!Ge.passiveListener || !s.passiveListeners) && {
								passive: !1,
								capture: !1
							},
							o = !(!Ge.passiveListener || !s.passiveListeners) && {
								passive: !0,
								capture: !1
							};
						Ge.touch ? (n.addEventListener(i.start, e.scrollbar.onDragStart, r), n.addEventListener(i.move, e.scrollbar.onDragMove, r), n.addEventListener(i.end, e.scrollbar.onDragEnd, o)) : (n.addEventListener(a.start, e.scrollbar.onDragStart, r), _e.addEventListener(a.move, e.scrollbar.onDragMove, r), _e.addEventListener(a.end, e.scrollbar.onDragEnd, o))
					}
				},
				disableDraggable: function() {
					var e = this;
					if (e.params.scrollbar.el) {
						var t = e.scrollbar,
							i = e.touchEventsTouch,
							a = e.touchEventsDesktop,
							s = e.params,
							n = t.$el[0],
							r = !(!Ge.passiveListener || !s.passiveListeners) && {
								passive: !1,
								capture: !1
							},
							o = !(!Ge.passiveListener || !s.passiveListeners) && {
								passive: !0,
								capture: !1
							};
						Ge.touch ? (n.removeEventListener(i.start, e.scrollbar.onDragStart, r), n.removeEventListener(i.move, e.scrollbar.onDragMove, r), n.removeEventListener(i.end, e.scrollbar.onDragEnd, o)) : (n.removeEventListener(a.start, e.scrollbar.onDragStart, r), _e.removeEventListener(a.move, e.scrollbar.onDragMove, r), _e.removeEventListener(a.end, e.scrollbar.onDragEnd, o))
					}
				},
				init: function() {
					var e = this;
					if (e.params.scrollbar.el) {
						var i = e.scrollbar,
							a = e.$el,
							s = e.params.scrollbar,
							n = t(s.el);
						e.params.uniqueNavElements && "string" == typeof s.el && n.length > 1 && 1 === a.find(s.el).length && (n = a.find(s.el));
						var r = n.find("." + e.params.scrollbar.dragClass);
						0 === r.length && (r = t('<div class="' + e.params.scrollbar.dragClass + '"></div>'), n.append(r)), Ve.extend(i, {
							$el: n,
							el: n[0],
							$dragEl: r,
							dragEl: r[0]
						}), s.draggable && i.enableDraggable()
					}
				},
				destroy: function() {
					this.scrollbar.disableDraggable()
				}
			},
			Dt = {
				setTransform: function(e, i) {
					var a = this,
						s = a.rtl,
						n = t(e),
						r = s ? -1 : 1,
						o = n.attr("data-swiper-parallax") || "0",
						l = n.attr("data-swiper-parallax-x"),
						d = n.attr("data-swiper-parallax-y"),
						c = n.attr("data-swiper-parallax-scale"),
						u = n.attr("data-swiper-parallax-opacity");
					if (l || d ? (l = l || "0", d = d || "0") : a.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i * r + "%" : l * i * r + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * i + "%" : d * i + "px", null != u) {
						var p = u - (u - 1) * (1 - Math.abs(i));
						n[0].style.opacity = p
					}
					if (null == c) n.transform("translate3d(" + l + ", " + d + ", 0px)");
					else {
						var h = c - (c - 1) * (1 - Math.abs(i));
						n.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")")
					}
				},
				setTranslate: function() {
					var e = this,
						i = e.$el,
						a = e.slides,
						s = e.progress,
						n = e.snapGrid;
					i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
						e.parallax.setTransform(i, s)
					}), a.each(function(i, a) {
						var r = a.progress;
						e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (n.length - 1)), r = Math.min(Math.max(r, -1), 1), t(a).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
							e.parallax.setTransform(i, r)
						})
					})
				},
				setTransition: function(e) {
					void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(i, a) {
						var s = t(a),
							n = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
						0 === e && (n = 0), s.transition(n)
					})
				}
			},
			Bt = {
				getDistanceBetweenTouches: function(e) {
					if (e.targetTouches.length < 2) return 1;
					var t = e.targetTouches[0].pageX,
						i = e.targetTouches[0].pageY,
						a = e.targetTouches[1].pageX,
						s = e.targetTouches[1].pageY;
					return Math.sqrt(Math.pow(a - t, 2) + Math.pow(s - i, 2))
				},
				onGestureStart: function(e) {
					var i = this,
						a = i.params.zoom,
						s = i.zoom,
						n = s.gesture;
					if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !Ge.gestures) {
						if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
						s.fakeGestureTouched = !0, n.scaleStart = Bt.getDistanceBetweenTouches(e)
					}
					n.$slideEl && n.$slideEl.length || (n.$slideEl = t(e.target).closest("." + i.params.slideClass), 0 === n.$slideEl.length && (n.$slideEl = i.slides.eq(i.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), n.$imageWrapEl = n.$imageEl.parent("." + a.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0), i.zoom.isScaling = !0) : n.$imageEl = undefined
				},
				onGestureChange: function(e) {
					var t = this,
						i = t.params.zoom,
						a = t.zoom,
						s = a.gesture;
					if (!Ge.gestures) {
						if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
						a.fakeGestureMoved = !0, s.scaleMove = Bt.getDistanceBetweenTouches(e)
					}
					s.$imageEl && 0 !== s.$imageEl.length && (Ge.gestures ? a.scale = e.scale * a.currentScale : a.scale = s.scaleMove / s.scaleStart * a.currentScale, a.scale > s.maxRatio && (a.scale = s.maxRatio - 1 + Math.pow(a.scale - s.maxRatio + 1, .5)), a.scale < i.minRatio && (a.scale = i.minRatio + 1 - Math.pow(i.minRatio - a.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
				},
				onGestureEnd: function(e) {
					var t = this,
						i = t.params.zoom,
						a = t.zoom,
						s = a.gesture;
					if (!Ge.gestures) {
						if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
						if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !ft.android) return;
						a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
					}
					s.$imageEl && 0 !== s.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, s.maxRatio), i.minRatio), s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (s.$slideEl = undefined))
				},
				onTouchStart: function(e) {
					var t = this.zoom,
						i = t.gesture,
						a = t.image;
					i.$imageEl && 0 !== i.$imageEl.length && (a.isTouched || (ft.android && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
				},
				onTouchMove: function(e) {
					var t = this,
						i = t.zoom,
						a = i.gesture,
						s = i.image,
						n = i.velocity;
					if (a.$imageEl && 0 !== a.$imageEl.length && (t.allowClick = !1, s.isTouched && a.$slideEl)) {
						s.isMoved || (s.width = a.$imageEl[0].offsetWidth, s.height = a.$imageEl[0].offsetHeight, s.startX = Ve.getTranslate(a.$imageWrapEl[0], "x") || 0, s.startY = Ve.getTranslate(a.$imageWrapEl[0], "y") || 0, a.slideWidth = a.$slideEl[0].offsetWidth, a.slideHeight = a.$slideEl[0].offsetHeight, a.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
						var r = s.width * i.scale,
							o = s.height * i.scale;
						if (!(r < a.slideWidth && o < a.slideHeight)) {
							if (s.minX = Math.min(a.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(a.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !i.isScaling) {
								if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
								if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
							}
							e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = s.touchesCurrent.x, n.prevPositionY = s.touchesCurrent.y, n.prevTime = Date.now(), a.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
						}
					}
				},
				onTouchEnd: function() {
					var e = this.zoom,
						t = e.gesture,
						i = e.image,
						a = e.velocity;
					if (t.$imageEl && 0 !== t.$imageEl.length) {
						if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
						i.isTouched = !1, i.isMoved = !1;
						var s = 300,
							n = 300,
							r = a.x * s,
							o = i.currentX + r,
							l = a.y * n,
							d = i.currentY + l;
						0 !== a.x && (s = Math.abs((o - i.currentX) / a.x)), 0 !== a.y && (n = Math.abs((d - i.currentY) / a.y));
						var c = Math.max(s, n);
						i.currentX = o, i.currentY = d;
						var u = i.width * e.scale,
							p = i.height * e.scale;
						i.minX = Math.min(t.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - p / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
					}
				},
				onTransitionEnd: function() {
					var e = this,
						t = e.zoom,
						i = t.gesture;
					i.$slideEl && e.previousIndex !== e.activeIndex && (i.$imageEl.transform("translate3d(0,0,0) scale(1)"), i.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, i.$slideEl = undefined, i.$imageEl = undefined, i.$imageWrapEl = undefined)
				},
				toggle: function(e) {
					var t = this.zoom;
					t.scale && 1 !== t.scale ? t.out() : t["in"](e)
				},
				"in": function(e) {
					var t, i, a, s, n, r, o, l, d, c, u, p, h, f, v, m, g = this,
						y = g.zoom,
						b = g.params.zoom,
						w = y.gesture,
						x = y.image;
					(w.$slideEl || (w.$slideEl = g.slides.eq(g.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), "undefined" == typeof x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (v = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, a = w.$slideEl.offset().left + v / 2 - t, s = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * y.scale, c = l * y.scale, h = -(u = Math.min(v / 2 - d / 2, 0)), f = -(p = Math.min(m / 2 - c / 2, 0)), (n = a * y.scale) < u && (n = u), n > h && (n = h), (r = s * y.scale) < p && (r = p), r > f && (r = f)) : (n = 0, r = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + r + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
				},
				out: function() {
					var e = this,
						t = e.zoom,
						i = e.params.zoom,
						a = t.gesture;
					a.$slideEl || (a.$slideEl = e.slides.eq(e.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)), a.$imageEl && 0 !== a.$imageEl.length && (t.scale = 1, t.currentScale = 1, a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), a.$slideEl.removeClass("" + i.zoomedSlideClass), a.$slideEl = undefined)
				},
				enable: function() {
					var e = this,
						t = e.zoom;
					if (!t.enabled) {
						t.enabled = !0;
						var i = !("touchstart" !== e.touchEvents.start || !Ge.passiveListener || !e.params.passiveListeners) && {
								passive: !0,
								capture: !1
							},
							a = !Ge.passiveListener || {
								passive: !1,
								capture: !0
							},
							s = "." + e.params.slideClass;
						Ge.gestures ? (e.$wrapperEl.on("gesturestart", s, t.onGestureStart, i), e.$wrapperEl.on("gesturechange", s, t.onGestureChange, i), e.$wrapperEl.on("gestureend", s, t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, s, t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, s, t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, s, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, s, t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, a)
					}
				},
				disable: function() {
					var e = this,
						t = e.zoom;
					if (t.enabled) {
						e.zoom.enabled = !1;
						var i = !("touchstart" !== e.touchEvents.start || !Ge.passiveListener || !e.params.passiveListeners) && {
								passive: !0,
								capture: !1
							},
							a = !Ge.passiveListener || {
								passive: !1,
								capture: !0
							},
							s = "." + e.params.slideClass;
						Ge.gestures ? (e.$wrapperEl.off("gesturestart", s, t.onGestureStart, i), e.$wrapperEl.off("gesturechange", s, t.onGestureChange, i), e.$wrapperEl.off("gestureend", s, t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, s, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, s, t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, s, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, s, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, a)
					}
				}
			},
			Ht = {
				loadInSlide: function(e, i) {
					void 0 === i && (i = !0);
					var a = this,
						s = a.params.lazy;
					if (void 0 !== e && 0 !== a.slides.length) {
						var n = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
							r = n.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
						!n.hasClass(s.elementClass) || n.hasClass(s.loadedClass) || n.hasClass(s.loadingClass) || (r = r.add(n[0])), 0 !== r.length && r.each(function(e, r) {
							var o = t(r);
							o.addClass(s.loadingClass);
							var l = o.attr("data-background"),
								d = o.attr("data-src"),
								c = o.attr("data-srcset"),
								u = o.attr("data-sizes");
							a.loadImage(o[0], d || l, c, u, !1, function() {
								if (null != a && a && (!a || a.params) && !a.destroyed) {
									if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), n.find("." + s.preloaderClass).remove(), a.params.loop && i) {
										var e = n.attr("data-swiper-slide-index");
										if (n.hasClass(a.params.slideDuplicateClass)) {
											var t = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
											a.lazy.loadInSlide(t.index(), !1)
										} else {
											var r = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
											a.lazy.loadInSlide(r.index(), !1)
										}
									}
									a.emit("lazyImageReady", n[0], o[0]), a.params.autoHeight && a.updateAutoHeight()
								}
							}), a.emit("lazyImageLoad", n[0], o[0])
						})
					}
				},
				load: function() {
					function e(e) {
						if (l) {
							if (s.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
						} else if (r[e]) return !0;
						return !1
					}

					function i(e) {
						return l ? t(e).attr("data-swiper-slide-index") : t(e).index()
					}
					var a = this,
						s = a.$wrapperEl,
						n = a.params,
						r = a.slides,
						o = a.activeIndex,
						l = a.virtual && n.virtual.enabled,
						d = n.lazy,
						c = n.slidesPerView;
					if ("auto" === c && (c = 0), a.lazy.initialImageLoaded || (a.lazy.initialImageLoaded = !0), a.params.watchSlidesVisibility) s.children("." + n.slideVisibleClass).each(function(e, i) {
						var s = l ? t(i).attr("data-swiper-slide-index") : t(i).index();
						a.lazy.loadInSlide(s)
					});
					else if (c > 1)
						for (var u = o; u < o + c; u += 1) e(u) && a.lazy.loadInSlide(u);
					else a.lazy.loadInSlide(o);
					if (d.loadPrevNext)
						if (c > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
							for (var p = d.loadPrevNextAmount, h = c, f = Math.min(o + h + Math.max(p, h), r.length), v = Math.max(o - Math.max(h, p), 0), m = o + c; m < f; m += 1) e(m) && a.lazy.loadInSlide(m);
							for (var g = v; g < o; g += 1) e(g) && a.lazy.loadInSlide(g)
						} else {
							var y = s.children("." + n.slideNextClass);
							y.length > 0 && a.lazy.loadInSlide(i(y));
							var b = s.children("." + n.slidePrevClass);
							b.length > 0 && a.lazy.loadInSlide(i(b))
						}
				}
			},
			_t = {
				LinearSpline: function(e, t) {
					var i, a, s, n, r, o = function(e, t) {
						for (a = -1, i = e.length; i - a > 1;) e[s = i + a >> 1] <= t ? a = s : i = s;
						return i
					};
					return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
						return e ? (r = o(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
					}, this
				},
				getInterpolateFunction: function(e) {
					var t = this;
					t.controller.spline || (t.controller.spline = t.params.loop ? new _t.LinearSpline(t.slidesGrid, e.slidesGrid) : new _t.LinearSpline(t.snapGrid, e.snapGrid))
				},
				setTranslate: function(e, t) {
					function i(e) {
						var t = n.rtlTranslate ? -n.translate : n.translate;
						"slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e), s = -n.controller.spline.interpolate(-t)), s && "container" !== n.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), s = (t - n.minTranslate()) * a + e.minTranslate()), n.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, n), e.updateActiveIndex(), e.updateSlidesClasses()
					}
					var a, s, n = this,
						r = n.controller.control;
					if (Array.isArray(r))
						for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof bt && i(r[o]);
					else r instanceof bt && t !== r && i(r)
				},
				setTransition: function(e, t) {
					function i(t) {
						t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && Ve.nextTick(function() {
							t.updateAutoHeight()
						}), t.$wrapperEl.transitionEnd(function() {
							n && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
						}))
					}
					var a, s = this,
						n = s.controller.control;
					if (Array.isArray(n))
						for (a = 0; a < n.length; a += 1) n[a] !== t && n[a] instanceof bt && i(n[a]);
					else n instanceof bt && t !== n && i(n)
				}
			},
			qt = {
				name: "controller",
				params: {
					controller: {
						control: undefined,
						inverse: !1,
						by: "slide"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						controller: {
							control: e.params.controller.control,
							getInterpolateFunction: _t.getInterpolateFunction.bind(e),
							setTranslate: _t.setTranslate.bind(e),
							setTransition: _t.setTransition.bind(e)
						}
					})
				},
				on: {
					update: function() {
						var e = this;
						e.controller.control && e.controller.spline && (e.controller.spline = undefined, delete e.controller.spline)
					},
					resize: function() {
						var e = this;
						e.controller.control && e.controller.spline && (e.controller.spline = undefined, delete e.controller.spline)
					},
					observerUpdate: function() {
						var e = this;
						e.controller.control && e.controller.spline && (e.controller.spline = undefined, delete e.controller.spline)
					},
					setTranslate: function(e, t) {
						var i = this;
						i.controller.control && i.controller.setTranslate(e, t)
					},
					setTransition: function(e, t) {
						var i = this;
						i.controller.control && i.controller.setTransition(e, t)
					}
				}
			},
			Nt = {
				makeElFocusable: function(e) {
					return e.attr("tabIndex", "0"), e
				},
				addElRole: function(e, t) {
					return e.attr("role", t), e
				},
				addElLabel: function(e, t) {
					return e.attr("aria-label", t), e
				},
				disableEl: function(e) {
					return e.attr("aria-disabled", !0), e
				},
				enableEl: function(e) {
					return e.attr("aria-disabled", !1), e
				},
				onEnterKey: function(e) {
					var i = this,
						a = i.params.a11y;
					if (13 === e.keyCode) {
						var s = t(e.target);
						i.navigation && i.navigation.$nextEl && s.is(i.navigation.$nextEl) && (i.isEnd && !i.params.loop || i.slideNext(), i.isEnd ? i.a11y.notify(a.lastSlideMessage) : i.a11y.notify(a.nextSlideMessage)), i.navigation && i.navigation.$prevEl && s.is(i.navigation.$prevEl) && (i.isBeginning && !i.params.loop || i.slidePrev(), i.isBeginning ? i.a11y.notify(a.firstSlideMessage) : i.a11y.notify(a.prevSlideMessage)), i.pagination && s.is("." + i.params.pagination.bulletClass) && s[0].click()
					}
				},
				notify: function(e) {
					var t = this.a11y.liveRegion;
					0 !== t.length && (t.html(""), t.html(e))
				},
				updateNavigation: function() {
					var e = this;
					if (!e.params.loop && e.navigation) {
						var t = e.navigation,
							i = t.$nextEl,
							a = t.$prevEl;
						a && a.length > 0 && (e.isBeginning ? e.a11y.disableEl(a) : e.a11y.enableEl(a)), i && i.length > 0 && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i))
					}
				},
				updatePagination: function() {
					var e = this,
						i = e.params.a11y;
					e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(a, s) {
						var n = t(s);
						e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
					})
				},
				init: function() {
					var e = this;
					e.$el.append(e.a11y.liveRegion);
					var t, i, a = e.params.a11y;
					e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, a.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, a.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
				},
				destroy: function() {
					var e, t, i = this;
					i.a11y.liveRegion && i.a11y.liveRegion.length > 0 && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
				}
			},
			Rt = {
				init: function() {
					var e = this;
					if (e.params.history) {
						if (!qe.history || !qe.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
						var t = e.history;
						t.initialized = !0, t.paths = Rt.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || qe.addEventListener("popstate", e.history.setHistoryPopState))
					}
				},
				destroy: function() {
					var e = this;
					e.params.history.replaceState || qe.removeEventListener("popstate", e.history.setHistoryPopState)
				},
				setHistoryPopState: function() {
					var e = this;
					e.history.paths = Rt.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
				},
				getPathValues: function() {
					var e = qe.location.pathname.slice(1).split("/").filter(function(e) {
							return "" !== e
						}),
						t = e.length;
					return {
						key: e[t - 2],
						value: e[t - 1]
					}
				},
				setHistory: function(e, t) {
					var i = this;
					if (i.history.initialized && i.params.history.enabled) {
						var a = i.slides.eq(t),
							s = Rt.slugify(a.attr("data-history"));
						qe.location.pathname.includes(e) || (s = e + "/" + s);
						var n = qe.history.state;
						n && n.value === s || (i.params.history.replaceState ? qe.history.replaceState({
							value: s
						}, null, s) : qe.history.pushState({
							value: s
						}, null, s))
					}
				},
				slugify: function(e) {
					return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
				},
				scrollToSlide: function(e, t, i) {
					var a = this;
					if (t)
						for (var s = 0, n = a.slides.length; s < n; s += 1) {
							var r = a.slides.eq(s);
							if (Rt.slugify(r.attr("data-history")) === t && !r.hasClass(a.params.slideDuplicateClass)) {
								var o = r.index();
								a.slideTo(o, e, i)
							}
						} else a.slideTo(0, e, i)
				}
			},
			Vt = {
				onHashCange: function() {
					var e = this,
						t = _e.location.hash.replace("#", "");
					if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
						var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
						if (void 0 === i) return;
						e.slideTo(i)
					}
				},
				setHash: function() {
					var e = this;
					if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
						if (e.params.hashNavigation.replaceState && qe.history && qe.history.replaceState) qe.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
						else {
							var t = e.slides.eq(e.activeIndex),
								i = t.attr("data-hash") || t.attr("data-history");
							_e.location.hash = i || ""
						}
				},
				init: function() {
					var e = this;
					if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
						e.hashNavigation.initialized = !0;
						var i = _e.location.hash.replace("#", "");
						if (i)
							for (var a = 0, s = 0, n = e.slides.length; s < n; s += 1) {
								var r = e.slides.eq(s);
								if ((r.attr("data-hash") || r.attr("data-history")) === i && !r.hasClass(e.params.slideDuplicateClass)) {
									var o = r.index();
									e.slideTo(o, a, e.params.runCallbacksOnInit, !0)
								}
							}
						e.params.hashNavigation.watchState && t(qe).on("hashchange", e.hashNavigation.onHashCange)
					}
				},
				destroy: function() {
					var e = this;
					e.params.hashNavigation.watchState && t(qe).off("hashchange", e.hashNavigation.onHashCange)
				}
			},
			Gt = {
				run: function() {
					var e = this,
						t = e.slides.eq(e.activeIndex),
						i = e.params.autoplay.delay;
					t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = Ve.nextTick(function() {
						e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
					}, i)
				},
				start: function() {
					var e = this;
					return "undefined" == typeof e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
				},
				stop: function() {
					var e = this;
					return !!e.autoplay.running && ("undefined" != typeof e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = undefined), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
				},
				pause: function(e) {
					var t = this;
					t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
				}
			},
			Ft = {
				setTranslate: function() {
					for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
						var a = e.slides.eq(i),
							s = -a[0].swiperSlideOffset;
						e.params.virtualTranslate || (s -= e.translate);
						var n = 0;
						e.isHorizontal() || (n = s, s = 0);
						var r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
						a.css({
							opacity: r
						}).transform("translate3d(" + s + "px, " + n + "px, 0px)")
					}
				},
				setTransition: function(e) {
					var t = this,
						i = t.slides,
						a = t.$wrapperEl;
					if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
						var s = !1;
						i.transitionEnd(function() {
							if (!s && t && !t.destroyed) {
								s = !0, t.animating = !1;
								for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
							}
						})
					}
				}
			},
			Xt = {
				setTranslate: function() {
					var e, i = this,
						a = i.$el,
						s = i.$wrapperEl,
						n = i.slides,
						r = i.width,
						o = i.height,
						l = i.rtlTranslate,
						d = i.size,
						c = i.params.cubeEffect,
						u = i.isHorizontal(),
						p = i.virtual && i.params.virtual.enabled,
						h = 0;
					c.shadow && (u ? (0 === (e = s.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), s.append(e)), e.css({
						height: r + "px"
					})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), a.append(e)));
					for (var f = 0; f < n.length; f += 1) {
						var v = n.eq(f),
							m = f;
						p && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
						var g = 90 * m,
							y = Math.floor(g / 360);
						l && (g = -g, y = Math.floor(-g / 360));
						var b = Math.max(Math.min(v[0].progress, 1), -1),
							w = 0,
							x = 0,
							E = 0;
						m % 4 == 0 ? (w = 4 * -y * d, E = 0) : (m - 1) % 4 == 0 ? (w = 0, E = 4 * -y * d) : (m - 2) % 4 == 0 ? (w = d + 4 * y * d, E = d) : (m - 3) % 4 == 0 && (w = -d, E = 3 * d + 4 * d * y), l && (w = -w), u || (x = w, w = 0);
						var T = "rotateX(" + (u ? 0 : -g) + "deg) rotateY(" + (u ? g : 0) + "deg) translate3d(" + w + "px, " + x + "px, " + E + "px)";
						if (b <= 1 && b > -1 && (h = 90 * m + 90 * b, l && (h = 90 * -m - 90 * b)), v.transform(T), c.slideShadows) {
							var S = u ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
								C = u ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
							0 === S.length && (S = t('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), v.append(S)), 0 === C.length && (C = t('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), v.append(C)), S.length && (S[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0))
						}
					}
					if (s.css({
							"-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
							"-moz-transform-origin": "50% 50% -" + d / 2 + "px",
							"-ms-transform-origin": "50% 50% -" + d / 2 + "px",
							"transform-origin": "50% 50% -" + d / 2 + "px"
						}), c.shadow)
						if (u) e.transform("translate3d(0px, " + (r / 2 + c.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")");
						else {
							var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
								k = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
								P = c.shadowScale,
								L = c.shadowScale / k,
								z = c.shadowOffset;
							e.transform("scale3d(" + P + ", 1, " + L + ") translate3d(0px, " + (o / 2 + z) + "px, " + -o / 2 / L + "px) rotateX(-90deg)")
						} var I = Et.isSafari || Et.isUiWebView ? -d / 2 : 0;
					s.transform("translate3d(0px,0," + I + "px) rotateX(" + (i.isHorizontal() ? 0 : h) + "deg) rotateY(" + (i.isHorizontal() ? -h : 0) + "deg)")
				},
				setTransition: function(e) {
					var t = this,
						i = t.$el;
					t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && i.find(".swiper-cube-shadow").transition(e)
				}
			},
			Yt = {
				setTranslate: function() {
					for (var e = this, i = e.slides, a = e.rtlTranslate, s = 0; s < i.length; s += 1) {
						var n = i.eq(s),
							r = n[0].progress;
						e.params.flipEffect.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
						var o = -180 * r,
							l = 0,
							d = -n[0].swiperSlideOffset,
							c = 0;
						if (e.isHorizontal() ? a && (o = -o) : (c = d, d = 0, l = -o, o = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + i.length, e.params.flipEffect.slideShadows) {
							var u = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
								p = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
							0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), n.append(u)), 0 === p.length && (p = t('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(p)), u.length && (u[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
						}
						n.transform("translate3d(" + d + "px, " + c + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
					}
				},
				setTransition: function(e) {
					var t = this,
						i = t.slides,
						a = t.activeIndex,
						s = t.$wrapperEl;
					if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
						var n = !1;
						i.eq(a).transitionEnd(function() {
							if (!n && t && !t.destroyed) {
								n = !0, t.animating = !1;
								for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
							}
						})
					}
				}
			},
			Wt = {
				setTranslate: function() {
					for (var e = this, i = e.width, a = e.height, s = e.slides, n = e.$wrapperEl, r = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), d = e.translate, c = l ? i / 2 - d : a / 2 - d, u = l ? o.rotate : -o.rotate, p = o.depth, h = 0, f = s.length; h < f; h += 1) {
						var v = s.eq(h),
							m = r[h],
							g = (c - v[0].swiperSlideOffset - m / 2) / m * o.modifier,
							y = l ? u * g : 0,
							b = l ? 0 : u * g,
							w = -p * Math.abs(g),
							x = o.stretch;
						"string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(o.stretch) / 100 * m);
						var E = l ? 0 : x * g,
							T = l ? x * g : 0;
						Math.abs(T) < .001 && (T = 0), Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
						var S = "translate3d(" + T + "px," + E + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
						if (v.transform(S), v[0].style.zIndex = 1 - Math.abs(Math.round(g)), o.slideShadows) {
							var C = l ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
								M = l ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
							0 === C.length && (C = t('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), v.append(C)), 0 === M.length && (M = t('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), v.append(M)), C.length && (C[0].style.opacity = g > 0 ? g : 0), M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
						}
					}(Ge.pointerEvents || Ge.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = c + "px 50%")
				},
				setTransition: function(e) {
					this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
				}
			},
			jt = {
				init: function() {
					var e = this,
						t = e.params.thumbs,
						i = e.constructor;
					t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, Ve.extend(e.thumbs.swiper.originalParams, {
						watchSlidesProgress: !0,
						slideToClickedSlide: !1
					}), Ve.extend(e.thumbs.swiper.params, {
						watchSlidesProgress: !0,
						slideToClickedSlide: !1
					})) : Ve.isObject(t.swiper) && (e.thumbs.swiper = new i(Ve.extend({}, t.swiper, {
						watchSlidesVisibility: !0,
						watchSlidesProgress: !0,
						slideToClickedSlide: !1
					})), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
				},
				onThumbClick: function() {
					var e = this,
						i = e.thumbs.swiper;
					if (i) {
						var a = i.clickedIndex,
							s = i.clickedSlide;
						if (!(s && t(s).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
							var n;
							if (n = i.params.loop ? parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
								var r = e.activeIndex;
								e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
								var o = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(),
									l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index();
								n = void 0 === o ? l : void 0 === l ? o : l - r < r - o ? l : o
							}
							e.slideTo(n)
						}
					}
				},
				update: function(e) {
					var t = this,
						i = t.thumbs.swiper;
					if (i) {
						var a = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
						if (t.realIndex !== i.realIndex) {
							var s, n = i.activeIndex;
							if (i.params.loop) {
								i.slides.eq(n).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, n = i.activeIndex);
								var r = i.slides.eq(n).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
									o = i.slides.eq(n).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
								s = void 0 === r ? o : void 0 === o ? r : o - n == n - r ? n : o - n < n - r ? o : r
							} else s = t.realIndex;
							i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(s) < 0 && (i.params.centeredSlides ? s = s > n ? s - Math.floor(a / 2) + 1 : s + Math.floor(a / 2) - 1 : s > n && (s = s - a + 1), i.slideTo(s, e ? 0 : undefined))
						}
						var l = 1,
							d = t.params.thumbs.slideThumbActiveClass;
						if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (l = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (l = 1), l = Math.floor(l), i.slides.removeClass(d), i.params.loop || i.params.virtual && i.params.virtual.enabled)
							for (var c = 0; c < l; c += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(d);
						else
							for (var u = 0; u < l; u += 1) i.slides.eq(t.realIndex + u).addClass(d)
					}
				}
			},
			Ut = [wt, xt, Tt, St, Mt, Pt, zt, {
				name: "mousewheel",
				params: {
					mousewheel: {
						enabled: !1,
						releaseOnEdges: !1,
						invert: !1,
						forceToAxis: !1,
						sensitivity: 1,
						eventsTarged: "container"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						mousewheel: {
							enabled: !1,
							enable: It.enable.bind(e),
							disable: It.disable.bind(e),
							handle: It.handle.bind(e),
							handleMouseEnter: It.handleMouseEnter.bind(e),
							handleMouseLeave: It.handleMouseLeave.bind(e),
							animateSlider: It.animateSlider.bind(e),
							releaseScroll: It.releaseScroll.bind(e),
							lastScrollTime: Ve.now(),
							lastEventBeforeSnap: undefined,
							recentWheelEvents: []
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						!e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
					},
					destroy: function() {
						var e = this;
						e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
					}
				}
			}, {
				name: "navigation",
				params: {
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: "swiper-button-disabled",
						hiddenClass: "swiper-button-hidden",
						lockClass: "swiper-button-lock"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						navigation: {
							init: At.init.bind(e),
							update: At.update.bind(e),
							destroy: At.destroy.bind(e),
							onNextClick: At.onNextClick.bind(e),
							onPrevClick: At.onPrevClick.bind(e)
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						e.navigation.init(), e.navigation.update()
					},
					toEdge: function() {
						this.navigation.update()
					},
					fromEdge: function() {
						this.navigation.update()
					},
					destroy: function() {
						this.navigation.destroy()
					},
					click: function(e) {
						var i, a = this,
							s = a.navigation,
							n = s.$nextEl,
							r = s.$prevEl;
						!a.params.navigation.hideOnClick || t(e.target).is(r) || t(e.target).is(n) || (n ? i = n.hasClass(a.params.navigation.hiddenClass) : r && (i = r.hasClass(a.params.navigation.hiddenClass)), !0 === i ? a.emit("navigationShow", a) : a.emit("navigationHide", a), n && n.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
					}
				}
			}, {
				name: "pagination",
				params: {
					pagination: {
						el: null,
						bulletElement: "span",
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						progressbarOpposite: !1,
						type: "bullets",
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						formatFractionCurrent: function(e) {
							return e
						},
						formatFractionTotal: function(e) {
							return e
						},
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active",
						modifierClass: "swiper-pagination-",
						currentClass: "swiper-pagination-current",
						totalClass: "swiper-pagination-total",
						hiddenClass: "swiper-pagination-hidden",
						progressbarFillClass: "swiper-pagination-progressbar-fill",
						progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
						clickableClass: "swiper-pagination-clickable",
						lockClass: "swiper-pagination-lock"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						pagination: {
							init: $t.init.bind(e),
							render: $t.render.bind(e),
							update: $t.update.bind(e),
							destroy: $t.destroy.bind(e),
							dynamicBulletIndex: 0
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						e.pagination.init(), e.pagination.render(), e.pagination.update()
					},
					activeIndexChange: function() {
						var e = this;
						e.params.loop ? e.pagination.update() : "undefined" == typeof e.snapIndex && e.pagination.update()
					},
					snapIndexChange: function() {
						var e = this;
						e.params.loop || e.pagination.update()
					},
					slidesLengthChange: function() {
						var e = this;
						e.params.loop && (e.pagination.render(), e.pagination.update())
					},
					snapGridLengthChange: function() {
						var e = this;
						e.params.loop || (e.pagination.render(), e.pagination.update())
					},
					destroy: function() {
						this.pagination.destroy()
					},
					click: function(e) {
						var i = this;
						i.params.pagination.el && i.params.pagination.hideOnClick && i.pagination.$el.length > 0 && !t(e.target).hasClass(i.params.pagination.bulletClass) && (!0 === i.pagination.$el.hasClass(i.params.pagination.hiddenClass) ? i.emit("paginationShow", i) : i.emit("paginationHide", i), i.pagination.$el.toggleClass(i.params.pagination.hiddenClass))
					}
				}
			}, {
				name: "scrollbar",
				params: {
					scrollbar: {
						el: null,
						dragSize: "auto",
						hide: !1,
						draggable: !1,
						snapOnRelease: !0,
						lockClass: "swiper-scrollbar-lock",
						dragClass: "swiper-scrollbar-drag"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						scrollbar: {
							init: Ot.init.bind(e),
							destroy: Ot.destroy.bind(e),
							updateSize: Ot.updateSize.bind(e),
							setTranslate: Ot.setTranslate.bind(e),
							setTransition: Ot.setTransition.bind(e),
							enableDraggable: Ot.enableDraggable.bind(e),
							disableDraggable: Ot.disableDraggable.bind(e),
							setDragPosition: Ot.setDragPosition.bind(e),
							getPointerPosition: Ot.getPointerPosition.bind(e),
							onDragStart: Ot.onDragStart.bind(e),
							onDragMove: Ot.onDragMove.bind(e),
							onDragEnd: Ot.onDragEnd.bind(e),
							isTouched: !1,
							timeout: null,
							dragTimeout: null
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
					},
					update: function() {
						this.scrollbar.updateSize()
					},
					resize: function() {
						this.scrollbar.updateSize()
					},
					observerUpdate: function() {
						this.scrollbar.updateSize()
					},
					setTranslate: function() {
						this.scrollbar.setTranslate()
					},
					setTransition: function(e) {
						this.scrollbar.setTransition(e)
					},
					destroy: function() {
						this.scrollbar.destroy()
					}
				}
			}, {
				name: "parallax",
				params: {
					parallax: {
						enabled: !1
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						parallax: {
							setTransform: Dt.setTransform.bind(e),
							setTranslate: Dt.setTranslate.bind(e),
							setTransition: Dt.setTransition.bind(e)
						}
					})
				},
				on: {
					beforeInit: function() {
						var e = this;
						e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
					},
					init: function() {
						var e = this;
						e.params.parallax.enabled && e.parallax.setTranslate()
					},
					setTranslate: function() {
						var e = this;
						e.params.parallax.enabled && e.parallax.setTranslate()
					},
					setTransition: function(e) {
						var t = this;
						t.params.parallax.enabled && t.parallax.setTransition(e)
					}
				}
			}, {
				name: "zoom",
				params: {
					zoom: {
						enabled: !1,
						maxRatio: 3,
						minRatio: 1,
						toggle: !0,
						containerClass: "swiper-zoom-container",
						zoomedSlideClass: "swiper-slide-zoomed"
					}
				},
				create: function() {
					var e = this,
						t = {
							enabled: !1,
							scale: 1,
							currentScale: 1,
							isScaling: !1,
							gesture: {
								$slideEl: undefined,
								slideWidth: undefined,
								slideHeight: undefined,
								$imageEl: undefined,
								$imageWrapEl: undefined,
								maxRatio: 3
							},
							image: {
								isTouched: undefined,
								isMoved: undefined,
								currentX: undefined,
								currentY: undefined,
								minX: undefined,
								minY: undefined,
								maxX: undefined,
								maxY: undefined,
								width: undefined,
								height: undefined,
								startX: undefined,
								startY: undefined,
								touchesStart: {},
								touchesCurrent: {}
							},
							velocity: {
								x: undefined,
								y: undefined,
								prevPositionX: undefined,
								prevPositionY: undefined,
								prevTime: undefined
							}
						};
					"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
						t[i] = Bt[i].bind(e)
					}), Ve.extend(e, {
						zoom: t
					});
					var i = 1;
					Object.defineProperty(e.zoom, "scale", {
						get: function() {
							return i
						},
						set: function(t) {
							if (i !== t) {
								var a = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : undefined,
									s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : undefined;
								e.emit("zoomChange", t, a, s)
							}
							i = t
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						e.params.zoom.enabled && e.zoom.enable()
					},
					destroy: function() {
						this.zoom.disable()
					},
					touchStart: function(e) {
						var t = this;
						t.zoom.enabled && t.zoom.onTouchStart(e)
					},
					touchEnd: function(e) {
						var t = this;
						t.zoom.enabled && t.zoom.onTouchEnd(e)
					},
					doubleTap: function(e) {
						var t = this;
						t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
					},
					transitionEnd: function() {
						var e = this;
						e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
					},
					slideChange: function() {
						var e = this;
						e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
					}
				}
			}, {
				name: "lazy",
				params: {
					lazy: {
						enabled: !1,
						loadPrevNext: !1,
						loadPrevNextAmount: 1,
						loadOnTransitionStart: !1,
						elementClass: "swiper-lazy",
						loadingClass: "swiper-lazy-loading",
						loadedClass: "swiper-lazy-loaded",
						preloaderClass: "swiper-lazy-preloader"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						lazy: {
							initialImageLoaded: !1,
							load: Ht.load.bind(e),
							loadInSlide: Ht.loadInSlide.bind(e)
						}
					})
				},
				on: {
					beforeInit: function() {
						var e = this;
						e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
					},
					init: function() {
						var e = this;
						e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
					},
					scroll: function() {
						var e = this;
						e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
					},
					resize: function() {
						var e = this;
						e.params.lazy.enabled && e.lazy.load()
					},
					scrollbarDragMove: function() {
						var e = this;
						e.params.lazy.enabled && e.lazy.load()
					},
					transitionStart: function() {
						var e = this;
						e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
					},
					transitionEnd: function() {
						var e = this;
						e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
					},
					slideChange: function() {
						var e = this;
						e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
					}
				}
			}, qt, {
				name: "a11y",
				params: {
					a11y: {
						enabled: !0,
						notificationClass: "swiper-notification",
						prevSlideMessage: "Previous slide",
						nextSlideMessage: "Next slide",
						firstSlideMessage: "This is the first slide",
						lastSlideMessage: "This is the last slide",
						paginationBulletMessage: "Go to slide {{index}}"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						a11y: {
							liveRegion: t('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
						}
					}), Object.keys(Nt).forEach(function(t) {
						e.a11y[t] = Nt[t].bind(e)
					})
				},
				on: {
					init: function() {
						var e = this;
						e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
					},
					toEdge: function() {
						var e = this;
						e.params.a11y.enabled && e.a11y.updateNavigation()
					},
					fromEdge: function() {
						var e = this;
						e.params.a11y.enabled && e.a11y.updateNavigation()
					},
					paginationUpdate: function() {
						var e = this;
						e.params.a11y.enabled && e.a11y.updatePagination()
					},
					destroy: function() {
						var e = this;
						e.params.a11y.enabled && e.a11y.destroy()
					}
				}
			}, {
				name: "history",
				params: {
					history: {
						enabled: !1,
						replaceState: !1,
						key: "slides"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						history: {
							init: Rt.init.bind(e),
							setHistory: Rt.setHistory.bind(e),
							setHistoryPopState: Rt.setHistoryPopState.bind(e),
							scrollToSlide: Rt.scrollToSlide.bind(e),
							destroy: Rt.destroy.bind(e)
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						e.params.history.enabled && e.history.init()
					},
					destroy: function() {
						var e = this;
						e.params.history.enabled && e.history.destroy()
					},
					transitionEnd: function() {
						var e = this;
						e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
					},
					slideChange: function() {
						var e = this;
						e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
					}
				}
			}, {
				name: "hash-navigation",
				params: {
					hashNavigation: {
						enabled: !1,
						replaceState: !1,
						watchState: !1
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						hashNavigation: {
							initialized: !1,
							init: Vt.init.bind(e),
							destroy: Vt.destroy.bind(e),
							setHash: Vt.setHash.bind(e),
							onHashCange: Vt.onHashCange.bind(e)
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						e.params.hashNavigation.enabled && e.hashNavigation.init()
					},
					destroy: function() {
						var e = this;
						e.params.hashNavigation.enabled && e.hashNavigation.destroy()
					},
					transitionEnd: function() {
						var e = this;
						e.hashNavigation.initialized && e.hashNavigation.setHash()
					},
					slideChange: function() {
						var e = this;
						e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
					}
				}
			}, {
				name: "autoplay",
				params: {
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						autoplay: {
							running: !1,
							paused: !1,
							run: Gt.run.bind(e),
							start: Gt.start.bind(e),
							stop: Gt.stop.bind(e),
							pause: Gt.pause.bind(e),
							onVisibilityChange: function() {
								"hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
							},
							onTransitionEnd: function(t) {
								e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
							}
						}
					})
				},
				on: {
					init: function() {
						var e = this;
						e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
					},
					beforeTransitionStart: function(e, t) {
						var i = this;
						i.autoplay.running && (t || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : i.autoplay.stop())
					},
					sliderFirstMove: function() {
						var e = this;
						e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
					},
					touchEnd: function() {
						var e = this;
						e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
					},
					destroy: function() {
						var e = this;
						e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
					}
				}
			}, {
				name: "effect-fade",
				params: {
					fadeEffect: {
						crossFade: !1
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						fadeEffect: {
							setTranslate: Ft.setTranslate.bind(e),
							setTransition: Ft.setTransition.bind(e)
						}
					})
				},
				on: {
					beforeInit: function() {
						var e = this;
						if ("fade" === e.params.effect) {
							e.classNames.push(e.params.containerModifierClass + "fade");
							var t = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								spaceBetween: 0,
								virtualTranslate: !0
							};
							Ve.extend(e.params, t), Ve.extend(e.originalParams, t)
						}
					},
					setTranslate: function() {
						var e = this;
						"fade" === e.params.effect && e.fadeEffect.setTranslate()
					},
					setTransition: function(e) {
						var t = this;
						"fade" === t.params.effect && t.fadeEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-cube",
				params: {
					cubeEffect: {
						slideShadows: !0,
						shadow: !0,
						shadowOffset: 20,
						shadowScale: .94
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						cubeEffect: {
							setTranslate: Xt.setTranslate.bind(e),
							setTransition: Xt.setTransition.bind(e)
						}
					})
				},
				on: {
					beforeInit: function() {
						var e = this;
						if ("cube" === e.params.effect) {
							e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
							var t = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								resistanceRatio: 0,
								spaceBetween: 0,
								centeredSlides: !1,
								virtualTranslate: !0
							};
							Ve.extend(e.params, t), Ve.extend(e.originalParams, t)
						}
					},
					setTranslate: function() {
						var e = this;
						"cube" === e.params.effect && e.cubeEffect.setTranslate()
					},
					setTransition: function(e) {
						var t = this;
						"cube" === t.params.effect && t.cubeEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-flip",
				params: {
					flipEffect: {
						slideShadows: !0,
						limitRotation: !0
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						flipEffect: {
							setTranslate: Yt.setTranslate.bind(e),
							setTransition: Yt.setTransition.bind(e)
						}
					})
				},
				on: {
					beforeInit: function() {
						var e = this;
						if ("flip" === e.params.effect) {
							e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
							var t = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								spaceBetween: 0,
								virtualTranslate: !0
							};
							Ve.extend(e.params, t), Ve.extend(e.originalParams, t)
						}
					},
					setTranslate: function() {
						var e = this;
						"flip" === e.params.effect && e.flipEffect.setTranslate()
					},
					setTransition: function(e) {
						var t = this;
						"flip" === t.params.effect && t.flipEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-coverflow",
				params: {
					coverflowEffect: {
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: !0
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						coverflowEffect: {
							setTranslate: Wt.setTranslate.bind(e),
							setTransition: Wt.setTransition.bind(e)
						}
					})
				},
				on: {
					beforeInit: function() {
						var e = this;
						"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
					},
					setTranslate: function() {
						var e = this;
						"coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
					},
					setTransition: function(e) {
						var t = this;
						"coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
					}
				}
			}, {
				name: "thumbs",
				params: {
					thumbs: {
						multipleActiveThumbs: !0,
						swiper: null,
						slideThumbActiveClass: "swiper-slide-thumb-active",
						thumbsContainerClass: "swiper-container-thumbs"
					}
				},
				create: function() {
					var e = this;
					Ve.extend(e, {
						thumbs: {
							swiper: null,
							init: jt.init.bind(e),
							update: jt.update.bind(e),
							onThumbClick: jt.onThumbClick.bind(e)
						}
					})
				},
				on: {
					beforeInit: function() {
						var e = this,
							t = e.params.thumbs;
						t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
					},
					slideChange: function() {
						var e = this;
						e.thumbs.swiper && e.thumbs.update()
					},
					update: function() {
						var e = this;
						e.thumbs.swiper && e.thumbs.update()
					},
					resize: function() {
						var e = this;
						e.thumbs.swiper && e.thumbs.update()
					},
					observerUpdate: function() {
						var e = this;
						e.thumbs.swiper && e.thumbs.update()
					},
					setTransition: function(e) {
						var t = this.thumbs.swiper;
						t && t.setTransition(e)
					},
					beforeDestroy: function() {
						var e = this,
							t = e.thumbs.swiper;
						t && e.thumbs.swiperCreated && t && t.destroy()
					}
				}
			}];
		return "undefined" == typeof bt.use && (bt.use = bt.Class.use, bt.installModule = bt.Class.installModule), bt.use(Ut), bt
	});
let slidersInited = !1;
const initCHSliders = function() {
	if (!slidersInited) {
		slidersInited = !0;
		var e = new Swiper(".partners", {
			loop: !0,
			autoplay: {
				delay: 8e3
			},
			speed: 600,
			pagination: {
				el: ".swiper-pagination",
				clickable: !0
			}
		});
		e.on("click", function() {
			e.autoplay.stop()
		}), new Swiper(".careers-tips-slider", {
			speed: 300,
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 16
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 16
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 16
				}
			}
		}), new Swiper(".exhibition__slider", {
			speed: 300,
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 16
				},
				1025: {
					slidesPerView: 3,
					spaceBetween: 16
				}
			}
		}), new Swiper(".steps-slider", {
			speed: 300,
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 16
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 16
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 16
				}
			}
		}), new Swiper(".for-upgrade__how .steps-slider.steps-slider", {
			speed: 300,
			slidesPerView: 1,
			spaceBetween: 10,
			autoplay: {
				delay: 2500
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 16
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 16
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 16
				}
			}
		}), new Swiper(".match-explained-slider", {
			speed: 300,
			slidesPerView: 1,
			spaceBetween: 10,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
				clickable: !0
			},
			breakpoints: {
				375: {
					slidesPerView: 1,
					spaceBetween: 10
				},
				450: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				880: {
					slidesPerView: 4,
					spaceBetween: 16
				},
				1025: {
					slidesPerView: 5,
					spaceBetween: 16
				},
				1281: {
					slidesPerView: 6,
					spaceBetween: 16
				}
			}
		});
		var t = new Swiper(".swiper-container.tests__nav", {
			spaceBetween: 16,
			slidesPerView: 6,
			freeMode: !0,
			watchSlidesVisibility: !0,
			watchSlidesProgress: !0
		});
		new Swiper(".tests__slider", {
			spaceBetween: 16,
			pagination: {
				el: ".swiper-pagination-nav",
				clickable: !0
			},
			speed: 1e3,
			breakpoints: {
				1025: {
					spaceBetween: 0,
					speed: 300
				}
			},
			thumbs: {
				swiper: t
			}
		})
	}
};
document.addEventListener ? (document.addEventListener("DOMContentLoaded", initCHSliders, !1), window.addEventListener("load", initCHSliders, !1)) : (document.attachEvent("onreadystatechange", function() {
	"complete" === document.readyState && initCHSliders()
}), window.attachEvent("onload", initCHSliders)), window.addEventListener("load", function() {
	Array.prototype.slice.call(document.querySelectorAll("[data-smooth-scroll]")).forEach(e => {
		const t = e.getAttribute("data-id");
		t && e.addEventListener("click", e => {
			e.preventDefault(), smoothScroll(document.getElementById(t))
		})
	})
}), (async () => {
	await supportsWebp() ? document.querySelector("body").classList.add("webp") : document.querySelector("body").classList.add("no-webp")
})();