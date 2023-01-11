export interface IRoute {
  id: number;
  pid: number;
  path: string;
  link?: string;
  name: string;
  title: string;
}

export default <IRoute[]>[
  { id: 2, pid: 0, path: "/course", name: "Course", title: "课程管理" },
  {
    id: 3,
    pid: 2,
    path: "operate",
    link: "/course/operate",
    name: "CourseOperate",
    title: "课程操作",
  },
  {
    id: 4,
    pid: 3,
    path: "info_data",
    link: "/course/operate/info_data",
    name: "CourseOperateInfoData",
    title: "课程数据",
  },
  {
    id: 5,
    pid: 2,
    path: "add",
    link: "/course/add",
    name: "CourseAdd",
    title: "添加课程",
  },
  { id: 6, pid: 0, path: "/student", name: "Student", title: "学生管理" },
  {
    id: 7,
    pid: 6,
    path: "operate",
    link: "/student/operate",
    name: "StudentOperate",
    title: "学生操作",
  },
  {
    id: 8,
    pid: 6,
    path: "add",
    link: "/student/add",
    name: "StudentAdd",
    title: "添加学生",
  },
];
