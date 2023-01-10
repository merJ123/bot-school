const TelegramApi = require('node-telegram-bot-api')

const token = '5638069951:AAF1xZK-NtsIiN6qSRDttuBNpUMtSKS3NKo'

const bot = new TelegramApi(token, {polling: true})


let name = '';
let num = '';
let school = '';
let messageId = '';

//костыльно инстаграмы начало 

const schools = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '125 High School Taraz International 🏫', callback_data: 'TarazInt'}],
            [{text: '125 High School Taraz  🏫', callback_data: 'Taraz'}],
            [{text: '125 High School Taldyqorgan 🏫', callback_data: 'Taldyqorgan'}],
            [{text: '125 UBT School Oral 🏫', callback_data: 'Oral'}],
            [{text: '125 High School Almaty -1 🏫', callback_data: 'Almaty1'}],
            [{text: '125 High School Almaty -2 🏫', callback_data: 'Almaty2'}],
            [{text: '125 High School Taraz ENT 🏫', callback_data: 'TarazENT'}],
            [{text: '125 High School Taraz UBT 🏫', callback_data: 'TarazUBT'}],
            [{text: '125 High School Shymkent-1 🏫', callback_data: 'Shymkent1'}],
            [{text: '125 High School Shymkent-2 🏫', callback_data: 'Shymkent2'}],
            [{text: '125 High School Shymkent academy 🏫', callback_data: 'ShymkentAcademy'}],
            [{text: '125 High School Qyzylorda 🏫', callback_data: 'Qyzylorda'}],
            [{text: '125 High School Semey 🏫', callback_data: 'Semey'}],
            [{text: '125 High School Aqtobe 🏫', callback_data: 'Aqtobe'}],
            [{text: '125 High School Turkistan 🏫', callback_data: 'TarazInt'}],
        ]
    })
}

const inst = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: "https://instagram.com/125highschool.kz?igshid=YmMyMTA2M2Y="}]
        ]
    })
}

const instTarazInt = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125international.school.trz?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7076969125'}],
        ]
    })
}
const instTaraz = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.taraz?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/77764444125'}],
        ]
    })
}
const instAlmaty1 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.almaty?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7088080412'}],
        ]
    })
}
const instAlmaty2 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.almaty2?igshid=YTY2NzY3YTc='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7064125125'}],
        ]
    })
}
const instTaldyq = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.taldyqorgan?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/77001250200'}],
        ]
    })
}
const instTarazENT = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125entschool.taraz?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/77001250891'}],
        ]
    })
}
const instTarazUBT = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125ubtschool.taraz?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7714455125'}],
        ]
    })
}

const instShym1 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.shymkent?igshid=MWI4MTIyMDE='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7774722594'}],
        ]
    })
}
const instShym2 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.shymkent2?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7476346025'}],
        ]
    })
}
const instQyzylorda = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.kyzylorda?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7471252020'}],
        ]
    })
}

const instSemey = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.semey?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7072413851'}],
        ]
    })
}

const instAqtobe = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125highschool.aqtobe?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7471250404'}],
        ]
    })
}

const instTurk = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://www.instagram.com/reel/Ckf88CNgoIv/?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7719189402'}],
        ]
    })
}

const instOral = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/ubtschool.oral?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7471250125'}],
        ]
    })
}

const instShymAcad = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Instagram', url: 'https://instagram.com/125.academy_shymkent?igshid=YmMyMTA2M2Y='}],
            [{text: 'WhatsApp', url: 'https://wa.me/7476346025'}],
        ]
    })
}

//костыльно инстаграмы конец

//кнопки

const back = {
    reply_markup: {
        keyboard: [
            [{text: 'Артқа ⏪'}],
        ]
    }
}

const callback = {
    reply_markup: {
        keyboard: [
//             [{text: 'Өтініш қалдыру'}],
            [{text: 'Артқа ⏪'}],
        ]
    }
}

const options = {
    reply_markup: {
        keyboard:[
            [{text: '1-6🖊'}],
            [{text: '7-9🖍'}],
            [{text: '10-11🖋'}],
            [{text: 'Біз туралы ақпарат🖊'}],
            [{text: 'Біздің инстаграм🤳'}],
        ]
    }
}

