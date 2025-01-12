import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'operator_basics',
    loadComponent: () =>
      import(
        './components/operators/operator-basics/operator-basics.component'
      ).then((m) => m.OperatorBasicsComponent),
  },
  {
    path: 'from',
    loadComponent: () =>
      import('./components/operators/creation/from/from.component').then(
        (m) => m.FromComponent
      ),
  },
  {
    path: 'new_observable',
    loadComponent: () =>
      import(
        './components/operators/creation/new-observable/new-observable.component'
      ).then((m) => m.NewObservableComponent),
  },
  {
    path: 'function_observable',
    loadComponent: () =>
      import(
        './components/operators/creation/function-observable/function-observable.component'
      ).then((m) => m.FunctionObservableComponent),
  },
  {
    path: 'unsubscribe',
    loadComponent: () =>
      import(
        './components/miscellaneous/unsubscribe/unsubscribe.component'
      ).then((m) => m.UnsubscribeComponent),
  },
  {
    path: 'buffer',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer/buffer.component'
      ).then((m) => m.BufferComponent),
  },
  {
    path: 'buffercount',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer-count/buffer-count.component'
      ).then((m) => m.BufferCountComponent),
  },
  {
    path: 'buffertime',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer-time/buffer-time.component'
      ).then((m) => m.BufferTimeComponent),
  },
  {
    path: 'buffertoggle',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer-toggle/buffer-toggle.component'
      ).then((m) => m.BufferToggleComponent),
  },
  {
    path: 'bufferwhen',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer-when/buffer-when.component'
      ).then((m) => m.BufferWhenComponent),
  },
  {
    path: 'take',
    loadComponent: () =>
      import('./components/operators/filtering/take/take.component').then(
        (m) => m.TakeComponent
      ),
  },
  {
    path: 'takelast',
    loadComponent: () =>
      import(
        './components/operators/filtering/take-last/take-last.component'
      ).then((m) => m.TakeLastComponent),
  },
  {
    path: 'takeuntil',
    loadComponent: () =>
      import(
        './components/operators/filtering/take-until/take-until.component'
      ).then((m) => m.TakeUntilComponent),
  },
  {
    path: 'takewhile',
    loadComponent: () =>
      import(
        './components/operators/filtering/take-while/take-while.component'
      ).then((m) => m.TakeWhileComponent),
  },
  {
    path: 'skip',
    loadComponent: () =>
      import('./components/operators/filtering/skip/skip.component').then(
        (m) => m.SkipComponent
      ),
  },
  {
    path: 'skiplast',
    loadComponent: () =>
      import(
        './components/operators/filtering/skip-last/skip-last.component'
      ).then((m) => m.SkipLastComponent),
  },
  {
    path: 'skipuntil',
    loadComponent: () =>
      import(
        './components/operators/filtering/skip-until/skip-until.component'
      ).then((m) => m.SkipUntilComponent),
  },
  {
    path: 'skipwhile',
    loadComponent: () =>
      import(
        './components/operators/filtering/skip-while/skip-while.component'
      ).then((m) => m.SkipWhileComponent),
  },
  {
    path: 'distinct',
    loadComponent: () =>
      import(
        './components/operators/filtering/distinct/distinct.component'
      ).then((m) => m.DistinctComponent),
  },
  {
    path: 'distinctuntilchanged',
    loadComponent: () =>
      import(
        './components/operators/filtering/distinct-until-changed/distinct-until-changed.component'
      ).then((m) => m.DistinctUntilChangedComponent),
  },
  {
    path: 'distinctkeyuntilchanged',
    loadComponent: () =>
      import(
        './components/operators/filtering/distinct-until-key-changed/distinct-until-key-changed.component'
      ).then((m) => m.DistinctUntilKeyChangedComponent),
  },
  {
    path: 'filter',
    loadComponent: () =>
      import('./components/operators/filtering/filter/filter.component').then(
        (m) => m.FilterComponent
      ),
  },
  {
    path: 'audit',
    loadComponent: () =>
      import('./components/operators/filtering/audit/audit.component').then(
        (m) => m.AuditComponent
      ),
  },
  {
    path: 'throttle',
    loadComponent: () =>
      import(
        './components/operators/filtering/throttle/throttle.component'
      ).then((m) => m.ThrottleComponent),
  },
  {
    path: 'first',
    loadComponent: () =>
      import('./components/operators/filtering/first/first.component').then(
        (m) => m.FirstComponent
      ),
  },
  {
    path: 'last',
    loadComponent: () =>
      import('./components/operators/filtering/last/last.component').then(
        (m) => m.LastComponent
      ),
  },
  {
    path: 'debounce',
    loadComponent: () =>
      import(
        './components/operators/filtering/debounce/debounce.component'
      ).then((m) => m.DebounceComponent),
  },
  {
    path: 'elementat',
    loadComponent: () =>
      import(
        './components/operators/filtering/element-at/element-at.component'
      ).then((m) => m.ElementAtComponent),
  },
  {
    path: 'ignoreelements',
    loadComponent: () =>
      import(
        './components/operators/filtering/ignore-elements/ignore-elements.component'
      ).then((m) => m.IgnoreElementsComponent),
  },
  {
    path: 'single',
    loadComponent: () =>
      import('./components/operators/filtering/single/single.component').then(
        (m) => m.SingleComponent
      ),
  },
  {
    path: 'map',
    loadComponent: () =>
      import('./components/operators/transformation/map/map.component').then(
        (m) => m.MapComponent
      ),
  },
  {
    path: 'mapto',
    loadComponent: () =>
      import(
        './components/operators/transformation/mapto/mapto.component'
      ).then((m) => m.MaptoComponent),
  },
  {
    path: 'ajax',
    loadComponent: () =>
      import('./components/operators/creation/ajax/ajax.component').then(
        (m) => m.AjaxComponent
      ),
  },
  {
    path: 'mergemap',
    loadComponent: () =>
      import(
        './components/operators/transformation/merge-map/merge-map.component'
      ).then((m) => m.MergeMapComponent),
  },
  {
    path: 'mergemapto',
    loadComponent: () =>
      import(
        './components/operators/transformation/merge-map-to/merge-map-to.component'
      ).then((m) => m.MergeMapToComponent),
  },
  {
    path: 'concatmap',
    loadComponent: () =>
      import(
        './components/operators/transformation/concat-map/concat-map.component'
      ).then((m) => m.ConcatMapComponent),
  },
  {
    path: 'concatmapto',
    loadComponent: () =>
      import(
        './components/operators/transformation/concat-map-to/concat-map-to.component'
      ).then((m) => m.ConcatMapToComponent),
  },
  {
    path: 'exhaustmap',
    loadComponent: () =>
      import(
        './components/operators/transformation/exhaust-map/exhaust-map.component'
      ).then((m) => m.ExhaustMapComponent),
  },
  {
    path: 'switchmap',
    loadComponent: () =>
      import(
        './components/operators/transformation/switch-map/switch-map.component'
      ).then((m) => m.SwitchMapComponent),
  },
  {
    path: 'switchmapto',
    loadComponent: () =>
      import(
        './components/operators/transformation/switch-map-to/switch-map-to.component'
      ).then((m) => m.SwitchMapToComponent),
  },
  {
    path: 'subject',
    loadComponent: () =>
      import('./components/subjects/subjects/subjects.component').then(
        (m) => m.SubjectsComponent
      ),
  },
  {
    path: 'coldobservables',
    loadComponent: () =>
      import(
        './components/subjects/cold-observables/cold-observables.component'
      ).then((m) => m.ColdObservablesComponent),
  },
  {
    path: 'multicast',
    loadComponent: () =>
      import('./components/multicasting/multicast/multicast.component').then(
        (m) => m.MulticastComponent
      ),
  },
  {
    path: 'share',
    loadComponent: () =>
      import('./components/multicasting/share/share.component').then(
        (m) => m.ShareComponent
      ),
  },
  {
    path: 'behaviorsubject',
    loadComponent: () =>
      import(
        './components/subjects/behavior-subject/behavior-subject.component'
      ).then((m) => m.BehaviorSubjectComponent),
  },
  {
    path: 'replaysubject',
    loadComponent: () =>
      import(
        './components/subjects/replay-subject/replay-subject.component'
      ).then((m) => m.ReplaySubjectComponent),
  },
  {
    path: 'asyncsubject',
    loadComponent: () =>
      import(
        './components/subjects/async-subject/async-subject.component'
      ).then((m) => m.AsyncSubjectComponent),
  },
  {
    path: 'voidsubject',
    loadComponent: () =>
      import('./components/subjects/void-subject/void-subject.component').then(
        (m) => m.VoidSubjectComponent
      ),
  },
  {
    path: 'publishbehavior',
    loadComponent: () =>
      import(
        './components/multicasting/publish-behavior/publish-behavior.component'
      ).then((m) => m.PublishBehaviorComponent),
  },
  {
    path: 'publishlast',
    loadComponent: () =>
      import(
        './components/multicasting/publish-last/publish-last.component'
      ).then((m) => m.PublishLastComponent),
  },
  {
    path: 'publishreplay',
    loadComponent: () =>
      import(
        './components/multicasting/publish-replay/publish-replay.component'
      ).then((m) => m.PublishReplayComponent),
  },
];
