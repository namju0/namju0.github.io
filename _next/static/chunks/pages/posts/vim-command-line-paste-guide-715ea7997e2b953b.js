(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{3920:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/vim-command-line-paste-guide",function(){return i(3214)}])},3214:function(e,t,i){"use strict";i.r(t),i.d(t,{__toc:function(){return l}});var s=i(5893),a=i(2673),n=i(9756),o=i(9770);i(1502);var d=i(2643);let l=[{depth:3,value:"방법:",id:"방법"}];function r(e){let t=Object.assign({p:"p",code:"code",h3:"h3",ol:"ol",li:"li"},(0,d.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Vim을 사용할 때, 클립보드 내용을 명령줄에 붙여넣어야 할 상황이 자주 발생합니다. ",(0,s.jsx)(t.code,{children:":w"})," 로 파일을 저장할 때 정해진 경로에 파일을 생성하려면 경로를 클립보드에 복사해 붙여 넣어야 하는 일이 많습니다. 가령, ",(0,s.jsx)(t.code,{children:":w C:\\*Program Files (x86)\\...\\output.txt"}),"와 같은 명령을 명령줄에 입력해야 할 때를 떠올릴 수 있습니다."]}),"\n",(0,s.jsx)(t.p,{children:"다음과 같이 하면 Vim 편집기의 내용을 복사(yank)하여 Vim 명령줄에 붙여넣을 수 있습니다. 이렇게 함으로써 복잡한 텍스트가 필요한 명령어를 편리하게 쓸 수 있습니다. 물론 Vim 외부의 텍스트를 명령줄에 바로 복사, 붙여넣기할 수는 없지만 외부 텍스트를 Vim 편집기에 한번 붙여 넣은 후 yank해 동일한 효과를 낼 수 있습니다."}),"\n",(0,s.jsx)(t.h3,{id:"방법",children:"방법:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["텍스트를 먼저 복사(yank)합니다. 가령, ",(0,s.jsx)(t.code,{children:"yy"}),"로 원하는 부분을 행복사합니다."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:":"})," 키를 눌러 명령 모드로 진입합니다."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Ctrl-R"}),"을 누른 후, ",(0,s.jsx)(t.code,{children:'"'}),"을 입력하여 기본 레지스터의 내용을 붙여넣습니다."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["참고로 기본 레지스터(",(0,s.jsx)(t.code,{children:"yy"})," 로 yank 시 복사되는 곳)외 다른 Vim 레지스터에 대해서도 위 방법을 적용할 수 있습니다. 예를 들어, ",(0,s.jsx)(t.code,{children:'"ayy'})," 로 행복사를 레지스터 a에 하고 명령줄에서 ",(0,s.jsx)(t.code,{children:"Ctrl-R"}),"을 누른 후 ",(0,s.jsx)(t.code,{children:'"'}),"  대신 ",(0,s.jsx)(t.code,{children:"a"})," 를 입력하면 됩니다."]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,d.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)},pageOpts:{filePath:"pages/posts/vim-command-line-paste-guide.md",route:"/posts/vim-command-line-paste-guide",frontMatter:{title:"Vim에서 클립보드 내용을 명령줄에 붙여넣는 방법",date:"2024/9/22",description:"Vim에서 명령줄에 클립보드 내용을 효율적으로 붙여넣는 방법을 다룹니다. 복잡한 파일 경로나 명령어를 명령줄에 입력할 때, Vim에서 yank한 텍스트를 명령줄로 쉽게 붙여넣는 실용적인 방법을 소개합니다.",tag:"Vim",author:"Emil Kwak"},pageMap:[{kind:"MdxPage",name:"index",route:"/",frontMatter:{type:"page",title:"About",date:"2024-09-22T00:00:00.000Z"}},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"MdxPage",name:"how-to-deploy-nextjs-blog-on-github-pages",route:"/posts/how-to-deploy-nextjs-blog-on-github-pages",frontMatter:{title:"Next.js 블로그를 GitHub Pages에 배포하는 방법 (Blog Boilerplate 사용)",date:"2024/9/21",description:"Next.js Blog Boilerplate를 사용해 생성한 정적 블로그를 GitHub Pages에 배포하는 과정입니다. React 등 기타 요소를 깊숙히 다루지 않고도 간단하고 깔끔한 정적 블로그를 간편하게 제작할 수 있는 방법을 소개합니다.",tag:"Next.js, GitHub Pages",author:"Emil Kwak"}},{kind:"MdxPage",name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts",date:"2021-03-18T00:00:00.000Z"}},{kind:"MdxPage",name:"pd_crosstab_tutorial_with_example",route:"/posts/pd_crosstab_tutorial_with_example",frontMatter:{title:"pd.crosstab을 활용한 데이터 분석(신용등급 전이행렬 예제)",date:"2024/10/1",description:"pd.crosstab은 판다스에서 데이터를 요약해 교차표를 만들기 위해 사용하는 강력한 도구입니다. 여기에서는 pd.crosstab로 신용등급 전이행렬 예제로 그 사용법을 쉽게 설명합니다.",tag:"pandas, crosstab, 전이행렬",author:"Emil Kwak"}},{kind:"MdxPage",name:"vim-command-line-paste-guide",route:"/posts/vim-command-line-paste-guide",frontMatter:{title:"Vim에서 클립보드 내용을 명령줄에 붙여넣는 방법",date:"2024/9/22",description:"Vim에서 명령줄에 클립보드 내용을 효율적으로 붙여넣는 방법을 다룹니다. 복잡한 파일 경로나 명령어를 명령줄에 입력할 때, Vim에서 yank한 텍스트를 명령줄로 쉽게 붙여넣는 실용적인 방법을 소개합니다.",tag:"Vim",author:"Emil Kwak"}},{kind:"MdxPage",name:"vim_diff_two_files_guide",route:"/posts/vim_diff_two_files_guide",frontMatter:{title:"Vim에서 파일 비교하기(diffthis)",date:"2024/10/3",description:"Vim에서 두 개 또는 세 개 이상의 파일을 비교하기 위해서는 diffthis 명령어를 사용할 수 있습니다. 세 파일 이상을 비교할 때는 windo diffthis를 사용하면 보다 편리합니다.",tag:"Vim, diffthis, windo, 파일 비교",author:"Emil Kwak"}},{kind:"Meta",data:{vim_diff_two_files_guide:"Vim에서 파일 비교하기(diffthis)",pd_crosstab_tutorial_with_example:"pd.crosstab을 활용한 데이터 분석(신용등급 전이행렬 예제)","vim-command-line-paste-guide":"Vim에서 클립보드 내용을 명령줄에 붙여넣는 방법","how-to-deploy-nextjs-blog-on-github-pages":"Next.js 블로그를 GitHub Pages에 배포하는 방법 (Blog Boilerplate 사용)",index:"Posts"}}]},{kind:"Meta",data:{index:"About"}}],flexsearch:{codeblocks:!0},title:"Vim에서 클립보드 내용을 명령줄에 붙여넣는 방법",headings:l},pageNextRoute:"/posts/vim-command-line-paste-guide",nextraLayout:n.ZP,themeConfig:o.Z};t.default=(0,a.j)(c)},9770:function(e,t,i){"use strict";var s=i(5893),a=i(1822),n=i.n(a);let o=new Date().getFullYear();t.Z={footer:(0,s.jsxs)("footer",{className:"jsx-2447ca1c11803f07",children:[(0,s.jsxs)("small",{className:"jsx-2447ca1c11803f07",children:[(0,s.jsx)("time",{className:"jsx-2447ca1c11803f07",children:o})," \xa9 Namju Emil Kwak.",(0,s.jsx)("a",{href:"/feed.xml",className:"jsx-2447ca1c11803f07",children:"RSS"})]}),(0,s.jsx)(n(),{id:"2447ca1c11803f07",children:"footer.jsx-2447ca1c11803f07{margin-top:8rem}a.jsx-2447ca1c11803f07{float:right}"})]})}}},function(e){e.O(0,[647,888,774,179],function(){return e(e.s=3920)}),_N_E=e.O()}]);