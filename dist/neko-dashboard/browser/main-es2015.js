(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2Ia":
/*!**********************************************************!*\
  !*** ./src/app/utils/plus-badge/plus-badge.component.ts ***!
  \**********************************************************/
/*! exports provided: PlusBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusBadgeComponent", function() { return PlusBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




class PlusBadgeComponent {
}
PlusBadgeComponent.ɵfac = function PlusBadgeComponent_Factory(t) { return new (t || PlusBadgeComponent)(); };
PlusBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlusBadgeComponent, selectors: [["plus-badge"]], decls: 2, vars: 0, consts: [["routerLink", "/plus", "matTooltip", "This is a Neko+ feature.", 1, "cursor-pointer", "uppercase", "float-right", "badge", "badge-success"]], template: function PlusBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL3BsdXMtYmFkZ2UvcGx1cy1iYWRnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlusBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'plus-badge',
                templateUrl: './plus-badge.component.html',
                styleUrls: ['./plus-badge.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kubak\Desktop\New folder\Neko-Dashboard\src\main.ts */"zUnb");


/***/ }),

/***/ "0Ajg":
/*!**************************************************!*\
  !*** ./src/app/guards/leaderboard-auth.guard.ts ***!
  \**************************************************/
/*! exports provided: LeaderboardAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardAuthGuard", function() { return LeaderboardAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");





class LeaderboardAuthGuard {
    constructor(guildService, userService) {
        this.guildService = guildService;
        this.userService = userService;
    }
    canActivate(next, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = next.paramMap.get('id');
            const guildConfig = yield this.guildService.getSavedGuild(id);
            if (guildConfig === null || guildConfig === void 0 ? void 0 : guildConfig.settings.privateLeaderboard) {
                const members = yield this.guildService.getMembers(id);
                return members.some(m => m.id === this.userService.user.id);
            }
            return !guildConfig || !guildConfig.settings.privateLeaderboard;
        });
    }
}
LeaderboardAuthGuard.ɵfac = function LeaderboardAuthGuard_Factory(t) { return new (t || LeaderboardAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
LeaderboardAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LeaderboardAuthGuard, factory: LeaderboardAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeaderboardAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/waves/waves.component */ "y7Ka");










class HomeComponent {
    constructor(guildService, route) {
        this.guildService = guildService;
        this.route = route;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version;
        this.Sent = false;
        this.author = {
            username: 'Neko',
            avatarURL: 'https://cdn.discordapp.com/avatars/743633561768296599/1ba7c76c436cd2dee8cb2e439ccb7211.webp?size=128'
        };
        document.title = 'Neko - Discord Bot';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            aos__WEBPACK_IMPORTED_MODULE_3___default.a.init({
                offset: 400,
                duration: 2000
            });
        });
    }
    toFeatures() { document.getElementById('features').scrollIntoView({ behavior: "smooth" }); }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 67, vars: 3, consts: [[1, "jumbotron"], [1, "container"], ["id", "title"], ["id", "subTitle"], [1, "lead", 2, "position", "absolute", "margin-left", "10px"], ["routerLink", "/invite", "mat-button", "", 1, "addButton", "mr-4"], [1, "fab", "fa-discord", 2, "color", "white", "font-size", "34px", "margin-right", "10px"], [1, "text-light", "text-decoration-none", 3, "click"], ["mat-button", "", 1, "text-light", "FeatureButton"], ["id", "features", 1, "my-5", 2, "overflow-x", "hidden"], [1, "row", "text-light", 2, "justify-content", "center"], ["data-aos", "fade-left", "data-aos-duration", "0", 1, "col-lg-6", "col-md-12", "order-3", "MessageLeveling"], ["id", "MessageLeveling", "src", "assets/img/MessageLeveling.svg", 1, "responsive"], ["data-aos", "fade-left", 1, "col-lg-6", "col-md-12", "order-4", "feature"], [2, "font-weight", "700"], ["aria-hidden", "true", 1, "fas", "fa-arrow-up"], ["data-aos", "fade-right", "data-aos-duration", "0", 1, "col-lg-6", "col-md-12", "order-lg-6", "order-5", "Leaderboard"], ["src", "assets/img/leaderboards.svg", "alt", "Leaderboard", 1, "responsive"], ["data-aos", "fade-right", 1, "col-lg-6", "col-md-12", "order-lg-5", "order-6", "feature"], ["aria-hidden", "true", 1, "fa", "fa-trophy"], ["data-aos", "fade-left", "data-aos-duration", "0", 1, "col-lg-6", "col-md-12", "order-7", "Announce"], ["id", "leaderboard", "src", "assets/img/dashboard.svg", "alt", "Announce", 1, "responsive"], ["data-aos", "fade-left", 1, "col-lg-6", "col-md-12", "order-8", "feature"], ["aria-hidden", "true", 1, "fas", "fa-cogs"], [1, "container", "text-center"], [2, "font-size", "28x"], ["routerLink", "/invite", "mat-button", "", 1, "addButton"], [1, "content", "d-flex", "flex-column", "justify-content-end"], [1, "right"], [1, "ml-4"], [2, "font-size", "22px"], [1, "d-flex", "align-items-center"], ["mat-button", "", "id", "joinButton", "routerLink", "/invite", 1, "bottomButton", "mr-2"], ["mat-button", "", "id", "feedbackButton", 1, "bottomButton"], [1, "d-flex", "justify-content-center", 2, "margin-bottom", "2vh"], ["routerLink", "/invite", "target", "_blank", 1, "socialButtons"], ["href", "https://twitter.com/nekoyorisou", "target", "_blank", 1, "socialButtons"], [1, "fab", "fa-twitter-square", 2, "color", "white", "font-size", "34px", "margin-right", "10px"], ["href", "https://www.instagram.com/nekoyorisou", "target", "_blank", 1, "socialButtons"], [1, "fab", "fa-instagram", 2, "color", "white", "font-size", "34px", "margin-right", "10px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Welcome To Femboy Fantasy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Femboys \u2022 Cute emojis \u2022 Friendly Staff \u2022 Aethentic \u2022 Vibes \u2022 Much More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Join us Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_12_listener() { return ctx.toFeatures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Message Leveling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Earn Levels and Compete with Others ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "User Friendly Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "What are you waiting for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Join us Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "waves");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "StardewFemboys.xyz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Join Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Give Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Level up as you become more active in the community. Experience everything and more by messaging and leveling using ", ctx.author.username, " in the server and gathering new skills.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Level up through our servers roles and recieve perks! With ", ctx.author.username, "'s Leveling system, compete with others, and climb to the top of the leaderboards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Have a quick and easy view your stats in the sever! With ", ctx.author.username, "'s simple and easy to use dashboard, monitor your statistics with ease and make any adjustments with a single click.");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_8__["WavesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%] {\r\n    padding-top: 5rem;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n#subTitle[_ngcontent-%COMP%] {\r\n    padding-left: 10px; \r\n    text-align: left; \r\n    margin-top: -5px; \r\n    font-weight: 500;\r\n    cursor: default;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n    font-weight: 700; \r\n    text-align: left; \r\n    font-size: 38px; \r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    --banner: url('/assets/img/banner.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 95vh;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    border-radius: 0;\r\n\r\n    text-align: center;\r\n    background-image: linear-gradient(0deg, rgba(19,27,33,1) 0%, rgba(19,27,33,1) 6%, rgba(19,27,33,0.71) 29%, rgba(19,27,33,0) 100%), var(--banner);\r\n    \r\n}\r\n\r\np[_ngcontent-%COMP%]:not(.lead) {\r\n    color: var(--muted);\r\n    cursor: pointer;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    z-index: 1 !important;\r\n}\r\n\r\n.robot[_ngcontent-%COMP%] {\r\n    max-width: 196px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\r\n    color: var(--muted);\r\n}\r\n\r\n#features[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\r\n    margin: 75px 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%], #MessageLeveling[_ngcontent-%COMP%], #leaderboard[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    max-width: 85vw;\r\n    z-index: 1;\r\n}\r\n\r\n#MessageLeveling[_ngcontent-%COMP%], #leaderboard[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 14vh;\r\n    background-color: var(--background-secondary);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {  \r\n    position: relative !important;\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n}\r\n\r\n.addButton[_ngcontent-%COMP%] {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    justify-content: space-evenly;\r\n    transform: none;\r\n    transition: transform 0.2s;\r\n    margin-bottom: 10px;\r\n\r\n    margin-top: 10px; \r\n    font-size: 20px; \r\n    font-weight: 700; \r\n    text-align: center;\r\n\r\n    background: linear-gradient(90deg,#6850ff,#a750ff);\r\n    border-radius: 20px;\r\n}\r\n\r\n.addButton[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px) scale(1.02) translateZ(0px);\r\n}\r\n\r\n.socialButtons[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px) scale(1.02) translateZ(0px);\r\n\r\n}\r\n\r\n.bottomButton[_ngcontent-%COMP%] {\r\n    background-color: var(--background-primary);\r\n    border-radius: 10px;\r\n    font-weight: 700;\r\n}\r\n\r\n.FeatureButton[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    text-align: center;\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    max-width: 350px;\r\n\r\n    margin-top: 10px; \r\n    font-size: 20px; \r\n    font-weight: 700; \r\n    text-align: center;\r\n\r\n    transform: none;\r\n    transition: transform 0.2s;\r\n    border-radius: 20px;\r\n    background: linear-gradient(120deg, var(--background-tertiary) 0%, var(--background-tertiary) 4.44%, var(--background-secondary) 97.4%);\r\n}\r\n\r\n.FeatureButton[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px) scale(1.02) translateZ(0px);\r\n}\r\n\r\n@-webkit-keyframes up-down-left {\r\n    100% {\r\n        transform: translateY(25px) perspective(1000px) rotateX(23deg) rotateY(23deg) rotate(-9.8deg);\r\n    }\r\n    0% {\r\n        transform: translateY(-25px) perspective(1000px) rotateX(23deg) rotateY(23deg) rotate(-9.8deg);\r\n    }\r\n}\r\n\r\n@keyframes up-down-left {\r\n    100% {\r\n        transform: translateY(25px) perspective(1000px) rotateX(23deg) rotateY(23deg) rotate(-9.8deg);\r\n    }\r\n    0% {\r\n        transform: translateY(-25px) perspective(1000px) rotateX(23deg) rotateY(23deg) rotate(-9.8deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes up-down-right {\r\n    100% {\r\n        transform: translateY(25px) perspective(1000px) rotateX(23deg) rotateY(-23deg) rotate(9.8deg);\r\n    }\r\n    0% {\r\n        transform: translateY(-25px) perspective(1000px) rotateX(23deg) rotateY(-23deg) rotate(9.8deg);\r\n    }\r\n}\r\n\r\n@keyframes up-down-right {\r\n    100% {\r\n        transform: translateY(25px) perspective(1000px) rotateX(23deg) rotateY(-23deg) rotate(9.8deg);\r\n    }\r\n    0% {\r\n        transform: translateY(-25px) perspective(1000px) rotateX(23deg) rotateY(-23deg) rotate(9.8deg);\r\n    }\r\n}\r\n\r\n.MessageLeveling[_ngcontent-%COMP%] {\r\n    \r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    \r\n}\r\n\r\n.Leaderboard[_ngcontent-%COMP%] {\r\n    \r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    \r\n}\r\n\r\n.Announce[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    \r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .NekoPreviewSidebar[_ngcontent-%COMP%] {\r\n        width: 165px;\r\n    }\r\n    .NekoPreviewUserText[_ngcontent-%COMP%] {\r\n        margin-right: 40px;\r\n    }\r\n    .NekoPreviewUser[_ngcontent-%COMP%] {\r\n        width: 153px;\r\n    }\r\n    .NekoPreviewUserStatusText[_ngcontent-%COMP%] {\r\n        width: 103px;\r\n    }\r\n    .NekoPreviewMessage[_ngcontent-%COMP%] {\r\n        margin-left: 170px;\r\n    }\r\n    \r\n    .MessageHeader[_ngcontent-%COMP%] {\r\n        width: 180px;\r\n    }\r\n    .MessageHeaderUsername[_ngcontent-%COMP%] {\r\n        left: 26.27%;\r\n\r\n    }\r\n    .Message[_ngcontent-%COMP%] {\r\n        margin-left: 167px;\r\n    }\r\n    .MessageEmbed[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n        margin-left: -23px;\r\n    }\r\n    .MessageHeaderTimestamp[_ngcontent-%COMP%] {\r\n        left: 26.53%;\r\n        top: 68%;\r\n    }\r\n    .NekoMessageButton[_ngcontent-%COMP%] {\r\n        margin-right: 18px;   \r\n    }\r\n    .NekoPreviewMessageInput[_ngcontent-%COMP%] {\r\n        min-width: 85px;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    img[_ngcontent-%COMP%] {\r\n        max-width: 640px;\r\n    }\r\n    #MessageLeveling[_ngcontent-%COMP%], #leaderboard[_ngcontent-%COMP%] {\r\n        max-width: 520px;\r\n    }\r\n    .NekoPreviewMessageInput[_ngcontent-%COMP%] {\r\n        min-width: 340px;\r\n    }\r\n    .NekoMessageButton[_ngcontent-%COMP%] {\r\n        margin-right: 160px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n    .NekoPreview[_ngcontent-%COMP%] {\r\n        width: 560px\r\n    }\r\n    .NekoPreviewMessageInput[_ngcontent-%COMP%] {\r\n        min-width: 310px;\r\n    }\r\n    .NekoMessageButton[_ngcontent-%COMP%] {\r\n        margin-right: 0px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsZ0pBQWdKO0lBQ2hKOzs7Ozs7MkJBTXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixtQkFBbUI7O0lBRW5CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7SUFFbEIsa0RBQWtEO0lBQ2xELG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLHVEQUF1RDs7QUFFM0Q7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7SUFFaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCOztJQUVsQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQix1SUFBdUk7QUFDM0k7O0FBRUE7SUFDSSx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSTtRQUNJLDZGQUE2RjtJQUNqRztJQUNBO1FBQ0ksOEZBQThGO0lBQ2xHO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLDZGQUE2RjtJQUNqRztJQUNBO1FBQ0ksOEZBQThGO0lBQ2xHO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZGQUE2RjtJQUNqRztJQUNBO1FBQ0ksOEZBQThGO0lBQ2xHO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLDZGQUE2RjtJQUNqRztJQUNBO1FBQ0ksOEZBQThGO0lBQ2xHO0FBQ0o7O0FBRUE7SUFDSSw2R0FBNkc7SUFDN0csMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksNEdBQTRHO0lBQzVHLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGdFQUFnRTtBQUNwRTs7QUFFQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLCtEQUErRDtBQUNuRTs7QUFFQSwyQ0FBMkM7O0FBQzNDO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7UUFDWixRQUFRO0lBQ1o7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI3N1YlRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICAgIG1hcmdpbi10b3A6IC01cHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgICBmb250LXNpemU6IDM4cHg7IFxyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICAgIC0tYmFubmVyOiB1cmwoJy9hc3NldHMvaW1nL2Jhbm5lci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA5NXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE5LDI3LDMzLDEpIDAlLCByZ2JhKDE5LDI3LDMzLDEpIDYlLCByZ2JhKDE5LDI3LDMzLDAuNzEpIDI5JSwgcmdiYSgxOSwyNywzMywwKSAxMDAlKSwgdmFyKC0tYmFubmVyKTtcclxuICAgIC8qYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTsgKi9cclxufVxyXG5cclxucDpub3QoLmxlYWQpIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb2JvdCB7XHJcbiAgICBtYXgtd2lkdGg6IDE5NnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZmVhdHVyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmVhdHVyZSAubGVhZCB7XHJcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG59XHJcblxyXG4jZmVhdHVyZXMgLmNvbC1sZy02IHtcclxuICAgIG1hcmdpbjogNzVweCAwO1xyXG59XHJcblxyXG5pbWcsICNNZXNzYWdlTGV2ZWxpbmcsICNsZWFkZXJib2FyZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDg1dnc7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbiNNZXNzYWdlTGV2ZWxpbmcsICNsZWFkZXJib2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTR2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuZm9vdGVyIHsgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLnJpZ2h0IHtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5hZGRCdXR0b24ge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCM2ODUwZmYsI2E3NTBmZik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkQnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjAyKSB0cmFuc2xhdGVaKDBweCk7XHJcbn1cclxuXHJcbi5zb2NpYWxCdXR0b25zOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjAyKSB0cmFuc2xhdGVaKDBweCk7XHJcblxyXG59XHJcblxyXG4uYm90dG9tQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLkZlYXR1cmVCdXR0b24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSkgMCUsIHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpIDQuNDQlLCB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSkgOTcuNCUpO1xyXG59XHJcblxyXG4uRmVhdHVyZUJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgc2NhbGUoMS4wMikgdHJhbnNsYXRlWigwcHgpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHVwLWRvd24tbGVmdCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjVweCkgcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKDIzZGVnKSByb3RhdGVZKDIzZGVnKSByb3RhdGUoLTkuOGRlZyk7XHJcbiAgICB9XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KSBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVgoMjNkZWcpIHJvdGF0ZVkoMjNkZWcpIHJvdGF0ZSgtOS44ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB1cC1kb3duLXJpZ2h0IHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KSBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVgoMjNkZWcpIHJvdGF0ZVkoLTIzZGVnKSByb3RhdGUoOS44ZGVnKTtcclxuICAgIH1cclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpIHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCgyM2RlZykgcm90YXRlWSgtMjNkZWcpIHJvdGF0ZSg5LjhkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uTWVzc2FnZUxldmVsaW5nIHtcclxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSkgcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKDIzZGVnKSByb3RhdGVZKDIzZGVnKSByb3RhdGUoLTkuOGRlZykgdHJhbnNsYXRlWCgtMTVweCk7ICovXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgLyphbmltYXRpb246IHVwLWRvd24tbGVmdCAyLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTsqL1xyXG59XHJcblxyXG4uTGVhZGVyYm9hcmQge1xyXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDI1cHgpIHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCgyM2RlZykgcm90YXRlWSgtMjNkZWcpIHJvdGF0ZSg5LjhkZWcpOyAqL1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIC8qYW5pbWF0aW9uOiB1cC1kb3duLXJpZ2h0IDIuN3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlOyovXHJcbn1cclxuXHJcbi5Bbm5vdW5jZSB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgLyphbmltYXRpb246IHVwLWRvd24tbGVmdCAyLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTsqL1xyXG59XHJcblxyXG4vKiBQb3J0YWJsZSBEZXZpY2VzICh0YWJsZXMgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5OZWtvUHJldmlld1NpZGViYXIge1xyXG4gICAgICAgIHdpZHRoOiAxNjVweDtcclxuICAgIH1cclxuICAgIC5OZWtvUHJldmlld1VzZXJUZXh0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuTmVrb1ByZXZpZXdVc2VyIHtcclxuICAgICAgICB3aWR0aDogMTUzcHg7XHJcbiAgICB9XHJcbiAgICAuTmVrb1ByZXZpZXdVc2VyU3RhdHVzVGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwM3B4O1xyXG4gICAgfVxyXG4gICAgLk5la29QcmV2aWV3TWVzc2FnZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuTWVzc2FnZUhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgfVxyXG4gICAgLk1lc3NhZ2VIZWFkZXJVc2VybmFtZSB7XHJcbiAgICAgICAgbGVmdDogMjYuMjclO1xyXG5cclxuICAgIH1cclxuICAgIC5NZXNzYWdlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTY3cHg7XHJcbiAgICB9XHJcbiAgICAuTWVzc2FnZUVtYmVke1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yM3B4O1xyXG4gICAgfVxyXG4gICAgLk1lc3NhZ2VIZWFkZXJUaW1lc3RhbXAge1xyXG4gICAgICAgIGxlZnQ6IDI2LjUzJTtcclxuICAgICAgICB0b3A6IDY4JTtcclxuICAgIH1cclxuICAgIC5OZWtvTWVzc2FnZUJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4OyAgIFxyXG4gICAgfVxyXG4gICAgLk5la29QcmV2aWV3TWVzc2FnZUlucHV0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gICAgfVxyXG4gICAgI01lc3NhZ2VMZXZlbGluZywgI2xlYWRlcmJvYXJkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gICAgfVxyXG4gICAgLk5la29QcmV2aWV3TWVzc2FnZUlucHV0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDM0MHB4O1xyXG4gICAgfVxyXG4gICAgLk5la29NZXNzYWdlQnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuTmVrb1ByZXZpZXcge1xyXG4gICAgICAgIHdpZHRoOiA1NjBweFxyXG4gICAgfVxyXG4gICAgLk5la29QcmV2aWV3TWVzc2FnZUlucHV0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG4gICAgLk5la29NZXNzYWdlQnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "4bjJ":
/*!*******************************************!*\
  !*** ./src/app/services/guild.service.ts ***!
  \*******************************************/
/*! exports provided: GuildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildService", function() { return GuildService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class GuildService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + '/guilds';
        this.singleton = null;
        this._guilds = [];
    }
    get guilds() { return this._guilds; }
    get key() {
        return localStorage.getItem('key');
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.guilds.length <= 0)
                yield this.updateGuilds();
        });
    }
    updateGuilds() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._guilds = (this.key) ?
                yield this.http.get(`${this.endpoint}?key=${this.key}`).toPromise() : [];
        });
    }
    getGuild(id) {
        var _a;
        return (_a = this.guilds) === null || _a === void 0 ? void 0 : _a.find(g => g.id === id);
    }
    getPublicGuild(id) {
        return this.http.get(`${this.endpoint}/${id}/public`).toPromise();
    }
    getMembers(id) {
        return this.http.get(`${this.endpoint}/${id}/members`).toPromise();
    }
    getSavedMember(guildId, userId) {
        return this.http.get(`${this.endpoint}/${guildId}/members/${userId}/saved`).toPromise();
    }
    getBalance(guildId, userId) {
        return this.http.get(`${this.endpoint}/${guildId}/members/${userId}/balance`).toPromise();
    }
    getWarnings(id) {
        return this.http.get(`${this.endpoint}/${id}/warnings`).toPromise();
    }
    getSavedGuild(id) {
        return this.http.get(`${this.endpoint}/${id}/config?key=${this.key}`).toPromise();
    }
    getCommands(id) {
        return this.http.get(`${this.endpoint}/${id}/commands`).toPromise();
    }
    getSavedLog(id) {
        return this.http.get(`${this.endpoint}/${id}/log?key=${this.key}`).toPromise();
    }
    sendEmbed(id, channelId, embedData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post(`${this.endpoint}/${id}/channels/${channelId}/embed`, { embedData }).toPromise();
        });
    }
    saveGuild(id, module, value) {
        return this.http.put(`${this.endpoint}/${id}/${module}?key=${this.key}`, value).toPromise();
    }
    getChannels(id) {
        return this.http.get(`${this.endpoint}/${id}/channels`).toPromise();
    }
    getRoles(id) {
        return this.http.get(`${this.endpoint}/${id}/roles`).toPromise();
    }
    getBotStatus(id) {
        return this.http.get(`${this.endpoint}/${id}/bot-status`).toPromise();
    }
    getMemberStatus(id, userId) {
        return this.http.get(`${this.endpoint}/${id}/members/${userId}/member-status`).toPromise();
    }
    getMessage(id, channelId, messageId) {
        return this.http.get(`${this.endpoint}/${id}/channels/${channelId}/messages/${messageId}`).toPromise();
    }
}
GuildService.ɵfac = function GuildService_Factory(t) { return new (t || GuildService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GuildService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GuildService, factory: GuildService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GuildService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4lpq":
/*!***************************************************!*\
  !*** ./src/app/pages/plus/plus/plus.component.ts ***!
  \***************************************************/
/*! exports provided: PlusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusComponent", function() { return PlusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_pay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pay.service */ "hD2b");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _plus_card_plus_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plus-card/plus-card.component */ "hDNB");









