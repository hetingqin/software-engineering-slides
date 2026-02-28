import { $ } from "bun";
import path from "node:path";

const SKILL_DIR = "C:\\Users\\Administrator\\.gemini\\antigravity\\skills\\baoyu-image-gen\\scripts\\main.ts";
const OUTPUT_DIR = "d:\\vibe\\skills-doc\\ref-doc\\slide-deck\\se-week1";

const slides = [
  {
    file: "03-slide-programmer-pain.png",
    prompt: `16:9 landscape slide, sketch-notes hand-drawn style on warm off-white paper (#F5F0E8). Title '程序员的五大痛点' in bold Chinese handwritten marker (#2D3436). Subtitle '这些场景，你是否似曾相识？'. Five hand-drawn sticky notes scattered across the slide, each with warm gold (#FDCB6E) background: 1) '上手就写，后期填坑' with tangled code doodle 2) '缺少方法论' with broken compass 3) '需求变更' with revolving door 4) '没有计划,总是延期' with crossed-out calendar 5) '不懂协作' with stuck figure. Center-bottom: stressed stick figure at desk with red exclamation marks (#E17055). Organic imperfect lines. No slide numbers.`
  },
  {
    file: "04-slide-bezos-quote.png",
    prompt: `16:9 landscape slide, sketch-notes hand-drawn style on warm off-white paper. Title '十年后，什么不会变？' in bold Chinese handwritten marker. A large hand-drawn thought bubble with 'Jeff Bezos的洞察' written in terracotta (#E17055). Below, three hand-drawn pillars/columns: '数据结构与算法', '面向对象与设计模式', '软件工程' (highlighted with gold underline #FDCB6E). A foundation sketch below pillars. Warm earth tones, organic lines. No slide numbers.`
  },
  {
    file: "05-slide-se-value.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '软件工程的三大价值' in bold Chinese handwritten marker. Subtitle '从无序到有序，从个人到团队'. Three hand-drawn boxes stacked vertically connected by arrows: top '组织' with team people icon in teal (#00B894), middle '方法' with book icon in terracotta (#E17055), bottom '工具' with wrench icon in gold (#FDCB6E). A lightbulb at top illuminating all three. Organic sketch lines. No slide numbers.`
  },
  {
    file: "06-slide-dao-shu-qi.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '道 · 术 · 器' in bold Chinese handwritten marker. Subtitle '本课程的三维教学框架'. A large hand-drawn pyramid with three layers: top layer '道 (Why)' with sun icon in warm gold (#FDCB6E) - '核心思想，本质规律', middle layer '术 (How)' with compass icon in terracotta (#E17055) - '方法论', bottom layer '器 (What)' with tools icon in teal (#00B894) - '工具'. Each layer different color. Organic hand-drawn style. No slide numbers.`
  },
  {
    file: "07-slide-course-modules.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '课程结构总览' in bold Chinese handwritten marker. Subtitle '16周·48课时·四大模块'. A hand-drawn winding road from bottom-left to top-right with four milestone flags: Flag1 '模块一:基础理论(1-3周)' with book icon, Flag2 '模块二:项目过程(4-11周)' with gear icon, Flag3 '模块三:案例与前沿(12-15周)' with rocket icon, Flag4 '模块四:综合实践(16周)' with trophy icon. Warm earth tones, organic lines. No slide numbers.`
  },
  {
    file: "08-slide-assessment.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '考核方式' in bold Chinese handwritten marker. Subtitle '平时+团队项目+期末考试'. A hand-drawn pie chart with three segments: terracotta segment '平时成绩 20%' with checkmark icon, teal segment '团队项目 50%' with people group icon, warm gold segment '期末考试 30%' with pen/paper icon. Labels in handwritten style beside each segment. Organic hand-drawn feel. No slide numbers.`
  },
  {
    file: "09-slide-reading-list.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '推荐参考书' in bold Chinese handwritten marker. Subtitle '这几本书，值得反复阅读'. Four hand-drawn book spines on a sketched bookshelf: '软件工程-实践者的研究方法' in teal, '构建之法' in terracotta, '人月神话' in gold with a star, '架构整洁之道' in blue. A reading lamp doodle on the side. Warm colors, sketch style. No slide numbers.`
  },
  {
    file: "10-slide-section-divider-1.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Large section divider: '第一讲' in very bold Chinese handwritten marker centered. Below a hand-drawn decorative banner/ribbon with '到底应该怎样理解软件工程？'. The number '01' drawn very large in light warm gold (#FDCB6E) in background. Small doodles of gears and code brackets as decoration. Clean, impactful. No slide numbers.`
  },
  {
    file: "11-slide-overwatch-case.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '守望先锋是怎么做出来的？' in bold Chinese handwritten marker. Subtitle '从想法到产品的工程历程'. A hand-drawn horizontal timeline with four milestones: 1) '2013立项' with lightbulb icon 2) 'Demo: 4英雄+1地图' with small game controller 3) '2014嘉年华: 12英雄+4地图' with crowd icon 4) '2016.5正式发布' with rocket launch. Connected by dashed arrows. Warm tones. No slide numbers.`
  },
  {
    file: "12-slide-engineering-definition.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '什么是工程？' in bold Chinese handwritten marker. Subtitle '有人参与·有计划·有步骤·造产品'. Three hand-drawn icons side by side: a house labeled '建筑工程', a rocket labeled '航天工程', a laptop with code labeled '软件工程'. Below them a hand-drawn bracket connecting all three to central label '工程' in terracotta. The four keywords highlighted in gold. Organic lines. No slide numbers.`
  },
  {
    file: "13-slide-software-crisis.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '软件危机：代价惨重的教训' in bold Chinese handwritten marker. Subtitle '没有工程方法的软件开发，后果严重'. Left side: hand-drawn cracked computer screen with error symbols, warning triangles, dollar signs flying out in terracotta (#E17055). Right side: three bullet points in handwritten style: '软件质量低劣', '成本失控，进度不可预测', '人员无限增加却无法解决问题'. A worried stick figure. No slide numbers.`
  },
  {
    file: "14-slide-os360.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title 'OS/360：1000人+5000人年=失败' in bold Chinese handwritten marker. Subtitle '人月神话的由来'. Center: large bold numbers '1000人' and '5000人年' in terracotta. A hand-drawn tangled mess of lines representing complexity. A hand-drawn book labeled '人月神话' emerging from the mess. Dollar loss badge. Sketch style, warm tones. No slide numbers.`
  },
  {
    file: "15-slide-therac25.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title 'Therac-25：程序Bug致人死亡' in bold Chinese handwritten marker. Subtitle '软件质量不是可选项'. A hand-drawn medical device with red warning symbol. Radiation hazard sign in sketch style. The number '100×' drawn very large in terracotta (#E17055) to emphasize overdose. Text: '1985-1987, 至少6起医疗事故'. A small memorial candle sketch. Serious but educational tone. No slide numbers.`
  },
  {
    file: "16-slide-se-birth.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '1968：软件工程的诞生' in bold Chinese handwritten marker. Subtitle '北约会议，50名顶尖专家的共识'. A hand-drawn conference scene with stick figures around a large table. Banner above reading 'NATO 1968'. A lightbulb moment above the group with words 'Software Engineering'. Warm sepia-tinted vintage feel. Organic lines. No slide numbers.`
  },
  {
    file: "17-slide-ieee-definition.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '软件工程的定义' in bold Chinese handwritten marker. Subtitle 'IEEE 1993'. A hand-drawn scroll/document with quoted text '将系统化的、规范的、可度量的方法用于软件的开发、运行和维护'. Below: three hand-drawn checkmark badges: clock icon '按时完成', coin icon '成本可控', star icon '质量有保证'. Connected by a bracket labeled '工程化'. Warm tones. No slide numbers.`
  },
  {
    file: "18-slide-evolution.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '软件工程演化史' in bold Chinese handwritten marker. Subtitle '从瀑布到AI，半个世纪的进化'. A hand-drawn winding river from bottom to top with seven milestones: '1960s软件危机' warning sign, '1970s瀑布模型' waterfall icon, '1980s V模型/螺旋' spiral icon, '1990s Scrum/XP' running figure, '2001敏捷宣言' flame, '2010s微服务/云' cloud, '2020s AI编程' robot. Path gets wider going up. Colorful warm tones. No slide numbers.`
  },
  {
    file: "19-slide-core-formula.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Center: very large hand-drawn equation '软件工程 = 过程 + 方法 + 工具' in bold marker style with gold (#FDCB6E) underline highlight. Below the equation, three boxes with icons: circular arrow '过程: 开发步骤', compass '方法: 方法学', wrench '工具: 提升效率'. This is THE key formula of the course. Bold, impactful, memorable. No slide numbers.`
  },
  {
    file: "20-slide-section-divider-2.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Large section divider: '第二讲' in very bold Chinese handwritten marker centered. Below: decorative hand-drawn banner with '工程思维：把每件事都当作一个项目来推进'. Number '02' in large light warm gold background. Doodles of project checklist, thinking brain icon, gears. Clean impactful layout. No slide numbers.`
  },
  {
    file: "21-slide-everything-project.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title 'Everything is a Project' in bold handwritten style. Subtitle '万事皆项目——从软件工程到日常生活'. A large hand-drawn speech bubble with the English text. Around it, small sketch icons showing diverse scenarios: homework notebook, rocket launch, birthday party plan, software app, travel plan. All connected by dashed arrows to center. Hub-spoke layout. Warm tones. No slide numbers.`
  },
  {
    file: "22-slide-six-stages.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '工程方法的六个阶段' in bold Chinese handwritten marker. Subtitle '有目的·有计划·有步骤'. Six hand-drawn circles in a flow left to right: 1) lightbulb '想法' 2) pencil '概念' 3) calendar '计划' 4) blueprint '设计' 5) hammer '开发' 6) rocket '发布'. Arrows connecting each. Each circle different accent color. Organic hand-drawn style. No slide numbers.`
  },
  {
    file: "23-slide-phone-case.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '案例：30分钟设计一部老年手机' in bold Chinese handwritten marker. Subtitle '运用工程思维，轻松夺冠'. Split scene: LEFT shows chaotic group with thought bubbles flying everywhere, clock running out, messy; RIGHT shows organized group with clear plan pinned on board, checkmarks, and a trophy. A clock in center showing 30 minutes. Binary comparison layout. Warm tones. No slide numbers.`
  },
  {
    file: "24-slide-phone-plan.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '获胜秘诀：把30分钟当作一个项目' in bold Chinese handwritten marker. Subtitle '严格按计划执行'. A hand-drawn Gantt-chart timeline with four colored blocks: blue block '分析 0-10min', green block '设计 11-15min', orange block '开发 16-25min', red block '发布 26-30min'. Each block has small icon. Checkmark at end. Total 30 minutes marked. Clean linear progression. No slide numbers.`
  },
  {
    file: "25-slide-local-vs-global.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '站在整体，而非局部' in bold Chinese handwritten marker. Subtitle '工程思维的核心态度'. LEFT: hand-drawn magnifying glass showing tiny puzzle piece labeled '局部'. RIGHT: full assembled puzzle with pieces labeled '产品', '开发', '测试', '运维'. Arrow from magnifying glass to full puzzle with text '整体'. Split-screen comparison layout. Warm tones. No slide numbers.`
  },
  {
    file: "26-slide-anti-patterns.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '局部思维的常见反模式' in bold Chinese handwritten marker. Four hand-drawn cartoon panels 2x2 grid: 1) product manager throwing wild ideas at wall '需求天马行空' 2) architect building reinventing wheel '热衷造轮子' 3) developer surrounded by too many tech logos '追新技术过度设计' 4) tester manually clicking mouse '不学自动化'. Each panel has red X mark (#E17055). Sketch comic style. No slide numbers.`
  },
  {
    file: "27-slide-global-thinking.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '站在项目整体的四个关注点' in bold Chinese handwritten marker. Subtitle '质量·进度·成本·用户'. Center: hand-drawn compass/target with four quadrants: star '质量', clock '进度', coin '成本', person '用户'. Around compass, four stick figures (PM, architect, developer, tester) each with green checkmarks, pointing toward center. Hub-spoke layout. Teal and terracotta accents. No slide numbers.`
  },
  {
    file: "28-slide-engineering-mindset.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '什么是工程思维？' in bold Chinese handwritten marker. Subtitle '一种思考问题的方式'. Center: hand-drawn brain illustration with gears inside it. Three thought branches extending outward: '从项目角度看待问题', '用工程方法解决问题', '站在整体而非局部'. Gold highlights on keywords. Small banner below: '你不需要是项目经理'. Warm tones, organic. No slide numbers.`
  },
  {
    file: "29-slide-exercise.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '课堂练习：把活动当项目' in bold Chinese handwritten marker. Subtitle '用六阶段工程方法来规划'. A hand-drawn whiteboard with exercise text: '场景：你要组织一个50人参加的技术沙龙活动'. A stick figure teacher pointing at board. Students in groups sketched. Timer showing '5 min'. Hand-drawn question marks and exclamation marks for energy. Interactive classroom feel. No slide numbers.`
  },
  {
    file: "30-slide-back-cover.png",
    prompt: `16:9 landscape slide, sketch-notes style on warm off-white paper. Title '本周要点回顾 & 下周预告' in bold Chinese handwritten marker. Top section: hand-drawn notebook page with two key formulas: '软件工程 = 过程 + 方法 + 工具' and '工程思维 = 项目视角 + 工程方法 + 整体思维' highlighted with gold underlines. Bottom section: arrow pointing to '下周' with waterfall icon and agile sprint icon. A pencil doodle at bottom with '课后思考：学习本课程，你会制定什么样的计划？'. Warm encouraging tone. No slide numbers.`
  },
];

const script = SKILL_DIR;

async function generateSlide(slide: typeof slides[0], index: number) {
  const outputPath = path.join(OUTPUT_DIR, slide.file);
  console.log(`\n[${index + 3}/${slides.length + 2}] Generating: ${slide.file}...`);
  
  const proc = Bun.spawn([
    "npx", "-y", "bun", script,
    "--prompt", slide.prompt,
    "--image", outputPath,
    "--provider", "openai",
    "--ar", "16:9"
  ], {
    cwd: "d:\\vibe\\skills-doc\\ref-doc",
    stdout: "pipe",
    stderr: "pipe",
    env: { ...process.env }
  });

  const exitCode = await proc.exited;
  
  if (exitCode === 0) {
    console.log(`  ✅ Done: ${slide.file}`);
  } else {
    const stderr = await new Response(proc.stderr).text();
    console.log(`  ❌ Failed: ${slide.file} - ${stderr.slice(0, 200)}`);
  }
}

// Sequential generation
for (let i = 0; i < slides.length; i++) {
  await generateSlide(slides[i]!, i);
}

console.log("\n🎉 All slides generated!");
