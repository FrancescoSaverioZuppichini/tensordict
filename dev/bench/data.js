window.BENCHMARK_DATA = {
  "lastUpdate": 1674644814803,
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
          "id": "d8a8cb08e2e75d72a54954870813598abed7b104",
          "message": "[Doc] Benchmark badge",
          "timestamp": "2023-01-25T10:59:21Z",
          "tree_id": "3fdfb08926fc6f281caa6dee0de495756bd4198f",
          "url": "https://github.com/pytorch-labs/tensordict/commit/d8a8cb08e2e75d72a54954870813598abed7b104"
        },
        "date": 1674644813169,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 783.419995719395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2764545268999996 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 197345.03436762202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.067267100002937 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93899.87094308234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.649641899999551 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 35516.93497715748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.15558270000338 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 54303.77274159544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.41492679999419 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 29713.392519527406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.65485779999062 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 25968.632660003284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.507995899999514 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 26750.152608950317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.382964300002186 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3391.4895987441164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 294.85568830000375 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 25515.323549051594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.19213479999826 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 18585.611889080883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.805062000003545 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 19258.25053206588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.92579660000547 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12479.608257707803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.1307204000068 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28123.19371757677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.5578391999984 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 18650.740804065143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.61717320000707 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 33152.91527889985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.163259899995865 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 126768.35034954197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.88840429999027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30920.364181530567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.341145600003074 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7149.397232710728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.8719314999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 24925.626914413242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.11935199999925 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7424.905164415115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.6818548999977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 20628.10559997802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.477548999994724 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 7136.177385182917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.13104580000117 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13774.104692088651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.59999995312683 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1024.1986597991506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 976.3730800000303 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15799.29510813446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.293962999978255 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1930.7068929293378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 517.9450094999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1877.9092377425434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 532.5070987999993 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}