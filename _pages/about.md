---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👋 Hi! I'm Zhuoyang(Alex) Chen
{: .typing-title}

I am an incoming MSE Robotics student at the **University of Pennsylvania**. I earned my B.S. in Computer Engineering from the **University of Michigan**, and my B.S.E. in Mechanical Engineering from **Shanghai Jiao Tong University**.

I am currently working with Prof. [Yutong Ban](https://gc.sjtu.edu.cn/about/faculty-staff/faculty-directory/faculty-detail/75745/) as a research intern on dexterous manipulation, and with [Jiahang Cao](https://sagecao1125.github.io/) on robot learning for manipulation. Previously, I worked as an undergraduate researcher with Prof. [Shai Revzen](https://eecs.engin.umich.edu/people/revzen-shai/) on bio-inspired robotics, and with Prof. [Ram Vasudevan](https://me.engin.umich.edu/people/faculty/ramanarayan-vasudevan/) as a [SURE](https://sure.engin.umich.edu/) undergraduate research assistant on mobile manipulation.

My research interests are **robot learning for dexterous / mobile manipulation** and **Sim2Real**. 
<!-- I am **actively seeking PhD positions starting Fall 2027** — feel free to reach out! -->

<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Publications and Manuscripts

<div class='paper-box'><div class='paper-box-image'><div class='media-stack'><div class="badge">Preprint</div><img src='images/rcp/RCP.png' alt="sym"><img src='images/rcp/main.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[Unrolling the Action Manifold: Visuomotor Policy Learning via Recursive Cascades](https://sagecao1125.github.io/RCP-Site/static/paper.pdf)

Jiahang Cao\*, **Zhuoyang Chen**\*, Kun Wu, Yulin Li, Hongliang Lu, Jiaxu Wang, Jingkai Sun, Qiang Zhang, Jun Ma, Qihao Zheng, Chunfeng Song, Ping Luo, Andrew F. Luo (\*: equal contribution)

[**Project**](https://sagecao1125.github.io/RCP-Site/) \| [**Paper**](https://sagecao1125.github.io/RCP-Site/static/paper.pdf)
- We introduce the **Recursive Cascade Policy (RCP)**, which frames action generation as recursive temporal infilling in explicit action space: a single weight-shared Transformer sketches sparse boundary anchors, then recursively fills the temporal gaps. With only **19M parameters** (under a quarter the size of ACT and Diffusion Policy), RCP achieves superior performance across diverse simulation and real-world robotic tasks.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div class='media-stack'><div class="badge">Bioinspir. Biomim. 2026</div><img src='images/csm/csm_demo_mujoco.gif' alt="sym"><img src='images/csm/csmultipod_diagram.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[Walking on Rough Terrain with Any Number of Legs](https://doi.org/10.1088/1748-3190/ae9261)

**Zhuoyang Chen**, Xinyuan Wang, Shai Revzen

[**Paper**](https://doi.org/10.1088/1748-3190/ae9261)
- We present a **multi-legged control architecture** for rough terrain using a segmental robot with 3 actuators for every 2 legs, validated in simulation for 6 to 16 legs. Identical per-segment state machines **bridge the gap between Walknet-like event cascade controllers and CPG-based controllers**: tightly coupling to the ground when present, while producing fictive locomotion when ground contact is missing — a lightweight, adaptive controller for multi-legged robots.
</div>
</div>

# 🚀 Selected Projects

<div class='paper-box'><div class='paper-box-image'><div class='media-stack'><div class="badge">Open-Source</div><img src='images/tidybot_ros/tidybot_ros_data_collection.gif' alt="sym"><img src='images/tidybot_ros/tidybot_ros_real.gif' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[tidybot_ros: Mobile Manipulation Platform for Imitation Learning](https://github.com/roahmlab/tidybot_ros)

**Zhuoyang Chen**, Yuandi Huang — ROAHM Lab, University of Michigan ([SURE](https://sure.engin.umich.edu/) program, sponsored by Prof. [Ram Vasudevan](https://me.engin.umich.edu/people/faculty/ramanarayan-vasudevan/))

[**Code**](https://github.com/roahmlab/tidybot_ros) \| [**Poster**](files/SURE_Poster.pdf)
- An end-to-end **ROS2 stack extending the Tidybot++** holonomic mobile manipulator (Kinova Gen3 arm, powered-caster base, RGBD wrist camera): **MoveIt2** motion planning, **Gazebo / Isaac Sim** simulation, phone teleoperation, and a training-data acquisition pipeline for imitation learning — used to train and deploy Diffusion Policy in simulation and on hardware, and to fine-tune and deploy OpenVLA and π0 / π0.5 on hardware.
</div>
</div>

# 🎖 Honors and Awards
- *2026.03* EECS Outstanding Achievement Award (3 recipients per year), University of Michigan.
- *2023.12 & 2024.12* Excellent Undergraduate Scholarship (Top 10%), Shanghai Jiao Tong University.
- *2023.12* John Wu and Jane Sun Sunshine Scholarship (Top 6%), Shanghai Jiao Tong University.

# 📖 Educations
- *2026.08 - 2028.05 (expected)*, MSE in Robotics, University of Pennsylvania.
- *2024.08 - 2026.05*, B.S. in Computer Engineering, University of Michigan, Ann Arbor.
- *2022.09 - 2026.08*, B.S.E. in Mechanical Engineering, Shanghai Jiao Tong University.

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Internships
- *2026.05 - present*, Research Intern, Shanghai Institute for Physical Artificial Intelligence and Robotics (PAIR), Shanghai, China. Advisor: Prof. [Yutong Ban](https://gc.sjtu.edu.cn/about/faculty-staff/faculty-directory/faculty-detail/75745/). Dexterous manipulation and sim2real transfer.
- *2025.05 - present*, [SURE](https://sure.engin.umich.edu/) Undergraduate Research Assistant, ROAHM Lab, University of Michigan, Ann Arbor. Advisor: Prof. [Ram Vasudevan](https://me.engin.umich.edu/people/faculty/ramanarayan-vasudevan/). Mobile manipulation.