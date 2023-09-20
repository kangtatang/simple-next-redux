import Todo from '@/components/Todo'
export default function About () {
  return (
    <div className='container'>
      <div className='row'>
        <div>
          <div className='col-md-12 bg-secondary'>
            <h2>About</h2>
          </div>
          <div>
            <Todo />
          </div>
        </div>
      </div>
    </div>
  )
}
