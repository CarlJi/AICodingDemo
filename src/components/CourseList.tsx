import { useState } from 'react'
import { Student, Course, SelectedCourse } from '../types'
import './CourseList.css'

interface CourseListProps {
  student: Student
  onLogout: () => void
}

const mockCourses: Course[] = [
  {
    id: '1',
    name: '高等数学',
    teacher: '张教授',
    time: '周一 8:00-10:00',
    location: '教学楼A101',
    capacity: 100,
    enrolled: 85,
    description: '微积分基础课程',
  },
  {
    id: '2',
    name: '大学英语',
    teacher: '李老师',
    time: '周二 14:00-16:00',
    location: '教学楼B201',
    capacity: 80,
    enrolled: 72,
    description: '英语听说读写综合训练',
  },
  {
    id: '3',
    name: '计算机程序设计',
    teacher: '王教授',
    time: '周三 10:00-12:00',
    location: '实验楼C301',
    capacity: 60,
    enrolled: 58,
    description: 'Python编程基础',
  },
  {
    id: '4',
    name: '中国近代史',
    teacher: '赵老师',
    time: '周四 14:00-16:00',
    location: '教学楼A203',
    capacity: 120,
    enrolled: 95,
    description: '1840年以来的中国历史',
  },
  {
    id: '5',
    name: '体育',
    teacher: '刘教练',
    time: '周五 8:00-10:00',
    location: '体育馆',
    capacity: 50,
    enrolled: 45,
    description: '篮球、足球、羽毛球等',
  },
]

const CourseList = ({ student, onLogout }: CourseListProps) => {
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([])
  const [activeTab, setActiveTab] = useState<'available' | 'selected'>('available')

  const handleSelectCourse = (course: Course) => {
    if (selectedCourses.find((c) => c.id === course.id)) {
      alert('您已经选过这门课了')
      return
    }

    if (course.enrolled >= course.capacity) {
      alert('该课程已满,无法选课')
      return
    }

    const selectedCourse: SelectedCourse = {
      ...course,
      selectedAt: new Date(),
    }
    setSelectedCourses([...selectedCourses, selectedCourse])
    alert('选课成功!')
  }

  const handleDropCourse = (courseId: string) => {
    if (window.confirm('确定要退选这门课吗?')) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== courseId))
      alert('退课成功!')
    }
  }

  const isSelected = (courseId: string) => {
    return selectedCourses.some((c) => c.id === courseId)
  }

  return (
    <div className="course-list-container">
      <header className="header">
        <h1>哈师大选课系统</h1>
        <div className="user-info">
          <span>欢迎, {student.name}</span>
          <button onClick={onLogout} className="logout-button">
            退出登录
          </button>
        </div>
      </header>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'available' ? 'active' : ''}`}
          onClick={() => setActiveTab('available')}
        >
          可选课程 ({mockCourses.length})
        </button>
        <button
          className={`tab ${activeTab === 'selected' ? 'active' : ''}`}
          onClick={() => setActiveTab('selected')}
        >
          已选课程 ({selectedCourses.length})
        </button>
      </div>

      <div className="content">
        {activeTab === 'available' ? (
          <div className="courses-grid">
            {mockCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <h3>{course.name}</h3>
                  <span
                    className={`capacity-badge ${
                      course.enrolled >= course.capacity ? 'full' : ''
                    }`}
                  >
                    {course.enrolled}/{course.capacity}
                  </span>
                </div>
                <div className="course-info">
                  <p>
                    <strong>教师:</strong> {course.teacher}
                  </p>
                  <p>
                    <strong>时间:</strong> {course.time}
                  </p>
                  <p>
                    <strong>地点:</strong> {course.location}
                  </p>
                  <p className="course-description">{course.description}</p>
                </div>
                <button
                  onClick={() => handleSelectCourse(course)}
                  className={`select-button ${
                    isSelected(course.id) ? 'selected' : ''
                  }`}
                  disabled={isSelected(course.id)}
                >
                  {isSelected(course.id) ? '已选' : '选课'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="courses-grid">
            {selectedCourses.length === 0 ? (
              <div className="empty-state">
                <p>您还没有选课,请到"可选课程"中选择课程</p>
              </div>
            ) : (
              selectedCourses.map((course) => (
                <div key={course.id} className="course-card selected-card">
                  <div className="course-header">
                    <h3>{course.name}</h3>
                    <span className="selected-badge">已选</span>
                  </div>
                  <div className="course-info">
                    <p>
                      <strong>教师:</strong> {course.teacher}
                    </p>
                    <p>
                      <strong>时间:</strong> {course.time}
                    </p>
                    <p>
                      <strong>地点:</strong> {course.location}
                    </p>
                    <p className="course-description">{course.description}</p>
                  </div>
                  <button
                    onClick={() => handleDropCourse(course.id)}
                    className="drop-button"
                  >
                    退课
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseList
