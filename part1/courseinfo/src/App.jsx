const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 part={props.subjects[0].part} exercises={props.subjects[0].exercises} />
      <Part2 part={props.subjects[1].part} exercises={props.subjects[1].exercises} />
      <Part3 part={props.subjects[2].part} exercises={props.subjects[2].exercises} />
    </div>
  )
}

const Part1 = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Part2 = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Part3 = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}


const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>
  )
}

const App = () => {

  const course = {
    title: 'Half Stack application development',
    subjects: [
      {part: 'Fundamentals of React', exercises: 10},
      {part: 'Using props to pass data', exercises: 7},
      {part: 'State of a component', exercises: 14}
    ]
  }

  return (
    <div>
      <Header title={course.title} />
      <Content subjects={course.subjects} />
      <Total exercises={course.subjects} />
    </div>
  )
}

export default App
