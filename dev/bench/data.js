window.BENCHMARK_DATA = {
  "lastUpdate": 1674838994680,
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
          "id": "f6cd49f29ff6528370a7860194521affc435654a",
          "message": "[Feature] More arguments for MemmapTensor construction (#189)",
          "timestamp": "2023-01-27T16:55:56Z",
          "tree_id": "d3c5d9161ce4b9083de7554c489fc0a477ab94f1",
          "url": "https://github.com/pytorch-labs/tensordict/commit/f6cd49f29ff6528370a7860194521affc435654a"
        },
        "date": 1674838992636,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1073.2244978673853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 931.7714998000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 224206.45935226642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.460174799999095 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 105648.76253292899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.465326199995161 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 43172.93381019886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.162660299999516 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 59341.58317827698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.85158949999277 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 43173.06428374568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.16259030000083 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 36820.93754568711,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.15846109999802 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 39094.45773392805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.57907330000262 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5726.0401261847655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.64076009999872 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 35471.84527987112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.19137239999918 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 22974.342988924833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.526816000007784 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 28925.128932243475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.5720153000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 16924.360104625644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.086428900002375 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 32519.580584171854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.750704100000807 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 23222.71337796524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.06129020000071 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 35902.37002458935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.853314399999363 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 131099.7639313281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.6277787999970315 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 35327.38573714357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.306651599996258 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7805.891824702223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.1083599999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 28809.97607881208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.71019890000662 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9880.189668301635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.21263190000036 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27254.331911844012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.69141490000811 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 17162.08565149742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.267976299998736 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13792.722965771127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.50199996633455 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1283.99178047512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 778.8211850000835 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15886.14791763017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.94792200003485 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2678.4817295664025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.3458358000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2611.0423653248504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 382.98880679999456 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}