class PlusComponent {
    constructor(route, pay, userService) {
        this.route = route;
        this.pay = pay;
        this.userService = userService;
        this.checkoutEndpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint}/pay`;
    }
    get plusDaysLeft() {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date().getTime();
        const secondDate = new Date(this.userService.savedUser.premiumExpiration).getTime();
        return Math.round(Math.abs((firstDate - secondDate) / oneDay));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            const status = this.route.snapshot.queryParamMap.get('payment_status');
            if (status === 'failed')
                alert('Payment Failed');
        });
    }
    checkout(plan) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.location.href = this.pay.payURL(plan);
        });
    }
}
PlusComponent.ɵfac = function PlusComponent_Factory(t) { return new (t || PlusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_pay_service__WEBPACK_IMPORTED_MODULE_4__["PayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
PlusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlusComponent, selectors: [["app-plus"]], decls: 14, vars: 0, consts: [[1, "container", 2, "position", "relative", "margin-top", "15px"], [1, "row"], [1, "col-sm-6"], [1, "display-3"], [1, "lead"], ["src", "assets/img/bot-profile.jpg", "alt", "Neko Plus Transparent Avatar", 1, "float", "float-right", "plus", 2, "border-radius", "420px"], ["id", "benefits", 1, "row", "py-5"], ["duration", "1 Month", "price", "2.99", 1, "col-sm-4", 3, "checkout"], ["duration", "3 Months", "price", "4.99", 1, "col-sm-4", 2, "transform", "scale(1.045)", 3, "checkout"], ["duration", "1 Year", "price", "14.99", 1, "col-sm-4", 3, "checkout"]], template: function PlusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Donate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Support Neko and support development of Neko's Assistant!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-plus-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checkout", function PlusComponent_Template_app_plus_card_checkout_11_listener() { return ctx.checkout(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-plus-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checkout", function PlusComponent_Template_app_plus_card_checkout_12_listener() { return ctx.checkout(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-plus-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checkout", function PlusComponent_Template_app_plus_card_checkout_13_listener() { return ctx.checkout(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _plus_card_plus_card_component__WEBPACK_IMPORTED_MODULE_7__["PlusCardComponent"]], styles: [".row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n  }\r\n  \r\n.disclaimer[_ngcontent-%COMP%] {\r\n    color: var(--muted);\r\n    font-size: 8px;\r\n}\r\n  \r\nzippy[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n}\r\n  \r\n.plus[_ngcontent-%COMP%] {\r\n    max-width: 256px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGx1cy9wbHVzL3BsdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsdXMvcGx1cy9wbHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IC5jYXJkIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICB9XHJcbiAgXHJcbi5kaXNjbGFpbWVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxufVxyXG4gIFxyXG56aXBweSB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufVxyXG4gIFxyXG4ucGx1cyB7XHJcbiAgICBtYXgtd2lkdGg6IDI1NnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-plus',
                templateUrl: './plus.component.html',
                styleUrls: ['./plus.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_pay_service__WEBPACK_IMPORTED_MODULE_4__["PayService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "4vgP":
/*!**************************************************************!*\
  !*** ./src/app/utils/plus-paywall/plus-paywall.component.ts ***!
  \**************************************************************/
/*! exports provided: PlusPaywallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusPaywallComponent", function() { return PlusPaywallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0, a1) { return { "paywall": a0, "cursor-pointer": a1 }; };
const _c1 = ["*"];
class PlusPaywallComponent {
    constructor(userService) {
        this.userService = userService;
    }
}
PlusPaywallComponent.ɵfac = function PlusPaywallComponent_Factory(t) { return new (t || PlusPaywallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
PlusPaywallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlusPaywallComponent, selectors: [["plus-paywall"]], ngContentSelectors: _c1, decls: 2, vars: 5, consts: [[3, "ngClass", "routerLink"]], template: function PlusPaywallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx.userService.savedUser.premium, !ctx.userService.savedUser.premium))("routerLink", !ctx.userService.savedUser.premium ? "/plus" : null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".paywall[_ngcontent-%COMP%] {\r\n  opacity: 0.75;\r\n  transition: ease-in-out 0.25s;\r\n}\r\n\r\n.paywall[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvcGx1cy1wYXl3YWxsL3BsdXMtcGF5d2FsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL3BsdXMtcGF5d2FsbC9wbHVzLXBheXdhbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXl3YWxsIHtcclxuICBvcGFjaXR5OiAwLjc1O1xyXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMjVzO1xyXG59XHJcblxyXG4ucGF5d2FsbDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlusPaywallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'plus-paywall',
                templateUrl: './plus-paywall.component.html',
                styleUrls: ['./plus-paywall.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "4yAo":
/*!**********************************************!*\
  !*** ./src/app/services/commands.service.ts ***!
  \**********************************************/
/*! exports provided: CommandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsService", function() { return CommandsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ "YGJC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class CommandsService {
    constructor(http) {
        this.http = http;
        this._commands = [];
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + '/commands';
    }
    get commands() { var _a; return (_a = this._commands) !== null && _a !== void 0 ? _a : []; }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.commands.length <= 0)
                yield this.updateCommands();
        });
    }
    updateCommands() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._commands = (yield this.http.get(this.endpoint).toPromise());
        });
    }
    search(query) {
        const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.commands, {
            includeScore: true,
            keys: [
                { name: 'name', weight: 1 },
                { name: 'description', weight: 0.5 },
                { name: 'usage', weight: 0.3 }
            ]
        });
        return fuse
            .search(query)
            .map(r => r.item);
    }
}
CommandsService.ɵfac = function CommandsService_Factory(t) { return new (t || CommandsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CommandsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommandsService, factory: CommandsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommandsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "5HMO":
/*!******************************************!*\
  !*** ./src/app/zippy/zippy.component.ts ***!
  \******************************************/
/*! exports provided: ZippyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZippyComponent", function() { return ZippyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _zippy_component_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zippy.component.animations */ "agny");



const _c0 = ["*"];
class ZippyComponent {
    constructor() {
        this.expanded = false;
        this.title = 'Title';
        this.toggle = () => this.expanded = !this.expanded;
    }
}
ZippyComponent.ɵfac = function ZippyComponent_Factory(t) { return new (t || ZippyComponent)(); };
ZippyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZippyComponent, selectors: [["zippy"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 8, vars: 4, consts: [[1, "zippy"], [1, "zippy-heading", 3, "click"], [1, "float-right", "fa", "fa-chevron-down"], [1, "zippy-body"]], template: function ZippyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZippyComponent_Template_div_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expandCollapse", ctx.expanded ? "expanded" : "collapsed");
    } }, styles: ["span[_ngcontent-%COMP%] { cursor: pointer; }\r\n\r\n.expanded[_ngcontent-%COMP%] { background-color: #f0f0f027; }\r\n\r\n.zippy[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n    border-radius: 8px;\r\n}\r\n\r\n.zippy-heading[_ngcontent-%COMP%]\r\n{\r\n    font-weight: bold;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.zippy-body[_ngcontent-%COMP%] \r\n{\r\n    padding: 20px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.expanded[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg);\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    transition: 300ms all ease;\r\n    transform: rotate(0deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvemlwcHkvemlwcHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGVBQWUsRUFBRTs7QUFFeEIsWUFBWSwyQkFBMkIsRUFBRTs7QUFDekM7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3ppcHB5L3ppcHB5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHsgY3Vyc29yOiBwb2ludGVyOyB9XHJcblxyXG4uZXhwYW5kZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwMjc7IH1cclxuLnppcHB5IHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi56aXBweS1oZWFkaW5nXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uemlwcHktYm9keSBcclxue1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmV4cGFuZGVkIGkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5pIHtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbn0iXX0= */"], data: { animation: [_zippy_component_animations__WEBPACK_IMPORTED_MODULE_1__["expandCollapse"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZippyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'zippy',
                templateUrl: './zippy.component.html',
                styleUrls: ['./zippy.component.css'],
                animations: [_zippy_component_animations__WEBPACK_IMPORTED_MODULE_1__["expandCollapse"]]
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }] }); })();


/***/ }),

/***/ "5VNm":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/guild/logs-module/logs-module.component.ts ***!
  \**********************************************************************/
/*! exports provided: LogsModuleComponent, EventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsModuleComponent", function() { return LogsModuleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _module_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module-config */ "iYCr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _utils_discord_message_preview_message_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/discord/message-preview/message-preview.component */ "H9sY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pipes/snake-to-sentence-case.pipe */ "XkKb");


















function LogsModuleComponent_div_1_div_14_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", channel_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", channel_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[", ((tmp_2_0 = ctx_r6.getChannel(channel_r7.parentId)) == null ? null : tmp_2_0.name) || "N/A", "]");
} }
function LogsModuleComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "snakeToSentenceCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "textarea", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LogsModuleComponent_div_1_div_14_mat_option_19_Template, 4, 3, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "message-preview", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, ctx_r2.events[i_r4]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_2_0 = ctx_r2.getEvent(ctx_r2.events[i_r4])) == null ? null : tmp_2_0.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.textChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", _r5.value)("guild", ctx_r2.guild);
} }
function LogsModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-slide-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Send messages to a channel when an event is triggered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LogsModuleComponent_div_1_div_14_Template, 21, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.events);
} }
class LogsModuleComponent extends _module_config__WEBPACK_IMPORTED_MODULE_2__["ModuleConfig"] {
    constructor(guildService, route, saveChanges) {
        super(guildService, route, saveChanges);
        this.EventType = EventType;
        this.moduleName = 'logs';
        this.events = [
            EventType.Ban,
            EventType.LevelUp,
            EventType.MemberJoin,
            EventType.MemberLeave,
            EventType.MessageDeleted,
            EventType.Unban,
            EventType.Warn
        ];
        this.eventConfigs = [];
    }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            this.eventConfigs = this.savedGuild.logs.events;
        });
    }
    buildForm({ logs }) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            events: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (let i = 0; i < this.events.length; i++) {
            const event = this.events[i];
            const config = logs.events.find(e => e.event === event);
            formGroup.get('events').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                event: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](event),
                enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_a = config === null || config === void 0 ? void 0 : config.enabled) !== null && _a !== void 0 ? _a : false),
                channel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_b = config === null || config === void 0 ? void 0 : config.channel) !== null && _b !== void 0 ? _b : ''),
                message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_c = config === null || config === void 0 ? void 0 : config.message) !== null && _c !== void 0 ? _c : this.LogsMessage(event), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(512)),
                embed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_e = (_d = config === null || config === void 0 ? void 0 : config.embed) === null || _d === void 0 ? void 0 : _d.title) !== null && _e !== void 0 ? _e : ''),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_g = (_f = config === null || config === void 0 ? void 0 : config.embed) === null || _f === void 0 ? void 0 : _f.description) !== null && _g !== void 0 ? _g : ''),
                    image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_j = (_h = config === null || config === void 0 ? void 0 : config.embed) === null || _h === void 0 ? void 0 : _h.image) !== null && _j !== void 0 ? _j : ''),
                    color: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_l = (_k = config === null || config === void 0 ? void 0 : config.embed) === null || _k === void 0 ? void 0 : _k.color) !== null && _l !== void 0 ? _l : ''),
                    thumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_o = (_m = config === null || config === void 0 ? void 0 : config.embed) === null || _m === void 0 ? void 0 : _m.thumbnail) !== null && _o !== void 0 ? _o : ''),
                    author: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_r = (_q = (_p = config === null || config === void 0 ? void 0 : config.embed) === null || _p === void 0 ? void 0 : _p.author) === null || _q === void 0 ? void 0 : _q.text) !== null && _r !== void 0 ? _r : ''),
                        image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_u = (_t = (_s = config === null || config === void 0 ? void 0 : config.embed) === null || _s === void 0 ? void 0 : _s.author) === null || _t === void 0 ? void 0 : _t.image) !== null && _u !== void 0 ? _u : '')
                    }),
                    footer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_x = (_w = (_v = config === null || config === void 0 ? void 0 : config.embed) === null || _v === void 0 ? void 0 : _v.footer) === null || _w === void 0 ? void 0 : _w.text) !== null && _x !== void 0 ? _x : ''),
                        image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_0 = (_z = (_y = config === null || config === void 0 ? void 0 : config.embed) === null || _y === void 0 ? void 0 : _y.footer) === null || _z === void 0 ? void 0 : _z.image) !== null && _0 !== void 0 ? _0 : ''),
                        timestamp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((_3 = (_2 = (_1 = config === null || config === void 0 ? void 0 : config.embed) === null || _1 === void 0 ? void 0 : _1.footer) === null || _2 === void 0 ? void 0 : _2.timestamp) !== null && _3 !== void 0 ? _3 : true)
                    })
                })
            }));
        }
        return formGroup;
    }
    LogsMessage(event) {
        if (event == EventType.MemberJoin)
            return `[USER] has joined!`;
        if (event == EventType.MemberLeave)
            return `[USER] has left!`;
        if (event == EventType.MessageDeleted)
            return `[USER] deleted a message in \`[CHANNEL]\` with content: \`[MESSAGE]\``;
        if (event == EventType.Ban)
            return '[STAFF] `BANNED` [USER] for [REASON]';
        if (event == EventType.Unban)
            return '[STAFF] `UNBANNED` [USER] for [REASON]';
        if (event == EventType.LevelUp)
            return '[USER] has leveled up to level [NEW_LEVEL]!';
        if (event == EventType.Warn)
            return '[STAFF] `WARNED` [USER] for [REASON]';
        else
            return `\`${event}\` was triggered in **[GUILD]**!`;
    }
    filterFormEvents(value) {
        value.events = value.events.filter(e => e === null || e === void 0 ? void 0 : e.enabled);
    }
    getEvent(eventType) {
        return this.eventConfigs.find(e => e.event === eventType);
    }
    submit() {
        const _super = Object.create(null, {
            submit: { get: () => super.submit }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filterFormEvents(this.form.value);
            yield _super.submit.call(this);
        });
    }
}
LogsModuleComponent.ɵfac = function LogsModuleComponent_Factory(t) { return new (t || LogsModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
LogsModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogsModuleComponent, selectors: [["app-announce-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "waitFor"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup"], ["f", "ngForm"], [1, "d-flex", "justify-content-between"], ["routerLink", "/docs/announce", 1, "display-3"], ["formControlName", "enabled", 1, "float-right", "mt-5"], [1, "desc"], ["formArrayName", "events", 1, "row", "d-flex", "justify-content-center"], ["class", "col-lg-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-sm-12"], [1, "rounded", "event", "large", "shadow", 3, "formGroupName"], ["type", "hidden", "formControlName", "event"], [1, "color-heading"], ["formControlName", "enabled"], ["appearance", "outline"], ["formControlName", "message", "matInput", ""], ["message", ""], ["formControlName", "channel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "content", "guild"], [3, "value"], [1, "float-right", "text-muted"]], template: function LogsModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogsModuleComponent_div_1_Template, 15, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("waitFor", ctx.savedGuild && ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["GuildSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _utils_discord_message_preview_message_preview_component__WEBPACK_IMPORTED_MODULE_13__["MessagePreviewComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_15__["SnakeToSentenceCasePipe"]], styles: [".row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n}\r\n\r\n.event[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    border-radius: 3px;\r\n\r\n    background-color: var(--background-tertiary);\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n}\r\n\r\n.event[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\r\n    padding-left: 5px;\r\n    float: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2xvZ3MtbW9kdWxlL2xvZ3MtbW9kdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjs7SUFFbEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ3VpbGQvbG9ncy1tb2R1bGUvbG9ncy1tb2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgPiBkaXYge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZXZlbnQge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZXZlbnQgbWF0LXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogsModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-announce-module',
                templateUrl: './logs-module.component.html',
                styleUrls: ['./logs-module.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();
var EventType;
(function (EventType) {
    EventType["Ban"] = "BAN";
    EventType["LevelUp"] = "LEVEL_UP";
    EventType["MessageDeleted"] = "MESSAGE_DELETED";
    EventType["MemberJoin"] = "MEMBER_JOIN";
    EventType["MemberLeave"] = "MEMBER_LEAVE";
    EventType["Unban"] = "UNBAN";
    EventType["Warn"] = "WARN";
})(EventType || (EventType = {}));


/***/ }),

/***/ "5iji":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/guild/warnings-widget/warnings-widget.component.ts ***!
  \******************************************************************************/
/*! exports provided: WarningsWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningsWidgetComponent", function() { return WarningsWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "qb46");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "LPYB");








function WarningsWidgetComponent_canvas_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("plugins", ctx_r0.barChartPlugins)("legend", ctx_r0.barChartLegend)("chartType", ctx_r0.barChartType);
} }
class WarningsWidgetComponent {
    constructor(guildService, route) {
        this.guildService = guildService;
        this.route = route;
        this.chartReady = false;
        this.barChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{ display: false }],
                xAxes: [{ display: false }]
            },
            plugins: {
                datalabels: { anchor: 'end', align: 'end' }
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__];
        this.barChartData = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const id = val.get('id');
                this.warnings = yield this.guildService.getWarnings(id);
                this.barChartLabels = this.buildLabels();
                this.barChartData = this.buildDataSets();
                this.chartReady = true;
            }));
        });
    }
    buildLabels() {
        const labels = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            labels.push(this.ddMM(date));
        }
        return labels;
    }
    buildDataSets() {
        const sets = [
            { data: [0, 0, 0, 0, 0, 0, 0], label: 'All' },
        ];
        for (const warning of this.warnings) {
            const ddMM = this.ddMM(new Date(warning.at));
            const dayIndex = this.barChartLabels.indexOf(ddMM);
            sets[0].data[dayIndex]++;
        }
        return sets;
    }
    ddMM(date) {
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    }
}
WarningsWidgetComponent.ɵfac = function WarningsWidgetComponent_Factory(t) { return new (t || WarningsWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
WarningsWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarningsWidgetComponent, selectors: [["warnings-widget"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", 4, "ngIf"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function WarningsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recent Warnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WarningsWidgetComponent_canvas_5_Template, 1, 6, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"]], styles: ["canvas[_ngcontent-%COMP%] {\r\n    min-width: 100%;\r\n    margin-left: 15px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    min-height: 250px;\r\n}\r\n\r\n.col-md-3[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL3dhcm5pbmdzLXdpZGdldC93YXJuaW5ncy13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ3VpbGQvd2FybmluZ3Mtd2lkZ2V0L3dhcm5pbmdzLXdpZGdldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLmNvbC1tZC0zLCAuY29sLW1kLTkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaDUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WarningsWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'warnings-widget',
                templateUrl: './warnings-widget.component.html',
                styleUrls: ['./warnings-widget.component.css']
            }]
    }], function () { return [{ type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "5jTC":
/*!*****************************************!*\
  !*** ./src/app/pipes/mini-date.pipe.ts ***!
  \*****************************************/
/*! exports provided: MiniDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniDatePipe", function() { return MiniDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MiniDatePipe {
    transform(dateString, ...args) {
        const date = new Date(dateString);
        return `${date.getDate()}/${(date.getMonth() + 1)}`;
    }
}
MiniDatePipe.ɵfac = function MiniDatePipe_Factory(t) { return new (t || MiniDatePipe)(); };
MiniDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "miniDate", type: MiniDatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'miniDate'
            }]
    }], null, null); })();


/***/ }),

/***/ "5wWH":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard/reaction-roles-module/reaction-roles-module.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReactionRolesModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactionRolesModuleComponent", function() { return ReactionRolesModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_module_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module-config */ "iYCr");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "HC5s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _guild_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../guild/guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _utils_discord_message_preview_message_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/discord/message-preview/message-preview.component */ "H9sY");



















function ReactionRolesModuleComponent_div_1_div_11_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", channel_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", channel_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[", ((tmp_2_0 = ctx_r4.getChannel(channel_r9.parentId)) == null ? null : tmp_2_0.name) || "N/A", "]");
} }
function ReactionRolesModuleComponent_div_1_div_11_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#" + (role_r10.color == null ? null : role_r10.color.toString(16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", role_r10.name, "");
} }
function ReactionRolesModuleComponent_div_1_div_11_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "message-preview", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("author", ctx_r7.reactionRoleMessages[i_r3].author)("createdAt", ctx_r7.toDate(ctx_r7.reactionRoleMessages[i_r3].createdTimestamp))("content", ctx_r7.reactionRoleMessages[i_r3].reactions.message.cleanContent)("member", ctx_r7.reactionRoleMessages[i_r3].member);
} }
function ReactionRolesModuleComponent_div_1_div_11_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "message-preview", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReactionRolesModuleComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ReactionRolesModuleComponent_div_1_div_11_mat_option_6_Template, 4, 3, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Message ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Emote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ReactionRolesModuleComponent_div_1_div_11_mat_option_20_Template, 2, 4, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ReactionRolesModuleComponent_div_1_div_11_div_22_Template, 2, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ReactionRolesModuleComponent_div_1_div_11_div_23_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.textChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.reactionRoleMessages[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.reactionRoleMessages[i_r3]);
} }
function ReactionRolesModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Reaction Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-slide-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ReactionRolesModuleComponent_div_1_div_11_Template, 24, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.reactionRolesIndices);
} }
class ReactionRolesModuleComponent extends src_app_module_config__WEBPACK_IMPORTED_MODULE_2__["ModuleConfig"] {
    constructor(guildService, route, userService, saveChanges) {
        super(guildService, route, saveChanges);
        this.guildService = guildService;
        this.userService = userService;
        this.moduleName = 'reactionRoles';
        this.reactionRoleMessages = [];
        this.reactionRolesIndices = Object(src_app_utils__WEBPACK_IMPORTED_MODULE_3__["toIterable"])(80);
    }
    get reactionRoles() { return this.savedGuild.reactionRoles; }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            console.log(this.reactionRoles.reactionRolesLength);
            if (this.reactionRoles.reactionRolesLength <= this.reactionRolesIndices) {
                this.reactionRolesIndices = Object(src_app_utils__WEBPACK_IMPORTED_MODULE_3__["toIterable"])(this.reactionRoles.reactionRolesLength);
            }
            yield this.updateReactionRolePreviews();
        });
    }
    buildForm({ reactionRoles }) {
        var _a, _b, _c, _d;
        const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            configs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
        });
        for (const i of this.reactionRolesIndices) {
            const config = reactionRoles.configs[i];
            const emojiPattern = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]){1}/gm;
            formGroup.get('configs').setControl(i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                channel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_a = config === null || config === void 0 ? void 0 : config.channel) !== null && _a !== void 0 ? _a : ''),
                role: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_b = config === null || config === void 0 ? void 0 : config.role) !== null && _b !== void 0 ? _b : ''),
                emote: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_c = config === null || config === void 0 ? void 0 : config.emote) !== null && _c !== void 0 ? _c : ''),
                messageId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_d = config === null || config === void 0 ? void 0 : config.messageId) !== null && _d !== void 0 ? _d : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[0-9]{18}/g))
            }));
        }
        return formGroup;
    }
    submit() {
        const _super = Object.create(null, {
            submit: { get: () => super.submit }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.submit.call(this);
            yield this.updateReactionRolePreviews();
        });
    }
    updateReactionRolePreviews() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.reactionRoleMessages = [];
            for (const i of this.reactionRolesIndices) {
                const config = (_a = this.form.controls.configs
                    .get(i.toString())) === null || _a === void 0 ? void 0 : _a.value;
                if (!(config.channel && config.messageId))
                    return this.reactionRoleMessages.push(null);
                try {
                    const msg = yield this.getMessage(config.channel, config.messageId);
                    this.reactionRoleMessages.push(msg);
                }
                catch (_b) {
                    this.reactionRoleMessages.push(null);
                }
            }
        });
    }
    filterFormValue() {
        this.form.value.configs = this.form.value.configs
            .filter(value => Object.keys(value).some(key => value[key]));
    }
    getMessage(channelId, messageId) {
        return this.guildService.getMessage(this.guildId, channelId, messageId);
    }
    toDate(dateString) { return new Date(dateString); }
}
ReactionRolesModuleComponent.ɵfac = function ReactionRolesModuleComponent_Factory(t) { return new (t || ReactionRolesModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
ReactionRolesModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReactionRolesModuleComponent, selectors: [["app-reaction-roles-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "waitFor"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup"], ["f", "ngForm"], [1, "d-flex", "justify-content-between"], [1, "display-3"], ["formControlName", "enabled", 1, "float-right", "mt-5"], [1, "row"], ["formArrayName", "configs", 1, "row"], ["class", "col-lg-6 col-md-12 my-3", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-12", "my-3"], [1, "rounded", "reaction-role", 3, "formGroupName"], ["appearance", "outline", 1, "p-2"], ["formControlName", "channel"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "messageId", "type", "text"], ["matInput", "", "formControlName", "emote", "type", "text"], ["emote", ""], ["formControlName", "role"], [3, "value", "color", 4, "ngFor", "ngForOf"], [1, "px-4"], [4, "ngIf"], [3, "value"], [1, "float-right", "text-muted"], [3, "author", "createdAt", "content", "member"], ["content", "Message not found."]], template: function ReactionRolesModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReactionRolesModuleComponent_div_1_Template, 12, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("waitFor", ctx.savedGuild && ctx.reactionRoles && ctx.reactionRoleMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_guild_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["GuildSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _utils_discord_message_preview_message_preview_component__WEBPACK_IMPORTED_MODULE_16__["MessagePreviewComponent"]], styles: [".reaction-role[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n  padding: 25px 0;\r\n  float: left;\r\n  \r\n  background-color: var(--background-tertiary);\r\n}\r\n\r\n.reaction-role[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\r\n  padding-left: 25px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9yZWFjdGlvbi1yb2xlcy1tb2R1bGUvcmVhY3Rpb24tcm9sZXMtbW9kdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7O0VBRVgsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9yZWFjdGlvbi1yb2xlcy1tb2R1bGUvcmVhY3Rpb24tcm9sZXMtbW9kdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhY3Rpb24tcm9sZSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogMjVweCAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG59XHJcblxyXG4ucmVhY3Rpb24tcm9sZSBtYXQtZm9ybS1maWVsZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReactionRolesModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reaction-roles-module',
                templateUrl: './reaction-roles-module.component.html',
                styleUrls: ['./reaction-roles-module.component.css']
            }]
    }], function () { return [{ type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "7V/i":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");







class LogoutComponent {
    constructor(guildService, router, userService) {
        this.guildService = guildService;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.removeItem('key');
            yield this.userService.updateUser();
            yield this.guildService.updateGuilds();
            this.router.navigate(['/']);
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 1, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "spinner");
    } }, directives: [_utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "7vaz":
/*!****************************************************************************************!*\
  !*** ./src/app/utils/discord/message-embed-preview/message-embed-preview.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MessageEmbedPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEmbedPreviewComponent", function() { return MessageEmbedPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var discord_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! discord-markdown */ "oKB2");
/* harmony import */ var discord_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(discord_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-to-text-emoji */ "s99U");
/* harmony import */ var markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");





class MessageEmbedPreviewComponent {
    constructor(userService) {
        this.userService = userService;
        this.guild = { name: 'Testing123', memberCount: 420 };
        this.eventVariables = true;
        this.content = 'Hello World';
        this.title = 'Embed Preview';
        this.description = 'This is a description';
        this.message = 'Embed Message';
        this.color = '#4f545c';
        this.footerText = 'Footer Text';
        this.footerImage = 'https://probot.media/PG1jbcfVKQ.png';
        this.hidden = true;
        this.embedAuthor = {
            name: 'Hello World',
            icon: 'https://probot.media/PG1jbcfVKQ.png',
            url: 'https://probot.media/PG1jbcfVKQ.png'
        };
        this.embedImage = 'https://probot.media/PG1jbcfVKQ.png';
        this.author = {
            username: 'Neko\'s Assistant',
            avatarURL: 'https://i.imgur.com/4fwl9A5.png'
        };
        this.member = {
            displayName: 'Neko\'s Assistant'
        };
        this.createdAt = new Date();
    }
    get timestamp() {
        var _a;
        const createdAt = new Date((_a = this.createdAt) !== null && _a !== void 0 ? _a : new Date());
        const timestamp = createdAt
            .toTimeString()
            .slice(0, 5);
        const wasToday = new Date().getDay() / createdAt.getDay() === 1;
        const wasYesterday = new Date().getDate() % createdAt.getDate() === 1;
        const isTommorow = createdAt.getTime() % new Date().getDate() === 1;
        if (wasToday)
            return `Today at ${timestamp}`;
        if (wasYesterday)
            return `Yesterday at ${timestamp}`;
        else if (isTommorow)
            return `Tommorow at ${timestamp}`;
        return createdAt
            .toJSON()
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('/');
    }
    openLink(url) {
        window.open(url, '_blank');
    }
    get processed() {
        var _a, _b;
        const user = this.userService.user;
        return (this.eventVariables) ? Object(discord_markdown__WEBPACK_IMPORTED_MODULE_1__["toHTML"])(Object(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__["textEmoji"])(this.content
            .replace(/\[GUILD\]/, (_a = this.guild) === null || _a === void 0 ? void 0 : _a.name)
            .replace(/\[INSTIGATOR\]/, '@Neko#6834')
            .replace(/\[MEMBER_COUNT\]/g, (_b = this.guild) === null || _b === void 0 ? void 0 : _b.memberCount.toString())
            .replace(/\[MESSAGE\]/g, 'Bad Message')
            .replace(/\[CHANNEL\]/g, 'General')
            .replace(/\[MODULE\]/g, 'General')
            .replace(/\[STAFF\]/g, '@Hamburbur#3134')
            .replace(/\[NEW_LEVEL\]/g, '2')
            .replace(/\[NEW_VALUE\]/g, JSON.stringify({ prefix: '.' }, null, 2))
            .replace(/\[OLD_LEVEL\]/g, '1')
            .replace(/\[OLD_VALUE\]/g, JSON.stringify({ prefix: '/' }, null, 2))
            .replace(/\[REASON\]/g, 'not having Neko Plus')
            .replace(/\[USER\]/g, `@BadUser#6969`)))
            .replace(/\[XP\]/g, '300') : Object(discord_markdown__WEBPACK_IMPORTED_MODULE_1__["toHTML"])(Object(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__["textEmoji"])(this.content));
    }
    //get url from description
    getUrlFromDescription() {
        let description = this.description;
        let url = description.match(/\((.*?)\)/);
        if (url)
            return url[1];
    }
    getTextBeforeUrl() {
        let description = this.description;
        let url = description.match(/\((.*?)\)/);
        let textBeforeUrl = description.match(/\[.*?\]/);
        if (url) {
            let urlIndex = description.indexOf(url[0]);
            let textBeforeUrlIndex = description.indexOf(textBeforeUrl[0]);
            return description.substring(textBeforeUrlIndex, urlIndex);
        }
    }
    //get title
    get processedTitle() {
        return Object(discord_markdown__WEBPACK_IMPORTED_MODULE_1__["toHTML"])(Object(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__["textEmoji"])(this.title));
    }
    get processedDescription() {
        this.getTextBeforeUrl();
        this.getUrlFromDescription();
        // [textbeforeurl](url)
        let replaceText = `${this.getTextBeforeUrl()}(${this.getUrlFromDescription()})`;
        //`<a href="${this.getUrlFromDescription()}" target="_blank">${this.getTextBeforeUrl()}</a>`
        //.replace(/\[(.*?)\]/g, '$1')
        if (this.description.includes(replaceText)) {
            return this.description
                .replace(replaceText, `<a href="${this.getUrlFromDescription()}" target="_blank">${this.getTextBeforeUrl().replace(/\[(.*?)\]/g, '$1')}</a>`)
                .replace(/\n/g, "<br />");
        }
        else
            return this.description.replace(/\n/g, "<br />");
    }
    get processedFooter() {
        return Object(discord_markdown__WEBPACK_IMPORTED_MODULE_1__["toHTML"])(Object(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__["textEmoji"])(this.footerText));
    }
}
MessageEmbedPreviewComponent.ɵfac = function MessageEmbedPreviewComponent_Factory(t) { return new (t || MessageEmbedPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
MessageEmbedPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageEmbedPreviewComponent, selectors: [["message-embed-preview"]], inputs: { guild: "guild", eventVariables: "eventVariables", content: "content", title: "title", description: "description", message: "message", color: "color", footerText: "footerText", footerImage: "footerImage", hidden: "hidden", embedAuthor: "embedAuthor", embedImage: "embedImage", author: "author", member: "member", createdAt: "createdAt" }, decls: 32, vars: 16, consts: [[1, "rounded", "flex-vertical", "whitney", "theme-dark"], [1, "rounded", "chat", "flex-vertical", "flex-spacer"], [1, "rounded", "content", "flex-spacer", "flex-horizontal"], [1, "rounded", "flex-spacer", "flex-vertical", "messages-wrapper"], [1, "scroller-wrap"], [1, "scroller", "messages"], [1, "message-group", "hide-overflow"], [1, "avatar-large", "animate"], [1, "comment"], [1, "message", "first"], [2, "line-height", "16px"], [1, "username-wrapper", "v-btm"], [1, "user-name"], [1, "bot-tag"], [1, "highlight-separator"], [1, "timestamp"], [1, "message-text", 3, "innerHtml"], [1, "embedContent", 3, "hidden"], [1, "embed-color-pill"], [1, "embed-author"], [1, "embed-footer-image", 2, "border-radius", "69px", "width", "20px", "height", "20px", 3, "src", "hidden"], [1, "message-text", "embed-footer-text", 2, "align-self", "baseline", 3, "innerHtml", "click"], [1, "message-text", "embed-title", 3, "innerHtml"], [1, "message-text", "embed-description", 3, "innerHTML"], [1, "embedImg", 3, "src"], [1, "embed-footer"], [1, "embed-footer-image", 3, "src"], [1, "message-text", "embed-footer-text", 3, "innerHtml"]], template: function MessageEmbedPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageEmbedPreviewComponent_Template_div_click_25_listener() { return ctx.openLink(ctx.embedAuthor.url); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.author.avatarURL + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.member.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timestamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.processed, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.embedAuthor.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("hidden", !ctx.embedAuthor.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.embedAuthor.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.processedTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.processedDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.embedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.footerImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.processedFooter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".bot-tag[_ngcontent-%COMP%] {\r\n\tbackground: #7289da;\r\n\tfont-size: 10px;\r\n\tfont-weight: 600;\r\n\tcolor: #fff!important;\r\n\tmargin-left: 6px;\r\n\tpadding: 1px 2px;\r\n\tborder-radius: 3px;\r\n\ttext-transform: uppercase;\r\n\tvertical-align: bottom;\r\n\tline-height: 16px;\r\n\tflex-shrink: 0\r\n}\r\n\r\n.avatar-large[_ngcontent-%COMP%] {\r\n\tbackground-clip: padding-box;\r\n\tposition: relative;\r\n\tbackground-color: none;\r\n\tbackground-position: 50%;\r\n\tborder-radius: 50%\r\n}\r\n\r\n.avatar-large[_ngcontent-%COMP%] {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tbackground-size: 40px 40px\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: flex\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%], .scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%] {\r\n\tmin-height: 1px;\r\n\tflex: 1\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n\twidth: 14px\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\r\n\tbackground-color: #7289da;\r\n\tbackground-clip: padding-box;\r\n\tborder: 3px solid #fff;\r\n\tborder-radius: 7px\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\r\n\tbackground-color: #f3f3f3\r\n}\r\n\r\n.scroller-wrap.dark[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n\tbackground-color: rgba(0, 0, 0, .4);\r\n\tborder-color: transparent\r\n}\r\n\r\n.scroller-wrap.dark[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\r\n\tbackground-color: transparent;\r\n\tborder-color: transparent\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n\t-webkit-box-orient: vertical\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%] {\r\n\tword-wrap: break-word\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tposition: relative;\r\n\tcolor: #fff\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n\tbackground: #fff\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\r\n\tcursor: pointer\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: underline\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\topacity: 1;\r\n\ttransition: opacity .2s ease\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%]:hover {\r\n\topacity: .8\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex: 1;\r\n\tz-index: 0\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%], .chat[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%]   .scroller-wrap[_ngcontent-%COMP%] {\r\n\toverflow: hidden\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\toverflow-x: hidden\r\n}\r\n\r\n.hide-overflow[_ngcontent-%COMP%] {\r\n\toverflow: hidden\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tpadding: 20px 0;\r\n\tmargin-left: 20px;\r\n\tmargin-right: 6px;\r\n\tborder-bottom: 1px solid #eceeef;\r\n\tbox-sizing: border-box;\r\n\t-webkit-user-select: text;\r\n\t-moz-user-select: text;\r\n\tuser-select: text\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]:last-of-type, .message-group[_ngcontent-%COMP%]:last-of-type:after {\r\n\tborder-bottom: none\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\r\n\tflex-shrink: 0;\r\n\tmargin-top: -2px;\r\n\tmargin-right: 20px\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n\tcolor: #2e3136;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\tletter-spacing: 0\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\r\n\tcolor: #99aab5;\r\n\tfont-size: 12px;\r\n\tletter-spacing: 0;\r\n\tfont-weight: 500;\r\n\ttext-transform: none;\r\n\tmargin-left: 6px\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   .highlight-separator[_ngcontent-%COMP%] {\r\n\topacity: 0;\r\n\twidth: 0;\r\n\tdisplay: inline-block;\r\n\tcolor: #99aab5\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\r\n\tflex: 1;\r\n\tmargin-right: 20px;\r\n\tmin-width: 0\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n\tcolor: #fff\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: hsla(0, 0%, 100%, .2)\r\n}\r\n\r\n.flex-horizontal[_ngcontent-%COMP%], .flex-vertical[_ngcontent-%COMP%] {\r\n\tdisplay: -ms-flexbox\r\n}\r\n\r\n.flex-vertical[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column\r\n}\r\n\r\n.flex-vertical[_ngcontent-%COMP%] > .flex-spacer[_ngcontent-%COMP%] {\r\n\tmin-height: 1px\r\n}\r\n\r\n.flex-horizontal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: row\r\n}\r\n\r\n.flex-horizontal[_ngcontent-%COMP%] > .flex-spacer[_ngcontent-%COMP%] {\r\n\tmin-width: 1px\r\n}\r\n\r\n.flex-spacer[_ngcontent-%COMP%] {\r\n\tflex: 1\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\r\n\tbackground-color: #36393e\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%], .theme-dark[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%] {\r\n\tbackground-color: #36393e\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%]   .scroller-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n\tbackground-color: #1e2124;\r\n\tborder-color: #36393e\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%]   .scroller-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\r\n\tbackground-color: #2e3136;\r\n\tborder-color: #36393e\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%] {\r\n\tpadding-bottom: 5px\r\n}\r\n\r\n.embedContent[_ngcontent-%COMP%] {\r\n\tmargin-top: 5px;\r\n\tbackground: #2F3136;\r\n\tborder-radius: 3px;\r\n\twidth: -webkit-fit-content;\r\n\twidth: -moz-fit-content;\r\n\twidth: fit-content;\r\n\tposition: -webkit-sticky;\r\n\tposition: sticky;\r\n}\r\n\r\n.embed-color-pill[_ngcontent-%COMP%] {\r\n\tbackground-color: white;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\twidth: 4px;\r\n\theight: 100%;\r\n\tborder-radius: 3px 0 0 3px;\r\n}\r\n\r\n.embed-title[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n\tletter-spacing: 0;\r\n\ttext-transform: none;\r\n\tpadding: 5px 10px 0px 14px;\r\n}\r\n\r\n.embed-description[_ngcontent-%COMP%] {\r\n\tpadding: 0px 10px 5px 14px;\r\n\tcolor: hsla(0,0%,100%,.6);\r\n\tmargin-top: 3px;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.embed-footer[_ngcontent-%COMP%] {\r\n\tpadding: 0px 10px 5px 14px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.embed-footer-text[_ngcontent-%COMP%] {\r\n\tcolor: hsla(0,0%,100%,.6);\r\n\tfont-size: 12px;\r\n}\r\n\r\n.embed-footer-image[_ngcontent-%COMP%] {\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tmargin-right: 4px;\r\n\tborder-radius: 2.45px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.embed-author[_ngcontent-%COMP%] {\r\n\tpadding: 5px 10px 5px 14px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.embedImg[_ngcontent-%COMP%] {\r\n\tpadding-left: 15px;\r\n\tpadding-right: 15px;\r\n\tmax-height: 450px;\r\n\tmax-width: 450px;\r\n\r\n\tmargin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvZGlzY29yZC9tZXNzYWdlLWVtYmVkLXByZXZpZXcvbWVzc2FnZS1lbWJlZC1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FFakI7QUFDRDs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLHdCQUF3QjtDQUN4QjtBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWjtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0NBR2xCO0FBQ0Q7O0FBRUE7O0NBRUMsZUFBZTtDQUdmO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBOztDQUVDLHlCQUF5QjtDQUN6Qiw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDO0FBRUQ7O0FBRUE7QUFFQTs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FHQyxhQUFhO0NBRWIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFVBQVU7Q0FFVjtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGtCQUFrQjtDQUdsQixhQUFhO0NBR2IsT0FBTztDQUNQO0FBQ0Q7O0FBRUE7O0NBRUM7QUFDRDs7QUFFQTtDQUNDLFNBQVM7Q0FDVDtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUdDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixnQ0FBZ0M7Q0FDaEMsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FFdEI7QUFDRDs7QUFFQTs7Q0FFQztBQUNEOztBQUVBO0NBRUMsY0FBYztDQUNkLGdCQUFnQjtDQUNoQjtBQUNEOztBQUVBO0NBQ0MsU0FBUztDQUNUO0FBQ0Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQjtBQUNEOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQjtBQUNEOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFFBQVE7Q0FDUixxQkFBcUI7Q0FDckI7QUFDRDs7QUFFQTtDQUdDLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBOztDQUdDO0FBQ0Q7O0FBRUE7Q0FDQyxhQUFhO0NBSWI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxhQUFhO0NBSWI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FHQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTs7Q0FFQztBQUNEOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCO0FBQ0Q7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQiwwQkFBa0I7Q0FBbEIsdUJBQWtCO0NBQWxCLGtCQUFrQjtDQUNsQix3QkFBZ0I7Q0FBaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsVUFBVTtDQUNWLFlBQVk7Q0FDWiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjs7Q0FFaEIsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMvZGlzY29yZC9tZXNzYWdlLWVtYmVkLXByZXZpZXcvbWVzc2FnZS1lbWJlZC1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90LXRhZyB7XHJcblx0YmFja2dyb3VuZDogIzcyODlkYTtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luLWxlZnQ6IDZweDtcclxuXHRwYWRkaW5nOiAxcHggMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcblx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcblx0LW1zLWZsZXgtbmVnYXRpdmU6IDA7XHJcblx0ZmxleC1zaHJpbms6IDBcclxufVxyXG5cclxuLmF2YXRhci1sYXJnZSB7XHJcblx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlXHJcbn1cclxuXHJcbi5hdmF0YXItbGFyZ2Uge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweFxyXG59XHJcblxyXG4uc2Nyb2xsZXItd3JhcCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXhcclxufVxyXG5cclxuLnNjcm9sbGVyLXdyYXAsXHJcbi5zY3JvbGxlci13cmFwIC5zY3JvbGxlciB7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdC13ZWJraXQtYm94LWZsZXg6IDE7XHJcblx0LW1zLWZsZXg6IDE7XHJcblx0ZmxleDogMVxyXG59XHJcblxyXG4uc2Nyb2xsZXItd3JhcCAuc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHR3aWR0aDogMTRweFxyXG59XHJcblxyXG4uc2Nyb2xsZXItd3JhcCAuc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4uc2Nyb2xsZXItd3JhcCAuc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzI4OWRhO1xyXG5cdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA3cHhcclxufVxyXG5cclxuLnNjcm9sbGVyLXdyYXAgLnNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmM1xyXG59XHJcblxyXG4uc2Nyb2xsZXItd3JhcC5kYXJrIC5zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLnNjcm9sbGVyLXdyYXAuZGFyayAuc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5jaGF0IHtcclxuXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsXHJcbn1cclxuXHJcbi5jaGF0IHtcclxuXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbFxyXG59XHJcblxyXG4ubWVzc2FnZS1ncm91cCB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkXHJcbn1cclxuXHJcbi5jaGF0IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5jaGF0IC5jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmXHJcbn1cclxuXHJcbi5jaGF0IC51c2VyLW5hbWUge1xyXG5cdGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uY2hhdCAudXNlci1uYW1lOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcblxyXG4uY2hhdCAuYXZhdGFyLWxhcmdlIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0b3BhY2l0eTogMTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZVxyXG59XHJcblxyXG4uY2hhdCAuYXZhdGFyLWxhcmdlOmhvdmVyIHtcclxuXHRvcGFjaXR5OiAuOFxyXG59XHJcblxyXG4uY2hhdCAubWVzc2FnZXMtd3JhcHBlciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtZmxleDogMTtcclxuXHQtbXMtZmxleDogMTtcclxuXHRmbGV4OiAxO1xyXG5cdHotaW5kZXg6IDBcclxufVxyXG5cclxuLmNoYXQgLm1lc3NhZ2VzLXdyYXBwZXIsXHJcbi5jaGF0IC5tZXNzYWdlcy13cmFwcGVyIC5zY3JvbGxlci13cmFwIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5jaGF0IC5tZXNzYWdlcyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG92ZXJmbG93LXg6IGhpZGRlblxyXG59XHJcblxyXG4uaGlkZS1vdmVyZmxvdyB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG4ubWVzc2FnZS1ncm91cCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwYWRkaW5nOiAyMHB4IDA7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA2cHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VlZWY7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XHJcblx0LW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xyXG5cdHVzZXItc2VsZWN0OiB0ZXh0XHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwOmxhc3Qtb2YtdHlwZSxcclxuLm1lc3NhZ2UtZ3JvdXA6bGFzdC1vZi10eXBlOmFmdGVyIHtcclxuXHRib3JkZXItYm90dG9tOiBub25lXHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwIC5hdmF0YXItbGFyZ2Uge1xyXG5cdC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xyXG5cdGZsZXgtc2hyaW5rOiAwO1xyXG5cdG1hcmdpbi10b3A6IC0ycHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4XHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwIGgyIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMFxyXG59XHJcblxyXG4ubWVzc2FnZS1ncm91cCBoMiBzdHJvbmcge1xyXG5cdGNvbG9yOiAjMmUzMTM2O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwXHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwIGgyIC50aW1lc3RhbXAge1xyXG5cdGNvbG9yOiAjOTlhYWI1O1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cdG1hcmdpbi1sZWZ0OiA2cHhcclxufVxyXG5cclxuLm1lc3NhZ2UtZ3JvdXAgLmhpZ2hsaWdodC1zZXBhcmF0b3Ige1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0d2lkdGg6IDA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGNvbG9yOiAjOTlhYWI1XHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwIC5jb21tZW50IHtcclxuXHQtd2Via2l0LWJveC1mbGV4OiAxO1xyXG5cdC1tcy1mbGV4OiAxO1xyXG5cdGZsZXg6IDE7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cdG1pbi13aWR0aDogMFxyXG59XHJcblxyXG4udGhlbWUtZGFyayAubWVzc2FnZS1ncm91cCBoMiBzdHJvbmcge1xyXG5cdGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi50aGVtZS1kYXJrIC5tZXNzYWdlLWdyb3VwIGgyIHNwYW4ge1xyXG5cdGNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAuMilcclxufVxyXG5cclxuLmZsZXgtaG9yaXpvbnRhbCxcclxuLmZsZXgtdmVydGljYWwge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94XHJcbn1cclxuXHJcbi5mbGV4LXZlcnRpY2FsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG59XHJcblxyXG4uZmxleC12ZXJ0aWNhbD4uZmxleC1zcGFjZXIge1xyXG5cdG1pbi1oZWlnaHQ6IDFweFxyXG59XHJcblxyXG4uZmxleC1ob3Jpem9udGFsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93XHJcbn1cclxuXHJcbi5mbGV4LWhvcml6b250YWw+LmZsZXgtc3BhY2VyIHtcclxuXHRtaW4td2lkdGg6IDFweFxyXG59XHJcblxyXG4uZmxleC1zcGFjZXIge1xyXG5cdC13ZWJraXQtYm94LWZsZXg6IDE7XHJcblx0LW1zLWZsZXg6IDE7XHJcblx0ZmxleDogMVxyXG59XHJcblxyXG4udGhlbWUtZGFyayAuY2hhdCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZVxyXG59XHJcblxyXG4udGhlbWUtZGFyayAuY2hhdD4uY29udGVudCxcclxuLnRoZW1lLWRhcmsgLm1lc3NhZ2VzLXdyYXBwZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzNjM5M2VcclxufVxyXG5cclxuLnRoZW1lLWRhcmsgLm1lc3NhZ2VzLXdyYXBwZXIgLnNjcm9sbGVyLXdyYXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMTI0O1xyXG5cdGJvcmRlci1jb2xvcjogIzM2MzkzZVxyXG59XHJcblxyXG4udGhlbWUtZGFyayAubWVzc2FnZXMtd3JhcHBlciAuc2Nyb2xsZXItd3JhcDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyZTMxMzY7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMzYzOTNlXHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG5cdHBhZGRpbmctYm90dG9tOiA1cHhcclxufVxyXG5cclxuLmVtYmVkQ29udGVudCB7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdGJhY2tncm91bmQ6ICMyRjMxMzY7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHRwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcblxyXG4uZW1iZWQtY29sb3ItcGlsbCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDRweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5lbWJlZC10aXRsZSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDA7XHJcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcblx0cGFkZGluZzogNXB4IDEwcHggMHB4IDE0cHg7XHJcbn1cclxuXHJcbi5lbWJlZC1kZXNjcmlwdGlvbiB7XHJcblx0cGFkZGluZzogMHB4IDEwcHggNXB4IDE0cHg7XHJcblx0Y29sb3I6IGhzbGEoMCwwJSwxMDAlLC42KTtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZW1iZWQtZm9vdGVyIHtcclxuXHRwYWRkaW5nOiAwcHggMTBweCA1cHggMTRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbWJlZC1mb290ZXItdGV4dCB7XHJcblx0Y29sb3I6IGhzbGEoMCwwJSwxMDAlLC42KTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5lbWJlZC1mb290ZXItaW1hZ2Uge1xyXG5cdHdpZHRoOiAxNnB4O1xyXG5cdGhlaWdodDogMTZweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDRweDtcclxuXHRib3JkZXItcmFkaXVzOiAyLjQ1cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZW1iZWQtYXV0aG9yIHtcclxuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbWJlZEltZyB7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0bWF4LWhlaWdodDogNDUwcHg7XHJcblx0bWF4LXdpZHRoOiA0NTBweDtcclxuXHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageEmbedPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'message-embed-preview',
                templateUrl: './message-embed-preview.component.html',
                styleUrls: ['./message-embed-preview.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { guild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eventVariables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footerImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], embedAuthor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], embedImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], member: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], createdAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8L85":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/guild/warnings-module/warnings-module.component.ts ***!
  \******************************************************************************/
/*! exports provided: WarningsModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningsModuleComponent", function() { return WarningsModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/discord/member-username/member-username.component */ "FHs4");
/* harmony import */ var _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pipes/clean-date-time.pipe */ "Rc5a");

















function WarningsModuleComponent_div_11_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarningsModuleComponent_div_11_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r13.number, " ");
} }
function WarningsModuleComponent_div_11_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarningsModuleComponent_div_11_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "member-username", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", ctx_r4.getMember(row_r15.userId));
} }
function WarningsModuleComponent_div_11_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarningsModuleComponent_div_11_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "member-username", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", ctx_r6.getMember(row_r16.instigatorId));
} }
function WarningsModuleComponent_div_11_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarningsModuleComponent_div_11_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r17.reason, " ");
} }
function WarningsModuleComponent_div_11_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarningsModuleComponent_div_11_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "cleanDateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, row_r18.at), " ");
} }
function WarningsModuleComponent_div_11_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
} }
function WarningsModuleComponent_div_11_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
} }
const _c0 = function () { return [10, 25, 100]; };
function WarningsModuleComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WarningsModuleComponent_div_11_th_3_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WarningsModuleComponent_div_11_td_4_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WarningsModuleComponent_div_11_th_6_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WarningsModuleComponent_div_11_td_7_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WarningsModuleComponent_div_11_th_9_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, WarningsModuleComponent_div_11_td_10_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WarningsModuleComponent_div_11_th_12_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WarningsModuleComponent_div_11_td_13_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, WarningsModuleComponent_div_11_th_15_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WarningsModuleComponent_div_11_td_16_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WarningsModuleComponent_div_11_tr_17_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, WarningsModuleComponent_div_11_tr_18_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-paginator", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
} }
class WarningsModuleComponent {
    constructor(route, guildService, service) {
        this.route = route;
        this.guildService = guildService;
        this.service = service;
        this.displayedColumns = ['number', 'to', 'by', 'reason', 'at'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.warnings = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.route.snapshot.paramMap.get('id');
            this.members = yield this.guildService.getMembers(id);
            const warnings = yield this.service.getWarnings(id);
            warnings.reverse();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](warnings);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator)
            this.dataSource.paginator.firstPage();
    }
    getMember(id) {
        return this.members.find(m => m.id === id) || {};
    }
}
WarningsModuleComponent.ɵfac = function WarningsModuleComponent_Factory(t) { return new (t || WarningsModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"])); };
WarningsModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarningsModuleComponent, selectors: [["app-warnings-module"]], viewQuery: function WarningsModuleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 12, vars: 1, consts: [[1, "container"], [1, "display-3"], [1, "my-2"], ["appearance", "outline", 1, "d-flex", "justify-content-center"], ["matInput", "", "placeholder", "Neko", 3, "keyup"], ["class", "mat-elevation-z8", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "to"], ["class", "user", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "by"], ["matColumnDef", "reason"], ["matColumnDef", "at"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["appearance", "outline", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "user"], [3, "member"], ["mat-header-row", ""], ["mat-row", ""]], template: function WarningsModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Warnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function WarningsModuleComponent_Template_input_keyup_10_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WarningsModuleComponent_div_11_Template, 20, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataSource);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["GuildSidebarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_11__["MemberUsernameComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_12__["CleanDateTimePipe"]], styles: ["pre[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    max-width: 300px;\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n    transform: scale(0.65);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL3dhcm5pbmdzLW1vZHVsZS93YXJuaW5ncy1tb2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ3VpbGQvd2FybmluZ3MtbW9kdWxlL3dhcm5pbmdzLW1vZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHJlIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WarningsModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-warnings-module',
                templateUrl: './warnings-module.component.html',
                styleUrls: ['./warnings-module.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"] }, { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "8SWG":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/guild/general-module/general-module.component.ts ***!
  \****************************************************************************/
/*! exports provided: GeneralModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModuleComponent", function() { return GeneralModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _module_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module-config */ "iYCr");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function GeneralModuleComponent_div_1_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", channel_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", channel_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[", ((tmp_2_0 = ctx_r2.getChannel(channel_r4.parentID)) == null ? null : tmp_2_0.name) || "N/A", "]");
} }
function GeneralModuleComponent_div_1_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#" + (role_r5.color == null ? null : role_r5.color.toString(16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", role_r5.name, "");
} }
function GeneralModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-slide-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Prefix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ignored Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, GeneralModuleComponent_div_1_mat_option_19_Template, 4, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Auto Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, GeneralModuleComponent_div_1_mat_option_25_Template, 2, 4, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.textChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.roles);
} }
class GeneralModuleComponent extends _module_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"] {
    constructor(guildService, route, saveChanges) {
        super(guildService, route, saveChanges);
        this.moduleName = 'general';
    }
    get general() { return this.savedGuild.general; }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
        });
    }
    buildForm({ general }) {
        var _a, _b, _c;
        const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_a = general.prefix) !== null && _a !== void 0 ? _a : '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)
            ]),
            ignoredChannels: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_b = general.ignoredChannels) !== null && _b !== void 0 ? _b : []),
            autoRoles: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_c = general.autoRoles) !== null && _c !== void 0 ? _c : [])
        });
        return formGroup;
    }
}
GeneralModuleComponent.ɵfac = function GeneralModuleComponent_Factory(t) { return new (t || GeneralModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
GeneralModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GeneralModuleComponent, selectors: [["app-general-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "waitFor"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup"], ["f", "ngForm"], [1, "d-flex", "justify-content-between"], [1, "display-3"], ["formControlName", "enabled", 1, "float-right", "mt-5"], [1, "row"], [1, "col-lg-4", "col-sm-6"], ["appearance", "outline"], ["matInput", "", "formControlName", "prefix", "type", "text"], ["multiple", "", "formControlName", "ignoredChannels"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "formControlName", "autoRoles"], [3, "value", "color", 4, "ngFor", "ngForOf"], [3, "value"], [1, "float-right", "text-muted"]], template: function GeneralModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GeneralModuleComponent_div_1_Template, 26, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("waitFor", ctx.savedGuild && ctx.general);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["GuildSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ndWlsZC9nZW5lcmFsLW1vZHVsZS9nZW5lcmFsLW1vZHVsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeneralModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-general-module',
                templateUrl: './general-module.component.html',
                styleUrls: ['./general-module.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "AL26":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/guild/leveling-module/leveling-module.animations.ts ***!
  \*******************************************************************************/
/*! exports provided: slideUpDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUpDown", function() { return slideUpDown; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const slideUpDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandCollapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        color: 'transparent'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('up <=> down', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease')])
]);


/***/ }),

/***/ "AvRb":
/*!********************************************************************!*\
  !*** ./src/app/pages/payment-success/payment-success.component.ts ***!
  \********************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PaymentSuccessComponent {
    constructor(router) {
        this.router = router;
        this.secondsDelay = 5;
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigate(['/dashboard']);
        }, 5 * 1000);
    }
}
PaymentSuccessComponent.ɵfac = function PaymentSuccessComponent_Factory(t) { return new (t || PaymentSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PaymentSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentSuccessComponent, selectors: [["app-payment-success"]], decls: 18, vars: 0, consts: [[1, "center"], [1, "checkmark"], ["height", "19", "viewBox", "0 0 19 19", "width", "19", "xmlns", "http://www.w3.org/2000/svg", 1, "star"], ["d", "M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"], ["height", "36", "viewBox", "0 0 48 36", "width", "48", "xmlns", "http://www.w3.org/2000/svg", 1, "checkmark__check"], ["d", "M47.248 3.9L43.906.667a2.428 2.428 0 0 0-3.344 0l-23.63 23.09-9.554-9.338a2.432 2.432 0 0 0-3.345 0L.692 17.654a2.236 2.236 0 0 0 .002 3.233l14.567 14.175c.926.894 2.42.894 3.342.01L47.248 7.128c.922-.89.922-2.34 0-3.23"], ["height", "115", "viewBox", "0 0 120 115", "width", "120", "xmlns", "http://www.w3.org/2000/svg", 1, "checkmark__background"], ["d", "M107.332 72.938c-1.798 5.557 4.564 15.334 1.21 19.96-3.387 4.674-14.646 1.605-19.298 5.003-4.61 3.368-5.163 15.074-10.695 16.878-5.344 1.743-12.628-7.35-18.545-7.35-5.922 0-13.206 9.088-18.543 7.345-5.538-1.804-6.09-13.515-10.696-16.877-4.657-3.398-15.91-.334-19.297-5.002-3.356-4.627 3.006-14.404 1.208-19.962C10.93 67.576 0 63.442 0 57.5c0-5.943 10.93-10.076 12.668-15.438 1.798-5.557-4.564-15.334-1.21-19.96 3.387-4.674 14.646-1.605 19.298-5.003C35.366 13.73 35.92 2.025 41.45.22c5.344-1.743 12.628 7.35 18.545 7.35 5.922 0 13.206-9.088 18.543-7.345 5.538 1.804 6.09 13.515 10.696 16.877 4.657 3.398 15.91.334 19.297 5.002 3.356 4.627-3.006 14.404-1.208 19.962C109.07 47.424 120 51.562 120 57.5c0 5.943-10.93 10.076-12.668 15.438z"]], template: function PaymentSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  --color-blue: #0094ff;\r\n  --color-white: #fff;\r\n  --curve: cubic-bezier(0.420, 0.000, 0.275, 1.155);\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--color-white);\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 45%;\r\n  top: 35%;\r\n}\r\n\r\n.star[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  -webkit-animation: grow 3s infinite;\r\n          animation: grow 3s infinite;\r\n  fill: var(--color-blue);\r\n  opacity: 0;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(1) {\r\n  width: 12px;\r\n  height: 12px;\r\n  left: 12px;\r\n  top: 16px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(2) {\r\n  width: 18px;\r\n  height: 18px;\r\n  left: 168px;\r\n  top: 84px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(3) {\r\n  width: 10px;\r\n  height: 10px;\r\n  left: 32px;\r\n  top: 162px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(4) {\r\n  width: 20px;\r\n  height: 20px;\r\n  left: 82px;\r\n  top: -12px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(5) {\r\n  width: 14px;\r\n  height: 14px;\r\n  left: 125px;\r\n  top: 162px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(6) {\r\n  width: 10px;\r\n  height: 10px;\r\n  left: 16px;\r\n  top: 16px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(1) {\r\n  -webkit-animation-delay: 1.5s;\r\n          animation-delay: 1.5s;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(2) {\r\n  -webkit-animation-delay: 3s;\r\n          animation-delay: 3s;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(3) {\r\n  -webkit-animation-delay: 4.5s;\r\n          animation-delay: 4.5s;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(4) {\r\n  -webkit-animation-delay: 6s;\r\n          animation-delay: 6s;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(5) {\r\n  -webkit-animation-delay: 7.5s;\r\n          animation-delay: 7.5s;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]:nth-child(6) {\r\n  -webkit-animation-delay: 9s;\r\n          animation-delay: 9s;\r\n}\r\n\r\n.checkmark[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  padding: 30px;\r\n  -webkit-animation: checkmark 5m var(--curve) both;\r\n          animation: checkmark 5m var(--curve) both;\r\n}\r\n\r\n.checkmark__check[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 10;\r\n  transform: translate3d(-50%, -50%, 0);\r\n  fill: var(--color-white);\r\n}\r\n\r\n.checkmark__background[_ngcontent-%COMP%] {\r\n  fill: var(--color-blue);\r\n  -webkit-animation: rotate 35s linear both infinite;\r\n          animation: rotate 35s linear both infinite;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes grow {\r\n  0%, 100% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes grow {\r\n  0%, 100% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes checkmark {\r\n  0%, 100% {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n  }\r\n  10%, 50%, 90% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes checkmark {\r\n  0%, 100% {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n  }\r\n  10%, 50%, 90% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1zdWNjZXNzL3BheW1lbnQtc3VjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLHFDQUFxQztFQUNyQyx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0RBQTBDO1VBQTFDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7QUFDRjs7QUFUQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC1zdWNjZXNzL3BheW1lbnQtc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgLS1jb2xvci1ibHVlOiAjMDA5NGZmO1xyXG4gIC0tY29sb3Itd2hpdGU6ICNmZmY7XHJcbiAgLS1jdXJ2ZTogY3ViaWMtYmV6aWVyKDAuNDIwLCAwLjAwMCwgMC4yNzUsIDEuMTU1KTtcclxufVxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB0b3A6IDM1JTtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBhbmltYXRpb246IGdyb3cgM3MgaW5maW5pdGU7XHJcbiAgZmlsbDogdmFyKC0tY29sb3ItYmx1ZSk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uc3RhcjpudGgtY2hpbGQoMSkge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIHRvcDogMTZweDtcclxufVxyXG4uc3RhcjpudGgtY2hpbGQoMikge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBsZWZ0OiAxNjhweDtcclxuICB0b3A6IDg0cHg7XHJcbn1cclxuLnN0YXI6bnRoLWNoaWxkKDMpIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbGVmdDogMzJweDtcclxuICB0b3A6IDE2MnB4O1xyXG59XHJcbi5zdGFyOm50aC1jaGlsZCg0KSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxlZnQ6IDgycHg7XHJcbiAgdG9wOiAtMTJweDtcclxufVxyXG4uc3RhcjpudGgtY2hpbGQoNSkge1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBsZWZ0OiAxMjVweDtcclxuICB0b3A6IDE2MnB4O1xyXG59XHJcbi5zdGFyOm50aC1jaGlsZCg2KSB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgdG9wOiAxNnB4O1xyXG59XHJcbi5zdGFyOm50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xyXG59XHJcbi5zdGFyOm50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxufVxyXG4uc3RhcjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogNC41cztcclxufVxyXG4uc3RhcjpudGgtY2hpbGQoNCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogNnM7XHJcbn1cclxuLnN0YXI6bnRoLWNoaWxkKDUpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDcuNXM7XHJcbn1cclxuLnN0YXI6bnRoLWNoaWxkKDYpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDlzO1xyXG59XHJcblxyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBhbmltYXRpb246IGNoZWNrbWFyayA1bSB2YXIoLS1jdXJ2ZSkgYm90aDtcclxufVxyXG4uY2hlY2ttYXJrX19jaGVjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gIGZpbGw6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxufVxyXG4uY2hlY2ttYXJrX19iYWNrZ3JvdW5kIHtcclxuICBmaWxsOiB2YXIoLS1jb2xvci1ibHVlKTtcclxuICBhbmltYXRpb246IHJvdGF0ZSAzNXMgbGluZWFyIGJvdGggaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGdyb3cge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgMTAlLCA1MCUsIDkwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-success',
                templateUrl: './payment-success.component.html',
                styleUrls: ['./payment-success.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    endpoint: 'http://localhost/api',
    discordInvite: 'https://discord.gg/NyxuUKVha7',
    CLIENT_SECRET: 'fv6nqPabWe7EyxSFbFsnq3v6SPXe6Jy9',
    version: 'v0.1.0b',
    botOwnerId: '372099126583754753',
    guildId: '1004444387490680923'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DCua":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/guild/log-module/log-module.component.ts ***!
  \********************************************************************/
/*! exports provided: LogModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModuleComponent", function() { return LogModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/discord/member-username/member-username.component */ "FHs4");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pipes/clean-date-time.pipe */ "Rc5a");


















