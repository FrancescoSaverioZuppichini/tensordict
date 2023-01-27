window.BENCHMARK_DATA = {
  "lastUpdate": 1674830093623,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "GPU Benchmark Results": [
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
          "id": "0ca65397d3a483cf07beb608fa0b1392bf8c4491",
          "message": "[BugFix] Incorrect output batch_size with functorch.vmap (#196)",
          "timestamp": "2023-01-27T14:28:20Z",
          "tree_id": "70d10f6421d74aed04037343b4ba7421edbbef9e",
          "url": "https://github.com/pytorch-labs/tensordict/commit/0ca65397d3a483cf07beb608fa0b1392bf8c4491"
        },
        "date": 1674830089451,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1224.197469055225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 816.8616789999987 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 243645.34564414516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.104326300000594 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 122018.88642488765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.195452600000408 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 49377.57590469179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.25210799999968 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 67071.03930404069,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.90956470000242 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 47730.62887389679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.9509077000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 40658.806514323085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.594917699999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 41537.10464905541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.07486050000216 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6385.154562636455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.61328010000375 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39030.74178314675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.62083000000257 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25924.24677405619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.57392689999983 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31740.348309191148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.505640399996086 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18924.497385078736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.841561899998624 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 36137.222733946895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.672298100003445 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 26158.985493017208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.22778219999918 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 40336.489089481445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.791448700000274 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 148736.8862034468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.723281799997949 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 39010.30816965413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.634250199999542 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8481.581432112142,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.90254070000401 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 31841.537050094765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.405519099996585 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 11235.551598883678,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.00319589999981 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28422.04183232299,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.183960599999864 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18506.373471031562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.03543819999754 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12194.973230581058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.00100000976818 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1434.3396809227718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 697.1849230000089 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18437.85597161449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.23624100001234 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2981.931335659344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 335.3531277000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2966.6832162397977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 337.0767712999964 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}