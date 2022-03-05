const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addBtn = document.getElementById('addedbtn')
const deleteBtn = document.getElementById('deletedbtn')
const list = document.getElementById('list')

const listContent = []

addBtn.addEventListener('click',function(){
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)

    listContent.push({
        content:content.value,
        date: date.value,
        time: time.value
    })

    // console.log(listContent)

    let htmlstr =''

    listContent.forEach(function(item){
        // console.log('item',item)
        // 利用模板語法寫字串 ``:可以插入換行，且可以直接插入變數
        htmlstr = htmlstr +`
        
        <div class="item">
            <div>
                <p>內容:${item.content}</p>
                <p>時間:${item.date}${item.time}</p>
            </div>
        </div>
        
        `
    })

    list.innerHTML=htmlstr
})

deleteBtn.addEventListener('click',function(){
    
    listContent.pop()

    // console.log(listContent)

    let htmlstr =''

    listContent.forEach(function(item){
        // console.log('item',item)
        // 利用模板語法寫字串 ``:可以插入換行，且可以直接插入變數
        htmlstr = htmlstr +`
        
        <div class="item">
            <div>
                <p>內容:${item.content}</p>
                <p>時間:${item.date}${item.time}</p>
            </div>
        </div>
        
        `
    })

    list.innerHTML=htmlstr
})