const info = {
    reply_markup: {
        keyboard: [
            [{text: 'Мектеп тарихы'}],
            [{text: 'Бағыттар'}],
            [{text: 'Кітаптар'}],
            [{text: 'Мектеп формасы'}],
            [{text: 'Оқыту тілі'}],
            [{text: 'Оқу уақыты'}],
            [{text: 'Жеңілдіктер'}],
//             [{text: 'Өтініш қалдыру'}],
            [{text: 'Артқа ⏪'}],
        ]
    }
}

const schools1_6 = {
        reply_markup: {
            keyboard: [
                [{text: '125 High School Taraz International 🏫'}],
                [{text: '125 High School Taldyqorgan 🏫',}],    
                [{text: '125 UBT School Oral 🏫'}],
                [{text: 'Артқа ⏪'}],
            ]
        }
    }

const schools7_9 = {
        reply_markup: {
            keyboard: [
                [{text: '125 High School Taraz 🏫'}],
                [{text: '125 High School Taldyqorgan 🏫'}],
                [{text: '125 UBT School Oral 🏫'}],
                [{text: 'Артқа ⏪'}],
            ]
        }
    }

const schools10_11 = {
        reply_markup: {
            keyboard: [
                [{text: '125 High School Almaty -1 🏫'}],
                [{text: '125 High School Almaty -2 🏫'}],
                [{text: '125 High School Taraz 🏫'}],
                [{text: '125 High School Taraz ENT 🏫'}],
                [{text: '125 High School Taraz UBT 🏫'}],
                [{text: '125 High School Shymkent-1 🏫'}],
                [{text: '125 High School Shymkent-2 🏫'}],
                [{text: '125 High School Shymkent academy 🏫'}],
                [{text: '125 High School Qyzylorda 🏫'}],
                [{text: '125 High School Semey 🏫'}],
                [{text: '125 High School Aqtobe 🏫'}],
                [{text: '125 High School Turkistan 🏫'}],
                [{text: '125 High School Taldyqorgan 🏫'}],
                [{text: '125 UBT School Oral 🏫'}],
                [{text: 'Артқа ⏪'}],
            ]
        }
    }



//кнопки




