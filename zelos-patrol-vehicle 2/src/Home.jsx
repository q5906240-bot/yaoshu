import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Car, ChevronRight } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-blue-600 font-bold text-3xl">Z</span>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-white">耀数科技</div>
              <div className="text-blue-200">YAOSHU TECH</div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            智能巡逻解决方案
          </h1>
          <p className="text-xl text-blue-100">
            L4级自动驾驶 · AI全栈技术 · 全场景适应
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 公安巡逻车 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="/police">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all group cursor-pointer border-2 border-white/20 hover:border-blue-400 h-full">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield size={48} className="text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  无人公安巡逻车
                </h2>
                <p className="text-blue-100 text-center mb-6 leading-relaxed">
                  全方位智能巡逻解决方案
                  <br />
                  基础巡逻 · 智能监控 · 应急指挥
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-blue-100">
                    <ChevronRight size={20} className="mr-2 flex-shrink-0" />
                    <span>招手即停 · 声纹鸣兵</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <ChevronRight size={20} className="mr-2 flex-shrink-0" />
                    <span>区域入侵检测 · 人脸识别</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <ChevronRight size={20} className="mr-2 flex-shrink-0" />
                    <span>空地协同作战 · 全景监控</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <ChevronRight size={20} className="mr-2 flex-shrink-0" />
                    <span>本地化部署 · 信创环境支持</span>
                  </div>
                </div>
                <div className="flex items-center justify-center text-white font-semibold group-hover:text-blue-300 transition-colors">
                  <span>了解详情</span>
                  <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 交警巡逻车 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="/traffic">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all group cursor-pointer border-2 border-white/20 hover:border-orange-400 h-full">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Car size={48} className="text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  无人交警巡逻车
                </h2>
                <p className="text-blue-100 text-center mb-6 leading-relaxed">
                  智能交通执法解决方案
                  <br />
                  违法识别 · 实时查验 · 自动执法
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-blue-100">
                    <ChevronRight size={20} className="mr-2 flex-shrink-0" />
                    <span>人脸抓拍 · 开车打电话检测</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <ChevronRight size={20} className="mr-2 flex-shrink-0" />
                    <span>闯红灯识别 · 逆行检测</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <ChevronRight size={20} className="mr-2 flex-shrink-0" />
                    <span>接入交警网 · 驾照资格验证</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <ChevronRight size={20} className="mr-2 flex-shrink-0" />
                    <span>车载红绿灯 · 宣传屏</span>
                  </div>
                </div>
                <div className="flex items-center justify-center text-white font-semibold group-hover:text-orange-300 transition-colors">
                  <span>了解详情</span>
                  <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-blue-200 mb-4">
            专注无人智能移动作业平台,交付高可靠、可扩展的AI全栈方案
          </p>
          <div className="text-sm text-blue-300">
            © 2024 耀数科技. All rights reserved.
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home