function LogModuleComponent_div_10_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.changes.length - i_r14);
} }
function LogModuleComponent_div_10_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "member-username", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", ctx_r4.getMember(row_r15.by));
} }
function LogModuleComponent_div_10_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Old ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, row_r16.changes == null ? null : row_r16.changes.old));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, row_r16.changes == null ? null : row_r16.changes.old));
} }
function LogModuleComponent_div_10_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, row_r17.changes == null ? null : row_r17.changes.new));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, row_r17.changes == null ? null : row_r17.changes.new));
} }
function LogModuleComponent_div_10_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "cleanDateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, row_r18.at), " ");
} }
function LogModuleComponent_div_10_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
} }
function LogModuleComponent_div_10_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 25);
} }
const _c0 = function () { return [10, 25, 100]; };
function LogModuleComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LogModuleComponent_div_10_th_3_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LogModuleComponent_div_10_td_4_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LogModuleComponent_div_10_th_6_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LogModuleComponent_div_10_td_7_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LogModuleComponent_div_10_th_9_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LogModuleComponent_div_10_td_10_Template, 6, 6, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LogModuleComponent_div_10_th_12_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LogModuleComponent_div_10_td_13_Template, 6, 6, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LogModuleComponent_div_10_th_15_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LogModuleComponent_div_10_td_16_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LogModuleComponent_div_10_tr_17_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LogModuleComponent_div_10_tr_18_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-paginator", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
} }
class LogModuleComponent {
    constructor(route, guildService) {
        this.route = route;
        this.guildService = guildService;
        this.displayedColumns = ['number', 'by', 'old', 'new', 'at'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.changes = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.route.snapshot.paramMap.get('id');
            const log = yield this.guildService.getSavedLog(id);
            this.changes = log.changes.reverse();
            this.members = yield this.guildService.getMembers(id);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.changes);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator)
            this.dataSource.paginator.firstPage();
    }
    getMember(id) {
        return this.members.find(m => m.id === id) || {};
    }
}
LogModuleComponent.ɵfac = function LogModuleComponent_Factory(t) { return new (t || LogModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"])); };
LogModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogModuleComponent, selectors: [["app-log-module"]], viewQuery: function LogModuleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 11, vars: 1, consts: [[1, "container"], [1, "display-3"], [1, "my-2"], ["appearance", "outline", 1, "d-flex", "justify-content-center"], ["matInput", "", "placeholder", "prefix", 3, "keyup"], ["class", "mat-elevation-z8", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "by"], ["class", "user", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "old"], ["matColumnDef", "new"], ["matColumnDef", "at"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["appearance", "outline", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "user"], [3, "member"], [3, "highlight"], ["mat-header-row", ""], ["mat-row", ""]], template: function LogModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Audit Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function LogModuleComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LogModuleComponent_div_10_Template, 20, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataSource);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["GuildSidebarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_11__["MemberUsernameComponent"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["Highlight"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["JsonPipe"], _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_13__["CleanDateTimePipe"]], styles: ["pre[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n    transform: scale(0.65);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2xvZy1tb2R1bGUvbG9nLW1vZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ndWlsZC9sb2ctbW9kdWxlL2xvZy1tb2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInByZSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-log-module',
                templateUrl: './log-module.component.html',
                styleUrls: ['./log-module.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "DFSU":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/guild/leveling-module/leveling-module.component.ts ***!
  \******************************************************************************/
/*! exports provided: LevelingModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelingModuleComponent", function() { return LevelingModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _module_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module-config */ "iYCr");
/* harmony import */ var _leveling_module_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leveling-module.animations */ "AL26");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function LevelingModuleComponent_div_1_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#" + (role_r4.color == null ? null : role_r4.color.toString(16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", role_r4.name, "");
} }
function LevelingModuleComponent_div_1_div_32_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#" + (role_r8.color == null ? null : role_r8.color.toString(16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", role_r8.name, "");
} }
function LevelingModuleComponent_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LevelingModuleComponent_div_1_div_32_mat_option_13_Template, 2, 4, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " A member would need a total of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " to unlock this. It would take them a minimum of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " if they didn't stop typing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_r6.value > 0 ? "pb-3" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@expandCollapse", _r6.value > 0 ? "down" : "up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 7, ctx_r3.getXPForLevel(_r6.value)), "XP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 9, ctx_r3.getHoursForLevel(_r6.value)), " hours");
} }
function LevelingModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Leveling");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-slide-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ignored Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LevelingModuleComponent_div_1_mat_option_15_Template, 2, 4, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "XP Per Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Max Messages Per Minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "mat-slider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Level Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Reward users with roles when leveling up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LevelingModuleComponent_div_1_div_32_Template, 24, 11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.levelRoleIndices);
} }
class LevelingModuleComponent extends _module_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"] {
    constructor(guildService, route, saveChanges) {
        super(guildService, route, saveChanges);
        this.levelRoleIndices = [0, 1, 2, 3, 4, 5, 6, 7];
        this.moduleName = 'leveling';
    }
    get levelRolesFormArray() { return this.form.get('levelRoles'); }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
        });
    }
    buildForm({ leveling }) {
        var _a, _b, _c;
        const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ignoredRoles: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_a = leveling.ignoredRoles) !== null && _a !== void 0 ? _a : []),
            levelRoles: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            maxMessagesPerMinute: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_b = leveling.maxMessagesPerMinute) !== null && _b !== void 0 ? _b : 3, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(30)]),
            xpPerMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_c = leveling.xpPerMessage) !== null && _c !== void 0 ? _c : 50, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000)])
        });
        this.buildLevelRolesFormArray(formGroup, leveling);
        return formGroup;
    }
    buildLevelRolesFormArray(formGroup, leveling) {
        var _a, _b, _c, _d;
        for (const i of this.levelRoleIndices)
            formGroup.get('levelRoles')
                .setControl(i, (new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                level: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_b = (_a = leveling.levelRoles[i]) === null || _a === void 0 ? void 0 : _a.level) !== null && _b !== void 0 ? _b : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)),
                role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_d = (_c = leveling.levelRoles[i]) === null || _c === void 0 ? void 0 : _c.role) !== null && _d !== void 0 ? _d : '')
            })));
    }
    filterFormValue() {
        this.form.value.levelRoles = this.form.value.levelRoles
            .filter(c => c.level > 0);
    }
    getXPForLevel(level) {
        level = Number(level);
        return (75 * Math.pow((level + 1), 2)) + (75 * (level + 1)) - 150;
    }
    getHoursForLevel(level) {
        const xpPerMinute = this.form.value.xpPerMessage * this.form.value.maxMessagesPerMinute;
        const xpRequired = this.getXPForLevel(level);
        return xpRequired / (xpPerMinute * 60);
    }
}
LevelingModuleComponent.ɵfac = function LevelingModuleComponent_Factory(t) { return new (t || LevelingModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
LevelingModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LevelingModuleComponent, selectors: [["app-leveling-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "waitFor"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup"], ["f", "ngForm"], [1, "d-flex", "justify-content-between"], ["routerLink", "/docs/leveling", 1, "display-3"], ["formControlName", "enabled", 1, "float-right", "mt-5"], [1, "row"], [1, "col-lg-4", "col-md-6"], ["appearance", "outline"], ["multiple", "", "formControlName", "ignoredRoles"], [3, "value", "color", 4, "ngFor", "ngForOf"], ["formControlName", "xpPerMessage", "type", "number", "matInput", ""], [1, "d-block"], ["formControlName", "maxMessagesPerMinute", "step", "1", "tickInterval", "1", "thumbLabel", "", "max", "30"], [1, "desc"], ["formArrayName", "levelRoles", 1, "row"], ["class", "col-lg-6 col-sm-12", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-lg-6", "col-sm-12"], [1, "rounded", "role", "d-flex", "justify-content-around", "row", 3, "formGroupName"], [1, "col-sm-6"], ["type", "number", "formControlName", "level", "matInput", ""], ["level", ""], ["formControlName", "role"], [1, "px-4"]], template: function LevelingModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LevelingModuleComponent_div_1_Template, 33, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("waitFor", ctx.savedGuild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["GuildSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n}\r\n\r\n.add[_ngcontent-%COMP%], .remove[_ngcontent-%COMP%] {\r\n    height: 36px;\r\n    width: 36px;\r\n    padding: 0 !important;\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\n    background-color: var(--success);\r\n}\r\n\r\n.remove[_ngcontent-%COMP%] {\r\n    background-color: var(--danger);\r\n}\r\n\r\n.role[_ngcontent-%COMP%] {\r\n    background-color: var(--background-tertiary);\r\n    padding-top: 25px;\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2xldmVsaW5nLW1vZHVsZS9sZXZlbGluZy1tb2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2xldmVsaW5nLW1vZHVsZS9sZXZlbGluZy1tb2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFkZCwgLnJlbW92ZSB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFkZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcclxufVxyXG5cclxuLnJlbW92ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG59XHJcblxyXG4ucm9sZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iXX0= */"], data: { animation: [_leveling_module_animations__WEBPACK_IMPORTED_MODULE_4__["slideUpDown"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LevelingModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-leveling-module',
                templateUrl: './leveling-module.component.html',
                styleUrls: ['./leveling-module.component.css'],
                animations: [_leveling_module_animations__WEBPACK_IMPORTED_MODULE_4__["slideUpDown"]]
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "EK4V":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/guild/leaderboard-module/leaderboard-module.component.ts ***!
  \************************************************************************************/
/*! exports provided: LeaderboardModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardModuleComponent", function() { return LeaderboardModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/discord/member-username/member-username.component */ "FHs4");








function LeaderboardModuleComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.guild.name, " Leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.guild.iconURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function LeaderboardModuleComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "member-username", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "XP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "LVL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("rank-" + (ctx_r1.members.indexOf(member_r2) + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.members.indexOf(member_r2) + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", member_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, member_r2.xp));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("/", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, member_r2.xp + member_r2.xpForNextLevel), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", member_r2.level, "");
} }
class LeaderboardModuleComponent {
    constructor(guildService, route) {
        this.guildService = guildService;
        this.route = route;
        this.guild = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guildId = this.route.snapshot.paramMap.get('id');
            this.members = yield this.guildService.getMembers(guildId);
            this.guild = yield this.guildService.getPublicGuild(guildId);
        });
    }
}
LeaderboardModuleComponent.ɵfac = function LeaderboardModuleComponent_Factory(t) { return new (t || LeaderboardModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LeaderboardModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeaderboardModuleComponent, selectors: [["app-leaderboard-module"]], decls: 9, vars: 3, consts: [[1, "container"], [1, "jumbotron"], ["class", "guild-icon", 3, "src", "alt", 4, "ngIf"], [1, "display-3"], ["id", "leaderboard"], ["class", "member", 4, "ngFor", "ngForOf"], [1, "guild-icon", 3, "src", "alt"], [1, "member"], [1, "rank"], [3, "member"], [1, "float-right", "pt-2", "d-md-block", "d-none"], [1, "info"], [1, "text-muted"], [1, "divider"]], template: function LeaderboardModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeaderboardModuleComponent_img_3_Template, 1, 2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LeaderboardModuleComponent_div_8_Template, 21, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild.iconURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.guild.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.members);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_6__["MemberUsernameComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["#leaderboard[_ngcontent-%COMP%] {\r\n    background-color: var(--background-tertiary);\r\n    margin-bottom: 150px;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] {\r\n    background-color: gray;\r\n\r\n    padding: 10px 15px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.rank-1[_ngcontent-%COMP%] {\r\n    background-color: #D4AF37;\r\n}\r\n\r\n.rank-2[_ngcontent-%COMP%] {\r\n    background-color: silver;\r\n}\r\n\r\n.rank-3[_ngcontent-%COMP%] {\r\n    background-color: #CD7F32;\r\n}\r\n\r\n.divider[_ngcontent-%COMP%] {\r\n    padding: 0 5px;\r\n    color: var(--background-primary);\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n    padding: 25px;\r\n}\r\n\r\n.member[_ngcontent-%COMP%]:last-of-type {\r\n    border-bottom: none;\r\n    padding: none;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%] {\r\n    max-width: 96px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin-right: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2xlYWRlcmJvYXJkLW1vZHVsZS9sZWFkZXJib2FyZC1tb2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRDQUE0QztJQUM1QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7O0lBRXRCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ3VpbGQvbGVhZGVyYm9hcmQtbW9kdWxlL2xlYWRlcmJvYXJkLW1vZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlYWRlcmJvYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbn1cclxuXHJcbi5yYW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcblxyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5yYW5rLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0QUYzNztcclxufVxyXG4ucmFuay0yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxufVxyXG4ucmFuay0zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRDdGMzI7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5tZW1iZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuLm1lbWJlcjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHBhZGRpbmc6IG5vbmU7XHJcbn1cclxuXHJcbi5ndWlsZC1pY29uIHtcclxuICAgIG1heC13aWR0aDogOTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeaderboardModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-leaderboard-module',
                templateUrl: './leaderboard-module.component.html',
                styleUrls: ['./leaderboard-module.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "FHs4":
/*!****************************************************************************!*\
  !*** ./src/app/utils/discord/member-username/member-username.component.ts ***!
  \****************************************************************************/
/*! exports provided: MemberUsernameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberUsernameComponent", function() { return MemberUsernameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MemberUsernameComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.member.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MemberUsernameComponent {
    constructor() {
        this.withAvatar = true;
    }
}
MemberUsernameComponent.ɵfac = function MemberUsernameComponent_Factory(t) { return new (t || MemberUsernameComponent)(); };
MemberUsernameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberUsernameComponent, selectors: [["member-username"]], inputs: { member: "member", withAvatar: "withAvatar" }, decls: 5, vars: 3, consts: [["alt", "", 3, "src", 4, "ngIf"], [1, "username"], [1, "tag"], ["alt", "", 3, "src"]], template: function MemberUsernameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberUsernameComponent_img_0_Template, 1, 1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.withAvatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.member.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.member.tag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["img[_ngcontent-%COMP%] {\r\n    max-width: 36px;\r\n    margin-top: -3px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.username[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n}\r\n\r\n.tag[_ngcontent-%COMP%] {\r\n    color: gray;\r\n    font-size: 14px;\r\n    padding-left: 2.5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvZGlzY29yZC9tZW1iZXItdXNlcm5hbWUvbWVtYmVyLXVzZXJuYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91dGlscy9kaXNjb3JkL21lbWJlci11c2VybmFtZS9tZW1iZXItdXNlcm5hbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDM2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGFnIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberUsernameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'member-username',
                templateUrl: './member-username.component.html',
                styleUrls: ['./member-username.component.css']
            }]
    }], null, { member: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], withAvatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GnlN":
/*!**********************************************************************!*\
  !*** ./src/app/utils/discord/save-changes/save-changes.component.ts ***!
  \**********************************************************************/
/*! exports provided: SaveChangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveChangesComponent", function() { return SaveChangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class SaveChangesComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    reset() {
        this.onReset.emit();
        this.close();
    }
    save() {
        this.onSave.emit();
        this.close();
    }
    close() {
        this.snackBar.dismiss();
        this.onReset.unsubscribe();
        this.onSave.unsubscribe();
    }
}
SaveChangesComponent.ɵfac = function SaveChangesComponent_Factory(t) { return new (t || SaveChangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SaveChangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaveChangesComponent, selectors: [["save-changes"]], outputs: { onReset: "onReset", onSave: "onSave" }, decls: 8, vars: 0, consts: [[1, "row"], [1, "text", "col-lg-8", "col-sm-12", "p-lg-1"], [1, "col-lg-4", "col-sm-12", "d-flex", "justify-content-center"], ["id", "reset", "type", "submit", "mat-button", "", 3, "click"], ["id", "save", "type", "submit", "mat-button", "", 3, "click"]], template: function SaveChangesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Careful - You have unsaved changes! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveChangesComponent_Template_button_click_4_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveChangesComponent_Template_button_click_6_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding-bottom: 15px;\r\n}\r\nbutton[_ngcontent-%COMP%], .text[_ngcontent-%COMP%] {\r\n    color: var(--heading);    \r\n}\r\n#save[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    background-color: var(--success);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .text[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvZGlzY29yZC9zYXZlLWNoYW5nZXMvc2F2ZS1jaGFuZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7QUFFQSxtREFBbUQ7QUFDbkQ7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMvZGlzY29yZC9zYXZlLWNoYW5nZXMvc2F2ZS1jaGFuZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuYnV0dG9uLCAudGV4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7ICAgIFxyXG59XHJcbiNzYXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC50ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveChangesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'save-changes',
                templateUrl: './save-changes.component.html',
                styleUrls: ['./save-changes.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, { onReset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "GxHU":
/*!******************************************************!*\
  !*** ./src/app/pipes/camel-to-sentence-case.pipe.ts ***!
  \******************************************************/
/*! exports provided: CamelToSentenceCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelToSentenceCasePipe", function() { return CamelToSentenceCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "HC5s");



class CamelToSentenceCasePipe {
    transform(words) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["camelToSentenceCase"])(words);
    }
}
CamelToSentenceCasePipe.ɵfac = function CamelToSentenceCasePipe_Factory(t) { return new (t || CamelToSentenceCasePipe)(); };
CamelToSentenceCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "camelToSentenceCase", type: CamelToSentenceCasePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamelToSentenceCasePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'camelToSentenceCase' }]
    }], null, null); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ApiService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint;
    }
    get key() { return localStorage.getItem('key'); }
    getStats() {
        return this.http.get(`${this.endpoint}/stats?key=${this.key}`).toPromise();
    }
    sendFeedback(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post(`${this.endpoint}/feedback`, { message }).toPromise();
        });
    }
    getPing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(`${this.endpoint}/ping`).toPromise();
        });
    }
    getRouletteGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(`${this.endpoint}/roulette`).toPromise();
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "H9sY":
/*!****************************************************************************!*\
  !*** ./src/app/utils/discord/message-preview/message-preview.component.ts ***!
  \****************************************************************************/
/*! exports provided: MessagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePreviewComponent", function() { return MessagePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var discord_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! discord-markdown */ "oKB2");
/* harmony import */ var discord_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(discord_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-to-text-emoji */ "s99U");
/* harmony import */ var markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");





class MessagePreviewComponent {
    constructor(userService) {
        this.userService = userService;
        this.guild = { name: 'Testing123', memberCount: 420 };
        this.eventVariables = true;
        this.content = 'Hello World';
        this.author = {
            username: 'Neko',
            avatarURL: 'https://cdn.discordapp.com/avatars/743633561768296599/1ba7c76c436cd2dee8cb2e439ccb7211.png?size=256'
        };
        this.member = {
            displayName: 'Neko'
        };
        this.createdAt = new Date();
    }
    get timestamp() {
        var _a;
        const createdAt = new Date((_a = this.createdAt) !== null && _a !== void 0 ? _a : new Date());
        const timestamp = createdAt
            .toTimeString()
            .slice(0, 5);
        const wasToday = new Date().getDay() / createdAt.getDay() === 1;
        const wasYesterday = new Date().getDate() % createdAt.getDate() === 1;
        const isTommorow = createdAt.getTime() % new Date().getDate() === 1;
        if (wasToday)
            return `Today at ${timestamp}`;
        if (wasYesterday)
            return `Yesterday at ${timestamp}`;
        else if (isTommorow)
            return `Tommorow at ${timestamp}`;
        return createdAt
            .toJSON()
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('/');
    }
    get processed() {
        var _a, _b;
        const user = this.userService.user;
        return (this.eventVariables) ? Object(discord_markdown__WEBPACK_IMPORTED_MODULE_1__["toHTML"])(Object(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__["textEmoji"])(this.content
            .replace(/\[GUILD\]/, (_a = this.guild) === null || _a === void 0 ? void 0 : _a.name)
            .replace(/\[INSTIGATOR\]/, '@Neko#6834')
            .replace(/\[MEMBER_COUNT\]/g, (_b = this.guild) === null || _b === void 0 ? void 0 : _b.memberCount.toString())
            .replace(/\[MESSAGE\]/g, 'Bad Message')
            .replace(/\[CHANNEL\]/g, 'General')
            .replace(/\[MODULE\]/g, 'General')
            .replace(/\[STAFF\]/g, '@Hamburbur#3134')
            .replace(/\[NEW_LEVEL\]/g, '2')
            .replace(/\[NEW_VALUE\]/g, JSON.stringify({ prefix: '.' }, null, 2))
            .replace(/\[OLD_LEVEL\]/g, '1')
            .replace(/\[OLD_VALUE\]/g, JSON.stringify({ prefix: '/' }, null, 2))
            .replace(/\[REASON\]/g, 'not having Neko Plus')
            .replace(/\[USER\]/g, `@BadUser#6969`)))
            .replace(/\[XP\]/g, '300') : Object(discord_markdown__WEBPACK_IMPORTED_MODULE_1__["toHTML"])(Object(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__["textEmoji"])(this.content));
    }
}
MessagePreviewComponent.ɵfac = function MessagePreviewComponent_Factory(t) { return new (t || MessagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
MessagePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagePreviewComponent, selectors: [["message-preview"]], inputs: { guild: "guild", eventVariables: "eventVariables", content: "content", author: "author", member: "member", createdAt: "createdAt" }, decls: 21, vars: 5, consts: [[1, "rounded", "flex-vertical", "whitney", "theme-dark"], [1, "rounded", "chat", "flex-vertical", "flex-spacer"], [1, "rounded", "content", "flex-spacer", "flex-horizontal"], [1, "rounded", "flex-spacer", "flex-vertical", "messages-wrapper"], [1, "scroller-wrap"], [1, "scroller", "messages"], [1, "message-group", "hide-overflow"], [1, "avatar-large", "animate"], [1, "comment"], [1, "message", "first"], [2, "line-height", "16px"], [1, "username-wrapper", "v-btm"], [1, "user-name"], [1, "bot-tag"], [1, "highlight-separator"], [1, "timestamp"], [1, "message-text", 3, "innerHtml"]], template: function MessagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.author.avatarURL + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.member.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timestamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.processed, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".bot-tag[_ngcontent-%COMP%] {\r\n\tbackground: #7289da;\r\n\tfont-size: 10px;\r\n\tfont-weight: 600;\r\n\tcolor: #fff!important;\r\n\tmargin-left: 6px;\r\n\tpadding: 1px 2px;\r\n\tborder-radius: 3px;\r\n\ttext-transform: uppercase;\r\n\tvertical-align: bottom;\r\n\tline-height: 16px;\r\n\tflex-shrink: 0\r\n}\r\n\r\n.avatar-large[_ngcontent-%COMP%] {\r\n\tbackground-clip: padding-box;\r\n\tposition: relative;\r\n\tbackground-color: none;\r\n\tbackground-position: 50%;\r\n\tborder-radius: 50%\r\n}\r\n\r\n.avatar-large[_ngcontent-%COMP%] {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tbackground-size: 40px 40px\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: flex\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%], .scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%] {\r\n\tmin-height: 1px;\r\n\tflex: 1\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n\twidth: 14px\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\r\n\tbackground-color: #7289da;\r\n\tbackground-clip: padding-box;\r\n\tborder: 3px solid #fff;\r\n\tborder-radius: 7px\r\n}\r\n\r\n.scroller-wrap[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\r\n\tbackground-color: #f3f3f3\r\n}\r\n\r\n.scroller-wrap.dark[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n\tbackground-color: rgba(0, 0, 0, .4);\r\n\tborder-color: transparent\r\n}\r\n\r\n.scroller-wrap.dark[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\r\n\tbackground-color: transparent;\r\n\tborder-color: transparent\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n\t-webkit-box-orient: vertical\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%] {\r\n\tword-wrap: break-word\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tposition: relative;\r\n\tcolor: #fff\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n\tbackground: #fff\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\r\n\tcursor: pointer\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: underline\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\topacity: 1;\r\n\ttransition: opacity .2s ease\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%]:hover {\r\n\topacity: .8\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex: 1;\r\n\tz-index: 0\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%], .chat[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%]   .scroller-wrap[_ngcontent-%COMP%] {\r\n\toverflow: hidden\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\toverflow-x: hidden\r\n}\r\n\r\n.hide-overflow[_ngcontent-%COMP%] {\r\n\toverflow: hidden\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tpadding: 20px 0;\r\n\tmargin-left: 20px;\r\n\tmargin-right: 6px;\r\n\tborder-bottom: 1px solid #eceeef;\r\n\tbox-sizing: border-box;\r\n\t-webkit-user-select: text;\r\n\t-moz-user-select: text;\r\n\tuser-select: text\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]:last-of-type, .message-group[_ngcontent-%COMP%]:last-of-type:after {\r\n\tborder-bottom: none\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\r\n\tflex-shrink: 0;\r\n\tmargin-top: -2px;\r\n\tmargin-right: 20px\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n\tcolor: #2e3136;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\tletter-spacing: 0\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\r\n\tcolor: #99aab5;\r\n\tfont-size: 12px;\r\n\tletter-spacing: 0;\r\n\tfont-weight: 500;\r\n\ttext-transform: none;\r\n\tmargin-left: 6px\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   .highlight-separator[_ngcontent-%COMP%] {\r\n\topacity: 0;\r\n\twidth: 0;\r\n\tdisplay: inline-block;\r\n\tcolor: #99aab5\r\n}\r\n\r\n.message-group[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\r\n\tflex: 1;\r\n\tmargin-right: 20px;\r\n\tmin-width: 0\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n\tcolor: #fff\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: hsla(0, 0%, 100%, .2)\r\n}\r\n\r\n.flex-horizontal[_ngcontent-%COMP%], .flex-vertical[_ngcontent-%COMP%] {\r\n\tdisplay: -ms-flexbox\r\n}\r\n\r\n.flex-vertical[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column\r\n}\r\n\r\n.flex-vertical[_ngcontent-%COMP%] > .flex-spacer[_ngcontent-%COMP%] {\r\n\tmin-height: 1px\r\n}\r\n\r\n.flex-horizontal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: row\r\n}\r\n\r\n.flex-horizontal[_ngcontent-%COMP%] > .flex-spacer[_ngcontent-%COMP%] {\r\n\tmin-width: 1px\r\n}\r\n\r\n.flex-spacer[_ngcontent-%COMP%] {\r\n\tflex: 1\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\r\n\tbackground-color: #36393e\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%], .theme-dark[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%] {\r\n\tbackground-color: #36393e\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%]   .scroller-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n\tbackground-color: #1e2124;\r\n\tborder-color: #36393e\r\n}\r\n\r\n.theme-dark[_ngcontent-%COMP%]   .messages-wrapper[_ngcontent-%COMP%]   .scroller-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\r\n\tbackground-color: #2e3136;\r\n\tborder-color: #36393e\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%] {\r\n\tpadding-bottom: 5px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvZGlzY29yZC9tZXNzYWdlLXByZXZpZXcvbWVzc2FnZS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FFakI7QUFDRDs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLHdCQUF3QjtDQUN4QjtBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWjtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0NBR2xCO0FBQ0Q7O0FBRUE7O0NBRUMsZUFBZTtDQUdmO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBOztDQUVDLHlCQUF5QjtDQUN6Qiw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDO0FBRUQ7O0FBRUE7QUFFQTs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FHQyxhQUFhO0NBRWIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFVBQVU7Q0FFVjtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGtCQUFrQjtDQUdsQixhQUFhO0NBR2IsT0FBTztDQUNQO0FBQ0Q7O0FBRUE7O0NBRUM7QUFDRDs7QUFFQTtDQUNDLFNBQVM7Q0FDVDtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUdDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixnQ0FBZ0M7Q0FDaEMsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FFdEI7QUFDRDs7QUFFQTs7Q0FFQztBQUNEOztBQUVBO0NBRUMsY0FBYztDQUNkLGdCQUFnQjtDQUNoQjtBQUNEOztBQUVBO0NBQ0MsU0FBUztDQUNUO0FBQ0Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQjtBQUNEOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQjtBQUNEOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFFBQVE7Q0FDUixxQkFBcUI7Q0FDckI7QUFDRDs7QUFFQTtDQUdDLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBOztDQUdDO0FBQ0Q7O0FBRUE7Q0FDQyxhQUFhO0NBSWI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxhQUFhO0NBSWI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FHQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTs7Q0FFQztBQUNEOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCO0FBQ0Q7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekI7QUFDRDs7QUFFQTtDQUNDO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC91dGlscy9kaXNjb3JkL21lc3NhZ2UtcHJldmlldy9tZXNzYWdlLXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3QtdGFnIHtcclxuXHRiYWNrZ3JvdW5kOiAjNzI4OWRhO1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuXHRtYXJnaW4tbGVmdDogNnB4O1xyXG5cdHBhZGRpbmc6IDFweCAycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuXHRsaW5lLWhlaWdodDogMTZweDtcclxuXHQtbXMtZmxleC1uZWdhdGl2ZTogMDtcclxuXHRmbGV4LXNocmluazogMFxyXG59XHJcblxyXG4uYXZhdGFyLWxhcmdlIHtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCVcclxufVxyXG5cclxuLmF2YXRhci1sYXJnZSB7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogNDBweCA0MHB4XHJcbn1cclxuXHJcbi5zY3JvbGxlci13cmFwIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleFxyXG59XHJcblxyXG4uc2Nyb2xsZXItd3JhcCxcclxuLnNjcm9sbGVyLXdyYXAgLnNjcm9sbGVyIHtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0LXdlYmtpdC1ib3gtZmxleDogMTtcclxuXHQtbXMtZmxleDogMTtcclxuXHRmbGV4OiAxXHJcbn1cclxuXHJcbi5zY3JvbGxlci13cmFwIC5zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdHdpZHRoOiAxNHB4XHJcbn1cclxuXHJcbi5zY3JvbGxlci13cmFwIC5zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5zY3JvbGxlci13cmFwIC5zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM3Mjg5ZGE7XHJcblx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDdweFxyXG59XHJcblxyXG4uc2Nyb2xsZXItd3JhcCAuc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzXHJcbn1cclxuXHJcbi5zY3JvbGxlci13cmFwLmRhcmsgLnNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4uc2Nyb2xsZXItd3JhcC5kYXJrIC5zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLmNoYXQge1xyXG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWxcclxufVxyXG5cclxuLmNoYXQge1xyXG5cdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsXHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmRcclxufVxyXG5cclxuLmNoYXQge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Y29sb3I6ICNmZmZcclxufVxyXG5cclxuLmNoYXQgLmNvbnRlbnQge1xyXG5cdGJhY2tncm91bmQ6ICNmZmZcclxufVxyXG5cclxuLmNoYXQgLnVzZXItbmFtZSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5jaGF0IC51c2VyLW5hbWU6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcbn1cclxuXHJcbi5jaGF0IC5hdmF0YXItbGFyZ2Uge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlXHJcbn1cclxuXHJcbi5jaGF0IC5hdmF0YXItbGFyZ2U6aG92ZXIge1xyXG5cdG9wYWNpdHk6IC44XHJcbn1cclxuXHJcbi5jaGF0IC5tZXNzYWdlcy13cmFwcGVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWJveC1mbGV4OiAxO1xyXG5cdC1tcy1mbGV4OiAxO1xyXG5cdGZsZXg6IDE7XHJcblx0ei1pbmRleDogMFxyXG59XHJcblxyXG4uY2hhdCAubWVzc2FnZXMtd3JhcHBlcixcclxuLmNoYXQgLm1lc3NhZ2VzLXdyYXBwZXIgLnNjcm9sbGVyLXdyYXAge1xyXG5cdG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG5cclxuLmNoYXQgLm1lc3NhZ2VzIHtcclxuXHRtYXJnaW46IDA7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuXHJcbn1cclxuXHJcbi5oaWRlLW92ZXJmbG93IHtcclxuXHRvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDIwcHggMDtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDZweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWVlZjtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XHJcblx0LW1vei11c2VyLXNlbGVjdDogdGV4dDtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XHJcblx0dXNlci1zZWxlY3Q6IHRleHRcclxufVxyXG5cclxuLm1lc3NhZ2UtZ3JvdXA6bGFzdC1vZi10eXBlLFxyXG4ubWVzc2FnZS1ncm91cDpsYXN0LW9mLXR5cGU6YWZ0ZXIge1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmVcclxufVxyXG5cclxuLm1lc3NhZ2UtZ3JvdXAgLmF2YXRhci1sYXJnZSB7XHJcblx0LW1zLWZsZXgtbmVnYXRpdmU6IDA7XHJcblx0ZmxleC1zaHJpbms6IDA7XHJcblx0bWFyZ2luLXRvcDogLTJweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHhcclxufVxyXG5cclxuLm1lc3NhZ2UtZ3JvdXAgaDIge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwXHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwIGgyIHN0cm9uZyB7XHJcblx0Y29sb3I6ICMyZTMxMzY7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDBcclxufVxyXG5cclxuLm1lc3NhZ2UtZ3JvdXAgaDIgLnRpbWVzdGFtcCB7XHJcblx0Y29sb3I6ICM5OWFhYjU7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcblx0bWFyZ2luLWxlZnQ6IDZweFxyXG59XHJcblxyXG4ubWVzc2FnZS1ncm91cCAuaGlnaGxpZ2h0LXNlcGFyYXRvciB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR3aWR0aDogMDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Y29sb3I6ICM5OWFhYjVcclxufVxyXG5cclxuLm1lc3NhZ2UtZ3JvdXAgLmNvbW1lbnQge1xyXG5cdC13ZWJraXQtYm94LWZsZXg6IDE7XHJcblx0LW1zLWZsZXg6IDE7XHJcblx0ZmxleDogMTtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0bWluLXdpZHRoOiAwXHJcbn1cclxuXHJcbi50aGVtZS1kYXJrIC5tZXNzYWdlLWdyb3VwIGgyIHN0cm9uZyB7XHJcblx0Y29sb3I6ICNmZmZcclxufVxyXG5cclxuLnRoZW1lLWRhcmsgLm1lc3NhZ2UtZ3JvdXAgaDIgc3BhbiB7XHJcblx0Y29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIC4yKVxyXG59XHJcblxyXG4uZmxleC1ob3Jpem9udGFsLFxyXG4uZmxleC12ZXJ0aWNhbCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3hcclxufVxyXG5cclxuLmZsZXgtdmVydGljYWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbn1cclxuXHJcbi5mbGV4LXZlcnRpY2FsPi5mbGV4LXNwYWNlciB7XHJcblx0bWluLWhlaWdodDogMXB4XHJcbn1cclxuXHJcbi5mbGV4LWhvcml6b250YWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG5cdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3dcclxufVxyXG5cclxuLmZsZXgtaG9yaXpvbnRhbD4uZmxleC1zcGFjZXIge1xyXG5cdG1pbi13aWR0aDogMXB4XHJcbn1cclxuXHJcbi5mbGV4LXNwYWNlciB7XHJcblx0LXdlYmtpdC1ib3gtZmxleDogMTtcclxuXHQtbXMtZmxleDogMTtcclxuXHRmbGV4OiAxXHJcbn1cclxuXHJcbi50aGVtZS1kYXJrIC5jaGF0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNlXHJcbn1cclxuXHJcbi50aGVtZS1kYXJrIC5jaGF0Pi5jb250ZW50LFxyXG4udGhlbWUtZGFyayAubWVzc2FnZXMtd3JhcHBlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZVxyXG59XHJcblxyXG4udGhlbWUtZGFyayAubWVzc2FnZXMtd3JhcHBlciAuc2Nyb2xsZXItd3JhcDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxZTIxMjQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMzYzOTNlXHJcbn1cclxuXHJcbi50aGVtZS1kYXJrIC5tZXNzYWdlcy13cmFwcGVyIC5zY3JvbGxlci13cmFwOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJlMzEzNjtcclxuXHRib3JkZXItY29sb3I6ICMzNjM5M2VcclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcblx0cGFkZGluZy1ib3R0b206IDVweFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'message-preview',
                templateUrl: './message-preview.component.html',
                styleUrls: ['./message-preview.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { guild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eventVariables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], member: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], createdAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "HC5s":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: toIterable, camelToSentenceCase, sentenceToCamelCase, kebabToCamelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIterable", function() { return toIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToSentenceCase", function() { return camelToSentenceCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentenceToCamelCase", function() { return sentenceToCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabToCamelCase", function() { return kebabToCamelCase; });
function toIterable(length) {
    const array = [];
    for (let i = 0; i < length; i++)
        array.push(i);
    return array;
}
function camelToSentenceCase(words) {
    const regex = /([A-Z])(?=[a-z][A-Z])|([a-z])(?=[A-Z])/g;
    return words
        .replace(regex, '$& ')[0]
        .toUpperCase() +
        words
            .replace(regex, '$& ')
            .slice(1);
}
function sentenceToCamelCase(words) {
    const capitalized = words
        .replace(/\s+(.)/g, (match, group) => group.toUpperCase());
    return capitalized[0].toLowerCase() + capitalized.slice(1);
}
function kebabToCamelCase(words) {
    if (!words)
        return null;
    const arr = words.split('-');
    const capital = arr.map((item, index) => (index)
        ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item);
    const capitalized = capital.join('');
    return capitalized[0].toLowerCase() + capitalized.slice(1);
}


/***/ }),

/***/ "HfTq":
/*!************************************************!*\
  !*** ./src/app/guards/dashboard-auth.guard.ts ***!
  \************************************************/
/*! exports provided: DashboardAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAuthGuard", function() { return DashboardAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");





class DashboardAuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            const canActivate = Boolean(this.userService.user);
            if (!canActivate)
                this.router.navigate(['/']);
            return canActivate;
        });
    }
}
DashboardAuthGuard.ɵfac = function DashboardAuthGuard_Factory(t) { return new (t || DashboardAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
DashboardAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardAuthGuard, factory: DashboardAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Huwh":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");




class LoginComponent {
    constructor() {
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint}/login`;
    }
    ngOnInit() {
        window.location.assign(this.url);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spinner");
    } }, directives: [_utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Ie7a":
/*!*******************************************!*\
  !*** ./src/app/services/music.service.ts ***!
  \*******************************************/
/*! exports provided: MusicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicService", function() { return MusicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MusicService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + '/guilds';
        this._list = [];
        this._paused = false;
        this._current = 0;
        this._max = Infinity;
    }
    get list() { return this._list; }
    get paused() { return this._paused; }
    get current() { return this._current; }
    get max() { return this._max; }
    get key() {
        return localStorage.getItem('key');
    }
    toggle(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                (this.paused)
                    ? yield this.http.get(`${this.endpoint}/${id}/music/resume?key=${this.key}`).toPromise()
                    : yield this.http.get(`${this.endpoint}/${id}/music/pause?key=${this.key}`).toPromise();
                this._paused = !this.paused;
            }
            catch (_a) { }
        });
    }
    updateList(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._list = yield this.http.get(`${this.endpoint}/${id}/music/list?key=${this.key}`)
                .toPromise();
            if (this.list.length === 1) {
                this._paused = false;
                clearInterval(this.refreshList);
                this.refreshList = window.setInterval(() => this.incrementPosition(id), 1 * 1000);
            }
        });
    }
    incrementPosition(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.paused || this.list.length <= 0)
                return;
            this._current++;
            this._max = this.list[0].duration / 1000;
            if (this._current >= this._max) {
                this._current = 0;
                yield this.updateList(id);
            }
        });
    }
    skip(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.get(`${this.endpoint}/${id}/music/skip?key=${this.key}`).toPromise();
            this.list.splice(0, 1);
            this._current = 0;
        });
    }
    play(id, query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.get(`${this.endpoint}/${id}/music/play?key=${this.key}&query=${query}`).toPromise();
            yield this.updateList(id);
        });
    }
    stop(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.get(`${this.endpoint}/${id}/music/stop?key=${this.key}`).toPromise();
            this._paused = true;
            this._list = [];
            this._current = 0;
        });
    }
    removeTrack(id, position) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.get(`${this.endpoint}/${id}/music/remove/${position}?key=${this.key}`).toPromise();
            yield this.updateList(id);
        });
    }
    seek(id, position) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.get(`${this.endpoint}/${id}/music/seek/${position}?key=${this.key}`).toPromise();
            this._current = position;
        });
    }
    setVolume(id, value) {
        return this.http.get(`${this.endpoint}/${id}/music/set-volume/${value}?key=${this.key}`).toPromise();
    }
    shuffle(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.get(`${this.endpoint}/${id}/music/shuffle?key=${this.key}`).toPromise();
            yield this.updateList(id);
        });
    }
}
MusicService.ɵfac = function MusicService_Factory(t) { return new (t || MusicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MusicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MusicService, factory: MusicService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MusicService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Iqxd":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard/customize-xp-card/customize-xp-card.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomizeXPCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeXPCardComponent", function() { return CustomizeXPCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _directives_premium_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/premium.directive */ "u4Uf");












function CustomizeXPCardComponent_input_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 23);
} }
function CustomizeXPCardComponent_input_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 24);
} }
function CustomizeXPCardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizeXPCardComponent_div_37_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const image_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.setBackground(image_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class CustomizeXPCardComponent {
    constructor(userService) {
        this.userService = userService;
        this.xpCardUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stockImages = [
            `https://i.imgur.com/kHy5Q2P.png`,
            'https://i.imgur.com/9V5WeUo.png',
            'https://i.imgur.com/YUnUeX4.jpg',
            'https://i.imgur.com/TXF4t1h.jpg',
            'https://i.imgur.com/lKKJyMq.png',
            'https://i.imgur.com/Nzy4VzG.jpg',
            'https://i.imgur.com/yUrfSZY.png',
            'https://i.imgur.com/ObYWkod.png',
            'https://i.imgur.com/0dScwgd.png',
            'https://i.imgur.com/gl4iXdx.jpg'
        ];
        this.colors = {
            primary: '#ffffff',
            secondary: '#ababab',
            tertiary: '#cdcbcb'
        };
        this.colorPickers = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            primary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            secondary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tertiary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            backgroundURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    get savedUser() { return this.userService.savedUser || {}; }
    get primary() { return this.form.get('primary'); }
    get secondary() { return this.form.get('secondary'); }
    get tertiary() { return this.form.get('tertiary'); }
    get backgroundURL() { return this.form.get('backgroundURL'); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            this.initFormValues();
            this.updatePreview();
        });
    }
    initFormValues() {
        var _a, _b, _c;
        const xpCard = this.savedUser.xpCard;
        this.colorPickers = [
            (_a = xpCard.primary) !== null && _a !== void 0 ? _a : this.colors.primary,
            (_b = xpCard.secondary) !== null && _b !== void 0 ? _b : this.colors.secondary,
            (_c = xpCard.tertiary) !== null && _c !== void 0 ? _c : this.colors.tertiary
        ];
        this.backgroundURL.setValue(xpCard.backgroundURL);
    }
    submit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.updateXPCard(form);
            this.xpCardUpdate.emit();
        });
    }
    updatePreview() {
        this.setValues();
        const primary = this.hexToRGB(this.primary.value);
        const secondary = this.hexToRGB(this.secondary.value);
        const tertiary = this.hexToRGB(this.tertiary.value);
        const backgroundURL = this.backgroundURL.value;
        this.xpCardPreviewURL = this.userService.getXPCardPreviewURL({ primary, secondary, tertiary, backgroundURL });
    }
    setValues() {
        this.primary.setValue(this.colorPickers[0]);
        this.secondary.setValue(this.colorPickers[1]);
        this.tertiary.setValue(this.colorPickers[2]);
    }
    hexToRGB(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (!result)
            return '';
        const r = parseInt(result[1], 16);
        const g = parseInt(result[2], 16);
        const b = parseInt(result[3], 16);
        return `rgb(${r},${g},${b})`;
    }
    setBackground(url) {
        this.backgroundURL.setValue(url);
        this.updatePreview();
    }
}
CustomizeXPCardComponent.ɵfac = function CustomizeXPCardComponent_Factory(t) { return new (t || CustomizeXPCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
CustomizeXPCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomizeXPCardComponent, selectors: [["customize-xp-card"]], outputs: { xpCardUpdate: "xpCardUpdate" }, decls: 43, vars: 11, consts: [["role", "document", 1, "modal-dialog"], [1, "modal-content"], [3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["alt", "", 3, "src"], [1, "d-flex", "justify-content-between"], ["appearance", "outline"], ["matInput", "", "formControlName", "primary", 3, "value", "colorPicker", "cpSliderDragEnd", "colorPickerChange"], [1, "d-block"], ["matInput", "", "formControlName", "secondary", 3, "value", "colorPicker", "cpSliderDragEnd", "colorPickerChange"], ["matInput", "", "formControlName", "tertiary", 3, "value", "colorPicker", "cpSliderDragEnd", "colorPickerChange"], ["type", "url", "matInput", "", "formControlName", "backgroundURL", 4, "ngIf"], ["type", "url", "matInput", "", "premium", "", "readonly", "", "formControlName", "backgroundURL", 4, "ngIf"], [1, "row"], ["class", "col-6 stock-image", 3, "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", "mat-button", "", 1, "btn", "btn-secondary", "mr-2"], ["id", "submit", "type", "submit", "mat-button", "", 1, "btn", "btn-primary"], ["type", "url", "matInput", "", "formControlName", "backgroundURL"], ["type", "url", "matInput", "", "premium", "", "readonly", "", "formControlName", "backgroundURL"], [1, "col-6", "stock-image", 3, "click"], [1, "m-1", 3, "src"]], template: function CustomizeXPCardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CustomizeXPCardComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return ctx.submit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Customize XP Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cpSliderDragEnd", function CustomizeXPCardComponent_Template_input_cpSliderDragEnd_17_listener() { return ctx.updatePreview(); })("colorPickerChange", function CustomizeXPCardComponent_Template_input_colorPickerChange_17_listener($event) { return (ctx.colorPickers[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cpSliderDragEnd", function CustomizeXPCardComponent_Template_input_cpSliderDragEnd_22_listener() { return ctx.updatePreview(); })("colorPickerChange", function CustomizeXPCardComponent_Template_input_colorPickerChange_22_listener($event) { return (ctx.colorPickers[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Tertiary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cpSliderDragEnd", function CustomizeXPCardComponent_Template_input_cpSliderDragEnd_27_listener() { return ctx.updatePreview(); })("colorPickerChange", function CustomizeXPCardComponent_Template_input_colorPickerChange_27_listener($event) { return (ctx.colorPickers[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Background URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CustomizeXPCardComponent_input_32_Template, 1, 0, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CustomizeXPCardComponent_input_33_Template, 1, 0, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "or choose from these...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CustomizeXPCardComponent_div_37_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.xpCardPreviewURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.colorPickers[0])("colorPicker", ctx.colorPickers[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.colorPickers[1])("colorPicker", ctx.colorPickers[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.colorPickers[2])("colorPicker", ctx.colorPickers[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.savedUser.premium);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.savedUser.premium);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stockImages);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _directives_premium_directive__WEBPACK_IMPORTED_MODULE_9__["PremiumDirective"]], styles: ["img[_ngcontent-%COMP%] {\r\n    max-width: 470px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: var(--background-secondary);\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n}\r\n\r\n.stock-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 38.5vw;\r\n\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 0;\r\n\r\n    -o-object-fit: fill;\r\n\r\n       object-fit: fill;\r\n    border-radius: 3px;\r\n    transition: all .5s;\r\n    \r\n    cursor: pointer;\r\n}\r\n\r\n.stock-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0px 0px 10px 0px var(--tertiary);\r\n}\r\n\r\n\r\n\r\n@media (max-width: 576px) {\r\n    img[_ngcontent-%COMP%] {\r\n        max-width: 83.5vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9jdXN0b21pemUteHAtY2FyZC9jdXN0b21pemUteHAtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjs7SUFFakIsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVOztJQUVWLG1CQUFnQjs7T0FBaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CLGVBQWU7QUFDbkI7O0FBRUE7SUFHSSw0Q0FBNEM7QUFDaEQ7O0FBRUEsb0JBQW9COztBQUNwQjtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkL2N1c3RvbWl6ZS14cC1jYXJkL2N1c3RvbWl6ZS14cC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA0NzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uc3RvY2staW1hZ2UgaW1nIHtcclxuICAgIG1heC13aWR0aDogMzguNXZ3O1xyXG5cclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdG9jay1pbWFnZSBpbWc6aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHZhcigtLXRlcnRpYXJ5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCB2YXIoLS10ZXJ0aWFyeSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHZhcigtLXRlcnRpYXJ5KTtcclxufVxyXG5cclxuLyogPCBzbWFsbCBkZXZpY2VzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDgzLjV2dztcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomizeXPCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'customize-xp-card',
                templateUrl: './customize-xp-card.component.html',
                styleUrls: ['./customize-xp-card.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { xpCardUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "J99a":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/guild/music-module/music-module.component.ts ***!
  \************************************************************************/
/*! exports provided: MusicModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicModuleComponent", function() { return MusicModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_module_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/module-config */ "iYCr");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_music_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/music.service */ "Ie7a");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pipes/duration-string.pipe */ "vGr5");
/* harmony import */ var _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../pipes/truncated.pipe */ "gPlj");


















function MusicModuleComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "truncated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicModuleComponent_div_54_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.service.removeTrack(ctx_r6.guildId, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](track_r4.duration.timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", track_r4.uri, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 3, track_r4.title, 36), "");
} }
class MusicModuleComponent extends src_app_module_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"] {
    constructor(guildService, route, saveChanges, service) {
        super(guildService, route, saveChanges);
        this.guildService = guildService;
        this.service = service;
        this.minSearchLength = 2;
        this.moduleName = 'music';
    }
    get focused() { return document.activeElement.id === 'search'; }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            yield this.service.updateList(this.guildId);
        });
    }
    buildForm({ music }) {
        var _a;
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_a = music.enabled) !== null && _a !== void 0 ? _a : true)
        });
    }
    min(a, b) { return Math.min(a, b); }
    max(a, b) { return Math.max(a, b); }
}
MusicModuleComponent.ɵfac = function MusicModuleComponent_Factory(t) { return new (t || MusicModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_music_service__WEBPACK_IMPORTED_MODULE_7__["MusicService"])); };
MusicModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MusicModuleComponent, selectors: [["app-music-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 21, consts: [[1, "container"], [1, "d-flex", "justify-content-between"], [1, "display-3"], [1, "desc"], [1, "rounded", "manager", "row", "p-3"], [1, "player", "col-lg-6", "border-right", "border-dark"], [1, "float-none"], [1, "controls", 3, "keyup.j", "keyup.l", "keyup.k", "keyup.enter"], [1, "play"], ["appearance", "outline"], ["id", "search", "type", "search", "matInput", "", "required", "", 3, "disabled"], ["search", ""], ["mat-button", "", "color", "success", 1, "ml-2", 3, "disabled", "click"], [1, "player-bar"], ["type", "range", "min", "0", "step", "1", "tickInterval", "1", "thumbLabel", "", 3, "disabled", "max", "value", "change"], ["slider", ""], [1, "pl-5"], [1, "text-muted"], [1, "player-controls"], ["id", "toggle", "mat-button", "", "color", "primary", "matTooltip", "Toggle Playback", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa"], ["id", "stop", "mat-button", "", "color", "warn", "matTooltip", "Stop", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fas", "fa-stop"], ["id", "skip", "mat-button", "", "color", "yellow", "matTooltip", "Skip", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fas", "fa-forward"], ["id", "shuffle", "mat-button", "", "matTooltip", "Shuffle", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fas", "fa-random"], ["id", "volume", "mat-button", "", 3, "disabled"], ["aria-hidden", "true", 1, "fas", "fa-volume-up"], ["type", "range", "min", "0", "max", "100", "value", "100", 3, "disabled", "change"], ["level", ""], [1, "d-block", "d-md-none"], [1, "col-lg-6"], ["mat-button", "", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-sync"], [1, "list-group", "border-bottom", "pb-2", "border-muted"], ["class", "track list-group-item", 4, "ngFor", "ngForOf"], [1, "track", "list-group-item"], [1, "mt-2"], [3, "href"], ["color", "warn", "mat-button", "", 1, "float-right", 3, "click"]], template: function MusicModuleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Music Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Manage music without commands. You must be in a voice channel first.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.j", function MusicModuleComponent_Template_div_keyup_j_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return !ctx.focused && ctx.service.seek(ctx.guildId, ctx.max(_r1.value - 10, 0)); })("keyup.l", function MusicModuleComponent_Template_div_keyup_l_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return !ctx.focused && ctx.service.seek(ctx.guildId, ctx.min(_r1.value + 10, ctx.service.list[0] == null ? null : ctx.service.list[0].duration)); })("keyup.k", function MusicModuleComponent_Template_div_keyup_k_14_listener() { return !ctx.focused && ctx.service.toggle(ctx.guildId); })("keyup.enter", function MusicModuleComponent_Template_div_keyup_enter_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return _r0.value.length >= ctx.minSearchLength && ctx.service.play(ctx.guildId, _r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicModuleComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return _r0.value.length >= ctx.minSearchLength && ctx.service.play(ctx.guildId, _r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-slider", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MusicModuleComponent_Template_mat_slider_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return ctx.service.seek(ctx.guildId, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "durationString");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "durationString");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicModuleComponent_Template_button_click_33_listener() { return ctx.service.toggle(ctx.guildId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicModuleComponent_Template_button_click_35_listener() { return ctx.service.stop(ctx.guildId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicModuleComponent_Template_button_click_37_listener() { return ctx.service.skip(ctx.guildId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicModuleComponent_Template_button_click_39_listener() { return ctx.service.shuffle(ctx.guildId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-slider", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MusicModuleComponent_Template_mat_slider_change_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45); return ctx.service.setVolume(ctx.guildId, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicModuleComponent_Template_button_click_51_listener() { return ctx.service.updateList(ctx.guildId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, MusicModuleComponent_div_54_Template, 9, 6, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "/5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length >= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length >= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length <= 0)("max", (ctx.service.list[0] == null ? null : ctx.service.list[0].duration) / 1000)("value", ctx.service.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 17, ctx.service.current), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("/ ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 19, ctx.service.list[0] == null ? null : ctx.service.list[0].duration.seconds), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.service.paused ? "fa-play" : "fa-pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.service.list.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.service.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.service.list == null ? null : ctx.service.list.length);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["GuildSidebarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSlider"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], pipes: [_pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_15__["DurationStringPipe"], _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_16__["TruncatedPipe"]], styles: [".track[_ngcontent-%COMP%] {\r\n    background-color: var(--background-secondary);\r\n}\r\n\r\n.manager[_ngcontent-%COMP%] {\r\n    background-color: var(--background-tertiary);\r\n}\r\n\r\n.controls[_ngcontent-%COMP%] {\r\n    padding-left: 125px;\r\n}\r\n\r\n.player-bar[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    margin-left: -50px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 992px) {\r\n    .player[_ngcontent-%COMP%] {\r\n        border-color: transparent !important;\r\n    }\r\n    .controls[_ngcontent-%COMP%] {\r\n        padding-left: 0;\r\n    }\r\n    .player-bar[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\r\n        width: 75%;\r\n        margin-left: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL211c2ljLW1vZHVsZS9tdXNpYy1tb2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUEsUUFBUTs7QUFDUjtJQUNJO1FBQ0ksb0NBQW9DO0lBQ3hDO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL211c2ljLW1vZHVsZS9tdXNpYy1tb2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5tYW5hZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMjVweDtcclxufVxyXG4ucGxheWVyLWJhciBtYXQtc2xpZGVyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbi8qIDxsZyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5wbGF5ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb250cm9scyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLnBsYXllci1iYXIgbWF0LXNsaWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MusicModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-music-module',
                templateUrl: './music-module.component.html',
                styleUrls: ['./music-module.component.css']
            }]
    }], function () { return [{ type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: src_app_services_music_service__WEBPACK_IMPORTED_MODULE_7__["MusicService"] }]; }, null); })();


/***/ }),

