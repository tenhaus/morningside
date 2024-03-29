(function($, Edge, compId) {
    var _ = null,
        y = true,
        n = false,
        c = 'color',
        x4 = 'rgba(0,0,0,0)',
        g = 'image',
        x3 = 'both',
        e30 = '${_DRUMMER_2}',
        e44 = '${_AAFS_HEAD2}',
        e31 = '${_TEXT_2}',
        e40 = '${_AAFS_224}',
        a = 'Base State',
        e38 = '${_AAFS_HEAD}',
        e41 = '${_TEXT_12}',
        dt = 'Default Timeline',
        e39 = '${_TEXT_4}',
        x1 = '3.0.0',
        e43 = '${_AAFS_34}',
        i = 'none',
        e37 = '${_SOCCER_2}',
        e25 = '${_DRUMMER_32}',
        e36 = '${_NURSE_HEAD}',
        e35 = '${_TEXT_13}',
        e34 = '${_NURSE_2}',
        lf = 'left',
        e27 = '${_DRUMMER_HEAD}',
        w = 'width',
        e28 = '${_AAFS_222}',
        e29 = '${_SOCCER_33}',
        h = 'height',
        e26 = '${_AAFS_33}',
        s = 'style',
        bg = 'background-color',
        x24 = 'hidden',
        e32 = '${_SOCCER_HEAD}',
        e33 = '${_TEXT_3}',
        e23 = '${_Stage}',
        x2 = '3.0.0.322',
        x22 = 'rgba(255,255,255,1)',
        tp = 'top',
        ql = 'linear',
        ov = 'overflow',
        e42 = '${_NURSE_3}',
        x21 = 'stage';
    var im = '/img/slider/';
    var g15 = 'NURSE_3.jpg',
        g11 = 'SOCCER_3.jpg',
        g5 = 'AAFS_HEAD.jpg',
        g10 = 'SOCCER_HEAD.jpg',
        g20 = 'TEXT_4.jpg',
        g18 = 'DRUMMER_HEAD.jpg',
        g12 = 'TEXT_2.jpg',
        g17 = 'DRUMMER_2.jpg',
        g19 = 'DRUMMER_3.jpg',
        g13 = 'NURSE_2.jpg',
        g14 = 'NURSE_HEAD.jpg',
        g7 = 'AAFS_3.jpg',
        g8 = 'TEXT_1.jpg',
        g6 = 'AAFS_22.jpg',
        g9 = 'SOCCER_2.jpg',
        g16 = 'TEXT_3.jpg';
    var fonts = {};
    var P = Edge.P,
        T = Edge.T,
        A = Edge.A;
    var opts = {};
    var resources = [];
    var symbols = {
        "stage": {
            v: x1,
            mv: x1,
            b: x2,
            bS: a,
            stf: x3,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    id: 'AAFS_HEAD',
                    t: g,
                    r: ['800', '0', '980px', '200px', 'auto', 'auto'],
                    f: [x4, im + g5, '0px', '0px']
                }, {
                    id: 'AAFS_222',
                    t: g,
                    r: ['-980px', '200px', '980px', '280px', 'auto',
                        'auto'
                    ],
                    f: [x4, im + g6, '0px', '0px']
                }, {
                    id: 'AAFS_33',
                    t: g,
                    r: ['980', '480', '980px', '200px', 'auto', 'auto'],
                    f: [x4, im + g7, '0px', '0px']
                }, {
                    id: 'TEXT_12',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g8, '0px', '0px']
                }, {
                    id: 'SOCCER_2',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g9, '0px', '0px']
                }, {
                    id: 'SOCCER_HEAD',
                    t: g,
                    r: ['-188', '0', '980px', '200px', 'auto', 'auto'],
                    f: [x4, im + g10, '0px', '0px']
                }, {
                    id: 'SOCCER_33',
                    t: g,
                    r: ['980', '480', '980px', '200px', 'auto', 'auto'],
                    f: [x4, im + g11, '0px', '0px']
                }, {
                    id: 'TEXT_2',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g12, '0px', '0px']
                }, {
                    id: 'NURSE_2',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g13, '0px', '0px']
                }, {
                    id: 'NURSE_HEAD',
                    t: g,
                    r: ['980', '0', '980px', '200px', 'auto', 'auto'],
                    f: [x4, im + g14, '0px', '0px']
                }, {
                    id: 'NURSE_3',
                    t: g,
                    r: ['-980px', '480', '980px', '200px', 'auto',
                        'auto'
                    ],
                    f: [x4, im + g15, '0px', '0px']
                }, {
                    id: 'TEXT_3',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g16, '0px', '0px']
                }, {
                    id: 'DRUMMER_2',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g17, '0px', '0px']
                }, {
                    id: 'DRUMMER_HEAD',
                    t: g,
                    r: ['980', '0', '980px', '200px', 'auto', 'auto'],
                    f: [x4, im + g18, '0px', '0px']
                }, {
                    id: 'DRUMMER_32',
                    t: g,
                    r: ['-980px', '480', '980px', '200px', 'auto',
                        'auto'
                    ],
                    f: [x4, im + g19, '0px', '0px']
                }, {
                    id: 'TEXT_4',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g20, '0px', '0px']
                }, {
                    id: 'AAFS_224',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g6, '0px', '0px']
                }, {
                    id: 'AAFS_HEAD2',
                    t: g,
                    r: ['980', '0', '980px', '200px', 'auto', 'auto'],
                    f: [x4, im + g5, '0px', '0px']
                }, {
                    id: 'AAFS_34',
                    t: g,
                    r: ['-980', '480', '980px', '200px', 'auto', 'auto'],
                    f: [x4, im + g7, '0px', '0px']
                }, {
                    id: 'TEXT_13',
                    t: g,
                    r: ['980', '200', '980px', '280px', 'auto', 'auto'],
                    f: [x4, im + g8, '0px', '0px']
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 23250,
                    a: y,
                    tt: []
                }
            }
        }
    };
    var S1 = symbols[x21];
    var tl0 = S1.tl[dt].tt,
        st1 = S1.s[a] = {}, A1 = A(_, tl0, st1);
    A1.A(e23).P(bg, x22, c).P(w, 980).P(h, 680).P(ov, x24);
    A1.A(e25).P(lf, -980).T(15.5, -7, 1, ql);
    A1.A(e26).P(lf, 980).T(0, 0, 3, ql);
    A1.A(e27).P(lf, 980).T(15.5, -7, 1, ql);
    A1.A(e28).P(tp, 200).P(lf, -980).T(0, -11, 3, ql);
    A1.A(e29).P(lf, 980).T(6.5, -7, 1, ql).P(tp, 480).T(6.5, 480).T(7.5,
        480);
    A1.A(e30).P(lf, 980).T(14.25, -16, 1, ql);
    A1.A(e31).P(lf, 980).T(7.5, 0, 1, ql).T(9.5, -980, 1);
    A1.A(e32).P(lf, -980).T(6.5, -5, 1, ql);
    A1.A(e33).P(lf, 980).T(12.25, 0, 1, ql).T(14.25, -980, 1);
    A1.A(e34).P(lf, 980).T(9.5, -21, 1, ql);
    A1.A(e35).P(lf, 980).T(22.25, 0, 1, ql);
    A1.A(e36).P(lf, 980).T(10.75, -11, 1, ql);
    A1.A(e37).P(lf, 980).T(5, -16, 1.5, ql);
    A1.A(e38).P(lf, 980).T(0, 0, 2.5, ql);
    A1.A(e39).P(lf, 980).T(17, 0, 1, ql).T(19, -980, 1);
    A1.A(e40).P(lf, 980).T(19, -21, 1, ql);
    A1.A(e41).P(lf, 980).T(3.5, 0, 1, ql).T(5, -980, 1.5);
    A1.A(e42).P(lf, -980).T(10.75, -7, 1, ql);
    A1.A(e43).P(lf, -980).T(20.25, -11, 1, ql);
    A1.A(e44).P(lf, 980).T(20.25, -11, 1, ql);
    Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);
    $(window).ready(function() {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "EDGE-432563361");