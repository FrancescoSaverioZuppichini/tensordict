window.BENCHMARK_DATA = {
  "lastUpdate": 1674827505833,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "CPU Benchmark Results": [
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
          "id": "93c23e2d34c7d7b6e2d7ee3b3137006cbe1fce0f",
          "message": "[BugFix] MemmapTensor from MemmapTensor __dir__ issue (#192)",
          "timestamp": "2023-01-27T13:45:27Z",
          "tree_id": "a6214f462940a69c0df95eabac1716ba9fa72bfb",
          "url": "https://github.com/pytorch-labs/tensordict/commit/93c23e2d34c7d7b6e2d7ee3b3137006cbe1fce0f"
        },
        "date": 1674827337255,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 929.9911013922335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.075279105900003 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 162081.04279052053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.169753000000355 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 81506.46840631562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.268964899999446 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 32528.043817147536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.74270330000104 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 45061.27420801684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.19200449999903 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 34470.63767470582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.010197299999163 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 28658.118561272728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.89412600000037 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 30148.914624448294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.1686899000033 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5337.241093316714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.36271839999858 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 27139.033927577846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.84729539999694 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 17550.456711848743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.978574200002186 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 21720.52557694632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.039401599995244 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12865.813912115369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.72535859999721 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 25975.057622354878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.49847089999798 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17917.109759776962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.81257320000077 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 27670.312356679915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.1398161000011 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 98137.5841823787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.189776000004258 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 26983.927495808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.05909749999705 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5699.799540215988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.44476660000328 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 22962.303963551156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.54963689999636 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7996.123799027043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.0605950000022 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 20724.361660594586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.25239090000082 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 12944.642951550793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.25203420000071 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14104.173421921454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.90100001505562 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1043.2272204855572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 958.5639449999803 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 11970.376812734161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.5395590000303 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2222.971960517387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.84822920000056 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2169.9368921571895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.84289529999864 usec\nrounds: 1"
          }
        ]
      }
    ],
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
          "id": "93c23e2d34c7d7b6e2d7ee3b3137006cbe1fce0f",
          "message": "[BugFix] MemmapTensor from MemmapTensor __dir__ issue (#192)",
          "timestamp": "2023-01-27T13:45:27Z",
          "tree_id": "a6214f462940a69c0df95eabac1716ba9fa72bfb",
          "url": "https://github.com/pytorch-labs/tensordict/commit/93c23e2d34c7d7b6e2d7ee3b3137006cbe1fce0f"
        },
        "date": 1674827504595,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1228.1262960270976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 814.248504599999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 233113.4156910915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.2897573999994165 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 119627.92413863186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.359252299999298 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 48848.551947452885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.471435899997914 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 65712.40038796973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.217827899999747 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 47573.32761235085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.020181900001944 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39964.070542168294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.022476099996993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 41751.62374048669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.951164299995753 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6526.908566882531,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.2118903999958 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39344.953115057106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.416220400001066 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25719.09364165108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.881619 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31658.26448412599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.587328500000925 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 19011.58745418759,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.599500299999136 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 36799.06999035564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.174599799997168 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 26207.160105387233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.15751099999716 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 40805.61647198698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.506430400003865 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 146830.4783834959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.81057510000187 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 39491.66424562854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.321799400001055 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8493.775024402325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.7332808000017 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 31967.4230988013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.28184579999811 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10963.893023348572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.2084784000001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28350.432896933202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.272830000002386 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18403.957021548023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.336140800000976 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13773.914959963848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.60099999939484 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1432.0168180752248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 698.3158209999942 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18181.055238632525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.00230799998462 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2973.5931991756756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 336.29347829999574 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2977.171381503549,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 335.88929619999703 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}