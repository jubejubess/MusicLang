//var subject_id = jsPsych.randomization.randomID(15); //random id assigned to each subject
var blur_count = 0; //number of times subject's focus leaves tab
var form; //current jspych-content element, to allow listeners to be toggled from different functions
var likely_invalid = false; //gets set to true if blur_count>threshold

var header = "<img id=\"logo\" src=\"/study_assets/MusicLang/img/langdev-logo.jpg\"</img><h1>Language Learning & Development Lab MusicLang Experiment</h1>"; //to be prepended to preludes

var inst_rhythm = {
    type: 'instructions',
    pages: [
        header + '<h2>Instructions</h2> Please wear headphones for the duration of this experiment. To make sure your headphones are set to a comfortable volume, play the following audio clip and adjust accordingly.</p><audio controls><source src="sample.mp3" type="audio/mpeg">'
    ],
    show_clickable_nav: true,
    button_label_next: 'Next',
    allow_keys: false
}

var met_rhythm = {
    type: 'binary-audio',
    json_label: 'MET-Rhythm-EngNat',
    preamble: header + '<h2>Musical Ear Test</h2><h3>Comparison of Rhythmic Phrases</h3>',
    example_count: '2',
    question_count: '52',
    example_num_prefix: 'Example ',
    example_num_type: 'alphabetic',
    audio: '/study_assets/MusicLang/audio/met-rhythm-engnat.mp3',
    test_length: 10 //611:length+15:grace
}

var inst_melody = {
    type: 'instructions',
    pages: [
        header + '<h2>Instructions</h2> Please wear headphones for the duration of this experiment. To make sure your headphones are set to a comfortable volume, play the following audio clip and adjust accordingly.</p><audio controls><source src="sample.mp3" type="audio/mpeg">'
    ],
    show_clickable_nav: true,
    button_label_next: 'Next',
    allow_keys: false
}

var met_melody = {
    type: 'binary-audio',
    json_label: 'MET-Melody-EngNat',
    preamble: header + '<h2>Musical Ear Test</h2><h3>Comparison of Melodic Phrases</h3>',
    example_count: '2',
    question_count: '52',
    example_num_prefix: 'Example ',
    example_num_type: 'alphabetic',
    audio: '/study_assets/MusicLang/audio/met-melody-engnat.mp3',
    test_length: 10 //617:length+15:grace 
}

