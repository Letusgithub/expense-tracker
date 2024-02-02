const content = [
    [
        `This is a
        multi-line
        string in JSX`
    ],
    [
        "In jsx elements starting with ",
        "lowercase is considered as pre-defined and with",
        "uppercase is considered as user-defined",
        "example:",
        "<h1></h1> is pre-defined",
        "<App/> is user-defined"
    ],
    [
        "React component can return only one element",
        "example:",
        "return <div><p>hello</p></div>; it is ok because it return one div only",
        "return <div></div><h1>Heading</h1>; it is wrong because it reuturn two elements"
    ],
    [
        "<div class='expense-item'>Date</div> this is wrong way to add class",
        "because it is not html it is jsx thats why here instead of class we use className",
        "because class is reserved keyword in JS",
        "here is the correct way to add class to div element <div className='expense-item'>Date</div>"
    ],
    [
        "JSX allow us to run basic js expression using {basic js expression}",
        "example:",
        "<div>{Math.random()}</div>"
    ],
    [
        "we can pass data to components using props(stands for properties) which is basically attibutes in html",
        "example:",
        ""
    ],
    [
        "In JSX, you cannot directly use a for loop like you would in regular JavaScript.",
        "Instead, you can use the JavaScript map function to iterate over an array and render JSX elements dynamically.",
        "Here's an example of how you can use a for loop equivalent in JSX using the map function:",
        `example code :
        const MyComponent = () => {
            const items = ['Item 1', 'Item 2', 'Item 3'];
            return (
              <div>
                {items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            );
        };`
    ],
    [
        `// below code is of App.js
        return (
            <div>
                {expenses.map((item, index) => (
                    <ExpenseItem
                        key = {index}
                        expense = {item}
                    />
                ))}
            </div>
        );


        // below code is of ExpenseItem.js
        // here whole object is passed in props
        function ExpenseItem(props) {
            return (
                <div className='expense-item'>
                    <div>{props.expense.date.toDateString()}</div>
                    <div className='expense-item__description'>
                        <h2>{props.expense.title}</h2>
                        <div className='expense-item__price'>$-{props.expense.amount}</div>
                    </div>
                </div>
            );
        }`
    ],
    [
        `// below code is of App.js
        return (
            <div>
                {expenses.map((item, index) => (
                    <ExpenseItem
                        key = {index}
                        date = {item.date}
                        title = {item.title}
                        amount = {item.amount}
                    />
                ))}
            </div>
        );


        // below code is of ExpenseItem.js
        // this is called object de-structuring(vanilla js property)
        function ExpenseItem({date, title, amount}) {
            return (
                <div className='expense-item'>
                    <div>{date.toDateString()}</div>
                    <div className='expense-item__description'>
                        <h2>{title}</h2>
                        <div className='expense-item__price'>$-{amount}</div>
                    </div>
                </div>
            );
        }`
    ],
    [
        `// Example of wrapper component
        // here children is reserved keyword
        export default function Card(props) {
            const classes = 'card ' + props.className;
            return <div className = {classes}>{props.children}</div>
        }`
    ],
    [
        ` both return statements are equivalent
        first one use JSX
        second one use only reactJS  
        return (
            <div>
                <h2>Let's get started!</h2>
                <Expense expenses = {expenses}/>
            </div>
        );
    
        return React.createElement(
            'div',
            {},
            React.createElement('h2', {}, "Let's get started!"),
            React.createElement(Expense, { expenses: expenses }
        ));`
    ],
    [
        `NOTE::Always prefer(if possible) single state over multi state because it is easy to handle
        
        In case of single state with data as an object
        // this may fail sometimes because it depends on previous state value (unsafe way)
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });

        // instead of that you should do like this it will work fine (safer way)
        setUserInput((prevState) => {
            return{...prevState, enteredTitle : event.target.value};
        })`
    ],
    [
        `
        this is NOT-recommended this may lead to bug
        {props.expenses.map((item, index) => (
            <ExpenseItem
                key={index}
                expense={item}
            />
        ))}
        
        
        this is recommended
        {props.expenses.map((item) => (
            <ExpenseItem
                key={item.id}
                expense={item}
            />
        ))}
        `
    ],
    [
        `
        {filteredExpenses.length === 0 ? <p>No expenses found.</p> :
            filteredExpenses.map((item) => (
                <ExpenseItem
                    key={item.id}
                    expense={item}
                />
            ))
        }
        the above long ternary expression can also be written like this
        
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
            filteredExpenses.map((item) => (
                <ExpenseItem
                    key={item.id}
                    expense={item}
                />
            ))
        }
        

        OR this 
        let expensesContent = <p>No expenses found.</p>;
        if (filteredExpenses.length > 0) {
            expensesContent = filteredExpenses.map((item) => (
                <ExpenseItem key={item.id} expense={item} />
            ));
        }

        then render {expensesContent}
        `
    ]
];