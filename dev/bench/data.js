window.BENCHMARK_DATA = {
  "lastUpdate": 1674646826074,
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
          "id": "3c3d61300cbe78ced72c355695e82bae356b8d0c",
          "message": "[Refactor] Generate test_tensorclass.py from test_tensorclass_nofuture.py (#187)",
          "timestamp": "2023-01-25T11:32:46Z",
          "tree_id": "46cb28238d63bcb5c17f625bd3a99fa9b06c306c",
          "url": "https://github.com/pytorch-labs/tensordict/commit/3c3d61300cbe78ced72c355695e82bae356b8d0c"
        },
        "date": 1674646824355,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 768.4966241692423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3012418903999958 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 189093.0307834733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.288402200000064 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 94954.01002230684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.531414099995118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 34553.47851025972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.940646299997752 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 52638.10136221242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.99764570000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 32364.378052796787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.898168299995632 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 26330.027505345526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.97945140000252 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 27482.69629666042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.38653170000339 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3316.798105267126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 301.4955895000014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 25426.536700484576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.32898969999883 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16845.25668087109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.363892099997884 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 19941.427560373282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.14686120000533 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12466.110908659928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.217479800001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28579.495256445738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.99012110000308 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 18742.040817525736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.35598240000081 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31603.495966079423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.642069000002948 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 115868.98786238469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.630436999999347 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31078.88886445646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.176182500001005 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6578.848058112729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.00229449999938 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23309.672849908424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.90064499999744 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7002.045404594088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.81541209999773 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 20814.22037193589,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.04407670000046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 7330.818136472834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.4104225999995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13157.894730697348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.00000003549212 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1002.8252002700365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 997.1827589999975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 14745.1262897185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.8190190000123 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1976.050886892523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 506.0598421999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1914.4986063447525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.329970200002 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}