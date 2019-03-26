const routes = [
  {
    path: '/staff',
    name: 'staff',
    meta: {
      requireAuth: true,
      txt: '讲师管理',
      flag: 'staff'
    },
    component: () => import('page/staff'),
    redirect: 'staff/apply',
    children: [
      {
        path: 'apply',
        name:'apply',
        meta: {
          name:'apply',
          requireAuth: true,
          txt: '申请记录',
          flag: 'staff',
          belongToGroup:'讲师管理'
        },
        component: () => import('page/staff/apply'),
      },
      {
        path: 'details/:id(\\d+)',
        name:'details',
        // redirect: 'details/details-child',
        props:true,
        hidden: true,
        meta: {
          name:'apply',
          requireAuth: true,
          txt: '详情',
          flag: 'staff',
          belongToGroup:'讲师管理'
        },
        component: () => import('page/staff/details'),
      },
      {
        path: 'lecturer-details/:id(\\d+)',
        name:'lecturer-details',
        // redirect: 'details/details-child',
        props:true,
        hidden: true,
        meta: {
          name:'apply',
          requireAuth: true,
          txt: '详情',
          flag: 'staff',
          belongToGroup:'讲师管理'
        },
        component: () => import('page/staff/lecturer-details'),
      },
      {
        path: 'authentication',
        name:'authentication',
        meta: {
          name:'authentication',
          requireAuth: true,
          txt: '讲师认证',
          flag: 'staff',
          belongToGroup:'讲师管理'
        },
        component: () => import('page/staff/authentication'),
      },
      {
        path: 'information-list',
        name:'information-list',
        meta: {
          name:'information-list',
          requireAuth: true,
          txt: '讲师信息表',
          flag: 'staff',
          belongToGroup:'讲师管理'
        },
        component: () => import('page/course-management/information-list'),
      },
      {
        path: 'edit/:id(\\d+)',
        name:'edit',
        hidden: true,
        meta: {
          name:'information-list',
          requireAuth: true,
          txt: '修改讲师信息',
          flag: 'staff',
          belongToGroup:'讲师管理'
        },
        component: () => import('page/course-management/edit'),
      }
    ]
  }
];

export default routes;

