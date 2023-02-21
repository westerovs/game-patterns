import Student from './specialists/Student.js'
import Doctor from './specialists/Doctor.js'
import Teacher from './specialists/Teacher.js'

export default class Fabric {
  create({ name, specialist }) {
    switch (specialist) {
      case 'Студент':
        return new Student().create(name)
      case 'Врач':
        return new Doctor().get(name)
      case 'Преподаватель':
        return new Teacher().render(name)
      default:
        return null
    }
  }
}