/***/ "Meo+":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/widgets/audit-log-widget/audit-log-widget.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AuditLogWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditLogWidgetComponent", function() { return AuditLogWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/discord/member-username/member-username.component */ "FHs4");
/* harmony import */ var _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/mini-date.pipe */ "5jTC");








function AuditLogWidgetComponent_table_5_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "member-username", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "miniDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const change_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.changeCount - i_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", ctx_r1.getMember(change_r2.by))("withAvatar", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, change_r2.at));
} }
function AuditLogWidgetComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "At");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AuditLogWidgetComponent_table_5_tr_10_Template, 8, 6, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.changes);
} }
class AuditLogWidgetComponent {
    constructor(route, guildService) {
        this.route = route;
        this.guildService = guildService;
        this.rows = 3;
        this.changeCount = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const id = val.get('id');
                this.members = yield this.guildService.getMembers(id);
                const { changes } = yield this.guildService.getSavedLog(id);
                this.changeCount = changes.length;
                this.changes = changes.splice(changes.length - this.rows, changes.length);
            }));
        });
    }
    getMember(id) {
        return this.members.find(m => m.id === id) || {};
    }
}
AuditLogWidgetComponent.ɵfac = function AuditLogWidgetComponent_Factory(t) { return new (t || AuditLogWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"])); };
AuditLogWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuditLogWidgetComponent, selectors: [["audit-log-widget"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["class", "table", 4, "ngIf"], [1, "table"], [1, "pl-5"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "user"], [3, "member", "withAvatar"]], template: function AuditLogWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AuditLogWidgetComponent_table_5_Template, 11, 1, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_5__["MemberUsernameComponent"]], pipes: [_pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_6__["MiniDatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    color: var(--font);\r\n    max-width: 100%;\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n    transform: scale(0.65);\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    min-height: 250px;\r\n}\r\n\r\n.col-md-3[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3dpZGdldHMvYXVkaXQtbG9nLXdpZGdldC9hdWRpdC1sb2ctd2lkZ2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3dpZGdldHMvYXVkaXQtbG9nLXdpZGdldC9hdWRpdC1sb2ctd2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5jb2wtbWQtMywgLmNvbC1tZC05IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuditLogWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'audit-log-widget',
                templateUrl: './audit-log-widget.component.html',
                styleUrls: ['./audit-log-widget.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"] }]; }, null); })();


/***/ }),

/***/ "N1ji":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/guild/captcha-module/captcha-module.component.ts ***!
  \****************************************************************************/
/*! exports provided: CaptchaModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaModuleComponent", function() { return CaptchaModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _module_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module-config */ "iYCr");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function CaptchaModuleComponent_div_1_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", channel_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", channel_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[", ((tmp_2_0 = ctx_r2.getChannel(channel_r5.parentID)) == null ? null : tmp_2_0.name) || "N/A", "]");
} }
function CaptchaModuleComponent_div_1_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#" + (role_r6.color == null ? null : role_r6.color.toString(16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", role_r6.name, "");
} }
function CaptchaModuleComponent_div_1_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#" + (role_r7.color == null ? null : role_r7.color.toString(16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", role_r7.name, "");
} }
function CaptchaModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Captcha Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Please do this before users start verifying as it could cause issues ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Verification Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CaptchaModuleComponent_div_1_mat_option_15_Template, 4, 3, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Unverified Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CaptchaModuleComponent_div_1_mat_option_21_Template, 2, 4, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Verified Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CaptchaModuleComponent_div_1_mat_option_27_Template, 2, 4, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.textChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.roles);
} }
class CaptchaModuleComponent extends _module_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"] {
    constructor(guildService, route, saveChanges) {
        super(guildService, route, saveChanges);
        this.moduleName = 'captchaSettings';
    }
    get general() { return this.savedGuild.general; }
    get captchaSettings() { return this.savedGuild.captchaSettings; }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
        });
    }
    buildForm({ general, captchaSettings }) {
        var _a, _b, _c;
        const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            captchaChannel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_a = captchaSettings.captchaChannel) !== null && _a !== void 0 ? _a : ''),
            unverifiedRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_b = captchaSettings.unverifiedRole) !== null && _b !== void 0 ? _b : ''),
            verifiedRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_c = captchaSettings.verifiedRole) !== null && _c !== void 0 ? _c : '')
        });
        return formGroup;
    }
}
CaptchaModuleComponent.ɵfac = function CaptchaModuleComponent_Factory(t) { return new (t || CaptchaModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
CaptchaModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CaptchaModuleComponent, selectors: [["captcha-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "waitFor"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup"], ["f", "ngForm"], [1, "d-flex", "justify-content-between", "flex-column"], [1, "display-3"], [1, "row"], [1, "col-lg-4", "col-sm-6"], ["appearance", "outline"], ["formControlName", "captchaChannel"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "p-2"], ["formControlName", "unverifiedRole"], [3, "value", "color", 4, "ngFor", "ngForOf"], ["formControlName", "verifiedRole"], [3, "value"], [1, "float-right", "text-muted"]], template: function CaptchaModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CaptchaModuleComponent_div_1_Template, 28, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("waitFor", ctx.savedGuild && ctx.general);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["GuildSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ndWlsZC9jYXB0Y2hhLW1vZHVsZS9jYXB0Y2hhLW1vZHVsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CaptchaModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'captcha-module',
                templateUrl: './captcha-module.component.html',
                styleUrls: ['./captcha-module.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "NMgm":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard-overview/dashboard-overview.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DashboardOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOverviewComponent", function() { return DashboardOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ms */ "FGiv");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/waves/waves.component */ "y7Ka");
/* harmony import */ var _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/discord/member-username/member-username.component */ "FHs4");













function DashboardOverviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "member-username", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "LVL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("rank-" + (ctx_r0.members.indexOf(member_r2) + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.members.indexOf(member_r2) + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", member_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", member_r2.level, "");
} }
function DashboardOverviewComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](reminder_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](reminder_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getReminderExpiery(reminder_r3));
} }
class DashboardOverviewComponent {
    constructor(apiService, router, guildService, userService) {
        this.apiService = apiService;
        this.router = router;
        this.guildService = guildService;
        this.userService = userService;
        this.StatsShown = true;
        this.hasPerms = false;
        this.guild = {};
        document.title = 'Neko - Dashboard';
    }
    get user() { return this.userService.user; }
    get reps() { return this.userService.savedUser.xpCard.reps; }
    get userTitle() { return this.userService.savedUser.xpCard.title; }
    isUserTitle() {
        if (this.userTitle) {
            return true;
        }
        return false;
    }
    isItMorning() {
        let hour = new Date().getHours();
        if (hour < 12) {
            return true;
        }
        return false;
    }
    adminDashboard() {
        this.router.navigate([`/dashboard/admin/${this.guild.id}`]);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guildId = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].guildId;
            this.members = yield this.guildService.getMembers(guildId);
            this.members.forEach((member) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (member.id == this.user.id) {
                    this.member = member;
                    this.balance = yield this.guildService.getBalance(guildId, this.user.id);
                }
            }));
            let savedmember = yield this.guildService.getSavedMember(guildId, this.user.id);
            this.savedMember = savedmember;
            let userHasPerms = yield this.guildService.getMemberStatus(guildId, this.user.id);
            this.hasPerms = userHasPerms;
            let userReminders = yield this.userService.getReminders();
            this.reminders = userReminders;
            this.guild = yield this.guildService.getPublicGuild(guildId);
        });
    }
    getReminderExpiery(reminder) {
        return ms__WEBPACK_IMPORTED_MODULE_2___default()(reminder.expiresMilliseconds - Date.now());
    }
}
DashboardOverviewComponent.ɵfac = function DashboardOverviewComponent_Factory(t) { return new (t || DashboardOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
DashboardOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardOverviewComponent, selectors: [["app-dashboard"]], decls: 64, vars: 8, consts: [[1, "jumbotron"], [1, "informationContainer"], [1, "leaderboardsContainer", 2, "overflow", "scroll"], ["id", "leaderboard"], ["class", "member", 4, "ngFor", "ngForOf"], [1, "middleContainer"], [1, "middleItemContainer"], [1, "middleInfo"], ["src", "https://cdn.discordapp.com/emojis/665046162616614922.gif?size=96", "height", "48"], [1, "middleInfo", "DailyStreak"], ["src", "https://cdn.discordapp.com/emojis/920821387860508723.gif?size=96", "height", "48"], ["src", "https://cdn.discordapp.com/emojis/684217865028894799.gif?size=44", "height", "48"], [1, "leaderboardsContainer", 2, "position", "relative"], [1, "reminder-info"], [1, "reminder-info-text"], ["class", "reminder", 4, "ngFor", "ngForOf"], ["id", "adminButton", 3, "hidden", "click"], ["id", "adminText"], [1, "content", "d-flex", "flex-column", "justify-content-end", 2, "max-height", "76px"], [1, "d-flex", "justify-content-center", 2, "padding-bottom", "1vh", "max-height", "fit-content"], ["routerLink", "/invite", "target", "_blank", 1, "socialButtons"], [1, "fab", "fa-discord", 2, "color", "white", "font-size", "34px", "margin-right", "10px"], ["href", "https://twitter.com/nekoyorisou", "target", "_blank", 1, "socialButtons"], [1, "fab", "fa-twitter-square", 2, "color", "white", "font-size", "34px", "margin-right", "10px"], ["href", "https://www.instagram.com/nekoyorisou", "target", "_blank", 1, "socialButtons"], [1, "fab", "fa-instagram", 2, "color", "white", "font-size", "34px", "margin-right", "10px"], [1, "member"], [1, "rank"], [3, "member"], [1, "float-right", "pt-2", "d-md-block", "d-none", 2, "align-self", "flex-start", "margin-top", "-2px"], [1, "info"], [1, "reminder"], [1, "reminder-text"]], template: function DashboardOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Leaderboards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardOverviewComponent_div_7_Template, 10, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Your Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Your Reps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Your Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Starberry Milk");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Daily Streak");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "XP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Your Reminders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Reminder ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "When");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DashboardOverviewComponent_div_50_Template, 7, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardOverviewComponent_Template_div_click_51_listener() { return ctx.adminDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "waves");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userTitle || "You Didn't Set a Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.reps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.balance || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.savedMember.daily.dailyStreak || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.member.xp || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reminders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.hasPerms);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_10__["WavesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_11__["MemberUsernameComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    padding-top: 5rem;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n#subTitle[_ngcontent-%COMP%] {\r\n    padding-left: 10px; \r\n    text-align: left; \r\n    margin-top: -5px; \r\n    font-weight: 500;\r\n    cursor: default;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n    font-weight: 700; \r\n    text-align: left; \r\n    font-size: 38px; \r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    --banner: url('/assets/img/banner.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    border-radius: 0;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n\r\n    text-align: center;\r\n    background-image: linear-gradient(0deg, rgba(19,27,33,1) 0%, rgba(19,27,33,1) 6%, rgba(19,27,33,0.71) 29%, rgba(19,27,33,0) 100%), var(--banner);\r\n    \r\n}\r\n\r\n.leaderboardsContainer[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.36);\r\n    border: 4px solid #000000;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 40px;\r\n\r\n    max-height: 740px;\r\n    min-height: 740px;\r\n\r\n    margin-top: 20px;\r\n\r\n    width: 400px;\r\n    height: 90%;\r\n    align-self: center;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.leaderboardsContainer[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\ncode[_ngcontent-%COMP%] {\r\n    color: white !important;\r\n    background-color: #202225;\r\n    padding: 3px 5px;\r\n    border-radius: 6px;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    word-break: break-all;\r\n    margin: 0, 5px !important;\r\n}\r\n\r\n.middleContainer[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    margin: 0 10px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    align-self: center;\r\n}\r\n\r\n.middleInfo[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    text-align: center;\r\n    padding-left: 20px;\r\n}\r\n\r\n.DailyStreak[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n}\r\n\r\n.repsContainer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    text-align: center;\r\n    padding-left: 20px;\r\n}\r\n\r\np[_ngcontent-%COMP%]:not(.lead) {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: var(--muted);\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.middleItemContainer[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.36);\r\n    border: 4px solid #000000;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 40px;\r\n\r\n    min-height: 220px;\r\n\r\n    width: 100%;\r\n    height: 31.5%;\r\n    margin-top: 20px;\r\n}\r\n\r\n.informationContainer[_ngcontent-%COMP%] {\r\n    display: flex; \r\n    justify-content: space-between;\r\n    margin: 0vh 4vh;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    z-index: 1 !important;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 14vh;\r\n    background-color: var(--background-secondary);\r\n}\r\n\r\n#adminButton[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 15px;\r\n\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    width: 90%;\r\n    height: 80px;\r\n    background: linear-gradient(280deg, var(--background-secondary) 0%, var(--background-tertiary) 100%);\r\n    border: 3px solid #000000;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 40px;\r\n}\r\n\r\n#adminText[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    margin-top: 25px;\r\n\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n\r\n}\r\n\r\n#adminButton[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {  \r\n    position: relative !important;\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n}\r\n\r\n#leaderboard[_ngcontent-%COMP%] {\r\n    background-color: rgba(47, 49, 54, 0.6);\r\n    border-radius: 20px;\r\n    margin-bottom: 150px;\r\n    margin: 0px 5px;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] {\r\n    background-color: gray;\r\n\r\n    padding: 10px 15px;\r\n    height: 26px;\r\n    width: 26px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.rank-1[_ngcontent-%COMP%] {\r\n    background-color: #D4AF37;\r\n}\r\n\r\n.rank-2[_ngcontent-%COMP%] {\r\n    background-color: silver;\r\n}\r\n\r\n.rank-3[_ngcontent-%COMP%] {\r\n    background-color: #CD7F32;\r\n}\r\n\r\n.divider[_ngcontent-%COMP%] {\r\n    padding: 0 5px;\r\n    color: var(--background-primary);\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n    padding: 10px;\r\n    text-align: left;\r\n}\r\n\r\n.member[_ngcontent-%COMP%]:last-of-type {\r\n    border-bottom: none;\r\n    padding: none;\r\n}\r\n\r\n.reminder-info[_ngcontent-%COMP%] {\r\n    margin: 5px 20px !important;\r\n\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background: rgba(0,0,0,0.3);\r\n    border-radius: 20px;\r\n}\r\n\r\n.reminder-info-text[_ngcontent-%COMP%] {\r\n    margin: 2px 0 !important;\r\n}\r\n\r\n.reminder[_ngcontent-%COMP%] {\r\n    margin: 0 30px 5px 30px;\r\n    display: flex;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    padding: 5px 10px 5px 10px;\r\n    justify-content: space-between;\r\n    background: rgba(0, 0, 0, 0.35);\r\n    box-sizing: border-box;\r\n    border-radius: 20px;\r\n}\r\n\r\n.reminder-text[_ngcontent-%COMP%] {\r\n    margin: 0 !important;\r\n    font-size: 14px !important;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .informationContainer[_ngcontent-%COMP%] {\r\n      flex-direction: column;\r\n    }\r\n    .middleContainer[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px;\r\n    }\r\n    .leaderboardsContainer[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        max-height: 300px;\r\n        height: 300px;\r\n        min-height: 240px;\r\n    }\r\n    .middleContainer[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    h2[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        margin: 0px;\r\n    }\r\n    .middleInfo[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n    }\r\n    .reminder-info-text[_ngcontent-%COMP%] {\r\n        font-size: 12px !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQtb3ZlcnZpZXcvZGFzaGJvYXJkLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixnSkFBZ0o7SUFDaEo7Ozs7OzsyQkFNdUI7QUFDM0I7O0FBR0E7SUFDSSwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0RUFBNEU7SUFDNUUsbUJBQW1COztJQUVuQixpQkFBaUI7SUFDakIsaUJBQWlCOztJQUVqQixnQkFBZ0I7O0lBRWhCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0RUFBNEU7SUFDNUUsbUJBQW1COztJQUVuQixpQkFBaUI7O0lBRWpCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTs7SUFFWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osb0dBQW9HO0lBQ3BHLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMkNBQTJDO0lBQzNDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsY0FBYztJQUNkLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7O0lBRXRCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjs7SUFFM0IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLW92ZXJ2aWV3L2Rhc2hib2FyZC1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI3N1YlRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICAgIG1hcmdpbi10b3A6IC01cHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgICBmb250LXNpemU6IDM4cHg7IFxyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICAgIC0tYmFubmVyOiB1cmwoJy9hc3NldHMvaW1nL2Jhbm5lci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxOSwyNywzMywxKSAwJSwgcmdiYSgxOSwyNywzMywxKSA2JSwgcmdiYSgxOSwyNywzMywwLjcxKSAyOSUsIHJnYmEoMTksMjcsMzMsMCkgMTAwJSksIHZhcigtLWJhbm5lcik7XHJcbiAgICAvKmJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07ICovXHJcbn1cclxuXHJcblxyXG4ubGVhZGVyYm9hcmRzQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5cclxuICAgIG1heC1oZWlnaHQ6IDc0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNzQwcHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubGVhZGVyYm9hcmRzQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5jb2RlIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjIyNTtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgbWFyZ2luOiAwLCA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1pZGRsZUNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5taWRkbGVJbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uRGFpbHlTdHJlYWsge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVwc0NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxucDpub3QoLmxlYWQpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWlkZGxlSXRlbUNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzAwMDAwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzEuNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDB2aCA0dmg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4jYWRtaW5CdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyODBkZWcsIHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KSAwJSwgdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSkgMTAwJSk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4jYWRtaW5UZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxufVxyXG5cclxuI2FkbWluQnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuZm9vdGVyIHsgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLnJpZ2h0IHtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbiNsZWFkZXJib2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA0OSwgNTQsIDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgICBtYXJnaW46IDBweCA1cHg7XHJcbn1cclxuXHJcbi5yYW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcblxyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnJhbmstMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRBRjM3O1xyXG59XHJcbi5yYW5rLTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcbi5yYW5rLTMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NEN0YzMjtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxufVxyXG5cclxuLm1lbWJlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm1lbWJlcjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHBhZGRpbmc6IG5vbmU7XHJcbn1cclxuXHJcbi5yZW1pbmRlci1pbmZvIHtcclxuICAgIG1hcmdpbjogNXB4IDIwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ucmVtaW5kZXItaW5mby10ZXh0IHtcclxuICAgIG1hcmdpbjogMnB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbWluZGVyIHtcclxuICAgIG1hcmdpbjogMCAzMHB4IDVweCAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnJlbWluZGVyLXRleHQge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaW5mb3JtYXRpb25Db250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLm1pZGRsZUNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5sZWFkZXJib2FyZHNDb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1pZGRsZUNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5taWRkbGVJbmZvIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5yZW1pbmRlci1pbmZvLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard-overview.component.html',
                styleUrls: ['./dashboard-overview.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "QGxL":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/guild/guild-sidebar/guild-sidebar.component.ts ***!
  \**************************************************************************/
/*! exports provided: GuildSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildSidebarComponent", function() { return GuildSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "o6KS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");








function GuildSidebarComponent_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.guild.iconURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r3.guild.name);
} }
function GuildSidebarComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.guild.nameAcronym);
} }
const _c0 = function (a0) { return [a0]; };
function GuildSidebarComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Embed Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("interactive-muted", !(ctx_r5.savedGuild.autoMod == null ? null : ctx_r5.savedGuild.autoMod.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, "/servers/" + ctx_r5.id + "/embed"));
} }
function GuildSidebarComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Auto-mod");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Captcha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " General");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Leveling");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Reaction Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("interactive-muted", !(ctx_r6.savedGuild.autoMod == null ? null : ctx_r6.savedGuild.autoMod.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, "/servers/" + ctx_r6.id + "/auto-mod"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("interactive-muted", !(ctx_r6.savedGuild.autoMod == null ? null : ctx_r6.savedGuild.autoMod.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, "/servers/" + ctx_r6.id + "/captcha"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("interactive-muted", !(ctx_r6.savedGuild.general == null ? null : ctx_r6.savedGuild.general.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c0, "/servers/" + ctx_r6.id + "/general"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("interactive-muted", !(ctx_r6.savedGuild.leveling == null ? null : ctx_r6.savedGuild.leveling.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, "/servers/" + ctx_r6.id + "/leveling"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("interactive-muted", !(ctx_r6.savedGuild.logs == null ? null : ctx_r6.savedGuild.logs.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, "/servers/" + ctx_r6.id + "/logs"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("interactive-muted", !(ctx_r6.savedGuild.reactionRoles == null ? null : ctx_r6.savedGuild.reactionRoles.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, "/servers/" + ctx_r6.id + "/reaction-roles"));
} }
function GuildSidebarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GuildSidebarComponent_div_1_img_3_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GuildSidebarComponent_div_1_div_4_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GuildSidebarComponent_div_1_div_9_Template, 4, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Config");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GuildSidebarComponent_div_1_div_12_Template, 19, 30, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Log");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Warnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.guild.iconURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.guild.iconURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, "/dashboard/admin/" + ctx_r0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.guild.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.guild);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.guild && ctx_r0.savedGuild);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, "/servers/" + ctx_r0.id + "/log"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, "/servers/" + ctx_r0.id + "/warnings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, "/servers/" + ctx_r0.id + "/settings"));
} }
function GuildSidebarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GuildSidebarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = ["*"];
class GuildSidebarComponent {
    constructor(guildService, route, router) {
        this.guildService = guildService;
        this.route = route;
        this.router = router;
        this.loaded = true;
        document.title = 'Neko - Dashboard';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((paramMap) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.id = paramMap.get('id');
                this.savedGuild = yield this.guildService.getSavedGuild(this.id);
                this.guild = this.guildService.getGuild(this.id);
                //if (!this.guild)
                //this.router.navigate(['/dashboard']);
            }));
        });
    }
}
GuildSidebarComponent.ɵfac = function GuildSidebarComponent_Factory(t) { return new (t || GuildSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
GuildSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GuildSidebarComponent, selectors: [["guild-sidebar"]], inputs: { loaded: ["waitFor", "loaded"] }, ngContentSelectors: _c1, decls: 5, vars: 3, consts: [["class", "side-nav navbar-dark", 4, "ngIf"], ["id", "content"], [4, "ngIf"], [1, "side-nav", "navbar-dark"], [1, "header"], [1, "d-flex", "justify-content-center"], [3, "src", "alt", 4, "ngIf"], ["class", "alt-name d-flex flex-column justify-content-center", 4, "ngIf"], [3, "routerLink"], [1, "category"], ["class", "navbar-nav", 4, "ngIf"], [1, "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLink"], [1, "text-muted", "fas", "fa-file-alt"], [1, "text-muted", "fas", "fa-exclamation-triangle"], [1, "text-muted", "fa", "fa-cog"], [3, "src", "alt"], [1, "alt-name", "d-flex", "flex-column", "justify-content-center"], [1, "text-muted", "fas", "fa-indent"], [1, "text-muted", "fas", "fa-gavel"], [1, "text-muted", "fas", "fa-qrcode"], [1, "text-muted", "fas", "fa-terminal"], [1, "text-muted", "fas", "fa-star"], [1, "text-muted", "fas", "fa-clone"], [1, "text-muted", "fas", "fa-theater-masks"], [1, "mt-5", "pt-2"]], template: function GuildSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GuildSidebarComponent_div_1_Template, 28, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GuildSidebarComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GuildSidebarComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]], styles: ["h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    padding-right: 5px;\r\n}\r\n\r\n.alt-name[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    background-color: var(--background-primary);\r\n\r\n    width: 96px;\r\n    height: 96px;\r\n}\r\n\r\n.alt-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2d1aWxkLXNpZGViYXIvZ3VpbGQtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkNBQTJDOztJQUUzQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ3VpbGQvZ3VpbGQtc2lkZWJhci9ndWlsZC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hbHQtbmFtZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG5cclxuICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG59XHJcblxyXG4uYWx0LW5hbWUgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GuildSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'guild-sidebar',
                templateUrl: './guild-sidebar.component.html',
                styleUrls: ['./guild-sidebar.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['waitFor']
        }] }); })();


/***/ }),

