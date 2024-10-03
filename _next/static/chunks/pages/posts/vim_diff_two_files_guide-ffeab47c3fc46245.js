(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{7472:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/vim_diff_two_files_guide",function(){return i(3990)}])},3990:function(e,s,i){"use strict";i.r(s),i.d(s,{__toc:function(){return r}});var t=i(5893),n=i(2673),l=i(9756),a=i(9770);i(1502);var d=i(2643);let r=[{depth:3,value:"두 파일 비교",id:"두-파일-비교"},{depth:3,value:"예제",id:"예제"},{depth:3,value:"세 파일 비교(또는 셋 이상)",id:"세-파일-비교또는-셋-이상"},{depth:3,value:"예제",id:"예제-1"},{depth:3,value:"세 파일 예시",id:"세-파일-예시"},{depth:3,value:"결론",id:"결론"}];function c(e){let s=Object.assign({p:"p",code:"code",hr:"hr",h3:"h3",strong:"strong",ol:"ol",li:"li",pre:"pre",span:"span",ul:"ul"},(0,d.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["소스코드나 설정파일 등 텍스트 파일의 내용을 비교해야 하는 상황이 자주 발생합니다. 때로는 셋 이상의 여러 파일 간의 차이를 확인해야 할 때도 있습니다. 이때 Vim의 ",(0,t.jsx)(s.code,{children:":diffthis"})," 명령어를 유용하게 사용할 수 있습니다. 두 파일을 비교하는 기본적인 방법과, 세 개의 파일을 동시에 비교하는 방법을 소개합니다."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"두-파일-비교",children:(0,t.jsx)(s.strong,{children:"두 파일 비교"})}),"\n",(0,t.jsxs)(s.p,{children:["Vim에서는 ",(0,t.jsx)(s.code,{children:":diffthis"})," 명령어를 통해 동시에 열려 있는(정확히는 같은 탭(tab)에 열려 있는) 창(window)에서 연 파일을 비교할 수 있습니다. Vim에서 여러 파일을 분할해 열어 놓은 후 각 분할(각 파일)에 대해 ",(0,t.jsx)(s.code,{children:":diffthis"}),"를 실행하면 됩니다.(",(0,t.jsx)(s.code,{children:"split"}),", ",(0,t.jsx)(s.code,{children:"vsplit"})," 으로 분할이 생길 때마다 창이 생긴다 보면 됨)"]}),"\n",(0,t.jsx)(s.h3,{id:"예제",children:(0,t.jsx)(s.strong,{children:"예제"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Vim에서 첫 번째 파일을 엽니다:"}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vim"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"file1.txt"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"두 번째 파일을 수직으로 분할하여 엽니다:"}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":vsplit file2.txt"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["각각의 창에서 ",(0,t.jsx)(s.code,{children:":diffthis"})," 명령어를 실행하여 diff 모드를 활성화합니다:"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:':diffthis   " 첫 번째 창에서 실행'})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'Ctrl+W →    " 두 번째 창으로 이동'})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:':diffthis   " 두 번째 창에서 실행'})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"이렇게 하면 두 파일의 차이점이 각각의 창에 하이라이트되며, 추가되거나 삭제된 라인이 표시됩니다."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"세-파일-비교또는-셋-이상",children:(0,t.jsx)(s.strong,{children:"세 파일 비교(또는 셋 이상)"})}),"\n",(0,t.jsxs)(s.p,{children:["세 개의 파일을 동시에 비교하고자 한다면, ",(0,t.jsx)(s.code,{children:"windo"})," 명령어를 사용하여 각 창에 ",(0,t.jsx)(s.code,{children:":diffthis"})," 명령어를 한 번에 적용할 수 있습니다. 세 개 이상의 창을 열고 ",(0,t.jsx)(s.code,{children:"windo :diffthis"}),"를 실행하면, 열린 모든 창에 대해 ",(0,t.jsx)(s.code,{children:":diffthis"}),"가 자동으로 적용됩니다."]}),"\n",(0,t.jsx)(s.h3,{id:"예제-1",children:(0,t.jsx)(s.strong,{children:"예제"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"첫 번째 파일을 엽니다:"}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vim"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"file1.txt"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"두 번째 파일을 수직 분할하여 엽니다:"}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":vsplit file2.txt"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"세 번째 파일을 수평 분할하여 엽니다:"}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":split file3.txt"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"모든 창에 대해 diff 모드를 적용하기 위해 다음 명령어를 실행합니다:"}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":windo diffthis"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"이렇게 하면 Vim에 열려 있는 모든 파일(같은 탭에 열린 윈도우들)의 차이점이 각각의 창에 하이라이트되며, 차이가 있는 부분이 표시됩니다."}),"\n",(0,t.jsx)(s.h3,{id:"세-파일-예시",children:(0,t.jsx)(s.strong,{children:"세 파일 예시"})}),"\n",(0,t.jsx)(s.p,{children:"아래의 예시 파일들은 서로 다른 내용이 포함되어 있습니다:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"file1.txt"})}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Hello World!"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"This is a sample file."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"It contains some text."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"file2.txt"})}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Hello World!"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"This is another file."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"It contains some different text."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"file3.txt"})}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Hello World!"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"This is a third file."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"It contains even more different text."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["위와 같은 파일을 열고 ",(0,t.jsx)(s.code,{children:":windo diffthis"})," 명령어를 실행하면, 세 파일의 차이점을 한눈에 볼 수 있습니다."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"결론",children:(0,t.jsx)(s.strong,{children:"결론"})}),"\n",(0,t.jsxs)(s.p,{children:["Vim에서 ",(0,t.jsx)(s.code,{children:":diffthis"})," 명령어와 ",(0,t.jsx)(s.code,{children:"windo"}),"를 사용하면 두 개 또는 세 개 이상의 파일을 효율적으로 비교할 수 있습니다. 두 파일을 비교할 때는 각 창에서 개별적으로 ",(0,t.jsx)(s.code,{children:":diffthis"}),"를 실행하고, 세 파일 이상을 비교할 때는 ",(0,t.jsx)(s.code,{children:"windo"}),"를 활용하여 한 번에 diff 모드를 활성화할 수 있습니다.(물론, 두 파일을 비교할 때도 ",(0,t.jsx)(s.code,{children:":windo diffthis"}),"를 써도 됨)"]})]})}let o={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,d.a)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/posts/vim_diff_two_files_guide.md",route:"/posts/vim_diff_two_files_guide",frontMatter:{title:"Vim에서 파일 비교하기(diffthis)",date:"2024/10/3",description:"Vim에서 두 개 또는 세 개 이상의 파일을 비교하기 위해서는 diffthis 명령어를 사용할 수 있습니다. 세 파일 이상을 비교할 때는 windo diffthis를 사용하면 보다 편리합니다.",tag:"Vim, diffthis, windo, 파일 비교",author:"Emil Kwak"},pageMap:[{kind:"MdxPage",name:"index",route:"/",frontMatter:{type:"page",title:"About",date:"2024-09-22T00:00:00.000Z"}},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"MdxPage",name:"how-to-deploy-nextjs-blog-on-github-pages",route:"/posts/how-to-deploy-nextjs-blog-on-github-pages",frontMatter:{title:"Next.js 블로그를 GitHub Pages에 배포하는 방법 (Blog Boilerplate 사용)",date:"2024/9/21",description:"Next.js Blog Boilerplate를 사용해 생성한 정적 블로그를 GitHub Pages에 배포하는 과정입니다. React 등 기타 요소를 깊숙히 다루지 않고도 간단하고 깔끔한 정적 블로그를 간편하게 제작할 수 있는 방법을 소개합니다.",tag:"Next.js, GitHub Pages",author:"Emil Kwak"}},{kind:"MdxPage",name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts",date:"2021-03-18T00:00:00.000Z"}},{kind:"MdxPage",name:"pd_crosstab_tutorial_with_example",route:"/posts/pd_crosstab_tutorial_with_example",frontMatter:{title:"pd.crosstab을 활용한 데이터 분석(신용등급 전이행렬 예제)",date:"2024/10/1",description:"pd.crosstab은 판다스에서 데이터를 요약해 교차표를 만들기 위해 사용하는 강력한 도구입니다. 여기에서는 pd.crosstab로 신용등급 전이행렬 예제로 그 사용법을 쉽게 설명합니다.",tag:"pandas, crosstab, 전이행렬",author:"Emil Kwak"}},{kind:"MdxPage",name:"vim-command-line-paste-guide",route:"/posts/vim-command-line-paste-guide",frontMatter:{title:"Vim에서 클립보드 내용을 명령줄에 붙여넣는 방법",date:"2024/9/22",description:"Vim에서 명령줄에 클립보드 내용을 효율적으로 붙여넣는 방법을 다룹니다. 복잡한 파일 경로나 명령어를 명령줄에 입력할 때, Vim에서 yank한 텍스트를 명령줄로 쉽게 붙여넣는 실용적인 방법을 소개합니다.",tag:"Vim",author:"Emil Kwak"}},{kind:"MdxPage",name:"vim_diff_two_files_guide",route:"/posts/vim_diff_two_files_guide",frontMatter:{title:"Vim에서 파일 비교하기(diffthis)",date:"2024/10/3",description:"Vim에서 두 개 또는 세 개 이상의 파일을 비교하기 위해서는 diffthis 명령어를 사용할 수 있습니다. 세 파일 이상을 비교할 때는 windo diffthis를 사용하면 보다 편리합니다.",tag:"Vim, diffthis, windo, 파일 비교",author:"Emil Kwak"}},{kind:"Meta",data:{vim_diff_two_files_guide:"Vim에서 파일 비교하기(diffthis)",pd_crosstab_tutorial_with_example:"pd.crosstab을 활용한 데이터 분석(신용등급 전이행렬 예제)","vim-command-line-paste-guide":"Vim에서 클립보드 내용을 명령줄에 붙여넣는 방법","how-to-deploy-nextjs-blog-on-github-pages":"Next.js 블로그를 GitHub Pages에 배포하는 방법 (Blog Boilerplate 사용)",index:"Posts"}}]},{kind:"Meta",data:{index:"About"}}],flexsearch:{codeblocks:!0},title:"Vim에서 파일 비교하기(diffthis)",headings:r},pageNextRoute:"/posts/vim_diff_two_files_guide",nextraLayout:l.ZP,themeConfig:a.Z};s.default=(0,n.j)(o)},9770:function(e,s,i){"use strict";var t=i(5893),n=i(1822),l=i.n(n);let a=new Date().getFullYear();s.Z={footer:(0,t.jsxs)("footer",{className:"jsx-2447ca1c11803f07",children:[(0,t.jsxs)("small",{className:"jsx-2447ca1c11803f07",children:[(0,t.jsx)("time",{className:"jsx-2447ca1c11803f07",children:a})," \xa9 Namju Emil Kwak.",(0,t.jsx)("a",{href:"/feed.xml",className:"jsx-2447ca1c11803f07",children:"RSS"})]}),(0,t.jsx)(l(),{id:"2447ca1c11803f07",children:"footer.jsx-2447ca1c11803f07{margin-top:8rem}a.jsx-2447ca1c11803f07{float:right}"})]})}}},function(e){e.O(0,[647,888,774,179],function(){return e(e.s=7472)}),_N_E=e.O()}]);