const start = () =>{

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        switch(text){
            case '/start':
                await bot.sendPhoto(chatId, 'https://downloader.disk.yandex.ru/preview/8a11ceb214dc198c7dcd6ebd985ecec727f51288e3342b55bff3196a9d860246/638db215/uZqTM_IdedsKo8K0tGGcUz34wGpND6nCJ2l1TPi5tWnljXQ3a7rJ25jCmkB0mnHJS1XBtQkSTrHdVEgH59hSUA%3D%3D?uid=0&filename=DSC05604.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1642')
                await bot.sendMessage(chatId, "Сәлем, қош келдің?!\n— біздің қатарымыздан сен секілді өмірге позитивті көзқарастағы, білімге құштар, ақылды досты көргенімізге қуаныштымыз😍")
                // await bot.sendMessage(chatId, 'Біздің Instagram парақшамыз', inst)
                await bot.sendMessage(chatId, "Нешінші сыныпта оқисыз?", options)
                break
            case 'Артқа ⏪':
                await bot.sendMessage(chatId, "Нешінші сыныпта оқисыз?", options)
                break
        
// //выбор класса
            case '1-6🖊':
                bot.sendMessage(chatId, '1-6 сынып оқушыларына', schools1_6)
                break
            case '7-9🖍':
                bot.sendMessage(chatId, '7-9 сынып оқушыларына', schools7_9)
                break
            case '10-11🖋':
                bot.sendMessage(chatId, '10-11 сынып оқушыларына', schools10_11)
                break
            case 'Біздің инстаграм🤳':
                bot.sendMessage(chatId, 'Біздің инстаграм🤳', inst)
                break
            case 'Біз туралы ақпарат🖊':
                bot.sendMessage(chatId, 'Біз туралы ақпарат🖊', info)
                break
// //выбор класса

// //выбор школы
            case '125 High School Taraz International 🏫':
                msg.school = text
                console.log(msg.message_id)
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/0d6283228fb2fcf6067d471e18b929acf5618f4e1f6cc467a7af16a5f4a623b7/638db40d/Wc7zrs1nRh0BuU21MES4V8Up6pxYNcOvV_1lj4XhR5Es_3igigouaIUO1322NzBsipRO4vyrZjr72T4mvjKJwQ%3D%3D?uid=0&filename=IMG_8458.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`,instTarazInt)
                await bot.sendMessage(chatId, `Номер: +7 707 6969 125\nМекен жайы: Қолбасшы Қойгелді 81`,callback)
                break
            
            case '125 High School Taldyqorgan 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/64cf54f0fc8ff76b5739814456812c07fc41be3587dbb074e560a0ccf24188c7/638db449/c72mIVFsUmG0531OjUESfcUp6pxYNcOvV_1lj4XhR5GC2RbGfUgAqL620XmyzAqZlBzVHfO7ls8PzFn8I9raZw%3D%3D?uid=0&filename=IMG_8452.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instTaldyq)
                await bot.sendMessage(chatId, `Номер: +7 700 125 0200\nМекен жайы: Төлебаев, 46`, callback)
                break

            case '125 High School Taraz 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/4349dd45de6cd84893df04bef8b6aed72f697996ee9e5964c64efc2ca33ed71e/638db46f/sK3U2FOSXujm8py9V5F4MKk0vBXQLt6C2Q3yPcYSiJozRNoFHvzCNl55qlt1GROQGgavb56baE3Gkf4x-sEgsw%3D%3D?uid=0&filename=IMG_8436.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instTaraz)
                await bot.sendMessage(chatId, `Номер: +7 776 444 4125\nМекен жайы: Шостаковича 4а`, callback)
                break

            case '125 High School Almaty -1 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/fd970b91cb85f08a054925016876586110dec3c4589c3683da419cfa4eabb896/638dee13/jqsdsDxagsgxNouZy_1n-pMnARXl0IfdmCNdwWO6ppTFRZZD8-qeBr-jUmxQJcD6h6Qq-CEclVk4T0XhZVSiXg%3D%3D?uid=0&filename=IMG_8463.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instAlmaty1)
                await bot.sendMessage(chatId, `Номер: +7 708 808 0412\nМекен жайы: 1-й мкр 50/2`, callback)
                break
                
            case '125 High School Almaty -2 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/bf4b1088d8f4eb90089f43941446eb8b6c00ea63f60223bc546951096bfb03c5/638deedf/Ou0Hj__u9z4W85-jcloLscUp6pxYNcOvV_1lj4XhR5GAKV9DEoeGOkg8iEY4wL0kYferCXTfi8PmVK3ho2bn1w%3D%3D?uid=0&filename=IMG_8437.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instAlmaty2)
                await bot.sendMessage(chatId, `Номер: +7 706 4 125 125\nМекен жайы: Мамыр-4, 145В`, callback)
                break
            
            case '125 High School Taraz ENT 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/ec8c107b6e83b2895e27a08621a1962e17ff7483389d6fb5684fb42ed06a59d4/638df047/1qPkgeDzipEgL8ixxAQ6m69iNeTPfbUBUMUXKVrKAPWmYyPZoq5xWqOAiYA42GVDH-3Q5ZICmRtawut3qvsfqw%3D%3D?uid=0&filename=IMG_8435.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instTarazENT)
                await bot.sendMessage(chatId, `Номер: +7 700 125 0891\nМекен жайы: пр. Жамбыла 91`, callback)
                break
            
            case '125 High School Taraz UBT 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/b8c6a5c3219464104427c6cd60fcb59c53296fe4702164375456c2383a1fc040/638df13d/DM63ZihB3jIa1pXIF-E_dMUp6pxYNcOvV_1lj4XhR5HPKPhvMBphBtMA1_YnebeQjVWyjQqAALRvL4RrvYI4Vw%3D%3D?uid=0&filename=IMG_8460.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instTarazUBT)
                await bot.sendMessage(chatId, `Номер: +7 771 4455 125\nМекен жайы: Абая 85`, callback)
                break
            
            case '125 High School Shymkent-1 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/dcfa576589617f8ebde54d2bf98a086cb41e3dab1369408d68938f1ea3b10d6e/638df1ef/gpqtZuHJF9QVl7jnS1KGp5MnARXl0IfdmCNdwWO6ppQryH7xTh_f1FH0ZdbalKCzLluovPn5R50RP-sL3o2UsQ%3D%3D?uid=0&filename=IMG_8455.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instShym1)
                await bot.sendMessage(chatId, `Номер: +7 777 472 2594\nМекен жайы: Арғынбеков 132/3`, callback)
                break
            
            case '125 High School Shymkent-2 🏫':
                school = text
                // await bot.sendPhoto(chatId, "")
                await bot.sendMessage(chatId, `${school}`, instShym2)
                await bot.sendMessage(chatId, `Номер: +7 747 634 6025\nМекен жайы: Тауке хан 134`, callback)
                break
            
            case '125 High School Qyzylorda 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/e2984c1f4c6eed186bc503dd3afbab13160e1371504dd004752b4c02f76dc4fd/638df349/hf_5_0ZfVdFjMSnxhtodxbW0V6uGKHUBftblUXJXc-AYa5EIm_67Hs5p9c3TzpU_ax9tr0hf8pBvYU3dp6ZoxQ%3D%3D?uid=0&filename=IMG_8387.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instQyzylorda)
                await bot.sendMessage(chatId, `Номер: +7 747 125 2020\nМекен жайы: Байтұрсынова 151`, callback)
                break
            
            case '125 High School Semey 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/24600a29d3a4a5c5b9b6758bfae12e68cdecf8341ac68cb5ba8bf99fe64b2d7f/638df3d8/UoUxY6LWD_W-65xf6cPLnZMnARXl0IfdmCNdwWO6ppToIHzC9wnRr4r88XdROiHte45uaAo7bDsFRMXv1uP5RA%3D%3D?uid=0&filename=IMG_8454.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instSemey)
                await bot.sendMessage(chatId, `Номер: +7 707 241 3851\nМекен жайы: Гагарина 158`, callback)
                break
            
            case '125 High School Aqtobe 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/5bae06d9f57b28593138adcf275a94fdfdaecb2bf7dc4cb06eecd65b2786a99e/63905395/3XDU28J-_9ChHNc_lbTTMQof9sQFnQQN2VMnJJxJPLzB5KK2OsSSec5Ilo_wPdMz_SqvOS3NXoiZi8Y2UHpFMQ%3D%3D?uid=0&filename=IMG_8462.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048")
                await bot.sendMessage(chatId, `${school}`, instAqtobe)
                await bot.sendMessage(chatId, `Номер: +7 747 125 0404\nМекен жайы: 12Б мкр 104`, callback)
                break
            
            case '125 High School Turkistan 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/3eea6af882b357dc4f81161c883238662b03a398492b416ed0c8d7d3043a8279/638df50a/4WLnLXQ-ZE52zTLrBPMeesUp6pxYNcOvV_1lj4XhR5EOK6ukJxpK5uWEpSEi58HhmgpbXUIywc8cGcfmUiJD3A%3D%3D?uid=0&filename=IMG_8456.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instTurk)
                await bot.sendMessage(chatId, `Номер: +7 771 918 9402\nМекен жайы: Саттарханова 45`, callback)
                break
            
            case '125 UBT School Oral 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/c4e32862ca7ef9bdec2905d1cc1e44915980741d73535009a8123932aec45434/638df5f8/SyKrWZOHBpNrwPWMBoTcybW0V6uGKHUBftblUXJXc-Dbf1iPVhHKZZ4Q4A6517SbRK9k01t56_GdvGryXfifkg%3D%3D?uid=0&filename=IMG_8632.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instOral)
                await bot.sendMessage(chatId, `Номер: +7 747 125 0 125\nМекен жайы: Қасым Аманжолов 100`, callback)
                break
            
            case '125 High School Shymkent academy 🏫':
                school = text
                await bot.sendPhoto(chatId, "https://downloader.disk.yandex.ru/preview/cd9c69ec74ac91b48b015495e6ac5a8c943ea62631cec1456866c223967afbe7/638df1e6/yspiC3gqs-WkWx_b5br2yMUp6pxYNcOvV_1lj4XhR5HC7ncNJa4b51qmsDRgfmdgn0GuQscF08uhORj3YJGXlQ%3D%3D?uid=0&filename=IMG_8453.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2880x1642")
                await bot.sendMessage(chatId, `${school}`, instShymAcad)
                await bot.sendMessage(chatId, `Номер: +7 747 634 6025\nМекен жайы: Колхозная 61`, callback)
                break

// //выбор школы

// информация про школу начало

            case 'Мектеп тарихы':
                await bot.sendPhoto(chatId, 'https://downloader.disk.yandex.ru/preview/98eb99e4365e759a0cd0ac05c4ac521106f285c6d445c81f0772d3b960202d1a/63a2e0b2/uWR6l85mJ9vPORb-0TSuQU6CKELI6Ttuur2kdhmUt1C3ivIMNcBII_I63HSON2nN2T7Iumg1tdhHO2THXM6OfA%3D%3D?uid=0&filename=photo_2019-05-15%2012.28.55.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1642')
                await bot.sendMessage(chatId, "125 High school алғаш 2011 жылы Тараз қаласында шағын 2 аудиториясы бар ғимаратта 38 оқушымен курс болып ашылған. Мектеп негізін қалаушы, инвестор, саяхатшы - Есенов Әлібек Қамбарұлы 38 оқушыны 1 жыл бойы ҰБТ-ға дайындап жыл соңында 100% нәтиже көрсетті.\n\n2019 жылы Тараз қаласында ресми түрде алғашқы мектеп ашылды. Қазіргі таңда Қазақстан бойынша ресми түрде лицензиясы бар 13 мектеп, 2 курс орталықтары бар.")
                break
            
            case 'Бағыттар':
                await bot.sendMessage(chatId, "физика-математика\nбиология-химия\nджт-ағылшын\nгеография-математика\nинформатика-математика")
                break

            case "Кітаптар":
                await bot.sendMediaGroup(chatId, [
                    {
                        type: 'photo',
                        media: 'https://downloader.disk.yandex.ru/preview/041051ae4e6f8fbbdaf3188aa964a5ecbcf9c7da90045576d3889d7f2174285c/63a2e01b/cdxhnUJWcEFAh8zdYZM1bJ_SbBc8jcXDdZXmn3cq-_CLJpZLw3Lr8prAmfGV_B1Y4Y-kmpJ3sehOhd4qsRmYaA%3D%3D?uid=0&filename=2022-12-21%2011-10-38%20%281%29.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1642'
                    },
                    
                    {
                        type: 'photo',
                        media: 'https://lh3.googleusercontent.com/fife/AAbDypC2UbvLpgpthGKWY8THvaXPsieIAQn59Mc8m7nq2aQfq5qsTDzezqorX3fnbhkSwKx-3BC258CLWQF2hQiUbekKFIfwvc67oo9Z-xX3wiUb22042sn0JAHsTNEX8pW-yfennT8IrN1GT16jOOw4CFS9c9aa1Il0KpZzThw9QnSBel7-1zCP76lM2MiG4XfFT-1g70RjOodYIfmx5zgGSy3RMmRqMVTed7RN8VtwvstbtwnW-BrmHfs2urCkd46zfVbQGPFautyFYmpqfEK9t-G_Ig0HKOyxcgCV_Hdet71MrlL2_Gkr0LsbbTrFoBpsQ4qrMnWxhqwZxh0r6UkDxj-mwLBH0XDs5UpU_eBAiu05cLw461VEEmDij1SARD3DJ4X_6K2HoBPjTsB6Qa5Nz3JnizinW6Ygs0Eo8uxlyFZWglhRSqvXXvGOaZO7rQXrSkOjs0lRYtZc9LjtyqadQcCr4j7jyf2aKlq7J46v1KWGqQFudfI2rT96YIqX-PREGU_1UF-pwsg8cA1zeZ2o234HYiu-qun-q4KQRkQzDRDJt3rqxJxvhLcWVXcsAYnRZydCVghuOJLOPlIqLfYA1sTl0qcA0ATdhMpNoOrZWt0wnw2MQg5BMWrYYR3sXlbOSDlHPDsPPja_-qa46y7WD6fJD-NvcHp0OYsGoJsfCR53sGyB4vaPdCZRaC9SozM2o9HZ9M78HwfhCt9NbOj0xOc9cqAD2VC5EBuwsIabaYUDMlf4dUpKjLUiGd0CzZtNYve4Fu9pgvAHojul_wg9DAooFqlj-eDO4zsgD4tj2u5DPewUsxHMcsQh2jMHh8UK1pnLrw9lWXO_4tOYUSpBX-STKo_Br9Vp05n_XG1KwBbEy4KyoGhBngrX5_MYZivnd32OAFSzK2_WxOQgIzNnpw_WcYRZu6hIswRr0_o38cxhF0AmSzJGLYmfGVMFdFlgPm3eEbvtqRg5CfK3gbXHbb-BJd3mtbJhRWHCChS_VKb2HE-mLB6fL0EZJh63XeiAB-GDzaZ4SKXUXogAo9VZZMvZMhA9sWKEqyLrRS-JAVBrjf9HWAoBp1a1VvOLhimTiE9fY_Qd0-uhWAbIZZ1chRhMavIcBE_iVoAd-Lt3w_fqRzeKAgPoE41ATCX_0Y5uk8ESMvoUKiwOVACp49bQiR0UxksVgfDiLjQR4rPqzWHHR8Lf7VqQli_L-GMD7Hgy8ItKLuozzmMo8pR84Nydu-C57xtkyZlhneSYzjLmbvoIIQpm51g5htOWy7X0qc66SJfPLOoBLOfqXO4CCj2aoebN8torpkFZ2iQzySEwyNgHFEtRH_YOaHkNhOlKX3Cc5pMKkONhBs3p2yzo1HTWtKikgX19mcBZoqkRO-W8mdNcs1RYxGdrGTapSWAGvgEVVMpCtkOLUUgud12EmISNK8aJo9S-K2zlX5nzVmgfiDlQ1nc1ulfFH5QlF44dSMz-8pyo50groDfwZvCpfII=w2880-h1642'
                    },

                    {
                        type: 'photo',
                        media: 'https://downloader.disk.yandex.ru/preview/e361d8a359378f0d226a837066fb8e3c366387e3e5ec701f860113bf47356d62/63a2e01b/bgUm4-6mI-FAOA4_J0sly4rPy8QNbRXEc7JSygXfXoh5prxdBl9JOPOdyOiel7dz2OoT_hjS2K6AF96Ivz7Jpg%3D%3D?uid=0&filename=2022-12-21%2011-10-38%20%2814%29.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1642'
                    }
                ])
                await bot.sendMessage(chatId, '125high school  мектебінің Qazbilim республикалық орталығымен біріге отырып шығарған арнайы брендтік кітаптары.')
                break

            case 'Мектеп формасы':
                await bot.sendMediaGroup(chatId, [
                    {
                        type: 'photo',
                        media: 'https://downloader.disk.yandex.ru/preview/af3006b706f22daf4ff5888b3b801d4c82a71b244630d212651a60251f965093/63a2de7b/bfI6eVAcxA5duyy65oydEQFLU4amUZlq0ZyKYxxrsXZq6SuK8egnppC59FeYJvLJngk1wN4KpgCDSLpQtjE08g%3D%3D?uid=0&filename=DSC05151.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1642'
                    },
                    
                    {
                        type: 'photo',
                        media: 'https://lh3.googleusercontent.com/fife/AAbDypDFNCDBserlBe0rYS11NBLPXxzTjLZEgStUj7jEKybScSskfhglpC2DnIytxXPNt9o3P2_0BTkQUexZtfTB5jCBxc8J3Jrvhlh_zNfPabjoka5KKclW0UtQc5ubsQ5QRJUQRGV6ryMzvPSP_qNAe8AVIS-TuV3vRnqyJQuPCd3iUyFMnawF7Yt7k5UWFfp8nV78gj11Bji_2g3XKB1nznEnQfaqZ9uSAM77nrGHT1xomgrkYB1ZxM0bp48V85i6rrPhbY10TfmhTsp7P1ZubOB-1a2vqLvVFEYp9Cip00YWF54JUz69Z-603RY6wc1KgxHO4AO6H8pyC2zvUAchiJYqVII_7_yoa5e9MdwKd5exFzuNzsFdzpSdjEVPCA8vis-JcC-z5_1CWqyfXQuAbrf1uSekiTg-o_Eps7N6N4rjqHFD5ZhphAaQ2EYNv4G6CjR9UAz5FSe4VnDlVQkABXi-aBE2a6CA1lnwPy-x_2GYsfCNuSR3jgptLU9SHvLgb75gewXNLjpq6fCL9OLNESr70UOAMZvdAL1aCiGFH3KEY4db-_qdGDLsar8DzdC5oRIrhyGc7PKMC4-KOLyNIQXaVjpiTxmt34WmaTHnlAbqCvL2-_khilHrR29mbntyvwah5tC_dbDE6-fuUjepC1C8kf-Y3S4vzidRLXzOoy0gcACr0HPt3V4O0FefQShHmUP2dNf6lIeScmtEgMG8sspKRwjBlWekLAZ0rlqIGfk0oabMOqRcYvgkdIMbcU0AewsgxFM8B4yMPCnfIWZH98STCVcUi9W9lTOpHKTiL5RTsWFXN8gtGdUhzQHr0YNeTWWXYbZO8Q1lIdCOt-os9iMsR2jdpe8XD423SCBYO5FU9LN822POcHtIGjGjr6_VMNsPFjZA9uSXs3nbOFjYQZn0H16fRCpghlxKKorm-0siMS0IF-RIkN14082pEPm1NdCC0ahPNu29EOlDvL1RS8JjFtcms5zQvj8X5J0rZ2SjidOr71ph6k7aJyqAnhfvrRMzpQQjOsbVziPxY8d5OFMwOwEdWXvXa2lAfmJtOLGLOWYJk00AV46Un3A_03RXH_POb1fhwis4BzcpE8recAm0I8-PkZhiTPtqqsKGXtCtiVMtWquO0Wl_qOaRBhHVPdm5zkH1u2CHR8H3rvsjFzjA9XbCCyxTcvjbnqYM9Vj2z7i31bgMRwiSjvarmkPkJULXhAb6Ncy6I2_NoC_VIhaYaGymSMAU9xFD0Ho8uGw96HJx6IGbkEl2HqGjbqv-iwOytqcxJ6HxSkmTS3GMeGGrddzEz-H2sue0m6Bd43ndw--SnPWYpvt8OdzCdOE-Wt2J6mZKiospS04twtXe0DbvFHMPkNRQmGR_YBqQ3JMROCBIfErAgTw5tRacNmGLipw_WOETAJHc9kLkwZChEpQnHracTvlFp4YRTVDb5AUw-EJjsdA8ZjFT8cRa0ppmOO--Vym6Q-mFZQh_zog=w2880-h1642'
                    },

                    {
                        type: 'photo',
                        media: 'https://downloader.disk.yandex.ru/preview/9666e21a6da2c2407d63665562591f0b1303f45b54b5cf3b4d17299b3b28a7d6/63a2de7b/bmD5deIIOpXwa1bygXWi-oAspVMROqqd3Oqv9GufNiwitCCHnhYE9QdnsUVF9zxB_EtwvM9m7EpYfcvX24wfhQ%3D%3D?uid=0&filename=DSC05139.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1642'
                    }
                ])
                await bot.sendMessage(chatId, 'Арнайы мектеп логотипімен тігілген бомбер мен футболка.')
                break

            case 'Оқыту тілі':
                await bot.sendMessage(chatId, 'Қазақ тілі\nОрыс тілі\nАғылшын тілі')
                break

            case "Оқу уақыты":
                await bot.sendMessage(chatId, "9.00-17.00 аралығы")
                break

            case 'Жеңілдіктер':
                await bot.sendMessage(chatId, "Көп балалы отбасыға 10%\n\nБір отбасыдан 2 бала оқыса -20%\n\nЖылдық төлемақы жасаса - 10%\n\nБілім басқармасының ұйымдастыруымен қатысқан қалалық, облыстық, республикалық олимпиаданың 1,2,3ші орындарына 30%, 50%, 70% ( соңғы 1 жыл аралығында)")
                break

// информация про школу конец

// //заявка

//             case 'Өтініш қалдыру':
//                 bot.sendMessage(chatId, "Қай мектепке тоқталдыңыз", schools)

//                 bot.on('callback_query', async msg =>{
//                     const data = msg.data
//                     const channelId = -1001726672814
//                     const name = msg.message.chat.first_name
//                     const username = msg.message.chat.username

//                     await bot.sendMessage(channelId, `Школа: ${data}\nИмя: ${name}\nusername: https://t.me/${username}`)
//                     await bot.sendMessage(chatId, "Біз сізбен байланысқа шығамыз☺️", back)
//                 })

//                 break

// //заявка

            default:
                break
        }

    })

}

start()