/***/ "QQkr":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/guild/guild/guild.component.ts ***!
  \**********************************************************/
/*! exports provided: GuildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildComponent", function() { return GuildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function GuildComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Missing Permissions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GuildComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ready ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class GuildComponent {
    constructor(guildService, route) {
        this.guildService = guildService;
        this.route = route;
        this.botNeedsPerms = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].guildId;
            this.guild = this.guildService.getGuild(id);
            const { commands } = yield this.guildService.getSavedLog(this.guild.id);
            this.commands = commands;
            const { hasAdmin } = yield this.guildService.getBotStatus(id);
            this.botNeedsPerms = !hasAdmin;
        });
    }
}
GuildComponent.ɵfac = function GuildComponent_Factory(t) { return new (t || GuildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
GuildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GuildComponent, selectors: [["app-guild"]], decls: 21, vars: 12, consts: [[1, "container"], [1, "row", "color-heading"], [1, "col-lg-3", "col-sm-6"], [1, "stats1", "cursor-pointer"], ["aria-hidden", "true", 1, "fa", "fa-code"], [1, "stats2", "cursor-pointer", 3, "matTooltip"], [4, "ngIf"], [1, "stats3", "cursor-pointer"], ["aria-hidden", "true", 1, "fa", "fa-hashtag"], [1, "stats4", "cursor-pointer"], ["aria-hidden", "true", 1, "fa", "fa-user-o"], ["aria-hidden", "true", 1, "fa", "fa-lock"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-up"]], template: function GuildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GuildComponent_div_10_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GuildComponent_div_11_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Ran ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, ctx.commands == null ? null : ctx.commands.length), " Commands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.botNeedsPerms ? "needPerms" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.botNeedsPerms ? "Bot requires 'ADMINISTRATOR' to allow all functionality." : "Bot has 'ADMINISTRATOR' and can perform to its full potential.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.botNeedsPerms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.botNeedsPerms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.guild.channels == null ? null : ctx.guild.channels.length, " Channels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, ctx.guild.memberCount), " Members ");
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["GuildSidebarComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: [".stats.needPerms[_ngcontent-%COMP%] {\r\n    background-color: var(--danger);\r\n}\r\n\r\n.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n    background-color: var(--secondary);\r\n    border-radius: 10px;\r\n    margin: 15px;\r\n    padding: 25px;\r\n\r\n    text-transform: uppercase;\r\n}\r\n\r\n.stats1[_ngcontent-%COMP%] {\r\n    background-color: #38AFF7;\r\n    border-radius: 10px;\r\n    margin: 15px;\r\n    padding: 25px;\r\n\r\n    text-transform: uppercase;\r\n}\r\n\r\n.stats2[_ngcontent-%COMP%] {\r\n    background-color: #FAC33B;\r\n    border-radius: 10px;\r\n    margin: 15px;\r\n    padding: 25px;\r\n\r\n    text-transform: uppercase;\r\n}\r\n\r\n.stats3[_ngcontent-%COMP%] {\r\n    background-color: #1FDFB2;\r\n    border-radius: 10px;\r\n    margin: 15px;\r\n    padding: 25px;\r\n\r\n    text-transform: uppercase;\r\n}\r\n\r\n.stats4[_ngcontent-%COMP%] {\r\n    background-color: #9394FF;\r\n    border-radius: 10px;\r\n    margin: 15px;\r\n    padding: 25px;\r\n\r\n    text-transform: uppercase;\r\n}\r\n\r\n.stats.large[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    background-color: var(--background-tertiary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2d1aWxkL2d1aWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhOztJQUViLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7O0lBRWIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTs7SUFFYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhOztJQUViLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7O0lBRWIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRDQUE0QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ndWlsZC9ndWlsZC9ndWlsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzLm5lZWRQZXJtcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG59XHJcblxyXG4ucm93ID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zdGF0cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN0YXRzMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhBRkY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN0YXRzMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFDMzNCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN0YXRzMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUZERkIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN0YXRzNCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5NEZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN0YXRzLmxhcmdlIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GuildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-guild',
                templateUrl: './guild.component.html',
                styleUrls: ['./guild.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Rc5a":
/*!***********************************************!*\
  !*** ./src/app/pipes/clean-date-time.pipe.ts ***!
  \***********************************************/
/*! exports provided: CleanDateTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanDateTimePipe", function() { return CleanDateTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CleanDateTimePipe {
    transform(dateString, ...args) {
        const date = new Date(dateString);
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${day} ${date.getFullYear()}, ${hours}:${minutes}`;
    }
}
CleanDateTimePipe.ɵfac = function CleanDateTimePipe_Factory(t) { return new (t || CleanDateTimePipe)(); };
CleanDateTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cleanDateTime", type: CleanDateTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CleanDateTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'cleanDateTime' }]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SOaz":
/*!******************************************************!*\
  !*** ./src/app/pages/commands/commands.component.ts ***!
  \******************************************************/
/*! exports provided: CommandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsComponent", function() { return CommandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "HC5s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_commands_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/commands.service */ "4yAo");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/guild.service */ "4bjJ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/waves/waves.component */ "y7Ka");
/* harmony import */ var _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../zippy/zippy.component */ "5HMO");
/* harmony import */ var _pipes_camel_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/camel-to-sentence-case.pipe */ "GxHU");
/* harmony import */ var _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/snake-to-sentence-case.pipe */ "XkKb");













function CommandsComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommandsComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const mod_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.setModule(mod_r4.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "camelToSentenceCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mod_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", mod_r4.name === ctx_r0.selectedModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](mod_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, mod_r4.name));
} }
function CommandsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommandsComponent_div_11_Template_li_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.setModule("custom"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.guild.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.selectedModule === "custom");
} }
function CommandsComponent_li_14_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Permission");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "snakeToSentenceCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const command_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, command_r9.precondition));
} }
function CommandsComponent_li_14_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Executable Anywhere?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const command_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](command_r9.anywhere);
} }
function CommandsComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "zippy", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CommandsComponent_li_14_p_12_Template, 7, 3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CommandsComponent_li_14_p_13_Template, 6, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const command_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", command_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](command_r9.usage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](": ", command_r9.summary, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", command_r9.precondition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", command_r9.anywhere);
} }
function CommandsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No commands found... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CommandsComponent {
    constructor(route, service, guildService) {
        this.route = route;
        this.service = service;
        this.guildService = guildService;
        this.commands = [];
        this.displayedCommands = [];
        this.modules = [
            { name: "action", icon: "far fa-location-arrow" },
            { name: "autoMod", icon: "fa-gavel" },
            { name: "economy", icon: "fa-dollar-sign" },
            { name: "fun", icon: "fa-gamepad" },
            { name: "general", icon: "fa-star" },
            { name: "info", icon: "fa-info" },
            { name: "leveling", icon: "fa-trophy" },
            { name: "music", icon: "fa-music" },
        ];
        this.selectedModule = '';
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            this.commands = this.displayedCommands = [...this.service.commands];
            document.title = 'Neko - Commands';
            const guildId = this.route.snapshot.queryParamMap.get('guild_id');
            if (guildId) {
                const { guild, commands } = yield this.guildService.getCommands(guildId);
                const customCommands = (_a = commands
                    .filter(c => c.alias && c.command)) === null || _a === void 0 ? void 0 : _a.map(c => ({
                    name: c.alias,
                    module: 'Custom',
                    summary: c.command,
                    usage: c.alias,
                    anywhere: c.anywhere
                }));
                this.displayedCommands.push(...customCommands);
                this.guild = guild;
            }
            this.setModule('action');
        });
    }
    setModule(name) {
        this.selectedModule = name;
        this.displayedCommands = this.commands
            .filter(c => Object(_utils__WEBPACK_IMPORTED_MODULE_2__["kebabToCamelCase"])(c.module) === name)
            .sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    search(query) {
        const empty = query.trim().length <= 0;
        if (empty)
            return this.setModule(this.modules[0].name);
        this.displayedCommands = this.service.search(query);
        this.selectedModule = '';
    }
}
CommandsComponent.ɵfac = function CommandsComponent_Factory(t) { return new (t || CommandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_commands_service__WEBPACK_IMPORTED_MODULE_4__["CommandsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"])); };
CommandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommandsComponent, selectors: [["app-commands"]], decls: 18, vars: 4, consts: [["bg", "secondary"], [1, "container", "jumbotron", "text-center", "pb-2"], ["id", "title"], [1, "lead", "subTitle"], [1, "container", "px-lg-5"], [1, "column"], [1, "col-sm-3", "commandSelection"], [1, "categories", "d-inline-flex"], ["class", "list-group-item my-1 rounded cursor-pointer mx-2 d-flex align-middle justify-content-evenly text-center align-items-center py-1", 3, "active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-sm-9", "align-middle", "align-items-center", "d-inline"], [1, "list-none", "commands"], ["style", "margin-left: 20%; margin-right: 20%;", "class", "my-1 rounded", 4, "ngFor", "ngForOf"], ["class", "pl-5 text-center align-text-center", 4, "ngIf"], [1, "list-group-item", "my-1", "rounded", "cursor-pointer", "mx-2", "d-flex", "align-middle", "justify-content-evenly", "text-center", "align-items-center", "py-1", 3, "click"], [1, "fas", "mr-1", "icon"], [1, "category"], [1, "list-group-item", "my-1", "rounded", "cursor-pointer", 3, "click"], [1, "fas", "fa-cogs", "mr-1", "text-warning"], [1, "my-1", "rounded", 2, "margin-left", "20%", "margin-right", "20%"], [3, "title"], [1, "m-0"], ["class", "m-0", 4, "ngIf"], [1, "pl-5", "text-center", "align-text-center"], [1, "fas", "fa-sad-cry"]], template: function CommandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Commands");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "View a list of Neko's Discord chat commands.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CommandsComponent_li_10_Template, 5, 7, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CommandsComponent_div_11_Template, 7, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CommandsComponent_li_14_Template, 14, 5, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CommandsComponent_div_15_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "waves");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.modules);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayedCommands);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayedCommands.length <= 0);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_8__["WavesComponent"], _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_9__["ZippyComponent"]], pipes: [_pipes_camel_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_10__["CamelToSentenceCasePipe"], _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_11__["SnakeToSentenceCasePipe"]], styles: [".categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    background-color: var(--background-tertiary);\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    background-color: var(--background-secondary);    \r\n}\r\n\r\n.commandSelection[_ngcontent-%COMP%] {\r\n    overflow-x: scroll;\r\n    scrollbar-width: none;\r\n    min-width: 105%;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n    text-align: left; \r\n    font-size: 48px; \r\n}\r\n\r\n.subTitle[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n    text-align: left;\r\n}\r\n\r\n.commandSelection[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    padding-right: 5px;\r\n}\r\n\r\nli.active[_ngcontent-%COMP%] {\r\n    background-color: var(--secondary) !important;\r\n    border: none;\r\n}\r\n\r\n#searchButton[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    height: 64px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .nav-item-hover[_ngcontent-%COMP%] {\r\n      margin-right: 0px;\r\n    }\r\n  \r\n    \r\n    #title[_ngcontent-%COMP%] {\r\n      font-size: 44px;\r\n      text-align: center;\r\n    }\r\n\r\n    .subTitle[_ngcontent-%COMP%] {\r\n      padding: 0px;\r\n      text-align: center;\r\n    }\r\n\r\n    .commandSelection[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbWFuZHMvY29tbWFuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7TUFDRSxpQkFBaUI7SUFDbkI7OztJQUdBO01BQ0UsZUFBZTtNQUNmLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixrQkFBa0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1hbmRzL2NvbW1hbmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmllcyBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufVxyXG5cclxubGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpOyAgICBcclxufVxyXG5cclxuLmNvbW1hbmRTZWxlY3Rpb24ge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgbWluLXdpZHRoOiAxMDUlO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICAgIGZvbnQtc2l6ZTogNDhweDsgXHJcbn1cclxuXHJcbi5zdWJUaXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY29tbWFuZFNlbGVjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG5saS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jc2VhcmNoQnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm5hdi1pdGVtLWhvdmVyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgICN0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJUaXRsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21tYW5kU2VsZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommandsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-commands',
                templateUrl: './commands.component.html',
                styleUrls: ['./commands.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_commands_service__WEBPACK_IMPORTED_MODULE_4__["CommandsService"] }, { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] }]; }, null); })();


/***/ }),

/***/ "Sova":
/*!********************************************!*\
  !*** ./src/app/guards/guild-auth.guard.ts ***!
  \********************************************/
/*! exports provided: GuildAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildAuthGuard", function() { return GuildAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");






class GuildAuthGuard {
    constructor(guildService, router, userService) {
        this.guildService = guildService;
        this.router = router;
        this.userService = userService;
    }
    canActivate(next) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            yield this.guildService.init();
            const guildId = next.paramMap.get('id');
            this.guildService.singleton = next.data =
                (guildId === ((_a = this.guildService.singleton) === null || _a === void 0 ? void 0 : _a.guildId))
                    ? this.guildService.singleton : {
                    guildId,
                    channels: yield this.guildService.getChannels(guildId),
                    roles: yield this.guildService.getRoles(guildId),
                    savedGuild: yield this.guildService.getSavedGuild(guildId)
                };
            const canActivate = (_b = this.guildService.guilds) === null || _b === void 0 ? void 0 : _b.some(g => g.id === guildId);
            //if (!canActivate)
            //  this.router.navigate(['/dashboard']);
            return true; //canActivate
        });
    }
}
GuildAuthGuard.ɵfac = function GuildAuthGuard_Factory(t) { return new (t || GuildAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
GuildAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GuildAuthGuard, factory: GuildAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GuildAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_commands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/commands.service */ "4yAo");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor(commandService, themeService, userService) {
        this.commandService = commandService;
        this.themeService = themeService;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.themeService.updateTheme();
            yield this.commandService.updateCommands();
            yield this.userService.updateUser();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_commands_service__WEBPACK_IMPORTED_MODULE_2__["CommandsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_commands_service__WEBPACK_IMPORTED_MODULE_2__["CommandsService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "TtVv":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/waves/waves.component */ "y7Ka");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _popular_inputs_graph_popular_inputs_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popular-inputs-graph/popular-inputs-graph.component */ "fHHs");
/* harmony import */ var _popular_commands_graph_popular_commands_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popular-commands-graph/popular-commands-graph.component */ "wvv7");










