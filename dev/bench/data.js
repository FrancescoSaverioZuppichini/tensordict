window.BENCHMARK_DATA = {
  "lastUpdate": 1674740913085,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65b0f7fb9ab7c411a6187007e5c6bbc0e877dedb",
          "message": "[BugFix] Relax error matching in tensorclass tests (#188)",
          "timestamp": "2023-01-25T16:04:52Z",
          "tree_id": "82c645c43b80d95fefe679ffa48f3d0d300f5471",
          "url": "https://github.com/pytorch-labs/tensordict/commit/65b0f7fb9ab7c411a6187007e5c6bbc0e877dedb"
        },
        "date": 1674663084094,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1272.1193236181398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 786.0897805999969 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 223927.01842278065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4657406999988325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 112904.5191095038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.857041400000298 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 49229.97573444801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.312827399999378 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 62152.15652166396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.089546299997437 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45098.32302561626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.173773500003335 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 38915.3723780235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.6967861000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40193.52733243283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.879627799998616 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7458.099902513218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.08240879999767 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38417.261976077185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.029965399999355 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25633.409100732748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.01158820000319 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 32103.651441384347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.149104700000407 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17545.968274337985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.99314990000062 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35637.84152598297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.060060800004294 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25077.4668655892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.87643589999834 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38878.21468066063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.721345699997755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 141579.98821233932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.063145099999701 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37921.50084745439,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.37026429999878 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8837.384517654762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.15565119999746 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30470.618055996918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.8185006999945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10253.504129397084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.52763419999724 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27946.743400225696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.78234450000082 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 11325.117630938843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.29930360000162 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14727.540505863499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.89999997636187 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1500.1943636815022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 666.5802940000276 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17066.39695386828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.59467600004109 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2911.7859098927192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 343.4318425000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3014.6888449940766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 331.70919170000275 usec\nrounds: 1"
          }
        ]
      }
    ],
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ae3066d104ed615836c8a088d0b02f93d3ee29f",
          "message": "[BugFix] Using set_interaction_mode as decorator (#191)",
          "timestamp": "2023-01-26T13:44:36Z",
          "tree_id": "13f68c9bfd7fcf4cb9a42a1f846c7481d1a94d44",
          "url": "https://github.com/pytorch-labs/tensordict/commit/1ae3066d104ed615836c8a088d0b02f93d3ee29f"
        },
        "date": 1674740911502,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 701.4542447691687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4256097350000005 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 149453.17549058443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.6910589000030996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 70072.75471932517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.270881800001689 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 27784.526407703834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.99125590000085 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 40739.09468517056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.546446299996205 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 26301.93624386113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.02001460000497 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 21729.598604639305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.02017820000128 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 21922.155652915848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.615952000002835 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3602.8022559919577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 277.5617224999962 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 21265.836362642738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.02377950000027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 13871.866490321088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.08835239999871 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 17018.356187887744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.76008170000091 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 10371.916008659857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.41420149999931 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 25158.08029436753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.748660800000835 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 15953.003091014907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.68412249999642 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 27505.13859250668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.35684280000078 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 85978.59595521774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.630801700005122 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 24574.42399571592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.69271369999683 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5373.5515841574315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.09665960000257 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 20728.81742668731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.24201879999919 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6131.431613245719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.09404770000242 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 14354.009205607776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.6669471000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 5306.057230605902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.46385489999875 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11890.465040278139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.10099997036014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 841.586224510049,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.188232376999963 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10358.236180070546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.5415329999928 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1522.0204622190317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 657.0213902000035 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1456.7430069925892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 686.4628800000048 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}