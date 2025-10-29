import { useState } from 'react'
import { Student } from '../types'
import './Login.css'

interface LoginProps {
  onLogin: (student: Student) => void
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('请输入用户名和密码')
      return
    }

    if (password === '123456') {
      const student: Student = {
        id: Date.now().toString(),
        username,
        name: username,
      }
      onLogin(student)
    } else {
      setError('用户名或密码错误')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">哈师大选课系统</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">学号</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="请输入学号"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            登录
          </button>
          <div className="login-hint">提示: 密码为 123456</div>
        </form>
      </div>
    </div>
  )
}

export default Login
