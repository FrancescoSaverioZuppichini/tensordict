window.BENCHMARK_DATA = {
  "lastUpdate": 1674645263272,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "apbard@users.noreply.github.com",
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336ac407316319209ac3922c3846615967e73304",
          "message": "[Minor, Doc] Typo (#186)",
          "timestamp": "2023-01-25T11:06:43Z",
          "tree_id": "521e651bea1baa188fb7dabf8a14cd84c43fe7d5",
          "url": "https://github.com/pytorch-labs/tensordict/commit/336ac407316319209ac3922c3846615967e73304"
        },
        "date": 1674645262239,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 742.8607156054264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3461473719000026 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 184227.14602838308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.428081700000575 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 87679.63859153553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.405156500001112 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 34441.82107216351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.034469399999807 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 49288.08681705209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.288878400003796 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 28455.456407605634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.142644900003006 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 23272.450724925726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.969260600000325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 25083.035822400445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.8675824999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3443.7363833931413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 290.3822734000016 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 24049.045141680956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.581692500000145 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16022.124888170314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.41369399999712 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 18121.70295775113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.182451799998944 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 11833.565707485259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.50538280000046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 26852.127436733943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.24099709999109 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17635.784660609348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.7028923999942 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 28731.624204894983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.80485449999833 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 98393.24132111148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.163299699991057 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 28116.030019933016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.56689900000265 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6433.377676825784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.4393430999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23036.291435725732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.409765100000186 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6958.586602284248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.70734420000417 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 13071.880148677228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.50008940000816 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 6067.844145496066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.80317819999755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11904.620182424329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.00100000471866 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 955.9505975513677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0460791620000691 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 14022.455504155503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.31418599999506 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1848.3511644256805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 541.0227338000027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1766.995834324655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 565.9322905999943 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}