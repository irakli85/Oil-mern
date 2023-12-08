import React from "react"

const TableHead = () => {
    return(   
        <thead>  
            <tr>
                <th>C ნომერი</th>
                <th>რეგ. თარიღი</th>
                <th>საწყობი</th>
                {/* <th>საწყობი ს/კ</th> */}
                <th>გამგზ. ქვეყანა</th>
                <th>დანიშ. ქვეყანა</th>
                <th>შემოსვლის სგპ</th>
                <th>გამგზავნი</th>
                <th>მიმღები</th>
                <th>დეკლ.</th>
                <th>დეკლ. ს/კ</th>
                <th>ტრანსპ.</th>
                <th>საქონელი</th>
                <th>საქ. კოდი</th>
                <th>წონა ნეტო</th>
                {/* <th>წონა ბრუტო</th> */}
                <th>ვადა</th>
                <th>რეზერვუარი</th>
                <th>პროც.</th>
                <th>სტატუსი</th>
                <th>ვადის თარიღი</th>
            </tr>
        </thead>           
    )
}

export default TableHead