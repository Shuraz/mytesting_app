import React from 'react';
import Counter from '../Counter';
import {cleanup, fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//repetative code here
let getByTestId;
beforeEach(()=>{
    const component = render(<Counter/>);
    getByTestId = component.getByTestId;
})

//cleaning the DOM; this is not necessary in react as create-react-app does it selfl.
// afterEach(()=>{
//     cleanup();
// })

test("Header render with corrent text",
    ()=>{
        // const component =render(<Counter/>);
        // const headerEl = component.getByTestId("header");

        //other way using destructure
        // const {getByTestId}= render(<Counter/>);
        const headerEl= getByTestId("header");
        expect(headerEl.textContent).toBe("My Counter");
    }
)

test("Counter value is 0",
()=>{ 
    // const {getByTestId}= render(<Counter/>);
    const counterEl= getByTestId("counter");
    expect(counterEl.textContent).toBe('0');
}
)

test("Input value is 1",
()=>{
    // const {getByTestId}= render(<Counter/>);
    const inputEl=getByTestId("input");
    expect(inputEl.value).toBe("1");
}
)

test("add button render with +",
()=>{
    // const {getByTestId}= render(<Counter/>);
    const addBtn= getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+");
}
)

test("subtract button render with -",
()=>{
    // const {getByTestId}= render(<Counter/>);
    const subtractBtn= getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-");
}
)

test("Changing input value",
    ()=>{
        // const {getByTestId}= render(<Counter/>);
        const inputEl= getByTestId("input");
        expect(inputEl.value).toBe("1");
        fireEvent.change(inputEl,{
            target:{
                value:"5"
            }
        });
    }
)

test("Increasing the counter value with + button",
()=>{
    // const {getByTestId}= render(<Counter/>);
    const counterEl=getByTestId("counter");
    const addBtn= getByTestId("add-btn");
    expect(counterEl.textContent).toBe("0");
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe("1");
}
)

test("Decreasing the counter value with - button",
()=>{

    // const {getByTestId}= render(<Counter/>);
    const counterEl= getByTestId("counter");
    const subtractBtn= getByTestId("subtract-btn");
    expect(counterEl.textContent).toBe("0");
    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe("-1");

})

test("increasing counter with input value and button",
()=>{
    // const {getByTestId}= render(<Counter/>);
    const counterEl = getByTestId("counter");
    const addBtn = getByTestId("add-btn");
    const inputEl= getByTestId("input");

    expect(counterEl.textContent).toBe("0");
    fireEvent.change(inputEl,
    { target:{value:5}
    })
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe("5");
}
)

test("decreasing counter with input value and - button",
()=>{
    // const {getByTestId}= render(<Counter/>);
    const counterEl = getByTestId("counter");
    const subtractBtn = getByTestId("subtract-btn");
    const inputEl= getByTestId("input");

    expect(counterEl.textContent).toBe("0");
    fireEvent.change(inputEl,
    { target:{value:5}
    })
    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe("-5");
}
)

test("decreasing and increasing with random input value and clicking + and - button",
()=>{
    // const {getByTestId}= render(<Counter/>);
    const counterEl = getByTestId("counter");
    const subtractBtn = getByTestId("subtract-btn");
    const addBtn = getByTestId("add-btn");
    const inputEl= getByTestId("input");

    expect(counterEl.textContent).toBe("0");

    fireEvent.change(inputEl,
    { target:{value:5}
    })
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe("-15");

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe("0")
}
)

test("counter value is red if less then 100; it is green it greater than or equal to 100",
()=>{
    // const {getByTestId}= render(<Counter/>);
    const counterEl = getByTestId("counter");
    const subtractBtn = getByTestId("subtract-btn");
    const addBtn = getByTestId("add-btn");
    const inputEl= getByTestId("input");

    expect(counterEl.textContent).toBe("0");
    expect(counterEl.className).toBe("");
    fireEvent.change(inputEl,
    { target:{value:99}
    })
    fireEvent.click(subtractBtn);
    expect(counterEl.className).toBe("");
    expect(counterEl.textContent).toBe("-99");
     fireEvent.click(subtractBtn);
    expect(counterEl.className).toBe("red");
    fireEvent.click(subtractBtn);
    expect(counterEl.className).toBe("red");

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
   expect(counterEl.className).toBe("");
    fireEvent.click(addBtn);
    expect(counterEl.className).toBe("");
     fireEvent.click(addBtn);
     expect(counterEl.className).toBe("green");
}
)