import fetch from "node-fetch";
import $ from 'cheerio'


(async()=>{
 const response =  await fetch('https://www.walottery.com/WinningNumbers/Default.aspx')
 const html = await response.text();
 const powerBallNumbers = $('.game-bucket-powerball li',html).toArray().map(x=>$(x).text()).join(' ')
 const megaMillionsNumbers = $('.game-bucket-megamillions li',html).toArray().map(x=>$(x).text()).join(' ')
 const lottoNumbers = $('.game-bucket-lotto li',html).toArray().map(x=>$(x).text()).join(' ')
 const hitFiveNumbers = $('.game-bucket-hit5 li',html).toArray().map(x=>$(x).text()).join(' ')
 const matchFourNumbers = $('.game-bucket-match4 li',html).toArray().map(x=>$(x).text()).join(' ')
 const pickThreeNumbers = $('.game-bucket-dailygame li',html).toArray().map(x=>$(x).text()).join(' ')
 const kenoNumbers = $('.game-bucket-keno li',html).toArray().map(x=>$(x).text()).join(' ')


 console.log({powerBallNumbers,megaMillionsNumbers,lottoNumbers,hitFiveNumbers,matchFourNumbers,pickThreeNumbers,kenoNumbers})
})()