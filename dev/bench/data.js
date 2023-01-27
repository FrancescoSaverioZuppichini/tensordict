window.BENCHMARK_DATA = {
  "lastUpdate": 1674828816171,
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
          "id": "4632ecd8dc8ee43639975dd2bb0cab1e04059f9f",
          "message": "[BugFix] Shape change during prealloc (#195)",
          "timestamp": "2023-01-27T14:10:21Z",
          "tree_id": "0ed36b55633f54db4ad3bcfbcffbf48a307f4d64",
          "url": "https://github.com/pytorch-labs/tensordict/commit/4632ecd8dc8ee43639975dd2bb0cab1e04059f9f"
        },
        "date": 1674828814590,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1124.0038951311885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 889.6766322000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 176667.97936877623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.660335299995722 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91391.31886476092,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.941958299997623 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 40040.174870013114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.974915900003225 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50686.438324400806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.72914319999859 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38482.09352378348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.9861122000018 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33510.58623881662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.84131620000312 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34575.228878078335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.922440499997037 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7181.658149077481,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.2436091000036 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32087.015365138468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.165254500001534 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21033.937146993787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.54221680000228 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26985.009689491977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.05761130000269 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15231.006837755856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.65554140000245 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29481.772730388435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.91926289999674 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20814.51029467444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.04340750000051 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32041.95014139957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.20908669999949 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 112440.49255588841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.89359320000267 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31358.696297073115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.889080799999192 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6814.686751202104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.74188800000252 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26122.35412879322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.28138899999658 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9151.69014081593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.26943380000012 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23578.030328978573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.41236379999691 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15453.025405058623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.71224719999782 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 17921.146958487796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.799999984174065 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1259.4333906655486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 794.0078510000035 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13525.477712430551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.9345420000177 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2609.297421959102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.24492699999837 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2577.2786135486112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 388.0061685000044 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}