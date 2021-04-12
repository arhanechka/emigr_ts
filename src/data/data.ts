const Conditions = 
[
  {
    name: 'Climate',
    values: ["cold", "warm", "hot","no difference"]
  },
  {
    name: 'World part',
    values: ["Europe", "North America", "South America","Australia", "no difference"]
  },
  {
    name: 'Life Raiting',
    values: ["500-1000", "1000-2000", "2000-3000","3000-4000", "5000 and more"]
  },
  {
    name: 'Education Possibility',
    values: ["true", "false"]
  },
]

const Preconditions = 
[
  {
    name: 'Age',
    values: ["18 - 25", "25 - 35", "30 - 40","40 - 50", "50 +"]
  },
  {
    name: 'Profession area',
    values: ["Information technologies", "Labour", "Service","Medicine", "Education"]
  },
  {
    name: 'Family composition',
    values: ["single", "two", "three","four", "five or more"]
  },
  {
    name: 'Savings',
    values: ["without savings", "1 - 5 thousands", "5 - 10 thousands", "10 - 20 thousands", "20 - 30 thousands", "30 or more thousands"]
  },
  {
    name: 'Passive Income',
    values: ["0 - 1 thousands", "1 - 2 thousands", "2 - 3 thousands", "3 - 5 thousands", "5 thousand or more", "No passive income"]
  },
]

export interface IConditionsContext {
  data: {
    name: string,
    values: string[]
  }[],
  title: string,
  link: string
}

export const preconditions = {
  data: Preconditions,
  title: 'Preconditions',
  link: '/cond'
}

export const conditions = {
  data: Conditions,
  title: 'Conditions',
  link: '/datacenter'
}

// export const ConditionsContext = React.createContext<IConditionsContext>({
//   data: Conditions,
//   title: 'Conditions',
//   link: '/cond'
// })

// export const PreconditionsContext = React.createContext<IConditionsContext>({
//   data: Preconditions,
//   title: 'Preconditions',
//   link: '/precond'
// })



  

