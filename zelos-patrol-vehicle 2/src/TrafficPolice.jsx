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
  Server, Database, ShieldCheck, HardDrive, Cpu,
  UserX, PhoneOff, TrafficCone, Monitor, FileSearch, UserCheck,
  GitBranch, Octagon, EyeOff, Ambulance
} from 'lucide-react'
import vehicle1 from './assets/vehicle1.png'
import vehicle2 from './assets/vehicle2.png'
import logo from './assets/logo.png'

function TrafficPolice() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="耀数科技" className="h-12 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {[
                { label: '首页', id: 'home' },
                { label: '产品介绍', id: 'product' },
                { label: '功能特性', id: 'features' },
                { label: '技术优势', id: 'advantages' },
                { label: '服务保障', id: 'service' },
                { label: '联系我们', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {[
                { label: '首页', id: 'home' },
                { label: '产品介绍', id: 'product' },
                { label: '功能特性', id: 'features' },
                { label: '技术优势', id: 'advantages' },
                { label: '服务保障', id: 'service' },
                { label: '联系我们', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
                L4级自动驾驶交警执法平台
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                智能交通
                <br />
                <span className="text-orange-600">执法先锋</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                专注交通违法智能识别与处理，全天候自动巡逻执法
                <br />
                AI视觉算法精准识别，接入交警网实时查验
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('features')}
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2 group"
                >
                  <span>了解更多</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
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
                <img
                  src={vehicle1}
                  alt="无人交警巡逻车"
                  className="w-full h-auto"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="text-orange-600" size={24} />
                    <span className="font-bold text-gray-900">360°执法防护</span>
                  </div>
                  <p className="text-sm text-gray-600">AI智能交通违法识别</p>
                </div>
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
              无人交警巡逻车
            </h2>
            <p className="text-xl text-gray-600">
              智能交通执法解决方案
            </p>
          </motion.div>

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
                  className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-orange-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <item.icon className="text-orange-600" size={24} />
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
              智能交通执法全流程解决方案
            </p>
          </motion.div>

          {/* 基础巡逻功能 - 去掉招手即停 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">基础巡逻功能</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: Navigation, label: '自动巡航', desc: '自主规划路径' },
                { icon: Shield, label: '自主避障', desc: '智能识别障碍' },
                { icon: Bell, label: '警灯警报', desc: '声光警示系统' },
                { icon: Volume2, label: '语音播报', desc: '实时语音提示' },
                { icon: Megaphone, label: '远程喊话', desc: '远程双向通话' },
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

          {/* 智能监控功能 */}
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

          {/* 应急指挥功能 */}
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
        </div>
      </section>

      {/* Traffic Police Exclusive Features */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              交警专属功能
            </h2>
            <p className="text-xl text-gray-600">
              专业交通执法智能识别系统
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: '人脸抓拍识别',
                desc: '10分钟间隔智能抓拍,再次遇到同一车辆自动识别并上送数据,建立完整的车辆轨迹档案',
                color: 'orange'
              },
              {
                icon: PhoneOff,
                title: '开车打电话检测',
                desc: 'AI视觉算法实时识别驾驶员打电话行为,自动抓拍取证并记录违法信息,精准执法零遗漏',
                color: 'red'
              },
              {
                icon: AlertCircle,
                title: '逆行检测',
                desc: '基于高精地图和多传感器融合,实时识别车辆逆行行为,立即触发警报并记录违法证据',
                color: 'yellow'
              },
              {
                icon: Sun,
                title: '车载红绿灯系统',
                desc: '车顶安装智能红绿灯,可远程控制或自动切换,用于临时交通管制和应急指挥',
                color: 'green'
              },
              {
                icon: Bell,
                title: '自动报警系统',
                desc: '发现严重交通违法或事故时自动报警,同步上传现场视频和位置信息至交警指挥中心',
                color: 'red'
              },
              {
                icon: Volume2,
                title: '远程喊话',
                desc: '支持交警远程实时喊话,对违法车辆进行警告和劝导,提升执法效率和震慑力',
                color: 'blue'
              },
              {
                icon: Wifi,
                title: '接入交警网',
                desc: '实时连接交警数据库,自动查询车辆年检状态、保险信息,识别无年检或脱保车辆',
                color: 'cyan'
              },
              {
                icon: UserX,
                title: '驾照资格验证',
                desc: '人脸识别结合交警网数据,判断驾驶员是否持有驾照、驾照是否被吊销或过期',
                color: 'purple'
              },
              {
                icon: Monitor,
                title: '车载宣传屏',
                desc: '高清LED宣传屏,可播放交通安全宣传视频、实时路况信息和交通法规提示',
                color: 'indigo'
              },
              {
                icon: UserCheck,
                title: '不系安全带检测',
                desc: 'AI视觉算法实时识别驾驶员和乘客是否系安全带,自动抓拍违法行为并记录证据,保障乘车安全',
                color: 'blue'
              },
              {
                icon: GitBranch,
                title: '违法变道检测',
                desc: '基于车道线识别技术,实时监测压实线变道、不打转向灯变道等违法行为,维护道路通行秩序',
                color: 'yellow'
              },
              {
                icon: Octagon,
                title: '占用应急车道',
                desc: '高速公路和城市快速路应急车道监测,识别非紧急情况占用应急车道的车辆,保障生命通道畅通',
                color: 'red'
              },
              {
                icon: EyeOff,
                title: '遮挡号牌检测',
                desc: '智能识别故意遮挡、污损、不挂号牌等严重违法行为,自动拍照取证并上报执法部门',
                color: 'red'
              },
              {
                icon: Ambulance,
                title: '事故快速处理',
                desc: '轻微交通事故现场快速拍照取证,引导车主快速撤离恢复交通,减少拥堵和二次事故风险',
                color: 'green'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`text-${feature.color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Highlights - 与公安车相同,但去掉招手即停 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-12 text-center">车辆功能亮点</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Radio,
                title: '声纹鸣兵',
                desc: '车辆实时监测周边环境音,一旦识别到"救命""抢劫"等异常呼救关键词,即刻触发安全策略:自动靠边停车、同步远程报警,并启动双向语音通话。'
              },
              {
                icon: MapPin,
                title: '区域入侵检测',
                desc: '指定警戒区域,当目标对象进入警戒区域边界、离开或者出现在区域内时则产生报警。AI算法实时监测,确保重点区域安全防护无死角。'
              },
              {
                icon: Car,
                title: '机动车违停检测',
                desc: '划定区域内的机动车违停检测,超过设定时间触发报警。自动识别车牌信息,实时记录违章证据,辅助交通管理执法。'
              },
              {
                icon: Users,
                title: '多人聚众识别',
                desc: '智能识别三人以上聚集公共场所的行为,实时监测人群密度和聚集时长,预防拥挤踩踏等安全隐患,保障公共安全。'
              },
              {
                icon: Wind,
                title: '空地协同作战',
                desc: '伴飞无人机垂直极限锁定,清晰实时回传即时取证。车载自动化机场实现无人机自动起降,三位一体立体化巡防体系。'
              },
              {
                icon: AlertCircle,
                title: '交通事故检测',
                desc: '机动车发生碰撞、异常停车、轻微事故伴随行人出现,事故发生超过一定时间即告警,快速响应交通突发事件。'
              },
              {
                icon: Eye,
                title: '全景实时监控',
                desc: '14个高清摄像头360度无死角监控,6个环视摄像头、4个推流摄像头、4个红绿灯识别摄像头,实时回传高清画面。'
              },
              {
                icon: Radar,
                title: '多传感器融合',
                desc: '21个雷达系统协同工作,半固态激光雷达、32线激光雷达、毫米波雷达、超声波雷达,300米探测范围无盲区覆盖。'
              },
              {
                icon: Siren,
                title: '智能警报系统',
                desc: '声光警示系统、语音播报、远程喊话三位一体,可根据不同场景自动切换警报模式,有效震慑违法行为。'
              },
              {
                icon: Lock,
                title: '车规智能电吸锁',
                desc: '采用车规级智能电吸锁,支持远程控制、权限管理、开关记录查询,确保车载物资和设备安全,防止非法入侵。'
              },
              {
                icon: Satellite,
                title: 'RTK高精定位',
                desc: '厘米级高精度组合定位系统,结合GPS、北斗、RTK差分定位技术,确保车辆在复杂环境下精准导航和路径规划。'
              },
              {
                icon: Smartphone,
                title: '移动终端控制',
                desc: '支持手机、平板等移动终端远程控制,实时查看车辆状态、调度路线、查看监控画面,轻触即可全域在线管理。'
              },
              {
                icon: FileSearch,
                title: '违规经营检测',
                desc: 'AI智能识别未经许可或超越许可范围的经营活动,自动记录证据并报警,协助城市管理部门规范市容市貌。'
              },
              {
                icon: Activity,
                title: '打架斗殴识别',
                desc: '实时识别暴力互相殴打、扰乱公共秩序、故意伤害他人身体的行为,第一时间触发报警并记录现场证据。'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-orange-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              最智能的交通执法解决方案
            </h2>
            <p className="text-xl text-blue-200">
              AI算法精准识别,全天候自动巡逻执法
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">高精准、高效率、全覆盖</h3>
              <div className="space-y-4">
                {[
                  'AI视觉算法识别准确率99.5%以上',
                  '24小时不间断自动巡逻执法',
                  '实时接入交警网,秒级数据查验',
                  '全流程自动化,减少90%人工成本',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">全场景适应能力</h3>
              <div className="space-y-4">
                {[
                  '城市道路、高速公路、乡村路网全覆盖',
                  '雨雪雾霾等恶劣天气稳定运行',
                  '白天黑夜全时段高清识别',
                  '复杂路况自主导航避障',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              服务保障
            </h2>
            <p className="text-xl text-gray-600">
              八大专属权益，全方位保障您的使用体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: '质保服务', desc: '整车质保2年' },
              { icon: Wrench, title: '技术支持', desc: '7×24小时在线' },
              { icon: Truck, title: '快速响应', desc: '48小时到场' },
              { icon: CheckCircle2, title: '免费培训', desc: '操作维护培训' },
              { icon: Shield, title: '软件升级', desc: '终身免费升级' },
              { icon: PaintBucket, title: '定制服务', desc: '个性化定制' },
              { icon: Users, title: '专属客服', desc: '一对一服务' },
              { icon: Package, title: '备件保障', desc: '充足备件库存' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-orange-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              联系我们
            </h2>
            <p className="text-xl text-gray-600">
              了解更多产品信息,获取专属解决方案
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">邮箱</div>
                    <div className="text-gray-600">contact@zelos.tech</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneCall className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">电话</div>
                    <div className="text-gray-600">+86 18600895313</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinned className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">公司地址</div>
                    <div className="text-gray-600">
                      北京市东城区北三环东路36号院3号楼3层328单元
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src={logo} alt="耀数科技" className="h-16 w-auto mb-4" />          </div>
            <p className="text-gray-400 mb-4">
              专注无人智能移动作业平台,交付高可靠、可扩展的AI全栈方案
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 耀数科技. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TrafficPolice

