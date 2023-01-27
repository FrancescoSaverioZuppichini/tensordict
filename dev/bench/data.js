window.BENCHMARK_DATA = {
  "lastUpdate": 1674829082405,
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
          "id": "4632ecd8dc8ee43639975dd2bb0cab1e04059f9f",
          "message": "[BugFix] Shape change during prealloc (#195)",
          "timestamp": "2023-01-27T14:10:21Z",
          "tree_id": "0ed36b55633f54db4ad3bcfbcffbf48a307f4d64",
          "url": "https://github.com/pytorch-labs/tensordict/commit/4632ecd8dc8ee43639975dd2bb0cab1e04059f9f"
        },
        "date": 1674829079673,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 753.867457168584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3264931262000006 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 194254.47705585862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.147886499997867 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 94869.06451576586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.540843900002983 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 37350.64690199842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.773298000000523 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 53215.36013050453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.79156690000059 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 33964.91604186703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.44214550000197 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 26394.732646037446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.88634699999989 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 26785.764891676223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.33326280000142 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3165.797575981591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 315.8761658000003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 25287.7586355475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.54482539999731 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16690.281634883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.91510640000115 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 19354.716874857157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.66699189999804 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12127.525461066809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.45705219999877 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 26925.79216137982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.13911160000407 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 18396.170764942908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.35913879999816 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31006.75404930209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.251037899999346 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 109207.41235264663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.156887599999664 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 29667.05380491023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.707425299996885 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6009.218335625536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.41099459999964 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23304.33775780379,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.91046629999755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6830.823799214984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.39522690000035 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 19231.42424568294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.99822889999837 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 10402.314820459216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.13244910000276 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13623.050196618486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.40500002328554 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 961.5360706420267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0400025860000142 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 14319.259811113721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.83601199999612 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1947.7197342236775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.4208903000001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1821.5086991668938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 548.9954565999994 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}