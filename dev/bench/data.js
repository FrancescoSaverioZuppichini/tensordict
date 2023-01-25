window.BENCHMARK_DATA = {
  "lastUpdate": 1674641830188,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
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
          "id": "dcc7774f42cfddb2b7eb00e22f81b0d9427f45de",
          "message": "[CI] Benchmark on push to main",
          "timestamp": "2023-01-25T10:13:47Z",
          "tree_id": "320ab19be681c36df5163abfed391feb889fc579",
          "url": "https://github.com/pytorch-labs/tensordict/commit/dcc7774f42cfddb2b7eb00e22f81b0d9427f45de"
        },
        "date": 1674641829090,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1060.055760139326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 943.3466027000009 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 179784.26607207247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.562222000000361 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93724.38307589485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.66958209999882 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 36663.54738094039,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.27504759999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50803.15288634551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.68381769999894 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 39129.216996310366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.556350900001235 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 32075.13988986979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.17679309999915 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 33358.276094728346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.977568300000712 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6162.294356033716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.27722050000182 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 30517.476331782567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.76810929999954 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19819.024912655736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.456569099998205 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24587.180924929376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.671600500002114 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14681.624466192347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.112353799998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29247.21266166474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.191292400001316 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20511.712080937203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.75263440000026 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31545.260284578122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.700483400001644 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 113948.01793974862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.775931499999956 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30814.545976846424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.45220619999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7092.001182497599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.00392459999966 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25803.202939712377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.754878699998585 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9027.977807045761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.76677650000022 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23468.199797223606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.61085249999894 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 9156.382989481193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.21343079999986 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13175.230564277032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.90000001300723 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1214.8111042958046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 823.1732459999819 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 14014.148908961351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.35645600001794 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2577.740884829448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.93658660000006 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2506.1907334542902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 399.011929400001 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}