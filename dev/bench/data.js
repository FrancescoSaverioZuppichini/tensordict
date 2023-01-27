window.BENCHMARK_DATA = {
  "lastUpdate": 1674820406728,
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
          "id": "e406ddf021129dd67fdd79d2eb8e659b2fb58c20",
          "message": "[Feature, BC-breaking] apply across multiple TDs (#193)",
          "timestamp": "2023-01-27T11:50:08Z",
          "tree_id": "3152823b469b1baba9a6c899d52daae986863500",
          "url": "https://github.com/pytorch-labs/tensordict/commit/e406ddf021129dd67fdd79d2eb8e659b2fb58c20"
        },
        "date": 1674820405924,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1067.038818165188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 937.1730277999973 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 173158.66195726945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.7750504000011915 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 92920.12484786307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.76193129999865 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 36333.267565273294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.522985600000993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50343.56411550376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.863512200004152 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38989.8618872978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.64769280000405 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 32075.688257425278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.17626009999981 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 33113.20973951315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.199428200000966 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6251.029442970032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.97365059999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 30170.677756699755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.144764200000054 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19788.127411668112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.535352800000055 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24513.290396392338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.794197100001384 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14479.35610581443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.06384459999799 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29117.658711022003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.34342060000404 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20380.907129515002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.06552950000105 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31648.447425594015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.597126600001957 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 110065.1315918969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.085529500003986 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31065.874696454703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.18966179999825 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6387.99546224672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.54363029999558 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26218.33736261732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.141243899997335 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9127.057282521359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.56433919999995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23563.408773668445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.43868149999912 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 14666.548653749735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.18236679999927 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11533.892336878462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.70100004337655 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1194.5220251991138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 837.1549280000181 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13734.061381414003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.81167400003596 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2535.1381357260198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.45582309999736 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2473.9527387211374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 404.2114404000017 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}