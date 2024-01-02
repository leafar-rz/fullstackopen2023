//EJERCICIO 1.1: información del curso, paso 1

const Header = (props: { course: string;}) => {
    console.log(props)
    return (
      <div>
        {props.course}
      </div>
    )
  }
  
  /* const Part = (props: { part: string; exercises: number;}) => {
    console.log(props)
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    )
  } */
  
  /* const Content = (props: { part1: string; exercises1: number; part2: string; exercises2: number; part3: string; exercises3: number;}) => {
    console.log(props)
    return (
      <div>
         <Part part={props.part1} exercises={props.exercises1}/>
  
         <Part part={props.part2} exercises={props.exercises2}/>
  
         <Part part={props.part3} exercises={props.exercises3}/>
  
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </div>
    )
  } */
  
  const Footer = () => {
    return (
      <div>
        greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
      </div>
    )
  }
  
  /* const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header course={course} />
  
        <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      
        <Footer />
        
      </div>
    )
  } */
  
  
  const Part = (props: { part: string; exercises: number;}) => {
    //console.log(props)
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    )
  }
  
  const Content = (props: { parts: any; }) => {
    console.log(props);
    return (
      <div>
        
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
  
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
  
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </div>
    )
  }
  
  const Total = (props: { parts: any; }) => {
    console.log(props);
    const total=(props.parts[0].exercises)+(props.parts[1].exercises)+(props.parts[2].exercises);
    return (
      <div>
        <h3>Total: {total}</h3>
        </div>
    )
  }
  
  const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
      <div>
        <Header course={course} />
  
     
        <Content parts={parts} />
  
        <Total parts={parts} />
      
        <Footer />
        
      </div>
    )
  }
  
  
  
  export default App