function StatsComponent_section_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "popular-inputs-graph", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "popular-inputs-graph", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "popular-commands-graph");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "popular-commands-graph", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Ran ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 9, ctx_r0.stats.general.commandsExecuted), " Commands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 11, ctx_r0.stats.general.inputsChanged), " Updated Inputs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 13, ctx_r0.stats.general.inputsCount), " Total Inputs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 15, ctx_r0.stats.general.iq), " IQ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stats", ctx_r0.stats);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stats", ctx_r0.stats)("reversed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stats", ctx_r0.stats)("reversed", true);
} }
class StatsComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.stats = yield this.api.getStats();
        });
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 8, vars: 1, consts: [["inverted", "true"], [1, "container", "jumbrotron", "text-center"], [1, "display-3"], [1, "lead"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row", "color-heading"], [1, "col-lg-3", "col-sm-6"], ["matTooltip", "The total commands executed.", 1, "stats", "cursor-pointer"], ["aria-hidden", "true", 1, "fa", "fa-code"], ["matTooltip", "The total customizable guild config properties updated.", 1, "stats", "cursor-pointer"], [1, "fas", "fa-save"], ["matTooltip", "The total customizable guild config properties.", 1, "stats", "cursor-pointer"], [1, "fas", "fa-cogs"], ["matTooltip", "How big brain the bot is.", 1, "stats", "cursor-pointer"], [1, "fas", "fa-lightbulb"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [1, "large", "stats"], [3, "stats"], [3, "stats", "reversed"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "waves", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "View the statistics of Neko, updated every 30 minutes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StatsComponent_section_7_Template, 36, 17, "section", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stats);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_4__["WavesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _popular_inputs_graph_popular_inputs_graph_component__WEBPACK_IMPORTED_MODULE_7__["PopularInputsGraphComponent"], _popular_commands_graph_popular_commands_graph_component__WEBPACK_IMPORTED_MODULE_8__["PopularCommandsGraphComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: [".row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  background-color: var(--secondary);\r\n  border-radius: 3px;\r\n  margin: 15px;\r\n  padding: 25px;\r\n\r\n  text-transform: uppercase;\r\n}\r\n\r\n.stats.large[_ngcontent-%COMP%] {\r\n  margin: 15px;\r\n  background-color: var(--background-tertiary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7O0VBRWIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRDQUE0QztBQUM5QyIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93ID4gZGl2IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3RhdHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG5cclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uc3RhdHMubGFyZ2Uge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stats',
                templateUrl: './stats.component.html',
                styleUrls: ['./stats.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "WPWp":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ThemeService {
    constructor() {
        this.defaultTheme = 'NEKO';
    }
    changeTheme(theme) {
        localStorage.setItem('theme', theme);
        this.updateTheme();
    }
    updateTheme() {
        var _a;
        const theme = (_a = localStorage.getItem('theme')) !== null && _a !== void 0 ? _a : this.defaultTheme;
        document.querySelector('html').setAttribute('theme', theme);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "XkKb":
/*!******************************************************!*\
  !*** ./src/app/pipes/snake-to-sentence-case.pipe.ts ***!
  \******************************************************/
/*! exports provided: SnakeToSentenceCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeToSentenceCasePipe", function() { return SnakeToSentenceCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SnakeToSentenceCasePipe {
    transform(words) {
        var _a;
        return (_a = words === null || words === void 0 ? void 0 : words.split('_').map(w => w[0] + w.slice(1).toLowerCase()).join(' ')) !== null && _a !== void 0 ? _a : '';
    }
}
SnakeToSentenceCasePipe.ɵfac = function SnakeToSentenceCasePipe_Factory(t) { return new (t || SnakeToSentenceCasePipe)(); };
SnakeToSentenceCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "snakeToSentenceCase", type: SnakeToSentenceCasePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnakeToSentenceCasePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'snakeToSentenceCase'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AlertErrorHandler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertErrorHandler", function() { return AlertErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _pages_commands_commands_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/commands/commands.component */ "SOaz");
/* harmony import */ var _pages_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/auth/auth/auth.component */ "xFqE");
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/auth/login/login.component */ "Huwh");
/* harmony import */ var _pages_auth_invite_invite_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/auth/invite/invite.component */ "zje+");
/* harmony import */ var _pages_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/auth/logout/logout.component */ "7V/i");
/* harmony import */ var _dashboard_dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard/dashboard-overview/dashboard-overview.component */ "NMgm");
/* harmony import */ var _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/sidebar/sidebar.component */ "o6KS");
/* harmony import */ var _dashboard_guild_guild_guild_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/guild/guild/guild.component */ "QQkr");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/spinner/spinner.component */ "ij2n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _dashboard_guild_logs_module_logs_module_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/guild/logs-module/logs-module.component */ "5VNm");
/* harmony import */ var _dashboard_guild_auto_mod_module_auto_mod_module_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/guild/auto-mod-module/auto-mod-module.component */ "o1uT");
/* harmony import */ var _dashboard_guild_general_module_general_module_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/guild/general-module/general-module.component */ "8SWG");
/* harmony import */ var _dashboard_guild_music_module_music_module_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/guild/music-module/music-module.component */ "J99a");
/* harmony import */ var _dashboard_guild_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/guild/log-module/log-module.component */ "DCua");
/* harmony import */ var _dashboard_dashboard_settings_module_settings_module_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/dashboard/settings-module/settings-module.component */ "tpIi");
/* harmony import */ var _dashboard_guild_leveling_module_leveling_module_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/guild/leveling-module/leveling-module.component */ "DFSU");
/* harmony import */ var _dashboard_guild_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/guild/guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _dashboard_guild_leaderboard_module_leaderboard_module_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dashboard/guild/leaderboard-module/leaderboard-module.component */ "EK4V");
/* harmony import */ var _xp_card_xp_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./xp-card/xp-card.component */ "vo84");
/* harmony import */ var _dashboard_dashboard_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard/dashboard/dashboard-sidebar/dashboard-sidebar.component */ "nPNH");
/* harmony import */ var _dashboard_dashboard_customize_xp_card_customize_xp_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dashboard/dashboard/customize-xp-card/customize-xp-card.component */ "Iqxd");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./material-module */ "j5wd");
/* harmony import */ var _dashboard_directives_premium_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dashboard/directives/premium.directive */ "u4Uf");
/* harmony import */ var _utils_discord_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./utils/discord/save-changes/save-changes.component */ "GnlN");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/payment-success/payment-success.component */ "AvRb");
/* harmony import */ var _pages_plus_plus_plus_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/plus/plus/plus.component */ "4lpq");
/* harmony import */ var _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/clean-date-time.pipe */ "Rc5a");
/* harmony import */ var _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./utils/discord/member-username/member-username.component */ "FHs4");
/* harmony import */ var _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./zippy/zippy.component */ "5HMO");
/* harmony import */ var _dashboard_widgets_audit_log_widget_audit_log_widget_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./dashboard/widgets/audit-log-widget/audit-log-widget.component */ "Meo+");
/* harmony import */ var _dashboard_widgets_commands_widget_commands_widget_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dashboard/widgets/commands-widget/commands-widget.component */ "z+9u");
/* harmony import */ var _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pipes/mini-date.pipe */ "5jTC");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pipes/snake-to-sentence-case.pipe */ "XkKb");
/* harmony import */ var _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pipes/truncated.pipe */ "gPlj");
/* harmony import */ var _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pipes/duration-string.pipe */ "vGr5");
/* harmony import */ var _pipes_camel_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pipes/camel-to-sentence-case.pipe */ "GxHU");
/* harmony import */ var _utils_discord_message_preview_message_preview_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./utils/discord/message-preview/message-preview.component */ "H9sY");
/* harmony import */ var _dashboard_dashboard_reaction_roles_module_reaction_roles_module_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dashboard/dashboard/reaction-roles-module/reaction-roles-module.component */ "5wWH");
/* harmony import */ var _pages_plus_plus_card_plus_card_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/plus/plus-card/plus-card.component */ "hDNB");
/* harmony import */ var _utils_plus_paywall_plus_paywall_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./utils/plus-paywall/plus-paywall.component */ "4vgP");
/* harmony import */ var _utils_plus_badge_plus_badge_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./utils/plus-badge/plus-badge.component */ "+2Ia");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./stats/stats.component */ "TtVv");
/* harmony import */ var _stats_popular_inputs_graph_popular_inputs_graph_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./stats/popular-inputs-graph/popular-inputs-graph.component */ "fHHs");
/* harmony import */ var _stats_popular_commands_graph_popular_commands_graph_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./stats/popular-commands-graph/popular-commands-graph.component */ "wvv7");
/* harmony import */ var _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./utils/waves/waves.component */ "y7Ka");
/* harmony import */ var _dashboard_guild_warnings_module_warnings_module_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./dashboard/guild/warnings-module/warnings-module.component */ "8L85");
/* harmony import */ var _dashboard_guild_warnings_widget_warnings_widget_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./dashboard/guild/warnings-widget/warnings-widget.component */ "5iji");
/* harmony import */ var _dashboard_guild_compose_embed_module_compose_embed_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./dashboard/guild/compose-embed-module/compose-embed.component */ "qBLl");
/* harmony import */ var _utils_discord_message_embed_preview_message_embed_preview_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./utils/discord/message-embed-preview/message-embed-preview.component */ "7vaz");
/* harmony import */ var _dashboard_guild_captcha_module_captcha_module_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./dashboard/guild/captcha-module/captcha-module.component */ "N1ji");




































































class AlertErrorHandler {
    handleError(error) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log((_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.rejection) === null || _a === void 0 ? void 0 : _a.error) !== null && _b !== void 0 ? _b : error === null || error === void 0 ? void 0 : error.message) !== null && _c !== void 0 ? _c : error);
                const key = localStorage.getItem('key');
                yield fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_47__["environment"].endpoint}/error?key=${key}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: error.message })
                });
            }
            finally {
                console.log(error);
            }
        });
    }
}
AlertErrorHandler.ɵfac = function AlertErrorHandler_Factory(t) { return new (t || AlertErrorHandler)(); };
AlertErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlertErrorHandler, factory: AlertErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AlertErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], null, null); })();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: AlertErrorHandler },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ShowOnDirtyErrorStateMatcher"] },
        { provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HIGHLIGHT_OPTIONS"], useValue: { languages: getHighlightLanguages() } }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_35__["MaterialModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
        _pages_commands_commands_component__WEBPACK_IMPORTED_MODULE_13__["CommandsComponent"],
        _pages_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
        _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _pages_auth_invite_invite_component__WEBPACK_IMPORTED_MODULE_16__["InviteComponent"],
        _pages_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
        _dashboard_dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_18__["DashboardOverviewComponent"],
        _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
        _dashboard_guild_guild_guild_component__WEBPACK_IMPORTED_MODULE_20__["GuildComponent"],
        _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"],
        _dashboard_guild_auto_mod_module_auto_mod_module_component__WEBPACK_IMPORTED_MODULE_24__["AutoModModuleComponent"],
        _dashboard_guild_general_module_general_module_component__WEBPACK_IMPORTED_MODULE_25__["GeneralModuleComponent"],
        _dashboard_guild_music_module_music_module_component__WEBPACK_IMPORTED_MODULE_26__["MusicModuleComponent"],
        _dashboard_guild_leveling_module_leveling_module_component__WEBPACK_IMPORTED_MODULE_29__["LevelingModuleComponent"],
        _dashboard_dashboard_settings_module_settings_module_component__WEBPACK_IMPORTED_MODULE_28__["SettingsModuleComponent"],
        _dashboard_guild_leveling_module_leveling_module_component__WEBPACK_IMPORTED_MODULE_29__["LevelingModuleComponent"],
        _dashboard_guild_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["GuildSidebarComponent"],
        _dashboard_guild_leaderboard_module_leaderboard_module_component__WEBPACK_IMPORTED_MODULE_31__["LeaderboardModuleComponent"],
        _xp_card_xp_card_component__WEBPACK_IMPORTED_MODULE_32__["XPCardComponent"],
        _dashboard_dashboard_customize_xp_card_customize_xp_card_component__WEBPACK_IMPORTED_MODULE_34__["CustomizeXPCardComponent"],
        _dashboard_dashboard_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_33__["DashboardSidebarComponent"],
        _dashboard_directives_premium_directive__WEBPACK_IMPORTED_MODULE_36__["PremiumDirective"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_38__["NotFoundComponent"],
        _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_39__["PaymentSuccessComponent"],
        _pages_plus_plus_plus_component__WEBPACK_IMPORTED_MODULE_40__["PlusComponent"],
        _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_41__["CleanDateTimePipe"],
        _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_42__["MemberUsernameComponent"],
        _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_43__["ZippyComponent"],
        _dashboard_widgets_audit_log_widget_audit_log_widget_component__WEBPACK_IMPORTED_MODULE_44__["AuditLogWidgetComponent"],
        _dashboard_widgets_commands_widget_commands_widget_component__WEBPACK_IMPORTED_MODULE_45__["CommandsWidgetComponent"],
        _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_46__["MiniDatePipe"],
        _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_48__["SnakeToSentenceCasePipe"],
        _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_49__["TruncatedPipe"],
        _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_50__["DurationStringPipe"],
        _pipes_camel_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_51__["CamelToSentenceCasePipe"],
        _dashboard_guild_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_27__["LogModuleComponent"],
        _dashboard_guild_logs_module_logs_module_component__WEBPACK_IMPORTED_MODULE_23__["LogsModuleComponent"],
        _dashboard_dashboard_reaction_roles_module_reaction_roles_module_component__WEBPACK_IMPORTED_MODULE_53__["ReactionRolesModuleComponent"],
        _pages_plus_plus_card_plus_card_component__WEBPACK_IMPORTED_MODULE_54__["PlusCardComponent"],
        _utils_plus_paywall_plus_paywall_component__WEBPACK_IMPORTED_MODULE_55__["PlusPaywallComponent"],
        _utils_plus_badge_plus_badge_component__WEBPACK_IMPORTED_MODULE_56__["PlusBadgeComponent"],
        _stats_stats_component__WEBPACK_IMPORTED_MODULE_57__["StatsComponent"],
        _stats_popular_inputs_graph_popular_inputs_graph_component__WEBPACK_IMPORTED_MODULE_58__["PopularInputsGraphComponent"],
        _stats_popular_commands_graph_popular_commands_graph_component__WEBPACK_IMPORTED_MODULE_59__["PopularCommandsGraphComponent"],
        _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_60__["WavesComponent"],
        _dashboard_guild_warnings_module_warnings_module_component__WEBPACK_IMPORTED_MODULE_61__["WarningsModuleComponent"],
        _dashboard_guild_warnings_widget_warnings_widget_component__WEBPACK_IMPORTED_MODULE_62__["WarningsWidgetComponent"],
        _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_42__["MemberUsernameComponent"],
        _utils_discord_message_preview_message_preview_component__WEBPACK_IMPORTED_MODULE_52__["MessagePreviewComponent"],
        _utils_discord_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_37__["SaveChangesComponent"],
        _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_42__["MemberUsernameComponent"],
        _dashboard_guild_compose_embed_module_compose_embed_component__WEBPACK_IMPORTED_MODULE_63__["EmbedComposeModuleComponent"],
        _utils_discord_message_embed_preview_message_embed_preview_component__WEBPACK_IMPORTED_MODULE_64__["MessageEmbedPreviewComponent"],
        _dashboard_guild_captcha_module_captcha_module_component__WEBPACK_IMPORTED_MODULE_65__["CaptchaModuleComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_35__["MaterialModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModule"]], exports: [_dashboard_directives_premium_directive__WEBPACK_IMPORTED_MODULE_36__["PremiumDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                    _pages_commands_commands_component__WEBPACK_IMPORTED_MODULE_13__["CommandsComponent"],
                    _pages_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
                    _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                    _pages_auth_invite_invite_component__WEBPACK_IMPORTED_MODULE_16__["InviteComponent"],
                    _pages_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
                    _dashboard_dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_18__["DashboardOverviewComponent"],
                    _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                    _dashboard_guild_guild_guild_component__WEBPACK_IMPORTED_MODULE_20__["GuildComponent"],
                    _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"],
                    _dashboard_guild_auto_mod_module_auto_mod_module_component__WEBPACK_IMPORTED_MODULE_24__["AutoModModuleComponent"],
                    _dashboard_guild_general_module_general_module_component__WEBPACK_IMPORTED_MODULE_25__["GeneralModuleComponent"],
                    _dashboard_guild_music_module_music_module_component__WEBPACK_IMPORTED_MODULE_26__["MusicModuleComponent"],
                    _dashboard_guild_leveling_module_leveling_module_component__WEBPACK_IMPORTED_MODULE_29__["LevelingModuleComponent"],
                    _dashboard_dashboard_settings_module_settings_module_component__WEBPACK_IMPORTED_MODULE_28__["SettingsModuleComponent"],
                    _dashboard_guild_leveling_module_leveling_module_component__WEBPACK_IMPORTED_MODULE_29__["LevelingModuleComponent"],
                    _dashboard_guild_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["GuildSidebarComponent"],
                    _dashboard_guild_leaderboard_module_leaderboard_module_component__WEBPACK_IMPORTED_MODULE_31__["LeaderboardModuleComponent"],
                    _xp_card_xp_card_component__WEBPACK_IMPORTED_MODULE_32__["XPCardComponent"],
                    _dashboard_dashboard_customize_xp_card_customize_xp_card_component__WEBPACK_IMPORTED_MODULE_34__["CustomizeXPCardComponent"],
                    _dashboard_dashboard_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_33__["DashboardSidebarComponent"],
                    _dashboard_directives_premium_directive__WEBPACK_IMPORTED_MODULE_36__["PremiumDirective"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_38__["NotFoundComponent"],
                    _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_39__["PaymentSuccessComponent"],
                    _pages_plus_plus_plus_component__WEBPACK_IMPORTED_MODULE_40__["PlusComponent"],
                    _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_41__["CleanDateTimePipe"],
                    _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_42__["MemberUsernameComponent"],
                    _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_43__["ZippyComponent"],
                    _dashboard_widgets_audit_log_widget_audit_log_widget_component__WEBPACK_IMPORTED_MODULE_44__["AuditLogWidgetComponent"],
                    _dashboard_widgets_commands_widget_commands_widget_component__WEBPACK_IMPORTED_MODULE_45__["CommandsWidgetComponent"],
                    _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_46__["MiniDatePipe"],
                    _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_48__["SnakeToSentenceCasePipe"],
                    _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_49__["TruncatedPipe"],
                    _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_50__["DurationStringPipe"],
                    _pipes_camel_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_51__["CamelToSentenceCasePipe"],
                    _dashboard_guild_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_27__["LogModuleComponent"],
                    _dashboard_guild_logs_module_logs_module_component__WEBPACK_IMPORTED_MODULE_23__["LogsModuleComponent"],
                    _dashboard_dashboard_reaction_roles_module_reaction_roles_module_component__WEBPACK_IMPORTED_MODULE_53__["ReactionRolesModuleComponent"],
                    _pages_plus_plus_card_plus_card_component__WEBPACK_IMPORTED_MODULE_54__["PlusCardComponent"],
                    _utils_plus_paywall_plus_paywall_component__WEBPACK_IMPORTED_MODULE_55__["PlusPaywallComponent"],
                    _utils_plus_badge_plus_badge_component__WEBPACK_IMPORTED_MODULE_56__["PlusBadgeComponent"],
                    _stats_stats_component__WEBPACK_IMPORTED_MODULE_57__["StatsComponent"],
                    _stats_popular_inputs_graph_popular_inputs_graph_component__WEBPACK_IMPORTED_MODULE_58__["PopularInputsGraphComponent"],
                    _stats_popular_commands_graph_popular_commands_graph_component__WEBPACK_IMPORTED_MODULE_59__["PopularCommandsGraphComponent"],
                    _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_60__["WavesComponent"],
                    _dashboard_guild_warnings_module_warnings_module_component__WEBPACK_IMPORTED_MODULE_61__["WarningsModuleComponent"],
                    _dashboard_guild_warnings_widget_warnings_widget_component__WEBPACK_IMPORTED_MODULE_62__["WarningsWidgetComponent"],
                    _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_42__["MemberUsernameComponent"],
                    _utils_discord_message_preview_message_preview_component__WEBPACK_IMPORTED_MODULE_52__["MessagePreviewComponent"],
                    _utils_discord_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_37__["SaveChangesComponent"],
                    _utils_discord_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_42__["MemberUsernameComponent"],
                    _dashboard_guild_compose_embed_module_compose_embed_component__WEBPACK_IMPORTED_MODULE_63__["EmbedComposeModuleComponent"],
                    _utils_discord_message_embed_preview_message_embed_preview_component__WEBPACK_IMPORTED_MODULE_64__["MessageEmbedPreviewComponent"],
                    _dashboard_guild_captcha_module_captcha_module_component__WEBPACK_IMPORTED_MODULE_65__["CaptchaModuleComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_35__["MaterialModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModule"],
                ],
                exports: [_dashboard_directives_premium_directive__WEBPACK_IMPORTED_MODULE_36__["PremiumDirective"]],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: AlertErrorHandler },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ShowOnDirtyErrorStateMatcher"] },
                    { provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HIGHLIGHT_OPTIONS"], useValue: { languages: getHighlightLanguages() } }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();
function getHighlightLanguages() {
    return {
        json: () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/json */ "WtIr", 7))
    };
}


/***/ }),

/***/ "agny":
/*!*****************************************************!*\
  !*** ./src/app/zippy/zippy.component.animations.ts ***!
  \*****************************************************/
/*! exports provided: expandCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandCollapse", function() { return expandCollapse; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const expandCollapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandCollapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        padding: '0 20px'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease')])
]);


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    discordInvite: 'https://discord.gg/NyxuUKVha7',
    endpoint: '/api',
    CLIENT_SECRET: 'fv6nqPabWe7EyxSFbFsnq3v6SPXe6Jy9',
    version: 'v0.1.0b',
    botOwnerId: '372099126583754753',
    guildId: '1008663587713191986'
};


/***/ }),

/***/ "fHHs":
/*!******************************************************************************!*\
  !*** ./src/app/stats/popular-inputs-graph/popular-inputs-graph.component.ts ***!
  \******************************************************************************/
/*! exports provided: PopularInputsGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularInputsGraphComponent", function() { return PopularInputsGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "qb46");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "LPYB");







function PopularInputsGraphComponent_canvas_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("plugins", ctx_r0.barChartPlugins)("legend", ctx_r0.barChartLegend)("chartType", ctx_r0.barChartType);
} }
class PopularInputsGraphComponent {
    constructor(api) {
        this.api = api;
        this.reversed = false;
        this.chartReady = false;
        this.barChartOptions = {
            responsive: false,
            scales: {
                yAxes: [{ display: false }],
                xAxes: [{ display: false }]
            },
            plugins: {
                datalabels: { anchor: 'end', align: 'end' }
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default.a];
        this.barChartData = [];
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.stats = (_a = this.stats) !== null && _a !== void 0 ? _a : yield this.api.getStats();
            this.barChartLabels = this.buildLabels();
            this.barChartData = this.buildDataSets();
            this.chartReady = true;
        });
    }
    buildLabels() {
        const labels = this.stats.inputs
            .map(c => c.path)
            .splice(0, 10);
        return (this.reversed) ? labels.reverse() : labels;
    }
    buildDataSets() {
        const data = this.stats.inputs.map(s => s.count);
        const sets = [
            {
                data: (this.reversed) ? data.reverse() : data,
                label: 'Inputs'
            }
        ];
        return (this.reversed) ? sets.reverse() : sets;
    }
}
PopularInputsGraphComponent.ɵfac = function PopularInputsGraphComponent_Factory(t) { return new (t || PopularInputsGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
PopularInputsGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopularInputsGraphComponent, selectors: [["popular-inputs-graph"]], inputs: { stats: "stats", reversed: "reversed" }, decls: 6, vars: 2, consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", 4, "ngIf"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function PopularInputsGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PopularInputsGraphComponent_canvas_5_Template, 1, 6, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.reversed ? "Least" : "Most", " Popular Inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3BvcHVsYXItaW5wdXRzLWdyYXBoL3BvcHVsYXItaW5wdXRzLWdyYXBoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopularInputsGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'popular-inputs-graph',
                templateUrl: './popular-inputs-graph.component.html',
                styleUrls: ['./popular-inputs-graph.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, { stats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reversed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "gPlj":
/*!*****************************************!*\
  !*** ./src/app/pipes/truncated.pipe.ts ***!
  \*****************************************/
/*! exports provided: TruncatedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatedPipe", function() { return TruncatedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TruncatedPipe {
    transform(words, max) {
        return words.substring(0, max) + '...';
    }
}
TruncatedPipe.ɵfac = function TruncatedPipe_Factory(t) { return new (t || TruncatedPipe)(); };
TruncatedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncated", type: TruncatedPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncated'
            }]
    }], null, null); })();


/***/ }),

/***/ "hD2b":
/*!*****************************************!*\
  !*** ./src/app/services/pay.service.ts ***!
  \*****************************************/
/*! exports provided: PayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayService", function() { return PayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PayService {
    constructor(http) {
        this.http = http;
    }
    payURL(plan) {
        const key = localStorage.getItem('key');
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint}/pay?key=${key}&plan=${plan}`;
    }
}
PayService.ɵfac = function PayService_Factory(t) { return new (t || PayService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PayService, factory: PayService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hDNB":
/*!*************************************************************!*\
  !*** ./src/app/pages/plus/plus-card/plus-card.component.ts ***!
  \*************************************************************/
/*! exports provided: PlusCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusCardComponent", function() { return PlusCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function PlusCardComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlusCardComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.checkout.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Buy Again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlusCardComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlusCardComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.checkout.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlusCardComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login to Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlusCardComponent {
    constructor(userService) {
        this.userService = userService;
        this.checkout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
PlusCardComponent.ɵfac = function PlusCardComponent_Factory(t) { return new (t || PlusCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
PlusCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlusCardComponent, selectors: [["app-plus-card"]], inputs: { duration: "duration", price: "price" }, outputs: { checkout: "checkout" }, decls: 33, vars: 8, consts: [[1, "price-sec"], [1, "container-fluid"], [1, "container"], [1, "row"], [1, "price-table"], [1, "card", "text-center"], [1, "title"], [1, "fas", "fa-plus"], [1, "price"], [1, "text-secondary", "mb-0"], [1, "option"], [1, "fas", "fa-check"], ["class", "checkout my-3 bg-warning", "mat-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/login", "class", "checkout my-3", "color", "success", "mat-button", "", 4, "ngIf"], ["mat-button", "", 1, "checkout", "my-3", "bg-warning", 3, "click"], [1, "fab", "fa-paypal"], ["routerLink", "/login", "color", "success", "mat-button", "", 1, "checkout", "my-3"], [1, "fas", "fa-user-alt"]], template: function PlusCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Full XP Card Customization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Music - Additional Music Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Features - Features Added Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PlusCardComponent_button_30_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PlusCardComponent_button_31_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PlusCardComponent_button_32_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, ctx.price * 1.5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.user && (ctx.userService.savedUser == null ? null : ctx.userService.savedUser.premium));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.user && !(ctx.userService.savedUser == null ? null : ctx.userService.savedUser.premium));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userService.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".price-sec[_ngcontent-%COMP%]   .ptables-head[_ngcontent-%COMP%]{\r\n\tfont-family: 'Domine', serif;\r\n\tbox-shadow:0px 6px 14px rgba(0, 0, 0, 0.3);\r\n\tpadding:30px 0;\r\n\tmargin:0px 0px 100px 0px;\r\n\tborder-radius:3px;\r\n\tbackground:linear-gradient(25deg, var(--secondary) 15%,transparent 0%),\r\n\t  linear-gradient(-25deg, var(--primary) 15%, transparent 0%),\r\n\t  linear-gradient(-150deg, #64b5f6 15%, transparent 0%),\r\n\t  linear-gradient(150deg, #f47 15%, transparent 0%);\r\n  \r\n  }\r\n  @media all and (max-width:600px){\r\n\t.ptables-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n\t   font-size:30px;\r\n\t}\r\n  }\r\n  .price-sec[_ngcontent-%COMP%]   .price-table[_ngcontent-%COMP%]{\r\n\t  margin:5px 0px;\r\n  }\r\n  .price-sec[_ngcontent-%COMP%]   .price-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n\t  position: relative;\r\n\t  max-width:300px;\r\n\t  height:auto;\r\n\t  background: linear-gradient(-45deg, var(--tertiary), var(--secondary));\r\n\t  border-radius:15px;\r\n\t  margin: 0 auto;\r\n\t  padding: 40px 20px;\r\n\t  box-shadow:0 10px 15px rgba(0,0,0,.5);\r\n\t  transition: .5s;\r\n\t  overflow: hidden;\r\n  }\r\n  .price-sec[_ngcontent-%COMP%]   .price-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{\r\n\t  transform: scale(1.1);\r\n  }\r\n  .price-table[_ngcontent-%COMP%]:nth-child(1)   .card[_ngcontent-%COMP%], .price-table[_ngcontent-%COMP%]:nth-child(1)   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n\t\t  background: linear-gradient(-45deg, #f403d1, #64b5f6);\r\n  \r\n  }\r\n  .price-table[_ngcontent-%COMP%]:nth-child(2)   .card[_ngcontent-%COMP%], .price-table[_ngcontent-%COMP%]:nth-child(2)   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n\t\t  background: linear-gradient(-45deg, #fe6c61, #f321d7);\r\n  \r\n  }\r\n  .price-table[_ngcontent-%COMP%]:nth-child(3)   .card[_ngcontent-%COMP%], .price-table[_ngcontent-%COMP%]:nth-child(3)   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n\t  background: linear-gradient(-45deg, #24ff72, #9a4eff);\r\n  }\r\n  .price-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:before{\r\n\t  content: \"\";\r\n\t  position: absolute;\r\n\t  bottom: 0;\r\n\t  left: 0;\r\n\t  width: 100%;\r\n\t  height: 40%;\r\n\t  background: rgba(255, 255, 255, .1);\r\n\t  z-index: 1;\r\n\t  transform:skewY(-5deg) scale(1.5);\r\n  \r\n  }\r\n  .price-table[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n\t  color:#fff;\r\n\t  font-size: 60px;\r\n\t  width: 100px;\r\n\t  height:100px;\r\n\t  border-radius: 50%;\r\n\t  text-align:center;\r\n\t  line-height: 100px;\r\n\t  box-shadow: 0 10px 10px rgba(0, 0, 0, .2)\r\n  }\r\n  .price-table[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\t  position: relative;\r\n\t  margin:20px 0 0;\r\n\t  padding: 0;\r\n\t  color:#fff;\r\n\t  font-size: 28px;\r\n\t  z-index: 2;\r\n  }\r\n  .price-table[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{\r\n\t  position: relative;\r\n\t  z-index: 2;\r\n  }\r\n  .price-table[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n\t  margin:0;\r\n\t  padding: 20px 0;\r\n\t  color:#fff;\r\n\t  font-size: 60px;\r\n  \r\n  }\r\n  .option[_ngcontent-%COMP%] {\r\n\t  position: relative;\r\n\t  z-index: 2;\r\n  }\r\n  .option[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n\t  margin:0;\r\n\t  padding: 0;\r\n\t  \r\n  }\r\n  .option[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\t  margin:0 0 10px;\r\n\t  padding: 0px 15px;\r\n\t  list-style: none;\r\n\t  color:#fff;\r\n\t  font-size: 16px;\r\n  }\r\n  .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\t  position: relative;\r\n\t  z-index: 2;\r\n\t  background: var(--success);\r\n\t  color: var(--heading);\r\n\t  width:150px;\r\n\t  height: 40px;\r\n\t  line-height: 40px;\r\n\t  display: block;\r\n\t  text-align:center;\r\n\t  margin:20px auto 0;\r\n\t  font-size: 16px;\r\n\t  cursor: pointer;\r\n\t  text-decoration: none;\r\n\t  border-radius: 40px;\r\n\t  box-shadow:0 5px 10px rgba(0, 0, 0, .2);\r\n  }\r\n  .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\t  text-decoration: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGx1cy9wbHVzLWNhcmQvcGx1cy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw0QkFBNEI7Q0FDNUIsMENBQTBDO0NBQzFDLGNBQWM7Q0FDZCx3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBQ2pCOzs7b0RBR21EOztFQUVsRDtFQUNBO0NBQ0Q7SUFDRyxjQUFjO0NBQ2pCO0VBQ0M7RUFFQTtHQUNDLGNBQWM7RUFDZjtFQUNBO0dBQ0Msa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixXQUFXO0dBQ1gsc0VBQXNFO0dBQ3RFLGtCQUFrQjtHQUNsQixjQUFjO0dBQ2Qsa0JBQWtCO0dBQ2xCLHFDQUFxQztHQUNyQyxlQUFlO0dBQ2YsZ0JBQWdCO0VBQ2pCO0VBQ0E7R0FDQyxxQkFBcUI7RUFDdEI7RUFFQTs7SUFFRSxxREFBcUQ7O0VBRXZEO0VBQ0E7O0lBRUUscURBQXFEOztFQUV2RDtFQUVBOztHQUVDLHFEQUFxRDtFQUN0RDtFQUVBO0dBQ0MsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixTQUFTO0dBQ1QsT0FBTztHQUNQLFdBQVc7R0FDWCxXQUFXO0dBQ1gsbUNBQW1DO0dBQ25DLFVBQVU7R0FDVixpQ0FBaUM7O0VBRWxDO0VBQ0E7R0FDQyxVQUFVO0dBQ1YsZUFBZTtHQUNmLFlBQVk7R0FDWixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEI7RUFDRDtFQUNBO0dBQ0Msa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixVQUFVO0dBQ1YsVUFBVTtHQUNWLGVBQWU7R0FDZixVQUFVO0VBQ1g7RUFDQTtHQUNDLGtCQUFrQjtHQUNsQixVQUFVO0VBQ1g7RUFDQTtHQUNDLFFBQVE7R0FDUixlQUFlO0dBQ2YsVUFBVTtHQUNWLGVBQWU7O0VBRWhCO0VBQ0E7R0FDQyxrQkFBa0I7R0FDbEIsVUFBVTtFQUNYO0VBQ0E7R0FDQyxRQUFRO0dBQ1IsVUFBVTs7RUFFWDtFQUNBO0dBQ0MsZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixnQkFBZ0I7R0FDaEIsVUFBVTtHQUNWLGVBQWU7RUFDaEI7RUFFQTtHQUNDLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsMEJBQTBCO0dBQzFCLHFCQUFxQjtHQUNyQixXQUFXO0dBQ1gsWUFBWTtHQUNaLGlCQUFpQjtHQUNqQixjQUFjO0dBQ2QsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixlQUFlO0dBQ2YsZUFBZTtHQUNmLHFCQUFxQjtHQUNyQixtQkFBbUI7R0FDbkIsdUNBQXVDO0VBQ3hDO0VBQ0E7R0FDQyxxQkFBcUI7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbHVzL3BsdXMtY2FyZC9wbHVzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZS1zZWMgLnB0YWJsZXMtaGVhZHtcclxuXHRmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG5cdGJveC1zaGFkb3c6MHB4IDZweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHRwYWRkaW5nOjMwcHggMDtcclxuXHRtYXJnaW46MHB4IDBweCAxMDBweCAwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czozcHg7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMjVkZWcsIHZhcigtLXNlY29uZGFyeSkgMTUlLHRyYW5zcGFyZW50IDAlKSxcclxuXHQgIGxpbmVhci1ncmFkaWVudCgtMjVkZWcsIHZhcigtLXByaW1hcnkpIDE1JSwgdHJhbnNwYXJlbnQgMCUpLFxyXG5cdCAgbGluZWFyLWdyYWRpZW50KC0xNTBkZWcsICM2NGI1ZjYgMTUlLCB0cmFuc3BhcmVudCAwJSksXHJcblx0ICBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjZjQ3IDE1JSwgdHJhbnNwYXJlbnQgMCUpO1xyXG4gIFxyXG4gIH1cclxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuXHQucHRhYmxlcy1oZWFkIGgxe1xyXG5cdCAgIGZvbnQtc2l6ZTozMHB4O1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgLnByaWNlLXNlYyAucHJpY2UtdGFibGV7XHJcblx0ICBtYXJnaW46NXB4IDBweDtcclxuICB9XHJcbiAgLnByaWNlLXNlYyAucHJpY2UtdGFibGUgLmNhcmR7XHJcblx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICBtYXgtd2lkdGg6MzAwcHg7XHJcblx0ICBoZWlnaHQ6YXV0bztcclxuXHQgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHZhcigtLXRlcnRpYXJ5KSwgdmFyKC0tc2Vjb25kYXJ5KSk7XHJcblx0ICBib3JkZXItcmFkaXVzOjE1cHg7XHJcblx0ICBtYXJnaW46IDAgYXV0bztcclxuXHQgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuXHQgIGJveC1zaGFkb3c6MCAxMHB4IDE1cHggcmdiYSgwLDAsMCwuNSk7XHJcblx0ICB0cmFuc2l0aW9uOiAuNXM7XHJcblx0ICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAucHJpY2Utc2VjIC5wcmljZS10YWJsZSAuY2FyZDpob3ZlcntcclxuXHQgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNlLXRhYmxlOm50aC1jaGlsZCgxKSAuY2FyZCxcclxuICAucHJpY2UtdGFibGU6bnRoLWNoaWxkKDEpIC5jYXJkIC50aXRsZSBpe1xyXG5cdFx0ICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZjQwM2QxLCAjNjRiNWY2KTtcclxuICBcclxuICB9XHJcbiAgLnByaWNlLXRhYmxlOm50aC1jaGlsZCgyKSAuY2FyZCxcclxuICAucHJpY2UtdGFibGU6bnRoLWNoaWxkKDIpIC5jYXJkIC50aXRsZSBpe1xyXG5cdFx0ICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmU2YzYxLCAjZjMyMWQ3KTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnByaWNlLXRhYmxlOm50aC1jaGlsZCgzKSAuY2FyZCxcclxuICAucHJpY2UtdGFibGU6bnRoLWNoaWxkKDMpIC5jYXJkIC50aXRsZSBpe1xyXG5cdCAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzI0ZmY3MiwgIzlhNGVmZik7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljZS10YWJsZSAuY2FyZDpiZWZvcmV7XHJcblx0ICBjb250ZW50OiBcIlwiO1xyXG5cdCAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgYm90dG9tOiAwO1xyXG5cdCAgbGVmdDogMDtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdCAgaGVpZ2h0OiA0MCU7XHJcblx0ICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxuXHQgIHotaW5kZXg6IDE7XHJcblx0ICB0cmFuc2Zvcm06c2tld1koLTVkZWcpIHNjYWxlKDEuNSk7XHJcbiAgXHJcbiAgfVxyXG4gIC5wcmljZS10YWJsZSAudGl0bGUgaXtcclxuXHQgIGNvbG9yOiNmZmY7XHJcblx0ICBmb250LXNpemU6IDYwcHg7XHJcblx0ICB3aWR0aDogMTAwcHg7XHJcblx0ICBoZWlnaHQ6MTAwcHg7XHJcblx0ICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0ICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHQgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuXHQgIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjIpXHJcbiAgfVxyXG4gIC5wcmljZS10YWJsZSAudGl0bGUgaDJ7XHJcblx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICBtYXJnaW46MjBweCAwIDA7XHJcblx0ICBwYWRkaW5nOiAwO1xyXG5cdCAgY29sb3I6I2ZmZjtcclxuXHQgIGZvbnQtc2l6ZTogMjhweDtcclxuXHQgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5wcmljZS10YWJsZSAucHJpY2V7XHJcblx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAucHJpY2UtdGFibGUgLnByaWNlIGg0e1xyXG5cdCAgbWFyZ2luOjA7XHJcblx0ICBwYWRkaW5nOiAyMHB4IDA7XHJcblx0ICBjb2xvcjojZmZmO1xyXG5cdCAgZm9udC1zaXplOiA2MHB4O1xyXG4gIFxyXG4gIH1cclxuICAub3B0aW9uIHtcclxuXHQgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5vcHRpb24gdWx7XHJcblx0ICBtYXJnaW46MDtcclxuXHQgIHBhZGRpbmc6IDA7XHJcblx0ICBcclxuICB9XHJcbiAgLm9wdGlvbiB1bCBsaXtcclxuXHQgIG1hcmdpbjowIDAgMTBweDtcclxuXHQgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG5cdCAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHQgIGNvbG9yOiNmZmY7XHJcblx0ICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIGJ1dHRvbiB7XHJcblx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICB6LWluZGV4OiAyO1xyXG5cdCAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XHJcblx0ICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcblx0ICB3aWR0aDoxNTBweDtcclxuXHQgIGhlaWdodDogNDBweDtcclxuXHQgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdCAgZGlzcGxheTogYmxvY2s7XHJcblx0ICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHQgIG1hcmdpbjoyMHB4IGF1dG8gMDtcclxuXHQgIGZvbnQtc2l6ZTogMTZweDtcclxuXHQgIGN1cnNvcjogcG9pbnRlcjtcclxuXHQgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHQgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0ICBib3gtc2hhZG93OjAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgfVxyXG4gIC5jYXJkIGE6aG92ZXJ7XHJcblx0ICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlusCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plus-card',
                templateUrl: './plus-card.component.html',
                styleUrls: ['./plus-card.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, { duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], price: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "iYCr":
/*!**********************************!*\
  !*** ./src/app/module-config.ts ***!
  \**********************************/
