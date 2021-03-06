export const mockKeepers = [
  {
    id: 1,
    name: 'Тест С. ',
    _links: {
      self: {
        id: 1,
        label: 'Тест С. ',
        type: 'employees',
        href: '/employees/1',
      },
    },
    type: 'EMPLOYEE',
    deleted: false,
    _embedded: {
      tag: {
        status: 'IDLE',
        _links: {
          self: {
            id: 20002191,
            label: '20002191',
            type: 'tags',
            href: '/tags/20002191',
          },
        },
        site_id: 29,
        deleted: false,
        since_lastupdate: 4,
        sensors: {
          beacons: [],
          temperature: '30',
          tag_cfg_site: '0',
          motion: 'STILL',
          barometer: '-9719',
          orientation: 'ZH',
          impact_fall: 'NORMAL',
          battery_state: 'GOOD',
          barometer_temperature: '28',
        },
        id: 20002191,
        time: '2021-08-24T12:44:25.989+03:00',
        descr: '',
        z: 0.5,
        y: 0.14,
        x: 0.15,
      },
    },
  },
  {
    id: 1,
    name: 'Тест Murat ',
    _links: {
      self: {
        id: 1,
        label: 'Тест С. ',
        type: 'employees',
        href: '/employees/1',
      },
    },
    type: 'EMPLOYEE',
    deleted: false,
    _embedded: {
      tag: {
        status: 'IDLE',
        _links: {
          self: {
            id: 20002191,
            label: '20002191',
            type: 'tags',
            href: '/tags/20002191',
          },
        },
        site_id: 29,
        deleted: false,
        since_lastupdate: 4,
        sensors: {
          beacons: [],
          temperature: '30',
          tag_cfg_site: '0',
          motion: 'STILL',
          barometer: '-9719',
          orientation: 'ZH',
          impact_fall: 'NORMAL',
          battery_state: 'GOOD',
          barometer_temperature: '28',
        },
        id: 20002191,
        time: '2021-08-24T12:44:25.989+03:00',
        descr: '',
        z: 0.5,
        y: 0.14,
        x: 0.99,
      },
    },
  },
];
