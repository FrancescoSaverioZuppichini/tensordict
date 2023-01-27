window.BENCHMARK_DATA = {
  "lastUpdate": 1674827338146,
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
    ]
  }
}