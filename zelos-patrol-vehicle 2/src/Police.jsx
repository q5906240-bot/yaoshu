import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Menu, X, ChevronRight, Shield, Zap, Eye, Radio, 
  AlertCircle, Users, MapPin, Package, Megaphone, 
  MessageSquare, Camera, Car, Navigation, Bell, 
  Volume2, Phone, Gauge, Battery, Thermometer,
  Droplets, Mountain, Wind, Sun, Moon, Cloud,
  CheckCircle2, Award, Wrench, Truck, Wifi, PaintBucket,
  Mail, MapPinned, PhoneCall, Flame, Siren, Video,
  Lock, Unlock, Smartphone, Radar, Satellite, Activity,
  Server, Database, ShieldCheck, HardDrive, Cpu
} from 'lucide-react'
import vehicle1 from './assets/vehicle1.png'
import vehicle2 from './assets/vehicle2.png'
import logo from './assets/logo.png'

function Police() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="耀数科技" className="h-12 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['首页', '产品介绍', '功能特性', '技术优势', '服务保障', '联系我们'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'product', 'features', 'technology', 'service', 'contact'][index])}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {['首页', '产品介绍', '功能特性', '技术优势', '服务保障', '联系我们'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'product', 'features', 'technology', 'service', 'contact'][index])}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6">
                L4级自动驾驶标杆制造商
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                智越山海<br />道惠八方
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                开放道路全无人标准产品量产落地专家<br />
                专注无人智能移动作业平台，交付高可靠、可扩展的AI全栈方案
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('product')}
                  className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2"
                >
                  <span>了解更多</span>
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-blue-600/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-blue-600/30 transition-all border-2 border-white/30"
                >
                  联系我们
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={vehicle1} alt="无人巡逻车" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="text-blue-600" size={24} />
                  <span className="font-bold text-gray-900">360°安全防护</span>
                </div>
                <p className="text-sm text-gray-600">1200万+公里安全行驶记录</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Z5 无人巡逻车
            </h2>
            <p className="text-xl text-gray-600">
              "智护"新时代 "智享"新生活
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 普通版 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <img src={vehicle1} alt="普通版" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">普通版</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">适用场景：厂区、园区、景区、校区、城市开放道路等</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">从工业厂区到城市开放道路，以集束巡航机制为巡逻力量赋能</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">轻触移动终端，即可全域在线，关键基础断时锁定</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 伴飞无人机版 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-2 border-blue-500"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                <img src={vehicle2} alt="伴飞无人机版" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                  旗舰版
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">伴飞无人机版</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">适用场景：城市开放道路、城市地标、大型活动等</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">全域L4级自动驾驶算法，空地协同三位一体</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">伴飞无人机垂直极限锁定，清晰实时回传即时取证</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 技术参数 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">技术规格参数</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Gauge, label: '最大速度', value: '40 km/h' },
                { icon: Battery, label: '空载续航', value: '260 km' },
                { icon: Thermometer, label: '工作温度', value: '-30~60°C' },
                { icon: Droplets, label: '防水等级', value: 'IP55' },
                { icon: Mountain, label: '最大爬坡', value: '20% (11.3°)' },
                { icon: Package, label: '载重', value: '800 kg' },
                { icon: Car, label: '外形尺寸', value: '3715×1400×2150 mm' },
                { icon: Zap, label: '电池容量', value: '18.4 kWh' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <item.icon className="text-blue-600" size={24} />
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                  <div className="text-lg font-bold text-gray-900">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              无人车 — 功能总览
            </h2>
            <p className="text-xl text-gray-600">
              全方位智能巡逻解决方案
            </p>
          </motion.div>

          {/* 基础功能 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">基础巡逻功能</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Navigation, label: '自动巡航', desc: '自主规划路径' },
                { icon: Shield, label: '自主避障', desc: '智能识别障碍' },
                { icon: Bell, label: '警灯警报', desc: '声光警示系统' },
                { icon: Volume2, label: '语音播报', desc: '实时语音提示' },
                { icon: Megaphone, label: '远程喊话', desc: '远程双向通话' },
                { icon: Users, label: '招手即停', desc: 'AI识别招手' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 智能监控 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">智能监控功能</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Eye, label: '实时监控', desc: '360度全方位' },
                { icon: Phone, label: '双向通话', desc: '实时语音通信' },
                { icon: AlertCircle, label: '一键报警', desc: '紧急快速响应' },
                { icon: Users, label: '人脸识别', desc: '实时人脸检测' },
                { icon: Car, label: '车牌识别', desc: '自动识别车牌' },
                { icon: Radio, label: '声纹鸣兵', desc: '声纹识别技术' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 hover:border-green-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 应急指挥 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">应急指挥功能</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: MapPin, label: '区域布控', desc: '指定区域监控' },
                { icon: Package, label: '物资存储', desc: '车载储存空间' },
                { icon: AlertCircle, label: '应急指挥', desc: '快速响应事件' },
                { icon: Megaphone, label: '移动宣传', desc: '移动宣传平台' },
                { icon: MessageSquare, label: '人机交互', desc: '智能交互系统' },
                { icon: Wind, label: '伴飞无人机', desc: '空地协同作战' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 底盘功能 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">底盘功能</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Cpu, label: 'L4级自动驾驶', desc: '高度自动化驾驶' },
                { icon: Gauge, label: '精准控制', desc: '毫米级精度控制' },
                { icon: Battery, label: '长续航', desc: '超长待机时间' },
                { icon: Truck, label: '全地形适应', desc: '复杂路况通行' },
                { icon: Zap, label: '快速响应', desc: '毫秒级反应速度' },
                { icon: Wrench, label: '模块化设计', desc: '灵活扩展升级' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 本地化部署平台 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">本地化部署平台</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Server, label: '本地化部署', desc: '私有化服务器部署' },
                { icon: ShieldCheck, label: '信创环境支持', desc: '国产化系统兼容' },
                { icon: Database, label: '全流程国产化', desc: '软硬件全国产' },
                { icon: Lock, label: '数据安全保障', desc: '数据不出本地' },
                { icon: HardDrive, label: '离线运行', desc: '无需依赖云端' },
                { icon: Wifi, label: '内网部署', desc: '支持隔离网络' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border border-cyan-100 hover:border-cyan-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 车辆功能亮点 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-12 text-center">车辆功能亮点</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl font-bold">招手即停</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  遇险需紧急求助时，只需向无人巡逻车挥手，车辆会即刻识别技术迅速响应，自动靠边停车，行人可立即拨下车身"一键报警"按钮，实现秒级求助。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Radio size={24} />
                  </div>
                  <h4 className="text-xl font-bold">声纹鸣兵</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  车辆实时监测周边环境音，一旦识别到"救命""抢劫"等异常呼救关键词，即刻触发安全策略：自动靠边停车、同步远程报警，并启动双向语音通话。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <AlertCircle size={24} />
                  </div>
                  <h4 className="text-xl font-bold">区域入侵检测</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  指定警戒区域，当目标对象进入警戒区域边界、离开或者出现在区域内时则产生报警。AI算法实时监测，确保重点区域安全防护无死角。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Car size={24} />
                  </div>
                  <h4 className="text-xl font-bold">机动车违停检测</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  划定区域内的机动车违停检测，超过设定时间触发报警。自动识别车牌信息，实时记录违章证据，辅助交通管理执法。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl font-bold">多人聚众识别</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  智能识别三人以上聚集公共场所的行为，实时监测人群密度和聚集时长，预防拥挤踩踏等安全隐患，保障公共安全。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Wind size={24} />
                  </div>
                  <h4 className="text-xl font-bold">空地协同作战</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  伴飞无人机垂直极限锁定，清晰实时回传即时取证。车载自动化机场实现无人机自动起降，三位一体立体化巡防体系。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Flame size={24} />
                  </div>
                  <h4 className="text-xl font-bold">交通事故检测</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  机动车发生碰撞、异常停车、轻微事故伴随行人出现，事故发生超过一定时间即告警，快速响应交通突发事件。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Video size={24} />
                  </div>
                  <h4 className="text-xl font-bold">全景实时监控</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  14个高清摄像头360度无死角监控，6个环视摄像头、4个推流摄像头、4个红绿灯识别摄像头，实时回传高清画面。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <Radar size={24} />
                  </div>
                  <h4 className="text-xl font-bold">多传感器融合</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  21个雷达系统协同工作，半固态激光雷达、32线激光雷达、毫米波雷达、超声波雷达，300米探测范围无盲区覆盖。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <Siren size={24} />
                  </div>
                  <h4 className="text-xl font-bold">智能警报系统</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  声光警示系统、语音播报、远程喊话三位一体，可根据不同场景自动切换警报模式，有效震慑违法行为。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                    <Lock size={24} />
                  </div>
                  <h4 className="text-xl font-bold">车规智能电吸锁</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  采用车规级智能电吸锁，支持远程控制、权限管理、开关记录查询，确保车载物资和设备安全，防止非法入侵。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Satellite size={24} />
                  </div>
                  <h4 className="text-xl font-bold">RTK高精定位</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  厘米级高精度组合定位系统，结合GPS、北斗、RTK差分定位技术，确保车辆在复杂环境下精准导航和路径规划。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center">
                    <Smartphone size={24} />
                  </div>
                  <h4 className="text-xl font-bold">移动终端控制</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  支持手机、平板等移动终端远程控制，实时查看车辆状态、调度路线、查看监控画面，轻触即可全域在线管理。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center">
                    <Activity size={24} />
                  </div>
                  <h4 className="text-xl font-bold">违规经营检测</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  AI智能识别未经许可或超越许可范围的经营活动，自动记录证据并报警，协助城市管理部门规范市容市貌。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-fuchsia-500 rounded-lg flex items-center justify-center">
                    <Shield size={24} />
                  </div>
                  <h4 className="text-xl font-bold">打架斗殴识别</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  实时识别暴力互相殴打、扰乱公共秩序、故意伤害他人身体的行为，第一时间触发报警并记录现场证据。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              最安全的自动驾驶解决方案
            </h2>
            <p className="text-xl text-gray-600">
              360度防护，1200万+公里安全行驶记录
            </p>
          </motion.div>

          {/* 传感器系统 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">360°</div>
                <div className="text-gray-900 font-semibold mb-2">多传感器融合感知</div>
                <div className="text-gray-600">300米探测范围</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">14x</div>
                <div className="text-gray-900 font-semibold mb-2">相机系统</div>
                <div className="text-gray-600">6x环视，4x推流，4x红绿灯</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">21x</div>
                <div className="text-gray-900 font-semibold mb-2">雷达系统</div>
                <div className="text-gray-600">半固态+超声波+毫米波</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: '鱼眼摄像头', range: '10M' },
                { label: '超声波雷达', range: '4M' },
                { label: '半固态激光雷达', range: '100M' },
                { label: '长距摄像头', range: '150M' },
                { label: '环视摄像头', range: '100M' },
                { label: '32线激光雷达', range: '150M' },
                { label: '毫米波雷达', range: '200M' },
                { label: 'Orin芯片', range: '500+ TOPS' },
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                  <div className="text-lg font-bold text-blue-600">{item.range}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 全场景适应 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              高可靠、高稳定、高安全性
            </h3>
            <p className="text-center text-gray-600 mb-12">
              可实现全天候、全场景以及在暴雨、黑夜等极端环境下的稳定运行
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: '绕行障碍物' },
                { icon: Bell, label: '识别信号灯' },
                { icon: Moon, label: '夜间行动' },
                { icon: MapPin, label: '自动泊车' },
                { icon: Cloud, label: '雨天行驶' },
                { icon: Package, label: '单点配送' },
                { icon: Navigation, label: '自主掉头' },
                { icon: Shield, label: '自动避困' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-3">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <div className="font-semibold text-gray-900">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              八大专属机制 — 专属权益
            </h2>
            <p className="text-xl text-gray-600">
              全方位服务保障体系
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: '超长质保', desc: '五年核心零部件免费质保' },
              { icon: Car, title: '个性车型定制', desc: '适配不同场景使用需求' },
              { icon: Truck, title: '免费上门', desc: '送车上门交钥匙' },
              { icon: CheckCircle2, title: '换新服务', desc: '致力于社会公益及可持续发展' },
              { icon: Wifi, title: '赠车端网络服务', desc: '支持4G/5G卡' },
              { icon: Wrench, title: '免费保养', desc: '正直、进取、创新、融合' },
              { icon: PaintBucket, title: '定制涂装', desc: '助力企业经营，赋能本土崛起' },
              { icon: Shield, title: '高额保', desc: '最高1000万公众责任险' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h2>
            <p className="text-xl text-blue-200">期待与您合作</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">合作咨询</h3>
              <p className="text-blue-200">ccxtwangpeng@163.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">联系电话</h3>
              <p className="text-blue-200">+86 18600895313</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <MapPinned size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">公司地址</h3>
              <p className="text-blue-200">北京市东城区北三环东路36号院3号楼3层328单元</p>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-blue-200 mb-4">扫一扫添加</p>
            <div className="inline-block bg-white p-4 rounded-xl">
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                微信二维码
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <div>
                  <img src={logo} alt="耀数科技" className="h-12 w-auto" />
                </div>
              </div>
              <p className="text-sm">智越山海，道惠八方</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <div className="space-y-2">
                {['产品介绍', '功能特性', '技术优势', '服务保障'].map((item) => (
                  <button
                    key={item}
                    className="block hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系方式</h4>
              <div className="space-y-2 text-sm">
                <p>电话: +86 18600895313</p>
                <p>邮箱: ccxtwangpeng@163.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 耀数科技. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Police

