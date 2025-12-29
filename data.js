const toolsData = [
            {
                id: "ai-text", name: "AI 文本", icon: "fa-file-lines",
                items: [
                    { name: "Gemini", logo: "./logos/Gemini.png", desc: "多模态+超长上下文，目前综合实力最强", type: "red", label: "首选", url: "https://gemini.google.com" },
                    { name: "豆包", logo: "./logos/豆包.png", desc: "免费且功能丰富，大众化体验好", type: "orange", label: "平替", url: "https://www.doubao.com" },
                    { name: "Qwen", logo: "./logos/Qwen.png", desc: "通义千问，开源最慷慨，适合二次开发", type: "blue", label: "开源", url: "https://tongyi.aliyun.com" },
                    { name: "ChatGPT", logo: "./logos/chatGPT.png", desc: "通用性强，生态最完善", type: "gray", label: "其他", url: "https://chatgpt.com" },
                    { name: "Grok", logo: "./logos/Grok.png", desc: "实时获取 X 平台信息，新闻敏感度高", type: "gray", label: "其他", url: "https://grok.com" },
                    { name: "DeepSeek", logo: "./logos/Deepseek.png", desc: "极致性价比，国内使用最多的AI模型", type: "gray", label: "其他", url: "https://chat.deepseek.com" },
                    { name: "Claude", logo: "./logos/Claude.png", desc: "代码能力强，擅长长文，语气拟人", type: "gray", label: "其他", url: "https://claude.ai" },
                    { name: "Kimi", logo: "./logos/Kimi.png", desc: "长文档阅读拆解能力顶尖", type: "gray", label: "其他", url: "https://kimi.moonshot.cn" }
                ]
            },
            {
                id: "ai-image", name: "AI 图像", icon: "fa-image",
                items: [
                    { name: "Nano Banana Pro", logo: "./logos/banana.png", desc: "强大的图像生成与处理工具", type: "red", label: "首选", url: "https://gemini.google.com/" },
                    { name: "即梦 Seedream 4.5", logo: "./logos/Seedream.png", desc: "国产优秀绘画模型，效果惊艳", type: "orange", label: "平替", url: "https://jimeng.jianying.com" },
                    { name: "Z-Image (Ima)", logo: "./logos/z-image.png", desc: "开源图像生成新势力", type: "blue", label: "开源", url: "https://z-image.ai" },
                    { name: "Midjourney", logo: "./logos/midjourner.png", desc: "艺术感最强的绘图AI，行业标杆", type: "gray", label: "其他", url: "https://www.midjourney.com" },
                    { name: "Flux", logo: "./logos/flux.png", desc: "近期大火的高质量开源生图模型", type: "gray", label: "其他", url: "https://huggingface.co/black-forest-labs/FLUX.2-dev" }
                ]
            },
            {
                id: "ai-video", name: "AI 视频", icon: "fa-video",
                items: [
                    { name: "Veo 3.1", logo: "./logos/ven.png", desc: "谷歌出品的高清视频生成模型", type: "red", label: "首选", url: "https://gemini.google.com/" },
                    { name: "Seedance 1.5 Pro", logo: "./logos/Seedance15Pro.png", desc: "即梦视频生成，动态效果出色", type: "orange", label: "平替", url: "https://jimeng.jianying.com" },
                    { name: "Wan 2.2", logo: "./logos/wan.png", desc: "万相开源视频模型", type: "blue", label: "开源", url: "https://modelscope.cn/models/Wan-AI/Wan2.2-T2V-A14B" },
                    { name: "Runway Gen", logo: "./logos/runway.png", desc: "视频生成领域的老牌强者", type: "gray", label: "其他", url: "https://runwayml.com" },
                    { name: "可灵 (Keling)", logo: "./logos/keling.png", desc: "快手出品，生成效果非常惊艳", type: "gray", label: "其他", url: "https://app.klingai.com/cn/" },
                    { name: "Sora 2", logo: "./logos/sora.png", desc: "OpenAI 的视频生成模型", type: "gray", label: "其他", url: "https://sora.com" },
                    { name: "海螺AI", logo: "./logos/hailuo.png", desc: "MiniMax 旗下视频生成工具", type: "gray", label: "其他", url: "https://hailuoai.com" },
                    { name: "Vidu", logo: "./logos/vidu.png", desc: "国产长视频生成模型", type: "gray", label: "其他", url: "https://www.vidu.cn/home" },
                    { name: "Higgsfield", logo: "./logos/higgsfield.png", desc: "专注于角色一致性的视频生成", type: "gray", label: "其他", url: "https://higgsfield.ai/" },
                    { name: "Pika", logo: "./logos/pika.png", desc: "动画风格视频生成，操作简单", type: "gray", label: "其他", url: "https://pika.art/" },
                    { name: "Luma", logo: "./logos/luma.png", desc: "丝滑的镜头转场和复杂的运动追踪，空间感极强", type: "gray", label: "其他", url: "https://dream-machine.lumalabs.ai/" }
                ]
            },
            {
                id: "ai-voice", name: "AI 配音", icon: "fa-microphone-lines",
                items: [
                    { name: "Minimax", logo: "./logos/minimax.png", desc: "语音合成效果非常逼真，拟人度高", type: "red", label: "首选", url: "https://www.minimaxi.com/audio" },
                    { name: "IndexTTS2", logo: "./logos/indextts.png", desc: "开源语音合成项目", type: "blue", label: "开源", url: "https://modelscope.cn/models/IndexTeam/IndexTTS-2" },
                    { name: "ElevenLabs", logo: "./logos/elevenlabs.png", desc: "全球公认最强 TTS 服务", type: "gray", label: "其他", url: "https://elevenlabs.io/" },
                    { name: "CosyVoice2 0.5B", logo: "./logos/cosyvoice.png", desc: "阿里开源的高质量语音模型", type: "gray", label: "其他", url: "https://github.com/FunAudioLLM/CosyVoice" },
                    { name: "Higgs-Audio-V2", logo: "./logos/higgs.png", desc: "新一代音频生成模型", type: "gray", label: "其他", url: "https://github.com/boson-ai/higgs-audio" }
                ]
            },
            {
                id: "ai-music", name: "AI 音乐", icon: "fa-music",
                items: [
                    { name: "Suno", logo: "./logos/suno.png", desc: "一键生成完整歌曲，效果震撼", type: "red", label: "首选", url: "https://suno.com" },
                    { name: "Udio", logo: "./logos/udio.png", desc: "音乐质量极高，专业性更强", type: "gray", label: "其他", url: "https://www.udio.com" },
                    { name: "Stable Audio", logo: "./logos/stableaudio.png", desc: "Stability AI 出品的音乐生成", type: "gray", label: "其他", url: "https://stableaudio.com/" },
                    { name: "Moises", logo: "./logos/moises.png", desc: "AI 分离音轨工具，音乐人必备", type: "gray", label: "其他", url: "https://moises.ai/zh/" }
                ]
            },
            {
                id: "ai-code", name: "AI 编程", icon: "fa-code",
                items: [
                    { name: "Cursor", logo: "./logos/cursor.png", desc: "集成了AI的VS Code编辑器，体验极佳", type: "red", label: "首选", url: "https://cursor.com/" },
                    { name: "Trae", logo: "./logos/trae.png", desc: "字节跳动出品的AI编辑器", type: "orange", label: "平替", url: "https://www.trae.ai/" },
                    { name: "Claude Code", logo: "./logos/claudecode.png", desc: "Claude 的编程能力，逻辑严密", type: "gray", label: "其他", url: "https://www.claude.com/product/claude-code" },
                    { name: "GitHub Copilot", logo: "./logos/copilot.png", desc: "最流行的代码补全插件", type: "gray", label: "其他", url: "https://github.com/copilot" },
                    { name: "Gemini (AI Studio)", logo: "./logos/aistudio.png", desc: "Google 的开发工具集", type: "gray", label: "其他", url: "https://aistudio.google.com/apps" },
                    { name: "CodeX", logo: "./logos/codex.png", desc: "OpenAI 的代码模型", type: "gray", label: "其他", url: "https://openai.com/zh-Hans-CN/codex/" },
                    { name: "Kiro", logo: "./logos/kiro.png", desc: "新兴的代码助手工具", type: "gray", label: "其他", url: "https://kiro.dev/" }
                ]
            },
            {
                id: "ai-digital", name: "AI 数字人", icon: "fa-user-astronaut",
                items: [
                    { name: "HeyGen", logo: "./logos/heygen.png", desc: "数字人视频生成标杆，口型同步精准", type: "red", label: "首选", url: "https://www.heygen.com" },
                    { name: "InfiniteTalk", logo: "./logos/infinitetalk.png", desc: "无限对话数字人", type: "blue", label: "开源", url: "https://github.com/MeiGen-AI/InfiniteTalk " },
                    { name: "Synthesia", logo: "./logos/synthesia.png", desc: "商业演示数字人制作平台", type: "gray", label: "其他", url: "https://www.synthesia.io" },
                    { name: "Multitalk", logo: "./logos/multitalk.png", desc: "多人对话生成，适合复杂场景", type: "gray", label: "其他", url: "https://github.com/MeiGen-AI/MultiTalk" }
                ]
            },
            {
                id: "ai-browser", name: "AI 浏览器", icon: "fa-compass",
                items: [
                    { name: "Dia", logo: "./logos/dia.png", desc: "新型 AI 浏览器，体验独特", type: "red", label: "首选", url: "https://www.diabrowser.com" },
                    { name: "夸克", logo: "./logos/quark.png", desc: "极简且智能的浏览器，搜索好用", type: "orange", label: "平替", url: "https://www.quark.cn" },
                    { name: "豆包浏览器", logo: "./logos/doubaobrowser.png", desc: "集成豆包AI助手，侧边栏方便", type: "orange", label: "平替", url: "https://www.doubao.com/" },
                    { name: "Atlas", logo: "./logos/atlas.png", desc: "专注于地图和信息的浏览器", type: "gray", label: "其他", url: "https://openai.com/zh-Hans-CN/index/introducing-chatgpt-atlas/" },
                    { name: "Comet", logo: "./logos/comet.png", desc: "快速且隐私保护的浏览器", type: "gray", label: "其他", url: "https://www.perplexity.ai/comet" },
                    { name: "QQ浏览器", logo: "./logos/qqbrowser.png", desc: "全能型浏览器，功能丰富", type: "gray", label: "其他", url: "https://browser.qq.com/mac" }
                ]
            },
            {
                id: "ai-knowledge", name: "AI 知识库", icon: "fa-book-open",
                items: [
                    { name: "NotebookLM", logo: "./logos/notebooklm.png", desc: "Google 出品的笔记AI，可生成播客", type: "red", label: "首选", url: "https://notebooklm.google.com" },
                    { name: "腾讯 IMA", logo: "./logos/ima.png", desc: "腾讯推出的智能知识助手", type: "orange", label: "平替", url: "https://ima.qq.com" },
                    { name: "飞书", logo: "./logos/feishu.png", desc: "先进的企业协作与文档平台", type: "orange", label: "平替", url: "https://www.feishu.cn/" },
                    { name: "Notion AI", logo: "./logos/notion.png", desc: "笔记软件的 AI 先驱，排版精美", type: "gray", label: "其他", url: "https://www.notion.com" },
                    { name: "Get笔记", logo: "./logos/getnote.png", desc: "快速记录与整理灵感", type: "gray", label: "其他", url: "https://www.biji.com" },
                    { name: "RAG Flow", logo: "./logos/ragflow.png", desc: "基于 RAG 的知识库构建工具", type: "gray", label: "其他", url: "https://ragflow.io" },
                    { name: "Obsidian", logo: "./logos/obsidian.png", desc: "本地化双链笔记，插件丰富", type: "gray", label: "其他", url: "https://obsidian.md/download" },
                    { name: "Cherry Studio", logo: "./logos/cherrystudio.png", desc: "多模型聚合客户端", type: "gray", label: "其他", url: "https://www.cherry-ai.com/index.html" }
                ]
            },
            {
                id: "agent", name: "Agent 智能体", icon: "fa-robot",
                items: [
                    { name: "CodeX", logo: "./logos/codex_agent.png", desc: "强大的代码智能体", type: "red", label: "首选", url: "https://openai.com/zh-Hans-CN/codex/" },
                    { name: "AutoGLM", logo: "./logos/autoglm.png", desc: "自动化的通用语言模型智能体", type: "orange", label: "平替", url: "https://autoglm.zhipuai.cn/" },
                    { name: "n8n", logo: "./logos/n8n.png", desc: "工作流自动化工具，连接一切", type: "orange", label: "平替", url: "https://n8n.io" },
                    { name: "Lovart", logo: "./logos/lovart.png", desc: "创意类智能体", type: "gray", label: "其他", url: "https://www.lovart.ai/zh/" },
                    { name: "扣子空间", logo: "./logos/扣子空间.png", desc: "字节推出的 Agent 开发平台", type: "gray", label: "其他", url: "https://space.coze.cn" },
                    { name: "Coze", logo: "./logos/coze.png", desc: "字节推出的 Agent 开发平台", type: "gray", label: "其他", url: "https://www.coze.cn/home" },
                    { name: "YouMind", logo: "./logos/youmind.png", desc: "思维导图智能体", type: "gray", label: "其他", url: "https://youmind.com" },
                    { name: "GenSpark", logo: "./logos/genspark.png", desc: "生成式创意平台", type: "gray", label: "其他", url: "https://www.genspark.ai" },
                    { name: "Medeo", logo: "./logos/medeo.png", desc: "医疗相关智能体", type: "gray", label: "其他", url: "https://www.medeo.app/" },
                    { name: "Dify", logo: "./logos/dify.png", desc: "开源 LLM 应用开发平台", type: "gray", label: "其他", url: "https://dify.ai/zh" }
                ]
            },
            {
                id: "ai-3d", name: "AI 3D建模", icon: "fa-cubes",
                items: [
                    { name: "混元", logo: "./logos/混元.png", desc: "文本/图片转3D，纹理生成", type: "gray", label: "其他", url: "https://3d.hunyuan.tencent.com" },
                    { name: "Tripo AI", logo: "./logos/tripo.png", desc: "快速生成高质量3D模型的AI工具", type: "red", label: "首选", url: "https://www.tripo3d.ai" },
                    { name: "Hyper 3D", logo: "./logos/hyper.png", desc: "专业级3D资产生成模型", type: "orange", label: "平替", url: "https://hyper3d.ai" },
                    { name: "Blender+MCP", logo: "./logos/blender.png", desc: "文本/图片转3D，纹理生成", type: "gray", label: "其他", url: "https://blender-mcp.com" }
                ]
            }
        ];