var rpcv={
    type: 'passage-highlight',
    json_label: 'RPCV_MA',
    preamble: header + '<h2>RPCV</h2>',
    audio:  '',
    allow_audio_control: false,
    test_length: 10, //617:length+15:grace
    default_correct: true,
    word_tag_char1: '#',
    word_tag_char2: '@',
    text: '<p>jiào 教 shì 室 wài 外 de 的 tiān 天 kōng 空 wū 乌 yún 云 mì 密 #@bù 布# ， jiào 教 shì 室 lǐ 里 #@qì 气# fēn 氛 chén 沉 #@mèn 闷# ， kě 可 yǐ 以 tīng 听 dào 到 yuǎn 远 chù 处 #@há 蛤# má 蟆 de 的 jiào 叫 shēng 声 。 jí 吉 mǐ 米 zhèng 正 zài 在 shàng 上 #@shù 数# xué 学 kè 课 。 tā 他 jì 记 dé 得 lǎo 老 shī 师 #@jiǎng 讲# guò 过 zhè 这 dào 道 tí 题 ， dàn 但 tā 他 hái 还 shì 是 dá 答 #@cuò 错# le 了 。 jí 吉 mǐ 米 jué 觉 de 得 zì 自 jǐ 己 #@què 确# shí 实 xū 需 yào 要 hǎo 好 hǎo 好 yòng 用 gōng 功 le 了 。 shì 事 shí 实 shàng 上 ， tā 他 méi 没 yǒu 有 #@duì 对# zì 自 jǐ 己 de 的 wèi 未 lái 来 yǒu 有 guò 过 #@shēn 深# rù 入 de 的 sī 思 kǎo 考 。</p><p>#@zhī 之# hòu 后 shì 是 hàn 汉 yǔ 语 kè 课 。 tā 他 kāi 开 shǐ 始 kǎo 考 lǜ 虑 jīn 今 tiān 天 de 的 wǔ 午 fàn 饭 yào 要 #@chī 吃# shén 什 me 么 。 tā 他 de 的 lǎo 老 shī 师 zài 在 hēi 黑 bǎn 板 shàng 上 #@xiě 写# zì 字 ， “ ‘ dàn 蛋 ’字 zì de 的 xià 下 bàn 半 bù 部 fen 分 shì 是 zhī 只 ‘ #@chóng 虫# ’ 。 ” tā 她 xiàng 向 dà 大 jiā 家 shuō 说 。 jí 吉 mǐ 米 hū 忽 #@rán 然# xiǎng 想 dào 到 hǎo 好 #@jiǔ 久# méi 没 cháng 尝 dàn 蛋 chǎo 炒 fàn 饭 le 了 。 tā 他 #@jué 决# dìng 定 huí 回 jiā 家 hòu 后 zuò 做 。</p><p>#@zhōng 终# yú 于 fàng 放 xué 学 le 了 ， jí 吉 mǐ 米 qí 骑 #@chē 车# huí 回 jiā 家 。 #@lù 路# shàng 上 kāi 开 shǐ 始 xià 下 qǐ 起 #@yǔ 雨# lái 来 。 tā 他 qí 骑 de 得 #@fēi 飞# kuài 快 ， yì 一 huì 会 er 儿 jiù 就 dào 到 jiā 家 le 了 。 jí 吉 mǐ 米 dǎ 打 kāi 开 jiā 家 mén 门 ， jìn 进 wū 屋 #@xǐ 洗# le 了 gè 个 zǎo 澡 。 tā 他 dǎ 打 kāi 开 bīng 冰 #@xiāng 箱# ， kàn 看 dào 到 lǐ 里 miàn 面 yǒu 有 jǐ 几 #@zhǒng 种# shū 蔬 cài 菜 。 tā 他 qǔ 取 chū 出 yì 一 xiē 些 ná 拿 dào 到 àn 案 #@bǎn 板# shàng 上 ， zhǔn 准 bèi 备 hé 和 mǐ 米 fàn 饭 yì 一 qǐ 起 chǎo 炒 。</p><p>tā 他 hái 还 zài 在 děng 等 mǐ 米 fàn 饭 #@zhǔ 煮# shú 熟 。 jí 吉 mǐ 米 #@zhǎo 找# chū 出 tā 他 de 的 hóng 红 #@sè 色# bǐ 笔 jì 记 běn 本 ， lǐ 里 miàn 面 jì 记 le 了 tā 他 yào 要 zuò 做 de 的 shì 事 。 tā 他 jì 计 huà 划 xià 下 #@wǔ 午# qù 去 yí 一 tàng 趟 #@yín 银# háng 行 ， rán 然 hòu 后 dǎ 打 #@sǎo 扫# yí 一 xià 下 fáng 房 jiān 间 。</p><p> mǐ 米 fàn 饭 zǒng 总 #@suàn 算# shú 熟 le 了 ， tā 他 hěn 很 kuài 快 chǎo 炒 hǎo 好 le 了 fàn 饭 ， bìng 并 gěi 给 zì 自 jǐ 己 dào 倒 le 了 yī 一 bēi 杯 #@níng 柠# méng 檬 shuǐ 水 。 jīn 今 tiān 天 wǎn 晚 shàng 上 tā 他 de 的 fù 父 mǔ 母 yào 要 #@jiē 接# dài 待 yì 一 xiē 些 kè 客 rén 人 ， ràng 让 jí 吉 mǐ 米 yě 也 guò 过 qù 去 。吉 jí mǐ 米 gǎn 感 dào 到 tóu 头 #@téng 疼# ， yīn 因 wèi 为 tā 他 de 的 fù 父 mǔ 母 duō 多 #@cì 次# xiǎng 想 gěi 给 tā 他 jiè 介 shào 绍 #@nǚ 女# péng 朋 yǒu 友 。 tā 他 jué 觉 de 得 zì 自 jǐ 己 yí 一 gè 个 rén 人 yě 也 tǐng 挺 kuài 快 #@lè 乐# de 的 ， yě 也 jīng 经 cháng 常 #@tóng 同# péng 朋 yǒu 友 yì 一 qǐ 起 chū 出 qù 去 。 tā 他 hěn 很 xiǎng 享 #@shòu 受# mù 目 qián 前 de 的 shēng 生 huó 活 ， bù 不 xī 希 wàng 望 yǒu 有 suǒ 所 #@gǎi 改# biàn 变 。</p>',
    text_language: 'mandarin'
}

jatos.onLoad(
    jsPsych.init({
        //Questionaire:
        //production timeline:
        //timeline: [info, contact, personal, gender, background, dominant_languages, language_details, musical_summary, musical_detail],
        //timeline for testing: 
        //timeline: [contact, personal, musical_summary, musical_detail],
        timeline: [rpcv],
        show_progress_bar: true,
        exclusions: {
            min_width: 800,
            min_height: 600
        },
        //Checks how many times user left if it's more than 10, triggers invalid flag
        on_interaction_data_update: function (data) {
            if (data.event == "blur") {
                console.log(data);
                blur_count++;
                if (blur_count > 10) {
                    likely_invalid = true;
                }
            };
        },
        on_finish: function (data) {
            var resultsRaw = jsPsych.data.get();
            var results = resultsRaw.ignore('internal_node_id');
            var resultsJSON = results.json();
            resultsJSON = '"' + jatos.studyResultId + '": ' + resultsJSON;
            jatos.submitResultData(resultsJSON, jatos.startNextComponent);
        }
    })
);