/*! exports provided: ModuleConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleConfig", function() { return ModuleConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_discord_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/discord/save-changes/save-changes.component */ "GnlN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");








// TODO: Add Angular decorator.
class ModuleConfig {
    constructor(guildService, route, saveChanges) {
        this.guildService = guildService;
        this.route = route;
        this.saveChanges = saveChanges;
        this.channels = [];
        this.textChannels = [];
        this.roles = [];
    }
    get guildId() { return this.route.snapshot.paramMap.get('id'); }
    get routeName() { return this.route.snapshot.url[2].path; }
    /**
     * Load all required data for the form, and hook events.
     */
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.route.snapshot.data;
            this.guild = this.guildService.guilds.find(g => g.id === this.guildId);
            this.roles = data.roles;
            this.channels = data.channels;
            this.textChannels = data.channels.filter(c => c.type === 'GUILD_TEXT');
            this.savedGuild = data.savedGuild;
            this.originalSavedGuild = JSON.parse(JSON.stringify(this.savedGuild));
            yield this.resetForm();
            this.valueChanges$ = this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    resetForm() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.savedGuild = JSON.parse(JSON.stringify(this.originalSavedGuild));
            this.form = yield this.buildForm(this.savedGuild);
            this.form.addControl('enabled', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_a = this.savedGuild[this.moduleName]) === null || _a === void 0 ? void 0 : _a.enabled));
        });
    }
    openSaveChanges() {
        const snackBarRef = this.saveChanges._openedSnackBarRef;
        if (!this.form.valid || snackBarRef || this.routeName == 'embed')
            return;
        this.saveChanges$ = this.saveChanges.openFromComponent(_utils_discord_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_2__["SaveChangesComponent"]).afterOpened()
            .subscribe(() => {
            const component = this.saveChanges._openedSnackBarRef.instance;
            component.onSave.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.submit(); }));
            component.onReset.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.reset(); }));
        });
    }
    /**
     * Clean up subscriptions - to prevent memory leak.
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.valueChanges$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.saveChanges$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    /**
     * Send the form data to the API.
     */
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.form.value);
            try {
                if (this.form.invalid)
                    return;
                yield this.guildService.saveGuild(this.guildId, this.moduleName, this.form.value);
                this.guildService.singleton.savedGuild[this.moduleName] = this.form.value;
            }
            catch (e) {
                console.error(e.message);
                alert('An error occurred when submitting the form - check console');
            }
        });
    }
    /**
     * Reset form values, and rebuild form.
     */
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.resetForm();
            this.savedGuild = JSON.parse(JSON.stringify(this.originalSavedGuild));
            this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    // input events
    add(event, array) {
        const { value, input } = event;
        if ((value || '').trim())
            array.push(value.trim());
        if (input)
            input.value = '';
        this.openSaveChanges();
    }
    remove(item, array) {
        const index = array.indexOf(item);
        if (index >= 0)
            array.splice(index, 1);
        this.openSaveChanges();
    }
    getChannel(id) {
        return this.channels.find(c => c.id === id);
    }
}
ModuleConfig.ɵfac = function ModuleConfig_Factory(t) { return new (t || ModuleConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
ModuleConfig.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: ModuleConfig });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModuleConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "ij2n":
/*!****************************************************!*\
  !*** ./src/app/utils/spinner/spinner.component.ts ***!
  \****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["spinner"]], decls: 1, vars: 0, consts: [[1, "spinner"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".spinner[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    background-color: var(--font);\r\n\r\n    margin: 100px auto;\r\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes sk-rotateplane {\r\n    0% { -webkit-transform: perspective(120px) }\r\n    50% { -webkit-transform: perspective(120px) rotateY(180deg) }\r\n    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\r\n}\r\n\r\n@keyframes sk-rotateplane {\r\n    0% { \r\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \r\n    } 50% { \r\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \r\n    } 100% { \r\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksS0FBSyxzQ0FBc0M7SUFDM0MsTUFBTSxzREFBc0Q7SUFDNUQsT0FBTyx1RUFBdUU7QUFDbEY7O0FBRUE7SUFDSTtRQUNJLHlEQUF5RDtRQUN6RDtJQUNKLEVBQUU7UUFDRSw4REFBOEQ7UUFDOUQ7SUFDSixFQUFFO1FBQ0UsaUVBQWlFO1FBQ2pFLHlFQUF5RTtJQUM3RTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQpO1xyXG5cclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIH1cclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpIH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSAgcm90YXRlWCgxODBkZWcpIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XHJcbiAgICAwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBcclxuICAgIH0gNTAlIHsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKSBcclxuICAgIH0gMTAwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j5wd":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkTableModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");








function NavbarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_18_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Bot Stats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavbarComponent_div_18_a_10_Template, 3, 0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.user == null ? null : ctx_r1.user.id) === ctx_r1.environment.botOwnerId);
} }
class NavbarComponent {
    constructor(userService) {
        this.userService = userService;
        this.bg = "";
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    get user() { return this.userService.user; }
    /*Hello() {
      alert('Hewo')
    }
  
        <div id="test">
        <a class="nav-item nav-link"
        matTooltip="Code" (click)="Hello()">
        <i class="fas fa-qrcode"></i>
        </a>
      </div>
    */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], inputs: { bg: "bg" }, decls: 19, vars: 5, consts: [[1, "navbar", "navbar-expand", "navbar-dark"], ["routerLink", "/", 1, "navbar-brand"], ["src", "/assets/img/server-icon.png", "alt", ""], [1, "nav", "navbar-nav"], [1, "nav-item", "nav-item-hover", "nav-link", 3, "href"], ["routerLink", "/plus", "routerLinkActive", "active", 1, "nav-item", "nav-item-hover", "nav-link"], ["routerLink", "/commands", "routerLinkActive", "active", 1, "nav-item", "nav-item-hover", "nav-link"], [1, "nav", "navbar-nav", "ml-auto"], [4, "ngIf"], ["routerLink", "/login", 1, "nav-item", "nav-link"], [1, "login"], ["aria-hidden", "true", 1, "fa", "fa-user", 2, "color", "white"], [1, "dropdown", "user"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-item", "nav-link", 2, "color", "white", "font-size", "18px", "font-weight", "bold"], [2, "width", "42px", 3, "src"], [1, "fas", "fa-chevron-down", 2, "font-size", "16px"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", 2, "border-radius", "20px"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "dropdown-item"], [1, "fas", "fa-cog"], ["class", "dropdown-item", "routerLink", "/stats", "routerLinkActive", "active", "matTooltip", "Only bot owners can see this.", 4, "ngIf"], [1, "m-1"], ["routerLink", "/logout", 1, "dropdown-item"], [1, "fas", "fa-sign-out-alt"], ["routerLink", "/stats", "routerLinkActive", "active", "matTooltip", "Only bot owners can see this.", 1, "dropdown-item"], ["aria-hidden", "true", 1, "fas", "fa-chart-line"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Join on Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Donate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Commands");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarComponent_div_17_Template, 6, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavbarComponent_div_18_Template, 15, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", !ctx.bg ? "rgba(0, 0, 0, 0.34)" : "rgba(254, 134, 135, 0.34)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.environment.discordInvite, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]], styles: ["nav.navbar[_ngcontent-%COMP%] {\r\n  margin-top: 1vh;\r\n  margin-left: 2vh;\r\n  margin-right: 2vh;\r\n  border-radius: 20px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 69px;\r\n  max-width: 50px;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  background: var(--primary);\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {  \r\n  color: white;\r\n}\r\n\r\n.nav-item-hover[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\r\n\r\n.nav-item-hover[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-5px) scale(1.02) translateZ(0px);\r\n  background-color: var(--background-secondary);\r\n  border-radius: 20px;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  border-radius: 20px;\r\n  background-color: var(--background-primary);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding: 0; \r\n  margin: 0;\r\n\r\n  color: #FFFFFF;\r\n}\r\n\r\n.login[_ngcontent-%COMP%] {\r\n  width: 115px;\r\n  height: 46px;\r\n  background: var(--background-tertiary);\r\n  display: flex;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  border-radius: 16px;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]:hover {\r\n  background: var(--primary);\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n  padding: 0px 5px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  background: var(--background-tertiary);\r\n  display: flex;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  border-radius: 16px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .nav-item-hover[_ngcontent-%COMP%] {\r\n    margin-right: 0px;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    text-align: left;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsNkNBQTZDO0VBQzdDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUzs7RUFFVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2Lm5hdmJhciB7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAydmg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAydmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA2OXB4O1xyXG4gIG1heC13aWR0aDogNTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGEgeyAgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0taG92ZXIge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0taG92ZXI6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDIpIHRyYW5zbGF0ZVooMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG59XHJcblxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDsgXHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICB3aWR0aDogMTE1cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLmxvZ2luOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2LWl0ZW0taG92ZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { bg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "nPNH":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard-sidebar/dashboard-sidebar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DashboardSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidebarComponent", function() { return DashboardSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "o6KS");




const _c0 = ["*"];
class DashboardSidebarComponent {
    constructor(userService) {
        this.userService = userService;
        document.title = 'Neko - Dashboard';
    }
    get user() { var _a; return (_a = this.userService.user) !== null && _a !== void 0 ? _a : {}; }
    get SavedUser() { var _a; return (_a = this.userService.savedUser) !== null && _a !== void 0 ? _a : {}; }
    ngOnInit() { }
}
DashboardSidebarComponent.ɵfac = function DashboardSidebarComponent_Factory(t) { return new (t || DashboardSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
DashboardSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardSidebarComponent, selectors: [["dashboard-sidebar"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["id", "content"]], template: function DashboardSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLXNpZGViYXIvZGFzaGJvYXJkLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-sidebar',
                templateUrl: './dashboard-sidebar.component.html',
                styleUrls: ['./dashboard-sidebar.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "o1uT":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/guild/auto-mod-module/auto-mod-module.component.ts ***!
  \******************************************************************************/
/*! exports provided: AutoModModuleComponent, MessageFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoModModuleComponent", function() { return AutoModModuleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageFilter", function() { return MessageFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _module_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module-config */ "iYCr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "HC5s");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../pipes/snake-to-sentence-case.pipe */ "XkKb");





















function AutoModModuleComponent_div_1_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "snakeToSentenceCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", filter_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, filter_r8));
} }
function AutoModModuleComponent_div_1_mat_chip_31_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function AutoModModuleComponent_div_1_mat_chip_31_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const word_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.remove(word_r9, ctx_r10.savedGuild.autoMod.banWords); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", word_r9, " ");
} }
function AutoModModuleComponent_div_1_mat_chip_39_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function AutoModModuleComponent_div_1_mat_chip_39_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const link_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.remove(link_r12, ctx_r13.savedGuild.autoMod.banLinks); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r12, " ");
} }
function AutoModModuleComponent_div_1_mat_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#" + (role_r15.color == null ? null : role_r15.color.toString(16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", role_r15.name, "");
} }
function AutoModModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Auto-mod");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-slide-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Filter message content, based on specific conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Enabled Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AutoModModuleComponent_div_1_mat_option_19_Template, 3, 4, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Filter Threshold");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-slider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Ban Words");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-chip-list", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AutoModModuleComponent_div_1_mat_chip_31_Template, 4, 1, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function AutoModModuleComponent_div_1_Template_input_matChipInputTokenEnd_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.add($event, ctx_r16.savedGuild.autoMod.banWords); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Ban Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-chip-list", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AutoModModuleComponent_div_1_mat_chip_39_Template, 4, 1, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function AutoModModuleComponent_div_1_Template_input_matChipInputTokenEnd_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.add($event, ctx_r18.savedGuild.autoMod.banLinks); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Ignored Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AutoModModuleComponent_div_1_mat_option_46_Template, 2, 4, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Auto-warn Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Auto-delete Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.filters);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.savedGuild.autoMod.banWords);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.savedGuild.autoMod.banLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.roles);
} }
class AutoModModuleComponent extends _module_config__WEBPACK_IMPORTED_MODULE_2__["ModuleConfig"] {
    constructor(guildService, route, saveChanges) {
        super(guildService, route, saveChanges);
        this.maxRules = Object(src_app_utils__WEBPACK_IMPORTED_MODULE_4__["toIterable"])(4);
        this.filters = [MessageFilter.Links, MessageFilter.Words, MessageFilter.MassMention, MessageFilter.MassCaps];
        this.moduleName = 'autoMod';
    }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
        });
    }
    buildForm({ autoMod }) {
        const form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            banWords: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            banLinks: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            filters: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            autoDeleteMessages: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            autoWarnUsers: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            ignoredRoles: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            filterThreshold: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](5, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(20)]),
            punishments: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](new Array(this.maxRules.length).fill(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                warnings: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](5, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100)]),
                minutes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](5, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(60)])
            }), 0, this.maxRules.length))
        });
        form.patchValue(autoMod);
        return form;
    }
}
AutoModModuleComponent.ɵfac = function AutoModModuleComponent_Factory(t) { return new (t || AutoModModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
AutoModModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AutoModModuleComponent, selectors: [["app-auto-mod-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "waitFor"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup"], ["f", "ngForm"], [1, "d-flex", "justify-content-between"], ["routerLink", "/docs/auto-mod", 1, "display-3"], ["formControlName", "enabled", 1, "float-right", "mt-5"], [1, "desc"], [1, "row"], [1, "col-lg-4", "col-sm-6"], ["appearance", "outline"], ["multiple", "", "formControlName", "filters"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-4"], [1, "pr-1"], ["formControlName", "filterThreshold", "step", "1", "tickInterval", "1", "thumbLabel", "", "min", "1", "max", "20"], ["formControlName", "banWords", "aria-label", "Ban word selection"], ["banWords", ""], ["selectable", "", "removable", "", 3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New word...", "matChipInputAddOnBlur", "", 3, "matChipInputFor", "matChipInputTokenEnd"], ["aria-label", "Ban link selection"], ["banLinks", ""], ["placeholder", "New link...", "matChipInputAddOnBlur", "", 3, "matChipInputFor", "matChipInputTokenEnd"], ["multiple", "", "formControlName", "ignoredRoles"], [3, "value", "color", 4, "ngFor", "ngForOf"], ["formControlName", "autoWarnUsers"], ["formControlName", "autoDeleteMessages"], [3, "value"], ["selectable", "", "removable", "", 3, "removed"], ["matChipRemove", ""]], template: function AutoModModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AutoModModuleComponent_div_1_Template, 56, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("waitFor", ctx.savedGuild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["GuildSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSlider"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipRemove"]], pipes: [_pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_18__["SnakeToSentenceCasePipe"]], styles: [".query[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: 800;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2F1dG8tbW9kLW1vZHVsZS9hdXRvLW1vZC1tb2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ3VpbGQvYXV0by1tb2QtbW9kdWxlL2F1dG8tbW9kLW1vZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoModModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-auto-mod-module',
                templateUrl: './auto-mod-module.component.html',
                styleUrls: ['./auto-mod-module.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();
var MessageFilter;
(function (MessageFilter) {
    MessageFilter["Links"] = "LINKS";
    MessageFilter["MassCaps"] = "MASS_CAPS";
    MessageFilter["MassMention"] = "MASS_MENTION";
    MessageFilter["Words"] = "WORDS";
    MessageFilter["Toxicity"] = "TOXICITY";
})(MessageFilter || (MessageFilter = {}));


/***/ }),

/***/ "o6KS":
/*!********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../navbar/navbar.component */ "kWWo");







const _c0 = ["drawer"];
const _c1 = [[["", 8, "side-nav"]], [["", "id", "content"]]];
const _c2 = [".side-nav", "#content"];
class SidebarComponent {
    constructor(guildService, userService) {
        this.guildService = guildService;
        this.userService = userService;
    }
    get guilds() { return this.guildService.guilds || []; }
    get user() { return this.userService.user || {}; }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.guildService.guilds.length <= 0)
                yield this.guildService.updateGuilds();
        });
    }
    toggle() {
        const icon = document.querySelector('#nav-icon1');
        icon.classList.toggle('open');
        this.drawer.toggle();
    }
    identify(index, guild) {
        return guild.id;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, ngContentSelectors: _c2, decls: 15, vars: 0, consts: [["fullscreen", "", 1, "phoneSidebar"], ["mode", "side", "opened", "", 1, "phoneSidebar"], ["drawer", ""], [1, "options"], [1, "float-right", "d-sm-none", "d-block", "close", 3, "click"], [1, "toggle"], ["id", "nav-icon1", 1, "open", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_span_click_5_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_10_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](14, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]], styles: [".guild-icon[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n\r\n    margin: 5px;\r\n    width: 52px;\r\n    height: 52px;\r\n\r\n    background-color: var(--background-primary);\r\n    transition: all .35s;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .guild-icon[_ngcontent-%COMP%]:hover, .guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n    border-radius: 25%;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n\r\n    font-size: 18px;\r\n\r\n    width: 52px;\r\n    height: 40px;\r\n    padding-top: 14px;\r\n\r\n    transition: all .35s;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 52px;\r\n    border-radius: 50%;\r\n\r\n    transition: all .35s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border: none;\r\n    color: var(--font);\r\n\r\n    font-size: 32px;\r\n}\r\n\r\n.guilds[_ngcontent-%COMP%] {\r\n    background-color: var(--background-tertiary);\r\n    float: left;\r\n    height: inherit;\r\n    padding-top: 12px;\r\n}\r\n\r\n.options[_ngcontent-%COMP%] {\r\n    background-color: var(--background-secondary) !important;\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r\n\r\n    width: 275px;\r\n    height: inherit;\r\n\r\n    \r\n}\r\n\r\n.toggle[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n\r\n    margin: 50px 0 0 15px;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 992px) {\r\n    .toggle[_ngcontent-%COMP%] {\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .options[_ngcontent-%COMP%] {\r\n        min-width: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n    .phoneSidebar[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-color: var(--background-tertiary);\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   .add-guild[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n\r\n    color: var(--secondary);\r\n}\r\n\r\n.invite[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--tertiary);\r\n}\r\n\r\n.guild-seperator[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n    width: 32px;\r\n    border-radius: 1px;\r\n\r\n    border-color: var(--background-secondary);\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 15px;\r\n\r\n    font-size: 48px;\r\n\r\n    color: var(--primary);\r\n    text-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCOztJQUVsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7O0lBRVosMkNBQTJDO0lBQzNDLG9CQUFvQjs7SUFFcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjs7SUFFbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7O0lBRWxCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsMkVBQTJFOztJQUUzRSxZQUFZO0lBQ1osZUFBZTs7SUFFZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7O0lBRW5CLHFCQUFxQjtBQUN6Qjs7QUFDQSwyQ0FBMkM7O0FBQzNDO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7O0lBRWxCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVzs7SUFFWCxlQUFlOztJQUVmLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ3VpbGQtaWNvbiBpbWc6aG92ZXIsIC5ndWlsZC1pY29uOmhvdmVyLCAuZ3VpbGQtaWNvbiBzcGFuOmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG5cclxuLmd1aWxkLWljb24gc3BhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbn1cclxuXHJcbi5ndWlsZC1pY29uIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDUycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250KTtcclxuXHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5ndWlsZHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHJcbiAgICB3aWR0aDogMjc1cHg7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICAgLyptYXJnaW4tbGVmdDogNzVweDsqL1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgbWFyZ2luOiA1MHB4IDAgMCAxNXB4O1xyXG59XHJcbi8qIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnRvZ2dsZSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5vcHRpb25zIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBob25lU2lkZWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufVxyXG5cclxuLmd1aWxkLWljb24gLmFkZC1ndWlsZCB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5pbnZpdGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xyXG59XHJcblxyXG4uZ3VpbGQtc2VwZXJhdG9yIHtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcblxyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMTVweDtcclxuXHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['drawer']
        }] }); })();


/***/ }),

/***/ "qBLl":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/guild/compose-embed-module/compose-embed.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmbedComposeModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedComposeModuleComponent", function() { return EmbedComposeModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _module_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module-config */ "iYCr");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_discord_message_embed_preview_message_embed_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/discord/message-embed-preview/message-embed-preview.component */ "7vaz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function EmbedComposeModuleComponent_div_1_mat_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", channel_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", channel_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[", ((tmp_2_0 = ctx_r2.getChannel(channel_r3.parentId)) == null ? null : tmp_2_0.name) || "N/A", "]");
} }
function EmbedComposeModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Embed Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "message-embed-preview", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Message Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.hidden.messageContent = !ctx_r4.hidden.messageContent; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Message Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.hidden.title = !ctx_r6.hidden.title; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Message URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.hidden.url = !ctx_r7.hidden.url; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Message Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.hidden.image = !ctx_r8.hidden.image; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Message Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.hidden.color = !ctx_r9.hidden.color; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function EmbedComposeModuleComponent_div_1_Template_input_colorPickerChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.color = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Message Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.hidden.description = !ctx_r11.hidden.description; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Message Footer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.hidden.footer.text = !ctx_r12.hidden.footer.text; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Message Footer Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.hidden.footer.image = !ctx_r13.hidden.footer.image; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Message Author Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.hidden.author.image = !ctx_r14.hidden.author.image; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Message Author URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.hidden.author.url = !ctx_r15.hidden.author.url; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Message Author ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_i_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.hidden.author.text = !ctx_r16.hidden.author.text; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmbedComposeModuleComponent_div_1_Template_div_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.send(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, EmbedComposeModuleComponent_div_1_mat_option_79_Template, 4, 3, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.disabled)("embedAuthor", ctx_r0.author)("embedImage", ctx_r0.image)("footerText", ctx_r0.footerText)("footerImage", ctx_r0.footerImage)("description", ctx_r0.description)("content", ctx_r0.message)("guild", ctx_r0.guild)("title", ctx_r0.title)("color", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.messageContent ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.messageContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.messageContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.title ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.url ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.image ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.color ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colorPicker", ctx_r0.color)("hidden", ctx_r0.hidden.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.description ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.footer.text ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.footer.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.footer.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.footer.image ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.footer.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.footer.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.author.image ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.author.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.author.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.author.url ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.author.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.author.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.hidden.author.text ? "fas fa-plus" : "fas fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hidden.author.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.hidden.author.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.textChannels);
} }
class EmbedComposeModuleComponent extends _module_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"] {
    constructor(guildService, route, saveChanges) {
        super(guildService, route, saveChanges);
        this.levelRoleIndices = [0, 1, 2, 3, 4, 5, 6, 7];
        this.moduleName = 'Embed Compose';
        this.color = '#4f545c';
        this.disabled = true;
        this.canSend = false;
        this.hidden = {
            messageContent: true,
            title: true,
            url: true,
            image: true,
            color: true,
            description: true,
            footer: {
                text: true,
                image: true
            },
            author: {
                image: true,
                url: true,
                text: true
            }
        };
    }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            console.log(this.routeName);
            this.form.valueChanges.subscribe(() => {
                if (this.title || this.description)
                    this.disabled = false;
                else
                    this.disabled = true;
                let canSend = this.title || this.message || this.description;
                if (canSend && this.channel)
                    this.canSend = true;
                else
                    this.canSend = false;
            });
        });
    }
    buildForm() {
        const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
            ]),
            channel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(126)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]),
            footer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(26)]),
            footerImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]),
            authorImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]),
            authorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]),
            authorUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]),
            embedImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]),
        });
        return formGroup;
    }
    send() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.canSend)
                return;
            console.log('send embed on discord.', this.dataToBeSent());
            const channelId = this.form.get('channel').value;
            yield this.guildService.sendEmbed(this.guildId, channelId, this.dataToBeSent()).then((message) => {
                alert(message.message);
                console.log('embed sent.');
            }).catch(err => {
                console.log('error while sending embed.', err);
            });
        });
    }
    //get message value from form group
    get message() { return this.form.get('message').value; }
    get title() { return this.form.get('title').value; }
    get description() { return this.form.get('description').value; }
    get footerText() { return this.form.get('footer').value; }
    get footerImage() { return this.form.get('footerImage').value; }
    get authorImage() { return this.form.get('authorImage').value; }
    get authorName() { return this.form.get('authorName').value; }
    get authorUrl() { return this.form.get('authorUrl').value; }
    get image() { return this.form.get('embedImage').value; }
    get url() { return this.form.get('url').value; }
    get channel() { return this.form.get('channel').value; }
    dataToBeSent() {
        return {
            message: this.message,
            title: this.title,
            description: this.description,
            footer: {
                text: this.footerText,
                icon: this.footerImage,
            },
            author: {
                name: this.authorName,
                url: this.authorUrl,
                icon: this.authorImage,
            },
            image: this.image,
            color: this.color,
            url: this.url,
        };
    }
    get author() {
        return {
            name: this.authorName,
            url: this.authorUrl,
            icon: this.authorImage,
        };
    }
}
EmbedComposeModuleComponent.ɵfac = function EmbedComposeModuleComponent_Factory(t) { return new (t || EmbedComposeModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
EmbedComposeModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmbedComposeModuleComponent, selectors: [["embed-compose-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "waitFor"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup"], ["f", "ngForm"], [1, "d-flex", "justify-content-between"], [1, "display-3"], [2, "align-self", "center", "display", "flex", "justify-content", "center", "flex-direction", "column", "align-items", "center"], [2, "width", "80%", 3, "hidden", "embedAuthor", "embedImage", "footerText", "footerImage", "description", "content", "guild", "title", "color"], [1, "embedSelection"], [1, "form-group"], ["for", "message"], [3, "ngClass", "click"], [3, "hidden"], ["id", "message", "rows", "3", "formControlName", "message", "placeholder", "Message Content", 1, "form-control", 3, "hidden"], ["appearance", "outline", 3, "hidden"], ["matInput", "", "formControlName", "title", "type", "text"], ["type", "text", "id", "title", "formControlName", "url", "placeholder", "Message URL", 1, "form-control", 3, "hidden"], ["type", "text", "id", "embedImage", "formControlName", "embedImage", "placeholder", "Message Image", 1, "form-control", 3, "hidden"], ["cpPosition", "bottom", 1, "form-control", 2, "max-width", "200px", 3, "colorPicker", "hidden", "colorPickerChange"], ["id", "description", "rows", "3", "formControlName", "description", "placeholder", "Message Description", 1, "form-control", 3, "hidden"], ["id", "footer", "rows", "1", "formControlName", "footer", "placeholder", "Message Footer", 1, "form-control", 3, "hidden"], ["type", "text", "id", "footerImage", "formControlName", "footerImage", "placeholder", "Message Footer Image", 1, "form-control", 3, "hidden"], ["type", "text", "id", "AuthorImage", "formControlName", "authorImage", "placeholder", "Message Author Image", 1, "form-control", 3, "hidden"], ["type", "text", "id", "AuthorURL", "formControlName", "authorUrl", "placeholder", "Message Author URL", 1, "form-control", 3, "hidden"], ["type", "text", "id", "AuthorName", "formControlName", "authorName", "placeholder", "Message Author Name", 1, "form-control", 3, "hidden"], [1, "embedSending"], [1, "sendEmbed", 3, "click"], [1, "sendEmbedText"], ["appearance", "outline", 1, "channelSelection"], ["formControlName", "channel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "float-right", "text-muted"]], template: function EmbedComposeModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmbedComposeModuleComponent_div_1_Template, 80, 48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("waitFor", ctx.savedGuild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["GuildSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _utils_discord_message_embed_preview_message_embed_preview_component__WEBPACK_IMPORTED_MODULE_9__["MessageEmbedPreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n}\r\n\r\n.add[_ngcontent-%COMP%], .remove[_ngcontent-%COMP%] {\r\n    height: 36px;\r\n    width: 36px;\r\n    padding: 0 !important;\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\n    background-color: var(--success);\r\n}\r\n\r\n.remove[_ngcontent-%COMP%] {\r\n    background-color: var(--danger);\r\n}\r\n\r\n.role[_ngcontent-%COMP%] {\r\n    background-color: var(--background-tertiary);\r\n    padding-top: 25px;\r\n    margin: 5px;\r\n}\r\n\r\n.sendEmbed[_ngcontent-%COMP%] {\r\n    width: 160px;\r\n    height: 56px;\r\n\r\n    background: linear-gradient(180deg, var(--background-secondary) 0%, #EC3E3F 71.35%, #7E2828 100%);\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 20px;\r\n}\r\n\r\n.sendEmbedText[_ngcontent-%COMP%] {\r\n    font-size: 18px; \r\n    font-weight: 700; \r\n    text-align: center;\r\n\r\n    line-height: 54px;\r\n}\r\n\r\n.embedSending[_ngcontent-%COMP%] { \r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.channelSelection[_ngcontent-%COMP%] {\r\n    max-height: 68px;\r\n    top: -5px;\r\n}\r\n\r\n.sendEmbed[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.embedSelection[_ngcontent-%COMP%] {\r\n    margin: 25px 0px 10px 0px;\r\n    padding: 10px 20px 10px 20px;\r\n\r\n    width: 90%;\r\n    min-height: 46vh;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n\r\n    background: rgba(0, 0, 0, 0.36);\r\n    border: 4px solid #000000;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 40px;\r\n\r\n    position: -webkit-sticky;\r\n\r\n    position: sticky;\r\n}\r\n\r\n.embedSelection[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .channelSelection[_ngcontent-%COMP%] {\r\n        max-width: 128px; \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2d1aWxkL2NvbXBvc2UtZW1iZWQtbW9kdWxlL2NvbXBvc2UtZW1iZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7O0lBRVosaUdBQWlHO0lBQ2pHLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7SUFFbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0Qjs7SUFFNUIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjs7SUFFbkIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNEVBQTRFO0lBQzVFLG1CQUFtQjs7SUFFbkIsd0JBQWdCOztJQUFoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ndWlsZC9jb21wb3NlLWVtYmVkLW1vZHVsZS9jb21wb3NlLWVtYmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hZGQsIC5yZW1vdmUge1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5yZW1vdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxufVxyXG5cclxuLnJvbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uc2VuZEVtYmVkIHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSkgMCUsICNFQzNFM0YgNzEuMzUlLCAjN0UyODI4IDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5zZW5kRW1iZWRUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgICBmb250LXdlaWdodDogNzAwOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxufVxyXG5cclxuLmVtYmVkU2VuZGluZyB7IFxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbm5lbFNlbGVjdGlvbiB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2OHB4O1xyXG4gICAgdG9wOiAtNXB4O1xyXG59XHJcblxyXG4uc2VuZEVtYmVkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5lbWJlZFNlbGVjdGlvbiB7XHJcbiAgICBtYXJnaW46IDI1cHggMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuXHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWluLWhlaWdodDogNDZ2aDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblxyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG5cclxuLmVtYmVkU2VsZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jaGFubmVsU2VsZWN0aW9uIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyOHB4OyBcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmbedComposeModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'embed-compose-module',
                templateUrl: './compose-embed.component.html',
                styleUrls: ['./compose-embed.component.css'],
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UserService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + '/user';
    }
    get user() { return this._user; }
    get crash() {
        return this._crash;
    }
    ;
    get savedUser() {
        return this._savedUser;
    }
    get xpCardPreviewURL() {
        return `${this.endpoint}/xp-card-preview?key=${this.key}`;
    }
    get key() {
        return localStorage.getItem('key');
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.user || !this.savedUser || !this.crash)
                yield this.updateUser();
        });
    }
    updateUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._user = (this.key) ?
                yield this.http.get(`${this.endpoint}?key=${this.key}`).toPromise() : null;
            this._savedUser = (this.key) ?
                yield this.http.get(`${this.endpoint}/saved?key=${this.key}`).toPromise() : null;
        });
    }
    updateXPCard(xpCard) {
        return this.http.put(`${this.endpoint}/xp-card?key=${this.key}`, xpCard).toPromise();
    }
    getReminders() {
        return this.http.get(`${this.endpoint}/reminders?key=${this.key}`).toPromise();
    }
    getXPCardPreviewURL(xpCard) {
        const { primary, secondary, tertiary, backgroundURL } = xpCard;
        return `${this.endpoint}/xp-card-preview?key=${this.key}` +
            `&primary=${primary}` +
            `&secondary=${secondary}` +
            `&tertiary=${tertiary}` +
            `&backgroundURL=${backgroundURL}`;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rTQu":
/*!**********************************************************!*\
  !*** ./src/app/guards/can-deactivate-dashboard.guard.ts ***!
  \**********************************************************/
/*! exports provided: CanDeactivateDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateDashboard", function() { return CanDeactivateDashboard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CanDeactivateDashboard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        var _a;
        return !Boolean((_a = component.saveChanges) === null || _a === void 0 ? void 0 : _a._openedSnackBarRef);
    }
}
CanDeactivateDashboard.ɵfac = function CanDeactivateDashboard_Factory(t) { return new (t || CanDeactivateDashboard)(); };
CanDeactivateDashboard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanDeactivateDashboard, factory: CanDeactivateDashboard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanDeactivateDashboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "tpIi":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/dashboard/settings-module/settings-module.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SettingsModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModuleComponent", function() { return SettingsModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _module_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module-config */ "iYCr");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _guild_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../guild/guild-sidebar/guild-sidebar.component */ "QGxL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");













function SettingsModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Private Leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
} }
class SettingsModuleComponent extends _module_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"] {
    constructor(guildService, route, http, saveChanges) {
        super(guildService, route, saveChanges);
        this.http = http;
        this.moduleName = 'settings';
    }
    ;
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
        });
    }
    ;
    buildForm({ settings }) {
        var _a;
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            privateLeaderboard: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_a = settings.privateLeaderboard) !== null && _a !== void 0 ? _a : false),
        });
    }
    ;
}
SettingsModuleComponent.ɵfac = function SettingsModuleComponent_Factory(t) { return new (t || SettingsModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
SettingsModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsModuleComponent, selectors: [["app-settings-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "waitFor"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "display-3"], [3, "formGroup"], ["f", "ngForm"], [1, "col-lg-4", "col-sm-6"], [1, "mr-2", 2, "margin-right", "2px"], ["formControlName", "privateLeaderboard", 2, "margin-top", "2px"]], template: function SettingsModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SettingsModuleComponent_div_1_Template, 10, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("waitFor", ctx.savedGuild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_guild_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["GuildSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvc2V0dGluZ3MtbW9kdWxlL3NldHRpbmdzLW1vZHVsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-settings-module',
                templateUrl: './settings-module.component.html',
                styleUrls: ['./settings-module.component.css']
            }]
    }], function () { return [{ type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();
;


/***/ }),

/***/ "u4Uf":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/directives/premium.directive.ts ***!
  \***********************************************************/
/*! exports provided: PremiumDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumDirective", function() { return PremiumDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PremiumDirective {
    constructor(elementRef) {
        if (!elementRef)
            return;
        this.el = elementRef.nativeElement;
        this.el.onclick = () => alert('plz pay for plus\n\n\n\nokthanksbye');
    }
}
PremiumDirective.ɵfac = function PremiumDirective_Factory(t) { return new (t || PremiumDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PremiumDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PremiumDirective, selectors: [["", "premium", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PremiumDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[premium]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotFoundComponent {
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 22, vars: 0, consts: [[1, "stars"], [1, "central-body"], ["src", "assets\\img\\404.svg", "width", "300px", 1, "image-404"], ["routerLink", "/", 1, "btn-go-home"], [1, "objects"], ["src", "assets\\img\\rocket.svg", "width", "40px", 1, "object_rocket"], [1, "earth-moon"], ["src", "assets\\img\\earth.svg", "width", "100px", 1, "object_earth"], ["src", "assets\\img\\moon.svg", "width", "80px", 1, "object_moon"], ["src", "assets\\img\\mars.svg", 1, "object_mars"], [1, "box_astronaut"], ["src", "assets\\img\\midnight-avatar-transparent.png", "width", "140px", 1, "object_astronaut"], [1, "glowing_stars"], [1, "star"], [1, "float-right", "text-muted"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RETURN HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "stardewfemboy.xyz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@-webkit-keyframes rocket-movement {100% {-webkit-transform: translate(1200px,-600px); } }\r\n\r\n@keyframes rocket-movement { 100% {transform: translate(1200px,-600px);} }\r\n\r\n@-webkit-keyframes spin-earth { 100% { -webkit-transform: rotate(-360deg); transition: transform 20s;  } }\r\n\r\n@keyframes spin-earth{ 100% { transform:rotate(-360deg); transition: transform 20s; } }\r\n\r\n@-webkit-keyframes move-astronaut {\r\n    100% { -webkit-transform: translate(-160px, -160px);}\r\n}\r\n\r\n@keyframes move-astronaut{\r\n    100% { transform:translate(-160px, -160px); }\r\n}\r\n\r\n@-webkit-keyframes rotate-astronaut {\r\n    100% { -webkit-transform: rotate(-720deg);}\r\n}\r\n\r\n@keyframes rotate-astronaut{\r\n    100% { transform:rotate(-720deg); }\r\n}\r\n\r\n@-webkit-keyframes glow-star {\r\n    40% { -webkit-opacity: 0.3;}\r\n    90%,100% { -webkit-opacity: 1; -webkit-transform: scale(1.2);}\r\n}\r\n\r\n@keyframes glow-star{\r\n    40% { -webkit-opacity: 0.3; opacity: 0.3;  }\r\n    90%,100% { -webkit-opacity: 1; opacity: 1; transform: scale(1.2); border-radius: 999999px;}\r\n}\r\n\r\n.spin-earth-on-hover[_ngcontent-%COMP%]{\r\n    transition: ease 200s !important;\r\n    transform: rotate(-3600deg) !important;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-weight: 300;\r\n    -webkit-user-select: none; \r\n    -moz-user-select: none;  \r\n    user-select: none; \r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background: url(http://salehriaz.com/404Page/img/bg_purple.png);\r\n    background-repeat: repeat-x;\r\n    background-size: cover;\r\n    background-position: left top;\r\n    height: 100%;\r\n    overflow: hidden;    \r\n}\r\n\r\n.btn-go-home[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 200;\r\n    margin: 15px auto;\r\n    width: 100px;\r\n    padding: 10px 15px;\r\n    border: 1px solid var(--primary);\r\n    border-radius: 5px;\r\n    font-weight: 400;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    letter-spacing : 2px;\r\n    font-size: 11px;\r\n    transition: all 0.3s ease-in;\r\n}\r\n\r\n.btn-go-home[_ngcontent-%COMP%]:hover{\r\n    background-color: var(--primary);\r\n    color: #fff;\r\n    transform: scale(1.05);\r\n    box-shadow: 0px 20px 20px rgba(0,0,0,0.1);\r\n}\r\n\r\n.central-body[_ngcontent-%COMP%]{\r\n\r\n    padding: 17% 5% 10% 5%;\r\n    text-align: center;\r\n}\r\n\r\n.objects[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    z-index: 90;\r\n    pointer-events: none;\r\n}\r\n\r\n.object_rocket[_ngcontent-%COMP%]{\r\n    z-index: 95;\r\n    position: absolute;\r\n    transform: translateX(-50px);\r\n    top: 75%;\r\n    pointer-events: none;\r\n    -webkit-animation: rocket-movement 200s linear infinite both running;\r\n            animation: rocket-movement 200s linear infinite both running;\r\n}\r\n\r\n.object_earth[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 15%;\r\n    z-index: 90;\r\n\r\n}\r\n\r\n.object_moon[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 12%;\r\n    left: 25%;\r\n\r\n}\r\n\r\n.object_mars[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 150px;\r\n    right: 20%;\r\n    top: 35%;\r\n    transform: rotate(-11deg);\r\n}\r\n\r\n.object_astronaut[_ngcontent-%COMP%]{\r\n    -webkit-animation: rotate-astronaut 200s infinite linear both alternate;\r\n            animation: rotate-astronaut 200s infinite linear both alternate;\r\n}\r\n\r\n.box_astronaut[_ngcontent-%COMP%]{\r\n    z-index: 110 !important;\r\n    position: absolute;\r\n    top: 60%;\r\n    right: 20%;\r\n    will-change: transform;\r\n    -webkit-animation: move-astronaut 50s infinite linear both alternate;\r\n            animation: move-astronaut 50s infinite linear both alternate;\r\n}\r\n\r\n.image-404[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    z-index: 100;\r\n    pointer-events: none;\r\n}\r\n\r\n.stars[_ngcontent-%COMP%]{\r\n    background: url('overlay-stars.svg');\r\n    background-repeat: repeat;\r\n    background-size: contain;\r\n    background-position: left top;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    border-radius: 100%;\r\n    background-color: #fff;\r\n    width: 3px;\r\n    height: 3px;\r\n    opacity: 0.3;\r\n    will-change: opacity;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(1){\r\n    top: 80%;\r\n    left: 25%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 1s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 1s;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(2){\r\n    top: 20%;\r\n    left: 40%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 3s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 3s;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(3){\r\n    top: 25%;\r\n    left: 25%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 5s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 5s;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(4){\r\n    top: 75%;\r\n    left: 80%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 7s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 7s;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(5){\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 9s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 9s;\r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n    .navbar-links[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    \r\n    .custom-navbar[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    \r\n    .brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 120px;\r\n    }\r\n    \r\n    .box_astronaut[_ngcontent-%COMP%]{\r\n        top: 70%;\r\n    }\r\n    \r\n    .central-body[_ngcontent-%COMP%]{\r\n        padding-top: 25%;\r\n    }\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    font-size: x-small;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDOztBQUdELG9DQUFvQyxNQUFNLDJDQUEyQyxFQUFFLEVBQUU7O0FBQ3pGLDZCQUE2QixNQUFNLG1DQUFtQyxDQUFDLEVBQUU7O0FBRXpFLGdDQUFnQyxPQUFPLGtDQUFrQyxFQUFFLHlCQUF5QixHQUFHLEVBQUU7O0FBQ3pHLHVCQUF1QixPQUEyQyx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxFQUFFOztBQUsxSDtJQUNJLE9BQU8sNENBQTRDLENBQUM7QUFDeEQ7O0FBQ0E7SUFDSSxPQUFxRCxtQ0FBbUMsRUFBRTtBQUM5Rjs7QUFJQTtJQUNJLE9BQU8sa0NBQWtDLENBQUM7QUFDOUM7O0FBQ0E7SUFDSSxPQUEyQyx5QkFBeUIsRUFBRTtBQUMxRTs7QUFNQTtJQUNJLE1BQU0sb0JBQW9CLENBQUM7SUFDM0IsV0FBVyxrQkFBa0IsRUFBRSw2QkFBNkIsQ0FBQztBQUNqRTs7QUFDQTtJQUNJLE1BQU0sb0JBQW9CLEVBQUUsWUFBWSxHQUFHO0lBQzNDLFdBQVcsa0JBQWtCLEVBQUUsVUFBVSxFQUFpQyxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQztBQUM3SDs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUUsZ0JBQWdCO0lBQzNDLHNCQUFzQixFQUFFLGVBQWUsRUFDaEIsV0FBVztJQUNsQyxpQkFBaUIsRUFBRSxvQkFBb0I7QUFDM0M7O0FBRUE7SUFDSSwrREFBK0Q7SUFDL0QsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZUFBZTtJQU1mLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtBQUNBLG1CQUFtQjtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixvRUFBNEQ7WUFBNUQsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztBQUNmLHVEQUF1RDtBQUN2RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiOzs7Q0FHQztBQUNEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsUUFBUTtJQUNSLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVFQUErRDtZQUEvRCwrREFBK0Q7QUFDbkU7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG9FQUE0RDtZQUE1RCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9DQUF3RDtJQUN4RCx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUVBQXlEO1lBQXpELHlEQUF5RDtBQUM3RDs7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUVBQXlEO1lBQXpELHlEQUF5RDtBQUM3RDs7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUVBQXlEO1lBQXpELHlEQUF5RDtBQUM3RDs7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUVBQXlEO1lBQXpELHlEQUF5RDtBQUM3RDs7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUVBQXlEO1lBQXpELHlEQUF5RDtBQUM3RDs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblZJRVcgSU4gRlVMTCBTQ1JFRU4gTU9ERVxyXG5GVUxMIFNDUkVFTiBNT0RFOiBodHRwOi8vc2FsZWhyaWF6LmNvbS80MDRQYWdlLzQwNC5odG1sXHJcblxyXG5EUklCQkJMRTogaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNDMzMDE2Ny00MDQtUGFnZS1Mb3N0LUluLVNwYWNlXHJcbiovXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcm9ja2V0LW1vdmVtZW50IHsgMTAwJSB7LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgsLTYwMHB4KTt9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvY2tldC1tb3ZlbWVudCB7MTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgsLTYwMHB4KTsgfSB9XHJcbkBrZXlmcmFtZXMgcm9ja2V0LW1vdmVtZW50IHsgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwMHB4LC02MDBweCk7fSB9XHJcbkAtbW96LWtleWZyYW1lcyBzcGluLWVhcnRoIHsgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMHM7ICB9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4tZWFydGggeyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwczsgIH0gfVxyXG5Aa2V5ZnJhbWVzIHNwaW4tZWFydGh7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpOyB0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjBzOyB9IH1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBtb3ZlLWFzdHJvbmF1dCB7XHJcbiAgICAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwcHgsIC0xNjBweCk7fVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWFzdHJvbmF1dCB7XHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwcHgsIC0xNjBweCk7fVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZS1hc3Ryb25hdXR7XHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwcHgsIC0xNjBweCk7IHRyYW5zZm9ybTp0cmFuc2xhdGUoLTE2MHB4LCAtMTYwcHgpOyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0ZS1hc3Ryb25hdXQge1xyXG4gICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTcyMGRlZyk7fVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtYXN0cm9uYXV0IHtcclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC03MjBkZWcpO31cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1hc3Ryb25hdXR7XHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNzIwZGVnKTsgdHJhbnNmb3JtOnJvdGF0ZSgtNzIwZGVnKTsgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgZ2xvdy1zdGFyIHtcclxuICAgIDQwJSB7IC1tb3otb3BhY2l0eTogMC4zO31cclxuICAgIDkwJSwxMDAlIHsgLW1vei1vcGFjaXR5OiAxOyAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTt9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGdsb3ctc3RhciB7XHJcbiAgICA0MCUgeyAtd2Via2l0LW9wYWNpdHk6IDAuMzt9XHJcbiAgICA5MCUsMTAwJSB7IC13ZWJraXQtb3BhY2l0eTogMTsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7fVxyXG59XHJcbkBrZXlmcmFtZXMgZ2xvdy1zdGFye1xyXG4gICAgNDAlIHsgLXdlYmtpdC1vcGFjaXR5OiAwLjM7IG9wYWNpdHk6IDAuMzsgIH1cclxuICAgIDkwJSwxMDAlIHsgLXdlYmtpdC1vcGFjaXR5OiAxOyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyBib3JkZXItcmFkaXVzOiA5OTk5OTlweDt9XHJcbn1cclxuXHJcbi5zcGluLWVhcnRoLW9uLWhvdmVye1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSAyMDBzICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwMGRlZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuaHRtbCwgYm9keXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAzLjErICovXHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94IDIrICovXHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwKyAqL1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwOi8vc2FsZWhyaWF6LmNvbS80MDRQYWdlL2ltZy9iZ19wdXJwbGUucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICAgIFxyXG59XHJcblxyXG4uYnRuLWdvLWhvbWV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5idG4tZ28taG9tZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDIwcHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5jZW50cmFsLWJvZHl7XHJcbi8qICAgIHdpZHRoOiAxMDAlOyovXHJcbiAgICBwYWRkaW5nOiAxNyUgNSUgMTAlIDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub2JqZWN0cyBpbWd7XHJcbiAgICB6LWluZGV4OiA5MDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ub2JqZWN0X3JvY2tldHtcclxuICAgIHotaW5kZXg6IDk1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgIHRvcDogNzUlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBhbmltYXRpb246IHJvY2tldC1tb3ZlbWVudCAyMDBzIGxpbmVhciBpbmZpbml0ZSBib3RoIHJ1bm5pbmc7XHJcbn1cclxuXHJcbi5vYmplY3RfZWFydGh7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIHotaW5kZXg6IDkwO1xyXG4vKiAgICBhbmltYXRpb246IHNwaW4tZWFydGggMTAwcyBpbmZpbml0ZSBsaW5lYXIgYm90aDsqL1xyXG59XHJcblxyXG4ub2JqZWN0X21vb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEyJTtcclxuICAgIGxlZnQ6IDI1JTtcclxuLypcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gOTk5OTk5OTk5OTlzO1xyXG4qL1xyXG59XHJcblxyXG4ub2JqZWN0X21hcnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTExZGVnKTtcclxufVxyXG5cclxuLm9iamVjdF9hc3Ryb25hdXR7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZS1hc3Ryb25hdXQgMjAwcyBpbmZpbml0ZSBsaW5lYXIgYm90aCBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5ib3hfYXN0cm9uYXV0e1xyXG4gICAgei1pbmRleDogMTEwICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIHJpZ2h0OiAyMCU7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlLWFzdHJvbmF1dCA1MHMgaW5maW5pdGUgbGluZWFyIGJvdGggYWx0ZXJuYXRlO1xyXG59XHJcblxyXG4uaW1hZ2UtNDA0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zdGFyc3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9vdmVybGF5LXN0YXJzLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xyXG59XHJcblxyXG4uZ2xvd2luZ19zdGFycyAuc3RhcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcbn1cclxuXHJcbi5nbG93aW5nX3N0YXJzIC5zdGFyOm50aC1jaGlsZCgxKXtcclxuICAgIHRvcDogODAlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93LXN0YXIgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIDFzO1xyXG59XHJcbi5nbG93aW5nX3N0YXJzIC5zdGFyOm50aC1jaGlsZCgyKXtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93LXN0YXIgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIDNzO1xyXG59XHJcbi5nbG93aW5nX3N0YXJzIC5zdGFyOm50aC1jaGlsZCgzKXtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93LXN0YXIgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIDVzO1xyXG59XHJcbi5nbG93aW5nX3N0YXJzIC5zdGFyOm50aC1jaGlsZCg0KXtcclxuICAgIHRvcDogNzUlO1xyXG4gICAgbGVmdDogODAlO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93LXN0YXIgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIDdzO1xyXG59XHJcbi5nbG93aW5nX3N0YXJzIC5zdGFyOm50aC1jaGlsZCg1KXtcclxuICAgIHRvcDogOTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93LXN0YXIgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIDlzO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5uYXZiYXItbGlua3N7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1c3RvbS1uYXZiYXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnJhbmQtbG9nbyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm94X2FzdHJvbmF1dHtcclxuICAgICAgICB0b3A6IDcwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNlbnRyYWwtYm9keXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "vGr5":
/*!***********************************************!*\
  !*** ./src/app/pipes/duration-string.pipe.ts ***!
  \***********************************************/
/*! exports provided: DurationStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationStringPipe", function() { return DurationStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DurationStringPipe {
    transform(value) {
        const seconds = Number(value);
        return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
    }
}
DurationStringPipe.ɵfac = function DurationStringPipe_Factory(t) { return new (t || DurationStringPipe)(); };
DurationStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "durationString", type: DurationStringPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DurationStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'durationString'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pages_commands_commands_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/commands/commands.component */ "SOaz");
/* harmony import */ var _pages_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/auth/auth/auth.component */ "xFqE");
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth/login/login.component */ "Huwh");
/* harmony import */ var _pages_auth_invite_invite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/auth/invite/invite.component */ "zje+");
/* harmony import */ var _pages_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/auth/logout/logout.component */ "7V/i");
/* harmony import */ var _dashboard_dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard/dashboard-overview/dashboard-overview.component */ "NMgm");
/* harmony import */ var _dashboard_guild_guild_guild_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/guild/guild/guild.component */ "QQkr");
/* harmony import */ var _guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/dashboard-auth.guard */ "HfTq");
/* harmony import */ var _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/guild-auth.guard */ "Sova");
/* harmony import */ var _dashboard_guild_general_module_general_module_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/guild/general-module/general-module.component */ "8SWG");
/* harmony import */ var _dashboard_guild_leveling_module_leveling_module_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/guild/leveling-module/leveling-module.component */ "DFSU");
/* harmony import */ var _dashboard_guild_music_module_music_module_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/guild/music-module/music-module.component */ "J99a");
/* harmony import */ var _dashboard_guild_auto_mod_module_auto_mod_module_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/guild/auto-mod-module/auto-mod-module.component */ "o1uT");
/* harmony import */ var _dashboard_guild_logs_module_logs_module_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/guild/logs-module/logs-module.component */ "5VNm");
/* harmony import */ var _dashboard_guild_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/guild/log-module/log-module.component */ "DCua");
/* harmony import */ var _dashboard_dashboard_settings_module_settings_module_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard/settings-module/settings-module.component */ "tpIi");
/* harmony import */ var _dashboard_guild_leaderboard_module_leaderboard_module_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/guild/leaderboard-module/leaderboard-module.component */ "EK4V");
/* harmony import */ var _guards_leaderboard_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/leaderboard-auth.guard */ "0Ajg");
/* harmony import */ var _xp_card_xp_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./xp-card/xp-card.component */ "vo84");
/* harmony import */ var _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/payment-success/payment-success.component */ "AvRb");
/* harmony import */ var _pages_plus_plus_plus_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/plus/plus/plus.component */ "4lpq");
/* harmony import */ var _guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guards/can-deactivate-dashboard.guard */ "rTQu");
/* harmony import */ var _dashboard_dashboard_reaction_roles_module_reaction_roles_module_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/dashboard/reaction-roles-module/reaction-roles-module.component */ "5wWH");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./stats/stats.component */ "TtVv");
/* harmony import */ var _dashboard_guild_captcha_module_captcha_module_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/guild/captcha-module/captcha-module.component */ "N1ji");
/* harmony import */ var _dashboard_guild_warnings_module_warnings_module_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/guild/warnings-module/warnings-module.component */ "8L85");
/* harmony import */ var _dashboard_guild_compose_embed_module_compose_embed_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/guild/compose-embed-module/compose-embed.component */ "qBLl");

































const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'commands', component: _pages_commands_commands_component__WEBPACK_IMPORTED_MODULE_4__["CommandsComponent"] },
    { path: 'auth', component: _pages_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"] },
    { path: 'login', component: _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'logout', component: _pages_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"] },
    { path: 'stats', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_27__["StatsComponent"] },
    { path: 'invite', component: _pages_auth_invite_invite_component__WEBPACK_IMPORTED_MODULE_7__["InviteComponent"] },
    { path: 'leaderboard/:id', component: _dashboard_guild_leaderboard_module_leaderboard_module_component__WEBPACK_IMPORTED_MODULE_20__["LeaderboardModuleComponent"], canActivate: [_guards_leaderboard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["LeaderboardAuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_9__["DashboardOverviewComponent"], canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["DashboardAuthGuard"]] },
    { path: 'dashboard/xp-card', component: _xp_card_xp_card_component__WEBPACK_IMPORTED_MODULE_22__["XPCardComponent"], canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["DashboardAuthGuard"]] },
    { path: 'dashboard/admin/:id', component: _dashboard_guild_guild_guild_component__WEBPACK_IMPORTED_MODULE_10__["GuildComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/auto-mod', component: _dashboard_guild_auto_mod_module_auto_mod_module_component__WEBPACK_IMPORTED_MODULE_16__["AutoModModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/captcha', component: _dashboard_guild_captcha_module_captcha_module_component__WEBPACK_IMPORTED_MODULE_28__["CaptchaModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/general', component: _dashboard_guild_general_module_general_module_component__WEBPACK_IMPORTED_MODULE_13__["GeneralModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/music', component: _dashboard_guild_music_module_music_module_component__WEBPACK_IMPORTED_MODULE_15__["MusicModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/leveling', component: _dashboard_guild_leveling_module_leveling_module_component__WEBPACK_IMPORTED_MODULE_14__["LevelingModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/embed', component: _dashboard_guild_compose_embed_module_compose_embed_component__WEBPACK_IMPORTED_MODULE_30__["EmbedComposeModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/log', component: _dashboard_guild_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_18__["LogModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/logs', component: _dashboard_guild_logs_module_logs_module_component__WEBPACK_IMPORTED_MODULE_17__["LogsModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/reaction-roles', component: _dashboard_dashboard_reaction_roles_module_reaction_roles_module_component__WEBPACK_IMPORTED_MODULE_26__["ReactionRolesModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/settings', component: _dashboard_dashboard_settings_module_settings_module_component__WEBPACK_IMPORTED_MODULE_19__["SettingsModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'servers/:id/warnings', component: _dashboard_guild_warnings_module_warnings_module_component__WEBPACK_IMPORTED_MODULE_29__["WarningsModuleComponent"], canActivate: [_guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_12__["GuildAuthGuard"]], canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_25__["CanDeactivateDashboard"]] },
    { path: 'plus', component: _pages_plus_plus_plus_component__WEBPACK_IMPORTED_MODULE_24__["PlusComponent"] },
    { path: 'payment-success', component: _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_23__["PaymentSuccessComponent"] },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { initialNavigation: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { initialNavigation: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vo84":
/*!**********************************************!*\
  !*** ./src/app/xp-card/xp-card.component.ts ***!
  \**********************************************/
/*! exports provided: XPCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPCardComponent", function() { return XPCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _dashboard_dashboard_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard/dashboard-sidebar/dashboard-sidebar.component */ "nPNH");
/* harmony import */ var _dashboard_dashboard_customize_xp_card_customize_xp_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard/customize-xp-card/customize-xp-card.component */ "Iqxd");






class XPCardComponent {
    constructor(userService) {
        this.userService = userService;
        this.xpCardURL = '';
    }
    get user() { return this.userService.user; }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateXPCard();
        });
    }
    updateXPCard() {
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.xpCardURL = this.userService.xpCardPreviewURL + `&cache=${randomString}`;
    }
}
XPCardComponent.ɵfac = function XPCardComponent_Factory(t) { return new (t || XPCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
XPCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: XPCardComponent, selectors: [["app-xpcard"]], decls: 14, vars: 1, consts: [[1, "container"], ["hidden", ""], ["customize", ""], [1, "display-3"], [1, "float-none"], ["alt", "Your XP Card", 3, "src"], ["title", "Customize", 1, "config"], ["data-toggle", "modal", "data-target", "#customize"], ["aria-hidden", "true", 1, "fa", "fa-paint-brush"], ["id", "customize", "tabindex", "-1", "role", "dialog", "aria-labelledby", "customize", "aria-hidden", "true", 1, "modal", "fade"], [3, "xpCardUpdate"]], template: function XPCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dashboard-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "customize-xp-card", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "XP Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "customize-xp-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("xpCardUpdate", function XPCardComponent_Template_customize_xp_card_xpCardUpdate_13_listener() { return ctx.updateXPCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.xpCardURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_dashboard_dashboard_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["DashboardSidebarComponent"], _dashboard_dashboard_customize_xp_card_customize_xp_card_component__WEBPACK_IMPORTED_MODULE_4__["CustomizeXPCardComponent"]], styles: ["hr[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 30vw;\r\n}\r\n\r\n.config[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    width: 50vw;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: var(--primary);\r\n    \r\n    border: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 576px) {\r\n    img[_ngcontent-%COMP%] {\r\n        max-width: 83.5vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveHAtY2FyZC94cC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7O0lBRXJCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAveHAtY2FyZC94cC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xyXG59XHJcblxyXG4uY29uZmlnIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5idXR0b24gaSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi8qIDwgc21hbGwgZGV2aWNlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4My41dnc7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XPCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-xpcard',
                templateUrl: './xp-card.component.html',
                styleUrls: ['./xp-card.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "wvv7":
/*!**********************************************************************************!*\
  !*** ./src/app/stats/popular-commands-graph/popular-commands-graph.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PopularCommandsGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularCommandsGraphComponent", function() { return PopularCommandsGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "qb46");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "LPYB");







function PopularCommandsGraphComponent_canvas_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("plugins", ctx_r0.barChartPlugins)("legend", ctx_r0.barChartLegend)("chartType", ctx_r0.barChartType);
} }
class PopularCommandsGraphComponent {
    constructor(api) {
        this.api = api;
        this.reversed = false;
        this.chartReady = false;
        this.barChartOptions = {
            responsive: false,
            scales: {
                yAxes: [{ display: false }],
                xAxes: [{ display: false }]
            },
            plugins: {
                datalabels: { anchor: 'end', align: 'end' }
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default.a];
        this.barChartData = [];
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.stats = (_a = this.stats) !== null && _a !== void 0 ? _a : yield this.api.getStats();
            this.barChartLabels = this.buildLabels();
            this.barChartData = this.buildDataSets();
            this.chartReady = true;
        });
    }
    buildLabels() {
        const labels = this.stats.commands
            .map(c => c.name)
            .slice(0, 10);
        return (this.reversed) ? labels.reverse() : labels;
    }
    buildDataSets() {
        const data = this.stats.commands.map(s => s.count);
        return [
            {
                data: (this.reversed) ? data.reverse() : data,
                label: 'Commands'
            }
        ];
    }
}
PopularCommandsGraphComponent.ɵfac = function PopularCommandsGraphComponent_Factory(t) { return new (t || PopularCommandsGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
PopularCommandsGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopularCommandsGraphComponent, selectors: [["popular-commands-graph"]], inputs: { stats: "stats", reversed: "reversed" }, decls: 6, vars: 2, consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", 4, "ngIf"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function PopularCommandsGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PopularCommandsGraphComponent_canvas_5_Template, 1, 6, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.reversed ? "Least" : "Most", " Popular Commands");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3BvcHVsYXItY29tbWFuZHMtZ3JhcGgvcG9wdWxhci1jb21tYW5kcy1ncmFwaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopularCommandsGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'popular-commands-graph',
                templateUrl: './popular-commands-graph.component.html',
                styleUrls: ['./popular-commands-graph.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, { stats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reversed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "xFqE":
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");







class AuthComponent {
    constructor(router, route, guildService, userService) {
        this.router = router;
        this.route = route;
        this.guildService = guildService;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //const key = this.route.snapshot.queryParamMap.get('key'); 
            //localStorage.setItem('key', key);
            //await this.userService.updateUser();
            //await this.guildService.updateGuilds();
            //
            //this.router.navigate(['/dashboard']);
            try {
                const key = this.route.snapshot.queryParamMap.get('key');
                localStorage.setItem('key', key);
                yield this.userService.updateUser();
                yield this.guildService.updateGuilds();
                this.router.navigate(['/dashboard']);
            }
            catch (e) {
                console.log(e.message);
                alert('Invalid key - check console');
                this.router.navigate(['/']);
            }
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "spinner");
    } }, directives: [_utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "y7Ka":
/*!************************************************!*\
  !*** ./src/app/utils/waves/waves.component.ts ***!
  \************************************************/
/*! exports provided: WavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesComponent", function() { return WavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WavesComponent {
    constructor() {
        this.inverted = false;
    }
}
WavesComponent.ɵfac = function WavesComponent_Factory(t) { return new (t || WavesComponent)(); };
WavesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WavesComponent, selectors: [["waves"]], inputs: { inverted: "inverted" }, decls: 7, vars: 2, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 24 150 28", "preserveAspectRatio", "none", "shape-rendering", "auto", 1, "waves"], ["id", "gentle-wave", "d", "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"], [1, "parallax"], ["id", "wave1", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "0"], ["id", "wave2", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "3"], ["id", "wave3", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "5"]], template: function WavesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.inverted ? "rotate(180deg)" : "");
    } }, styles: [".waves[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    width: 100%;\r\n    height:5vh;\r\n    margin-bottom:-7px; \r\n    min-height:50px;\r\n    max-height:75px;\r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    height:10vh;\r\n    text-align:center;\r\n    background-color: var(--background-secondary);\r\n  }\r\n  \r\n  \r\n  \r\n  .parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%] {\r\n    -webkit-animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;\r\n            animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;\r\n  }\r\n  \r\n  .parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%]:nth-child(1) {\r\n    -webkit-animation-delay: -2s;\r\n            animation-delay: -2s;\r\n    -webkit-animation-duration: 7s;\r\n            animation-duration: 7s;\r\n  }\r\n  \r\n  .parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%]:nth-child(2) {\r\n    -webkit-animation-delay: -3s;\r\n            animation-delay: -3s;\r\n    -webkit-animation-duration: 10s;\r\n            animation-duration: 10s;\r\n  }\r\n  \r\n  .parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%]:nth-child(3) {\r\n    -webkit-animation-delay: -4s;\r\n            animation-delay: -4s;\r\n    -webkit-animation-duration: 13s;\r\n            animation-duration: 13s;\r\n  }\r\n  \r\n  .parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%]:nth-child(4) {\r\n    -webkit-animation-delay: -5s;\r\n            animation-delay: -5s;\r\n    -webkit-animation-duration: 20s;\r\n            animation-duration: 20s;\r\n  }\r\n  \r\n  @-webkit-keyframes move-forever {\r\n    0% {\r\n     transform: translate3d(-90px,0,0);\r\n    }\r\n    100% { \r\n      transform: translate3d(85px,0,0);\r\n    }\r\n  }\r\n  \r\n  @keyframes move-forever {\r\n    0% {\r\n     transform: translate3d(-90px,0,0);\r\n    }\r\n    100% { \r\n      transform: translate3d(85px,0,0);\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  @media (max-width: 768px) {\r\n    .waves[_ngcontent-%COMP%] {\r\n      height:40px;\r\n      min-height:40px;\r\n    }\r\n    .content[_ngcontent-%COMP%] {\r\n      height:30vh;\r\n    }\r\n    h1[_ngcontent-%COMP%] {\r\n      font-size:24px;\r\n    }\r\n  }\r\n  \r\n  #wave1[_ngcontent-%COMP%] {\r\n  fill: var(--background-secondary);\r\n  fill-opacity: 0.7;\r\n}\r\n  \r\n  #wave2[_ngcontent-%COMP%] {\r\n  fill: var(--background-tertiary);\r\n  fill-opacity: 0.5;\r\n}\r\n  \r\n  #wave3[_ngcontent-%COMP%] {\r\n  fill: var(--background-secondary);\r\n  fill-opacity: 0.3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvd2F2ZXMvd2F2ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQixFQUFFLHFCQUFxQjtJQUN6QyxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDZDQUE2QztFQUMvQzs7RUFFQSxjQUFjOztFQUVkO0lBQ0Usd0VBQWdFO1lBQWhFLGdFQUFnRTtFQUNsRTs7RUFDQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFO0tBQ0MsaUNBQWlDO0lBQ2xDO0lBQ0E7TUFDRSxnQ0FBZ0M7SUFDbEM7RUFDRjs7RUFQQTtJQUNFO0tBQ0MsaUNBQWlDO0lBQ2xDO0lBQ0E7TUFDRSxnQ0FBZ0M7SUFDbEM7RUFDRjs7RUFDQSx1QkFBdUI7O0VBQ3ZCO0lBQ0U7TUFDRSxXQUFXO01BQ1gsZUFBZTtJQUNqQjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUY7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7RUFDQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91dGlscy93YXZlcy93YXZlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhdmVzIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6NXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTotN3B4OyAvKkZpeCBmb3Igc2FmYXJpIGdhcCovXHJcbiAgICBtaW4taGVpZ2h0OjUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0Ojc1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OjEwdmg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgLyogQW5pbWF0aW9uICovXHJcbiAgXHJcbiAgLnBhcmFsbGF4ID4gdXNlIHtcclxuICAgIGFuaW1hdGlvbjogbW92ZS1mb3JldmVyIDI1cyBjdWJpYy1iZXppZXIoLjU1LC41LC40NSwuNSkgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDdzO1xyXG4gIH1cclxuICAucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTNzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgfVxyXG4gIC5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtNHM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEzcztcclxuICB9XHJcbiAgLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCg0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC01cztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjBzO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOTBweCwwLDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7IFxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDg1cHgsMCwwKTtcclxuICAgIH1cclxuICB9XHJcbiAgLypTaHJpbmtpbmcgZm9yIG1vYmlsZSovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAud2F2ZXMge1xyXG4gICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgbWluLWhlaWdodDo0MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBoZWlnaHQ6MzB2aDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4jd2F2ZTEge1xyXG4gIGZpbGw6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICBmaWxsLW9wYWNpdHk6IDAuNztcclxufVxyXG4jd2F2ZTIge1xyXG4gIGZpbGw6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG4gIGZpbGwtb3BhY2l0eTogMC41O1xyXG59XHJcbiN3YXZlMyB7XHJcbiAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gIGZpbGwtb3BhY2l0eTogMC4zO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WavesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'waves',
                templateUrl: './waves.component.html',
                styleUrls: ['./waves.component.css']
            }]
    }], null, { inverted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "z+9u":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/widgets/commands-widget/commands-widget.component.ts ***!
  \********************************************************************************/
/*! exports provided: CommandsWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsWidgetComponent", function() { return CommandsWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "qb46");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");









function CommandsWidgetComponent_canvas_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("plugins", ctx_r0.barChartPlugins)("legend", ctx_r0.barChartLegend)("chartType", ctx_r0.barChartType);
} }
class CommandsWidgetComponent {
    constructor(guildService, route) {
        this.guildService = guildService;
        this.route = route;
        this.chartReady = false;
        this.barChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{ display: false }],
                xAxes: [{ display: false }]
            },
            plugins: {
                datalabels: { anchor: 'end', align: 'end' }
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'line';
        this.barChartLegend = true;
        this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default.a];
        this.barChartData = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const id = val.get('id');
                const log = yield this.guildService.getSavedLog(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].guildId);
                this.commands = log.commands;
                this.barChartLabels = this.buildLabels();
                this.barChartData = this.buildDataSets();
                this.chartReady = true;
            }));
        });
    }
    buildLabels() {
        const labels = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            labels.push(this.ddMM(date));
        }
        return labels;
    }
    buildDataSets() {
        const commonCommand = 'ping';
        const sets = [
            { data: [0, 0, 0, 0, 0, 0, 0], label: 'All', borderColor: "#595AFF", backgroundColor: "rgb(62, 63, 178, 0.2)", pointBackgroundColor: "rgb(62, 63, 178)" },
            { data: [0, 0, 0, 0, 0, 0, 0], label: commonCommand, borderColor: "#FF6328", backgroundColor: "rgb(204, 79, 32, 0.2)", pointBackgroundColor: "rgb(204, 79, 32)" }
        ]; //borderColor: "#6DE3C8", backgroundColor: "#1FDFB2" 
        for (const command of this.commands) {
            const ddMM = this.ddMM(new Date(command.at));
            const dayIndex = this.barChartLabels.indexOf(ddMM);
            sets[0].data[dayIndex]++;
            if (command.name === commonCommand)
                sets[1].data[dayIndex]++;
        }
        return sets;
    }
    ddMM(date) {
        return `${date.getDate()}/${(date.getMonth() + 1)}`;
    }
}
CommandsWidgetComponent.ɵfac = function CommandsWidgetComponent_Factory(t) { return new (t || CommandsWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
CommandsWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommandsWidgetComponent, selectors: [["commands-widget"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", 4, "ngIf"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function CommandsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recent Commands");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CommandsWidgetComponent_canvas_5_Template, 1, 6, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["BaseChartDirective"]], styles: ["canvas[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: auto;\r\n    margin-left: 15px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    min-height: 250px;\r\n}\r\n\r\n.col-md-3[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3dpZGdldHMvY29tbWFuZHMtd2lkZ2V0L2NvbW1hbmRzLXdpZGdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvd2lkZ2V0cy9jb21tYW5kcy13aWRnZXQvY29tbWFuZHMtd2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uY29sLW1kLTMsIC5jb2wtbWQtOSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommandsWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'commands-widget',
                templateUrl: './commands-widget.component.html',
                styleUrls: ['./commands-widget.component.css']
            }]
    }], function () { return [{ type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zje+":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/invite/invite.component.ts ***!
  \*******************************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");




class InviteComponent {
    constructor() {
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].discordInvite}`;
        window.location.assign(this.url);
    }
}
InviteComponent.ɵfac = function InviteComponent_Factory(t) { return new (t || InviteComponent)(); };
InviteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InviteComponent, selectors: [["app-invite"]], decls: 1, vars: 0, template: function InviteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spinner");
    } }, directives: [_utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvaW52aXRlL2ludml0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InviteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invite',
                templateUrl: './invite.component.html',
                styleUrls: ['./invite.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map